import { Component, signal } from '@angular/core';
import { Icon } from './icon';

@Component({
  selector: 'div[phone]',
  imports: [Icon],
  host: { class: 'phone' },
  template: `
    <div class="phone-camera"></div>
    <div class="phone-status">9:41 <span>••• ▰</span></div>
    <div class="phone-brand"><img src="brand/logo-blue.png" alt="YourSite365" width="2048" height="564" /><svg icon="bell" size="12" /></div>
    <small class="phone-greeting">GOOD MORNING, JAMES</small>
    <h4>Your site.<br />Your day.</h4>
    <div class="phone-site">
      <span class="phone-site-art"><svg icon="building-2" size="41" /><svg icon="hard-hat" size="20" /></span>
      <small>YOUR CURRENT SITE</small>
      <b>Riverside development</b>
      <span><svg icon="map-pin" size="9" /> London, United Kingdom</span>
    </div>
    <div class="phone-approved"><svg icon="circle-check" size="14" /> Approved for site</div>
    <button class="phone-scan" (click)="signedIn.set(!signedIn())"><svg icon="scan-line" size="19" />{{ signedIn() ? 'Demo: signed in ✓' : 'Try QR sign-in preview' }}<svg icon="arrow-right" size="13" /></button>
    <small class="phone-note">Interactive preview · No attendance recorded</small>
    <div class="phone-links"><span><svg icon="file-check-corner" size="17" />My documents</span><span><svg icon="clock-3" size="17" />Attendance</span></div>
    <div class="phone-nav"><svg icon="layout-dashboard" size="16" /><svg icon="scan-line" size="16" /><svg icon="users" size="16" /></div>
  `
})
export class Phone {
  protected readonly signedIn = signal(false);
}
