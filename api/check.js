import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
import { validate, render } from './email.js';

const ok = {
  kind: 'quote',
  name: 'Sam <b>Taylor</b>',
  company: 'Acme & Sons',
  email: 'sam@acme.co.uk',
  phone: '07777 114155',
  type: 'Main Contractor',
  workforce: '26–50',
  sites: '2–5',
  hardware: 'Yes',
  date: '2027-03-01',
  interests: ['Registration', 'Site Access', 'Timesheets'],
  message: 'Line one\nLine <two>',
  consent: true,
  offer: true
};

assert.equal(validate(ok), '');
assert.equal(validate({ ...ok, kind: 'x' }), 'Invalid request.');
assert.match(validate({ ...ok, email: 'nope' }), /email/);
assert.match(validate({ ...ok, consent: false }), /Privacy/);
assert.match(validate({ ...ok, workforce: '' }), /workforce/);
assert.equal(validate({ ...ok, kind: 'contact', type: '', workforce: undefined, interests: [] }), '');
assert.match(validate({ ...ok, message: 'x'.repeat(5001) }), /check/);

const { subject, html, text } = render(ok, 'YS-261119-AB12');
assert.equal(subject, 'New quote request from Acme & Sons (YS-261119-AB12)');
assert.ok(!html.includes('<b>Taylor') && html.includes('Sam &#60;b&#62;Taylor'));
assert.ok(html.includes('Line one<br>Line &#60;two&#62;') && html.includes('1 March 2027') && html.includes('tel:07777114155'));
assert.match(text, /Interested in: Registration, Site Access, Timesheets/);
assert.ok(ok.interests.every((i) => html.includes(`${i}</td>`)));

if (process.argv[2]) writeFileSync(process.argv[2], html);
console.log('ok');
