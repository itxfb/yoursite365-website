import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Audiences } from '../../components/audiences';
import { Countdown } from '../../components/countdown';
import { FinalCta } from '../../components/final-cta';
import { Icon } from '../../components/icon';
import { Journey } from '../../components/journey';
import { Offer } from '../../components/offer';
import { Phone } from '../../components/phone';
import { Product } from '../../components/product';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, Countdown, Product, Phone, Journey, Offer, Audiences, FinalCta],
  templateUrl: './home.html'
})
export class Home {
  protected readonly accessChecks = ['Registered', 'Inducted', 'Requirements complete', 'Approved for access'];
  protected readonly trust = ['Role-based permissions', 'Customer data separation', 'Controlled cloud access', 'Logging & auditability'];
}
