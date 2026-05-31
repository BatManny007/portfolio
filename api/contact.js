const net = require('node:net');
const tls = require('node:tls');

function formatEmail(value) {
  return String(value || '').trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function dotStuff(text) {
  return String(text)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((line) => (line.startsWith('.') ? `.${line}` : line))
    .join('\r\n');
}

function makeReader(socket) {
  let buffer = '';
  const lines = [];
  const waiters = [];

  function flush() {
    let index = buffer.indexOf('\r\n');
    while (index !== -1) {
      const line = buffer.slice(0, index);
      buffer = buffer.slice(index + 2);
      if (waiters.length) {
        const waiter = waiters.shift();
        waiter.resolve(line);
      } else {
        lines.push(line);
      }
      index = buffer.indexOf('\r\n');
    }
  }

  socket.on('data', (chunk) => {
    buffer += chunk.toString('utf8');
    flush();
  });

  socket.on('error', (error) => {
    while (waiters.length) {
      const waiter = waiters.shift();
      if (waiter?.reject) waiter.reject(error);
    }
  });

  return {
    nextLine() {
      if (lines.length) {
        return Promise.resolve(lines.shift());
      }

      return new Promise((resolve, reject) => {
        waiters.push({ resolve, reject });
      });
    },
  };
}

async function readResponse(reader) {
  const lines = [];

  while (true) {
    const line = await reader.nextLine();
    lines.push(line);

    const match = line.match(/^(\d{3})([ -])/);
    if (match && match[2] === ' ') {
      return {
        code: Number(match[1]),
        lines,
      };
    }
  }
}

function createConnection({ host, port, secure }) {
  return new Promise((resolve, reject) => {
    const socket = secure
      ? tls.connect({
          host,
          port,
          servername: host,
        })
      : net.connect({ host, port });

    socket.once('error', reject);
    socket.once(secure ? 'secureConnect' : 'connect', () => {
      socket.removeListener('error', reject);
      resolve(socket);
    });
  });
}

async function upgradeToTls(socket, host) {
  return new Promise((resolve, reject) => {
    const secureSocket = tls.connect({
      socket,
      servername: host,
    });

    secureSocket.once('secureConnect', () => resolve(secureSocket));
    secureSocket.once('error', reject);
  });
}

async function smtpSend({ host, port, secure, user, pass, from, to, subject, text }) {
  let socket = await createConnection({ host, port, secure });
  let reader = makeReader(socket);

  const send = async (command, expectedCodes) => {
    socket.write(`${command}\r\n`);
    const response = await readResponse(reader);
    const codes = Array.isArray(expectedCodes) ? expectedCodes : [expectedCodes];
    if (!codes.includes(response.code)) {
      throw new Error(`SMTP ${response.code}: ${response.lines.join(' | ')}`);
    }
    return response;
  };

  try {
    const greeting = await readResponse(reader);
    if (greeting.code !== 220) {
      throw new Error(`SMTP ${greeting.code}: ${greeting.lines.join(' | ')}`);
    }

    await send(`EHLO ${host}`, 250);

    if (!secure) {
      await send('STARTTLS', 220);
      socket = await upgradeToTls(socket, host);
      reader = makeReader(socket);
      await send(`EHLO ${host}`, 250);
    }

    if (user && pass) {
      try {
        await send('AUTH LOGIN', 334);
        await send(Buffer.from(user).toString('base64'), 334);
        await send(Buffer.from(pass).toString('base64'), 235);
      } catch (loginError) {
        await send(`AUTH PLAIN ${Buffer.from(`\u0000${user}\u0000${pass}`).toString('base64')}`, 235);
      }
    }

    await send(`MAIL FROM:<${from}>`, [250, 251]);
    await send(`RCPT TO:<${to}>`, [250, 251]);
    await send('DATA', 354);

    const headers = [
      `From: Batmanny Portfolio <${from}>`,
      `To: ${to}`,
      `Reply-To: ${formatEmail(from)}`,
      `Subject: ${subject}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 8bit',
      '',
      dotStuff(text),
      '.',
    ].join('\r\n');

    socket.write(`${headers}\r\n`);
    const dataResponse = await readResponse(reader);
    if (dataResponse.code !== 250) {
      throw new Error(`SMTP ${dataResponse.code}: ${dataResponse.lines.join(' | ')}`);
    }

    try {
      await send('QUIT', 221);
    } catch {
      // Some servers close immediately after the message is accepted.
    }

    socket.end();
  } catch (error) {
    socket.destroy();
    throw error;
  }
}

async function resendSend({ apiKey, from, to, subject, text, replyTo }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      reply_to: replyTo,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.message || payload?.error || `Resend ${response.status}: unable to send email`);
  }
}

function json(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }

  try {
    const body = await new Promise((resolve, reject) => {
      let raw = '';
      req.on('data', (chunk) => {
        raw += chunk;
        if (raw.length > 1_000_000) {
          reject(new Error('Payload too large'));
          req.destroy();
        }
      });
      req.on('end', () => {
        try {
          resolve(raw ? JSON.parse(raw) : {});
        } catch (error) {
          reject(new Error('Invalid JSON'));
        }
      });
      req.on('error', reject);
    });

    const name = String(body.name || '').trim().slice(0, 120);
    const email = String(body.email || '').trim().slice(0, 254);
    const message = String(body.message || '').trim().slice(0, 4000);
    const company = String(body.company || '').trim().slice(0, 120);

    if (company) {
      return json(res, 200, { ok: true });
    }

    if (!name || !email || !message) {
      return json(res, 400, { ok: false, error: 'Please fill in all required fields.' });
    }

    if (!isValidEmail(email)) {
      return json(res, 400, { ok: false, error: 'Please use a valid email address.' });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'eosadolor382@gmail.com';
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || process.env.SMTP_USER || toEmail;
    const resendApiKey = process.env.RESEND_API_KEY || '';

    const smtpHost = process.env.SMTP_HOST || '';
    const smtpPort = Number(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPass = process.env.SMTP_PASS || '';
    const smtpSecure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || smtpPort === 465;

    if (!toEmail || !fromEmail || (!resendApiKey && !smtpHost)) {
      return json(res, 500, {
        ok: false,
        code: 'EMAIL_NOT_CONFIGURED',
        error: 'Email settings are not configured yet. Add RESEND_API_KEY and RESEND_FROM_EMAIL, or SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL in Vercel.',
      });
    }

    const subject = `Portfolio contact from ${name}`;

    const text = [
      'New portfolio message',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      ...(company ? [`Company: ${company}`] : []),
      '',
      message,
      '',
      '---',
      `Reply-to: ${email}`,
    ].join('\n');

    if (resendApiKey) {
      await resendSend({
        apiKey: resendApiKey,
        from: fromEmail,
        to: toEmail,
        subject,
        text,
        replyTo: email,
      });
    } else {
      await smtpSend({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        user: smtpUser,
        pass: smtpPass,
        from: fromEmail,
        to: toEmail,
        subject,
        text,
      });
    }

    return json(res, 200, { ok: true });
  } catch (error) {
    return json(res, 500, {
      ok: false,
      error: error.message || 'Unable to send message.',
    });
  }
};
