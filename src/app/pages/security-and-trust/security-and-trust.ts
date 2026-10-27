import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FinalCta } from '../../components/final-cta';
import { Icon } from '../../components/icon';
import { PageHero } from '../../components/page-hero';

@Component({
  selector: 'app-security-and-trust',
  imports: [RouterLink, Icon, PageHero, FinalCta],
  templateUrl: './security-and-trust.html'
})
export class SecurityAndTrust {
  protected readonly items = [
    ['Role-Based Access', 'Users receive access appropriate to their assigned responsibilities and permissions.'],
    ['Customer Data Separation', 'Independent customer environments are designed to prevent automatic access to another customer’s records.'],
    ['Cloud Access Controls', 'Controlled cloud permissions and security restrictions are fundamental platform requirements.'],
    ['Logging & Audit', 'Important user and administrative actions are designed to be recorded for visibility and accountability.'],
    ['Secure Configuration', 'Credentials and security-sensitive configuration are managed separately from application source code.'],
    ['Data Retention Controls', 'Customer-controlled retention settings are part of the platform design for customer-specific workforce records.'],
    ['Controlled Support Access', 'Support access is intended to be limited, authorised and accountable.']
  ];
}
