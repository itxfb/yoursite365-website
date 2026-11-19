import http from 'node:http';
import { randomBytes } from 'node:crypto';
import nodemailer from 'nodemailer';
import { validate, render } from './email.js';

const ORIGINS = ['https://www.yoursite365.com', 'https://yoursite365.com', 'http://localhost:4200'];
const MAILBOX = 'info@yoursite365.co.uk';
const mailer = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  requireTLS: true,
  auth: { user: MAILBOX, pass: process.env.SMTP_PASS?.trim() }
});

const reply = (res, status, body) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

http
  .createServer(async (req, res) => {
    if (ORIGINS.includes(req.headers.origin)) res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Vary', 'Origin');
    if (req.method === 'OPTIONS') {
      res.writeHead(204, { 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400' });
      return res.end();
    }
    if (req.method !== 'POST' || req.url !== '/api/enquiries') return reply(res, 404, { error: 'Not found.' });

    let raw = '';
    for await (const chunk of req) {
      raw += chunk;
      if (raw.length > 50000) return reply(res, 413, { error: 'Your message is too long.' });
    }
    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return reply(res, 400, { error: 'Invalid request.' });
    }

    const reference = `YS-${new Date().toISOString().slice(2, 10).replaceAll('-', '')}-${randomBytes(2).toString('hex').toUpperCase()}`;
    if (body?.website) return reply(res, 200, { reference });
    const error = validate(body);
    if (error) return reply(res, 400, { error });

    console.log(JSON.stringify({ message: 'enquiry', reference, ...body }));
    try {
      await mailer.sendMail({
        from: { name: 'YourSite365 Website', address: MAILBOX },
        to: MAILBOX,
        replyTo: { name: body.name, address: body.email },
        ...render(body, reference)
      });
      reply(res, 200, { reference });
    } catch (e) {
      console.error(JSON.stringify({ message: 'send failed', reference, error: String(e) }));
      reply(res, 502, { error: 'We could not send your enquiry. Please try again or email info@yoursite365.co.uk.' });
    }
  })
  .listen(process.env.PORT || 8080);
