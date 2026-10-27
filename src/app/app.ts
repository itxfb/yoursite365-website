import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Icon } from './components/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Icon],
  templateUrl: './app.html'
})
export class App {
  protected readonly menuOpen = signal(false);

  protected readonly nav = [
    ['Platform', '/platform'],
    ['Site Access', '/site-access'],
    ['Solutions', '/solutions'],
    ['How It Works', '/how-it-works'],
    ['Coming Soon', '/coming-soon'],
    ['About', '/about']
  ];

  protected readonly footer = [
    {
      title: 'Platform',
      links: [
        ['Workforce', '/platform', 'workforce'],
        ['Site Access', '/site-access'],
        ['Compliance', '/platform', 'compliance'],
        ['Time & Attendance', '/platform', 'attendance'],
        ['Commercial', '/platform', 'commercial'],
        ['Mobile App', '/platform', 'mobile']
      ]
    },
    {
      title: 'Company',
      links: [
        ['About', '/about'],
        ['Coming Soon', '/coming-soon'],
        ['Book a Demo', '/book-a-demo'],
        ['Get a Quote', '/get-a-quote'],
        ['Contact', '/contact']
      ]
    },
    {
      title: 'Legal & Trust',
      links: [
        ['Privacy Notice', '/privacy-notice'],
        ['Cookie Policy', '/cookie-policy'],
        ['Website Terms', '/website-terms'],
        ['Security & Trust', '/security-and-trust']
      ]
    }
  ];
}
