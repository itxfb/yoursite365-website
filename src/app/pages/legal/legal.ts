import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../components/icon';
import { OfferTerms } from '../../components/offer';
import { PageHero } from '../../components/page-hero';

type LegalType = 'privacy-notice' | 'cookie-policy' | 'website-terms';

@Component({
  selector: 'app-legal',
  imports: [RouterLink, Icon, PageHero, OfferTerms],
  templateUrl: './legal.html'
})
export class Legal {
  readonly type = input.required<LegalType>();
  protected readonly titles: Record<LegalType, string> = {
    'privacy-notice': 'Privacy Notice',
    'cookie-policy': 'Cookie Policy',
    'website-terms': 'Website Terms'
  };
}
