import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from './icon';

@Component({
  selector: 'section[offer]',
  imports: [RouterLink, Icon],
  host: { class: 'offer-section' },
  template: `
    <div class="container offer-grid">
      <div>
        <div class="eyebrow"><span></span>FOUNDING CUSTOMER OFFER</div>
        <h2>Be there<br />from the <em>start.</em></h2>
        <p>Join the first 20 Founding Customers. Build a more connected site with us.</p>
        <a class="btn dark" routerLink="/founding-customers">Claim Founding Customer Offer<svg icon="arrow-up-right" size="17" /></a>
      </div>
      <div class="offer-figures">
        <div><strong>3<span>MONTHS</span></strong><b>FREE</b></div>
        <div class="offer-plus">+</div>
        <div><strong>20<span>% OFF</span></strong><b>THE FOLLOWING 9 MONTHS</b></div>
        <p>Your free period starts when your service goes live.</p>
        <small>Limited to the first 20 qualifying registrations accepted by YOUR SITE 365 LTD. Eligibility and full promotional terms will be confirmed before subscription.</small>
      </div>
    </div>
  `
})
export class Offer {}
