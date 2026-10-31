import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Countdown } from './countdown';
import { Icon } from './icon';

@Component({
  selector: 'section[final-cta]',
  imports: [RouterLink, Icon, Countdown],
  host: { class: 'final-cta' },
  template: `
    <div class="container">
      <div class="eyebrow"><span></span>LET’S CONNECT YOUR SITE</div>
      <div class="final-grid">
        <h2>See how YourSite365 could<br /><em>work on your site.</em></h2>
        <div>
          <p>Launching 05 February 2027.<br />Let’s talk about what your sites need.</p>
          <div class="button-row">
            <a class="btn yellow" routerLink="/book-a-demo">Book a Demo<svg icon="arrow-up-right" size="17" /></a>
            <a class="btn outline" routerLink="/get-a-quote">Get a Quote<svg icon="arrow-up-right" size="17" /></a>
          </div>
        </div>
      </div>
      <div class="final-count"><span>THE COUNTDOWN IS ON</span><div countdown compact></div></div>
    </div>
  `
})
export class FinalCta {}
