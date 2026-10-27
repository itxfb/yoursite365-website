import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FinalCta } from '../../components/final-cta';
import { Icon } from '../../components/icon';
import { PageHero } from '../../components/page-hero';
import { Product } from '../../components/product';

@Component({
  selector: 'app-site-access',
  imports: [RouterLink, Icon, PageHero, Product, FinalCta],
  templateUrl: './site-access.html'
})
export class SiteAccess {
  protected readonly clearance = ['Registration', 'Induction', 'RAMS', 'Training & documents', 'Site approval'];
  protected readonly technology = [
    ['smartphone', 'Mobile QR', 'Account-based users scan site QR codes in the mobile app and choose Sign In or Sign Out.'],
    ['scan-line', 'Facial recognition', 'Integrations are being developed for selected facial-recognition readers in controlled site environments.'],
    ['radio', 'Readers & turnstiles', 'Supported physical readers and turnstiles can form part of the wider access ecosystem.']
  ];
}
