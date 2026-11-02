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
        <p>Your free period starts from the agreed service go-live date.</p>
        <small>Limited to the first 20 accepted businesses; one offer per company. <a routerLink="/founding-customers" fragment="offer-conditions">View offer conditions</a></small>
      </div>
    </div>
  `
})
export class Offer {}

@Component({
  selector: 'ul[offer-terms]',
  host: { class: 'offer-terms' },
  template: `
    <li>First 20 accepted businesses; one offer per company. Submitting an enquiry does not reserve or confirm a place.</li>
    <li>Three months free from the agreed service go-live date, then 20% off the agreed monthly software subscription for nine months.</li>
    <li>Equipment hire, installation and onboarding are excluded and charged separately at full agreed rates.</li>
    <li>Initial term: 12 months. Cancel by emailing <a href="mailto:info@yoursite365.co.uk">info@yoursite365.co.uk</a> at least 14 days before the free period ends. Otherwise, the remaining nine paid months apply.</li>
    <li>No automatic renewal after month 12. Any continuation and pricing must be agreed in writing. Acceptance, fees and exact start and end dates will be confirmed before service begins.</li>
  `
})
export class OfferTerms {}
