import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { ComingSoon } from './pages/coming-soon/coming-soon';
import { Enquiry } from './pages/enquiry/enquiry';
import { Home } from './pages/home/home';
import { HowItWorks } from './pages/how-it-works/how-it-works';
import { Legal } from './pages/legal/legal';
import { Platform } from './pages/platform/platform';
import { SecurityAndTrust } from './pages/security-and-trust/security-and-trust';
import { SiteAccess } from './pages/site-access/site-access';
import { Solutions } from './pages/solutions/solutions';

export const routes: Routes = [
  { path: '', component: Home, title: 'YourSite365 — Your Site. Connected.' },
  { path: 'platform', component: Platform, title: 'The Platform | YourSite365' },
  { path: 'site-access', component: SiteAccess, title: 'Site Access | YourSite365' },
  { path: 'solutions', component: Solutions, title: 'Solutions | YourSite365' },
  { path: 'how-it-works', component: HowItWorks, title: 'How It Works | YourSite365' },
  { path: 'coming-soon', component: ComingSoon, title: 'Coming Soon | YourSite365' },
  { path: 'about', component: About, title: 'About | YourSite365' },
  { path: 'security-and-trust', component: SecurityAndTrust, title: 'Security & Trust | YourSite365' },
  { path: 'book-a-demo', component: Enquiry, title: 'Book a Demo | YourSite365', data: { kind: 'demo' } },
  { path: 'get-a-quote', component: Enquiry, title: 'Get a Quote | YourSite365', data: { kind: 'quote' } },
  { path: 'founding-customers', component: Enquiry, title: 'Founding Customers | YourSite365', data: { kind: 'founding' } },
  { path: 'contact', component: Enquiry, title: 'Contact | YourSite365', data: { kind: 'contact' } },
  { path: 'privacy-notice', component: Legal, title: 'Privacy Notice | YourSite365', data: { type: 'privacy-notice' } },
  { path: 'cookie-policy', component: Legal, title: 'Cookie Policy | YourSite365', data: { type: 'cookie-policy' } },
  { path: 'website-terms', component: Legal, title: 'Website Terms | YourSite365', data: { type: 'website-terms' } },
  { path: '**', redirectTo: '' }
];
