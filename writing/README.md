# Writing

Articles live in `writing/posts/` as Markdown. The pages in `writing/` are generated from them, so don't edit those by hand.

## Publish an article

1. Copy `posts/grey-card-details.md` to `posts/your-slug.md`. The file name becomes the address: `writing/your-slug.html`.
2. Edit the front matter at the top and write the article.
3. Put images in `assets/images/` and refer to them as `../assets/images/your-image.jpg`.
4. Build, check and push:

```bash
node scripts/build-writing.mjs
```

```bash
git add writing assets/images && git commit -m "writing: your title" && git push
```

## Front matter

```
---
title: The headline
date: 2026-11-09
summary: One or two sentences. Shown under the title, on the Writing list and in the RSS feed.
tags: Grey, Research           (optional)
kicker: A small line above the title   (optional)
image: ../assets/images/hero.jpg      (optional, shown at the top of the article)
imageAlt: What the image shows        (optional)
thumbnail: ../assets/images/thumb.jpg (optional, used on the Writing list; falls back to image)
draft: true                           (optional, leaves the article out of the build)
---
```

## What you can write

- `## Heading` starts a new numbered section.
- `### Smaller heading`, paragraphs, `**bold**`, `*italic*`, `` `code` ``, `[links](https://...)`, and `-` or `1.` lists.
- An image on its own line becomes a full-width figure, and the text in quotes is the caption:
  `![What it shows](../assets/images/x.jpg "The caption")`
- A quote becomes a callout. A last line starting with `-- ` is the attribution:
  ```
  > "The quote"
  > -- Who said it
  ```
- Any block that starts with `<` is passed through as HTML, for the case-study components (`stat-grid`, `hero-meta`, and so on).

Articles are English only. To change the look of every article at once, edit `_template.html` and rebuild.
