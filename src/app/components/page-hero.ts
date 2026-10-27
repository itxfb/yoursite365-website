import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from './icon';

@Component({
  selector: 'section[page-hero]',
  imports: [RouterLink, Icon],
  host: { class: 'page-hero' },
  template: `
    <div class="container">
      <div class="eyebrow"><span></span>{{ eyebrow() }}</div>
      <ng-content select="h1" />
      <p>{{ copy() }}</p>
      <ng-content><a class="btn dark" routerLink="/book-a-demo">Book a Demo<svg icon="arrow-up-right" size="17" /></a></ng-content>
    </div>
    <span class="page-hero-mark">365</span>
  `
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly copy = input.required<string>();
}
