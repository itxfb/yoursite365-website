import { Component, computed, input, signal } from '@angular/core';
import { Countdown } from '../../components/countdown';
import { Icon } from '../../components/icon';

type Kind = 'demo' | 'quote' | 'founding' | 'contact';

const COPY = {
  demo: {
    eyebrow: 'BOOK A DEMO',
    title: 'See what’s possible.',
    em: 'For your sites.',
    intro: 'Tell us about your organisation and what you are looking to improve. Request an early demonstration ahead of launch.',
    submit: 'Request Demo',
    noun: 'demo request'
  },
  quote: {
    eyebrow: 'GET A QUOTE',
    title: 'Your requirements.',
    em: 'Your quote.',
    intro: 'Pricing is based on your platform, site and workforce requirements. Tell us what your project needs.',
    submit: 'Request a Quote',
    noun: 'quote request'
  },
  founding: {
    eyebrow: 'FOUNDING CUSTOMER OFFER',
    title: 'Start connected.',
    em: 'Become a Founding Customer.',
    intro: 'Be among the first 20 qualifying customers to join YourSite365.',
    submit: 'Request Founding Customer Place',
    noun: 'Founding Customer enquiry'
  },
  contact: {
    eyebrow: 'LET’S TALK',
    title: 'Your next site starts',
    em: 'with a conversation.',
    intro: 'Tell us about your organisation, your requirements or the question on your mind.',
    submit: 'Send Enquiry',
    noun: 'message'
  }
};

@Component({
  selector: 'app-enquiry',
  imports: [Icon, Countdown],
  templateUrl: './enquiry.html'
})
export class Enquiry {
  readonly kind = input.required<Kind>();
  protected readonly copy = computed(() => COPY[this.kind()]);
  protected readonly error = signal('');
  protected readonly reference = signal('');
  protected readonly saving = signal(false);

  protected readonly benefits = ['Early access to the customer journey', 'Direct engagement during onboarding', 'Founding Customer status'];
  protected readonly workforceSizes = ['1–25', '26–50', '51–100', '101–250', '251–500', '500+'];
  protected readonly siteCounts = ['1', '2–5', '6–10', '10+'];
  protected readonly interests = [
    'Registration',
    'Inductions',
    'Site Access',
    'Attendance',
    'Compliance',
    'Timesheets',
    'Commercial',
    'Mobile App',
    'Hardware / Turnstiles',
    'Full Platform'
  ];

  protected async submit(event: SubmitEvent) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    this.saving.set(true);
    this.error.set('');
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...Object.fromEntries(data),
          kind: this.kind(),
          interests: data.getAll('interests'),
          consent: data.get('consent') === 'on',
          offer: this.kind() === 'founding' || data.get('offer') === 'on'
        })
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error);
      this.reference.set(body.reference || 'RECEIVED');
    } catch (e) {
      this.error.set(e instanceof Error ? e.message : 'Please try again.');
    } finally {
      this.saving.set(false);
    }
  }
}
