// Builds the Writing section from Markdown.
//
//   node scripts/build-writing.mjs
//
// Reads writing/posts/*.md and writes:
//   writing/<slug>.html   one page per article
//   writing/index.html    the list of articles, newest first
//   writing/feed.xml      an RSS feed
//
// No dependencies. The look comes from writing/_template.html. See writing/README.md for how to write a post.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const POSTS = path.join(ROOT, 'writing', 'posts');
const OUT = path.join(ROOT, 'writing');
const SITE = 'https://batmanny.vercel.app';
const TEMPLATE = fs.readFileSync(path.join(OUT, '_template.html'), 'utf8');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- front matter ----------
function parse(file) {
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`${path.basename(file)}: missing front matter (--- title: ... ---)`);
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1').trim();
  }
  for (const k of ['title', 'date', 'summary']) if (!meta[k]) throw new Error(`${path.basename(file)}: front matter needs "${k}"`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) throw new Error(`${path.basename(file)}: date must be YYYY-MM-DD`);
  meta.slug = meta.slug || path.basename(file, '.md');
  meta.tags = meta.tags ? meta.tags.split(',').map(t => t.trim()).filter(Boolean) : [];
  meta.draft = meta.draft === 'true';
  return { meta, body: m[2] };
}

// ---------- Markdown (the subset the posts need) ----------
function inline(s) {
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(esc(c)) - 1}\u0000`);
  s = esc(s)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${u}"${/^https?:/.test(u) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`);
}

function markdown(src) {
  const lines = src.split('\n');
  const out = [];
  let sections = 0, open = '', i = 0;
  // Anything before the first "## Heading" is an intro under the title, not a numbered section
  const close = () => { if (open) out.push(open === 'intro' ? '    </div>\n' : '    </section>\n'); open = ''; };
  const startSection = title => {
    close();
    sections++; open = 'section';
    out.push(`    <section class="section">\n      <span class="section-num">${String(sections).padStart(2, '0')}</span>\n      <h2>${inline(title)}</h2>`);
  };
  const ensure = () => { if (!open) { if (sections) { out.push('    <section class="section">'); open = 'section'; } else { out.push('    <div class="post-intro">'); open = 'intro'; } } };
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    // ## Heading starts a numbered section
    let h = line.match(/^##\s+(.*)$/);
    if (h) { startSection(h[1]); i++; continue; }
    h = line.match(/^###\s+(.*)$/);
    if (h) { ensure(); out.push(`      <h3>${inline(h[1])}</h3>`); i++; continue; }
    // raw HTML block: passed through until a blank line
    if (/^\s*</.test(line)) { ensure(); const b = []; while (i < lines.length && lines[i].trim()) b.push('      ' + lines[i++]); out.push(b.join('\n')); continue; }
    // image on its own line becomes a figure; the "title" is the caption
    const img = line.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*$/);
    if (img) {
      ensure();
      out.push(`      <figure class="screen-shot full" style="margin-top: 28px;">\n        <img src="${img[2]}" alt="${esc(img[1])}" loading="lazy">${img[3] ? `\n        <figcaption>${inline(img[3])}</figcaption>` : ''}\n      </figure>`);
      i++; continue;
    }
    // > quote becomes a callout; a line starting with "-- " is the attribution
    if (/^>\s?/.test(line)) {
      ensure(); const q = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ''));
      const by = q.length > 1 && /^--\s/.test(q[q.length - 1]) ? q.pop().replace(/^--\s/, '') : '';
      out.push(`      <div class="callout">${inline(q.join(' '))}${by ? ` <span style="color: var(--soft)">${inline(by)}</span>` : ''}</div>`);
      continue;
    }
    // lists
    if (/^(\s*[-*]\s|\s*\d+\.\s)/.test(line)) {
      ensure(); const ordered = /^\s*\d+\./.test(line); const items = [];
      while (i < lines.length && /^(\s*[-*]\s|\s*\d+\.\s)/.test(lines[i])) {
        let item = lines[i++].replace(/^\s*([-*]|\d+\.)\s+/, '');
        while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^(\s*[-*]\s|\s*\d+\.\s)/.test(lines[i])) item += ' ' + lines[i++].trim();
        items.push(`        <li>${inline(item)}</li>`);
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`      <${tag} class="list">\n${items.join('\n')}\n      </${tag}>`);
      continue;
    }
    if (/^---+\s*$/.test(line)) { ensure(); out.push('      <hr style="border: 0; border-top: 1px solid var(--line); margin: 32px 0;">'); i++; continue; }
    // paragraph
    ensure(); const p = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|>|!\[|\s*<|\s*[-*]\s|\s*\d+\.\s)/.test(lines[i])) p.push(lines[i++].trim());
    if (!p.length) p.push(lines[i++].trim());
    out.push(`      <p>${inline(p.join(' '))}</p>`);
  }
  close();
  return out.join('\n');
}

