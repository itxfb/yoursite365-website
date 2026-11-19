const C = {
  ink: '#151515',
  yellow: '#f2fc2a',
  blue: '#234df1',
  cream: '#f7f8fc',
  muted: '#626876',
  line: '#dfe3ed',
  white: '#ffffff',
  pill: '#eff0d7',
  pillLine: '#d7d8c0',
  font: 'FAC, Arial, Helvetica, sans-serif'
};
const SITE = 'https://www.yoursite365.com';
const KINDS = { demo: 'demo request', quote: 'quote request', founding: 'Founding Customer enquiry', contact: 'enquiry' };
const LIMITS = { name: 200, company: 200, email: 254, phone: 60, type: 100, workforce: 20, sites: 20, hardware: 20, date: 10, message: 5000 };

export function validate(b) {
  if (!b || typeof b !== 'object' || !KINDS[b.kind]) return 'Invalid request.';
  for (const [k, max] of Object.entries(LIMITS)) {
    if (b[k] != null && (typeof b[k] !== 'string' || b[k].length > max)) return 'Please check your details and try again.';
  }
  const interests = b.interests ?? [];
  if (!Array.isArray(interests) || interests.length > 20 || interests.some((i) => typeof i !== 'string' || i.length > 50)) return 'Invalid request.';
  if (!b.name?.trim() || !b.company?.trim()) return 'Please enter your full name and company name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email ?? '')) return 'Please enter a valid work email.';
  if (b.kind !== 'contact' && (!b.type || !b.workforce)) return 'Please select your company type and workforce size.';
  if (b.consent !== true) return 'Please confirm the Privacy Notice acknowledgement.';
  return '';
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const longDate = (d) => (/^\d{4}-\d{2}-\d{2}$/.test(d) ? new Date(`${d}T00:00:00Z`).toLocaleDateString('en-GB', { dateStyle: 'long', timeZone: 'UTC' }) : d);
const T = `font-family:${C.font};`;

export function render(b, reference) {
  const noun = KINDS[b.kind];
  const name = b.name.trim();
  const company = b.company.trim();
  const received = new Date().toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/London' });
  const interests = b.interests ?? [];
  const link = (href, v) => `<a href="${href}" class="blue" style="color:${C.blue};text-decoration:none">${esc(v)}</a>`;
  const chip = (v) => `<span class="soft ink" style="display:inline-block;margin:0 6px 6px 0;padding:5px 10px;border:1px solid ${C.line};border-radius:3px;background:${C.cream};color:${C.ink};font-size:13px;line-height:1.3">${esc(v)}</span>`;
  const rows = [
    ['Full name', name],
    ['Company', company],
    ['Work email', b.email, link(`mailto:${esc(b.email)}`, b.email)],
    ['Telephone', b.phone, b.phone && link(`tel:${b.phone.replace(/[^\d+]/g, '')}`, b.phone)],
    [b.kind === 'contact' ? 'Subject' : 'Company type', b.type],
    ['Workforce size', b.workforce],
    ['Number of sites', b.sites],
    ['Site access hardware', b.hardware],
    ['Expected start date', b.date && longDate(b.date)],
    ['Founding Customer Offer', b.kind !== 'founding' && b.offer && 'Would like information'],
    ['Interested in', interests.join(', '), interests.map(chip).join('')]
  ].filter(([, v]) => v);

  const rowHtml = rows
    .map(
      ([label, value, html]) => `<tr class="stack">
<td class="muted rule" width="170" valign="top" style="${T}width:170px;padding:13px 16px 13px 0;border-top:1px solid ${C.line};color:${C.muted};font-size:13px;line-height:1.5">${label}</td>
<td class="ink rule" valign="top" style="${T}padding:13px 0;border-top:1px solid ${C.line};color:${C.ink};font-size:15px;line-height:1.5">${html ?? esc(value)}</td>
</tr>`
    )
    .join('');

  const message = b.message?.trim()
    ? `<tr><td class="px" style="${T}padding:24px 40px 0">
<p class="muted" style="margin:0 0 8px;color:${C.muted};font-size:13px;line-height:1.5">Message</p>
<div class="soft ink" style="padding:16px 18px;border:1px solid ${C.line};border-radius:4px;background:${C.cream};color:${C.ink};font-size:15px;line-height:1.6">${esc(b.message.trim()).replace(/\r?\n/g, '<br>')}</div>
</td></tr>`
    : '';

  const replySubject = encodeURIComponent(`Re: your YourSite365 ${noun} (${reference})`);
  const firstName = esc(name.split(/\s+/)[0]);
  const subject = `New ${noun} from ${company} (${reference})`.replace(/\s+/g, ' ');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${esc(subject)}</title>
<style>
@font-face{font-family:FAC;src:url(${SITE}/brand/FAC-Regular.otf) format('opentype');font-weight:400}
@font-face{font-family:FAC;src:url(${SITE}/brand/FAC-Bold.otf) format('opentype');font-weight:700}
a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important}
@media (max-width:520px){
.px{padding-left:22px!important;padding-right:22px!important}
.stack td{display:block!important;width:auto!important;padding-right:0!important}
.stack td+td{border-top:0!important;padding-top:0!important}
.h1{font-size:28px!important}
}
@media (prefers-color-scheme:dark){
.bg{background:#0e0f12!important}
.card{background:#17181c!important;border-color:#2a2d35!important}
.ink{color:#f3f4f7!important}
.muted{color:#a2a8b6!important}
.blue{color:#8fa5ff!important}
.rule{border-color:#2a2d35!important}
.soft{background:#1f2026!important;border-color:#2a2d35!important}
.btn{background:${C.yellow}!important}
.btn a{color:${C.ink}!important}
.logo-light{display:none!important}
.logo-dark{display:block!important;max-height:none!important;overflow:visible!important}
}
</style>
</head>
<body class="bg" style="margin:0;padding:0;background:${C.cream}">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all">${esc(name)} from ${esc(company)} sent a ${noun} through yoursite365.com.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg" style="background:${C.cream}">
<tr><td align="center" style="padding:32px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px">
<tr><td style="padding:0 2px 20px">
<a href="${SITE}" class="logo-light"><img src="${SITE}/brand/logo-black.png" width="160" height="44" alt="YourSite365" style="display:block;border:0;width:160px;height:auto"></a>
<div class="logo-dark" style="display:none;max-height:0;overflow:hidden;mso-hide:all"><a href="${SITE}"><img src="${SITE}/brand/logo-yellow.png" width="160" height="44" alt="YourSite365" style="display:block;border:0;width:160px;height:auto"></a></div>
</td></tr>
<tr><td class="card" style="background:${C.white};border:1px solid ${C.line};border-radius:6px;overflow:hidden">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height:5px;line-height:5px;font-size:0;background:${C.yellow}">&nbsp;</td></tr>
<tr><td class="px" style="${T}padding:34px 40px 8px">
<p class="muted" style="margin:0 0 14px;color:${C.muted};font-size:13px;line-height:1.5">Received ${received}</p>
<h1 class="h1 ink" style="${T}margin:0;color:${C.ink};font-size:34px;line-height:1.08;font-weight:700;letter-spacing:-0.03em">New ${noun}.<br><span class="blue" style="color:${C.blue}">From ${esc(company)}.</span></h1>
<p style="margin:20px 0 0"><span style="display:inline-block;padding:6px 10px;border:1px solid ${C.pillLine};border-radius:3px;background:${C.pill};color:${C.ink};font-size:12px;font-weight:700;line-height:1.3">Reference ${reference}</span></p>
</td></tr>
<tr><td class="px" style="padding:22px 40px 0">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rowHtml}</table>
</td></tr>
${message}
<tr><td class="px" style="padding:28px 40px 36px">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="btn" style="background:${C.ink};border-radius:4px"><a href="mailto:${esc(b.email)}?subject=${replySubject}" style="${T}display:inline-block;padding:14px 22px;color:${C.white};font-size:13px;font-weight:700;line-height:1.5;text-decoration:none">Reply to ${firstName}</a></td>
</tr></table>
</td></tr>
</table>
</td></tr>
<tr><td class="muted" style="${T}padding:20px 2px 0;color:${C.muted};font-size:12px;line-height:1.6">
Sent from the enquiry form on <a href="${SITE}" class="muted" style="color:${C.muted}">yoursite365.com</a>. Replying to this email goes straight to ${esc(name)}, who acknowledged the Privacy Notice when submitting.<br><br>
YOUR SITE 365 LTD, Company No. 16684857, Princes Risborough, United Kingdom.
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;

  const text = [
    `New ${noun} from ${company}`,
    `Reference: ${reference}`,
    `Received: ${received}`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    ...(b.message?.trim() ? ['', 'Message:', b.message.trim()] : [])
  ].join('\n');

  return { subject, html, text };
}