// ---------- pages ----------
const fmtDate = d => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const words = s => s.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
const abs = (p, from) => /^https?:/.test(p) ? p : SITE + '/' + path.posix.normalize(path.posix.join(from, p));

function page({ title, description, url, ogType, ogImage, backHref, backLabel, body }) {
  const fill = { TITLE: esc(title), DESCRIPTION: esc(description), URL: url, OG_TYPE: ogType, FEED_URL: `${SITE}/writing/feed.xml`,
    OG_IMAGE: ogImage ? `<meta property="og:image" content="${ogImage}" />` : '', BACK_HREF: backHref, BACK_LABEL: esc(backLabel), BODY: body };
  return TEMPLATE.replace(/\{\{([A-Z_]+)\}\}/g, (m, k) => (k in fill ? fill[k] : m));
}

const posts = fs.readdirSync(POSTS).filter(f => f.endsWith('.md')).map(f => parse(path.join(POSTS, f)))
  .filter(p => !p.meta.draft).sort((a, b) => b.meta.date.localeCompare(a.meta.date));

const slugs = new Set();
for (const { meta, body } of posts) {
  if (slugs.has(meta.slug)) throw new Error(`Two posts use the slug "${meta.slug}"`);
  slugs.add(meta.slug);
  const html = markdown(body);
  const mins = Math.max(1, Math.round(words(html) / 220));
  const eyebrow = ['Article', ...meta.tags].map(esc).join(' · ');
  const hero = `    <section class="hero" style="padding-bottom: 48px;">
      <div class="eyebrow">${eyebrow}</div>
${meta.image ? `      <div class="hero-banner">\n        <img src="${meta.image}" alt="${esc(meta.imageAlt || meta.title)}">\n      </div>\n` : ''}      <div class="hero-copy">
${meta.kicker ? `        <p class="hero-kicker">${inline(meta.kicker)}</p>\n` : ''}        <h1>${inline(meta.title)}</h1>
        <div class="subhead">${inline(meta.summary)}</div>
        <div class="post-meta">${fmtDate(meta.date)} · ${mins} min read</div>
      </div>
    </section>
`;
  fs.writeFileSync(path.join(OUT, meta.slug + '.html'), page({
    title: `${meta.title} · Batmanny`, description: meta.summary, url: `${SITE}/writing/${meta.slug}.html`, ogType: 'article',
    ogImage: meta.thumbnail || meta.image ? abs(meta.thumbnail || meta.image, 'writing') : '',
    backHref: './', backLabel: 'All writing', body: hero + html + '\n',
  }));
  meta.html = html;
}

// list page
const cards = posts.map(({ meta }) => {
  const thumb = meta.thumbnail || meta.image;
  return `      <li><a class="post-card${thumb ? '' : ' no-thumb'}" href="${meta.slug}.html">
${thumb ? `        <div class="thumb"><img src="${thumb}" alt="" loading="lazy"></div>\n` : ''}        <div class="info">
          <span class="date">${fmtDate(meta.date)}${meta.tags.length ? ' · ' + meta.tags.map(esc).join(' · ') : ''}</span>
          <h2>${inline(meta.title)}</h2>
          <p>${inline(meta.summary)}</p>
        </div>
      </a></li>`;
}).join('\n');
fs.writeFileSync(path.join(OUT, 'index.html'), page({
  title: 'Writing · Batmanny', description: 'Articles by Emmanuel Osadolor on product design, research and what I learn testing real apps.',
  url: `${SITE}/writing/`, ogType: 'website', ogImage: '', backHref: '../index.html', backLabel: 'Home',
  body: `    <section class="hero" style="padding-bottom: 24px;">
      <div class="eyebrow">Writing</div>
      <div class="hero-copy">
        <h1>Writing</h1>
        <div class="subhead">Notes on product design, research and what I learn testing real apps.</div>
        <a class="feed-link" href="feed.xml">Follow with RSS</a>
      </div>
    </section>
    <ul class="post-list">
${cards || '      <li><p>No articles yet.</p></li>'}
    </ul>
`,
}));

// RSS
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Batmanny · Writing</title>
    <link>${SITE}/writing/</link>
    <description>Articles by Emmanuel Osadolor on product design and research.</description>
    <language>en</language>
    <atom:link href="${SITE}/writing/feed.xml" rel="self" type="application/rss+xml" />
${posts.map(({ meta }) => `    <item>
      <title>${esc(meta.title)}</title>
      <link>${SITE}/writing/${meta.slug}.html</link>
      <guid>${SITE}/writing/${meta.slug}.html</guid>
      <pubDate>${new Date(meta.date + 'T12:00:00Z').toUTCString()}</pubDate>
      <description>${esc(meta.summary)}</description>
    </item>`).join('\n')}
  </channel>
</rss>
`;
fs.writeFileSync(path.join(OUT, 'feed.xml'), rss);

console.log(`Built ${posts.length} article${posts.length === 1 ? '' : 's'}: ${posts.map(p => p.meta.slug).join(', ') || 'none'}`);
