import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FinalCta } from '../../components/final-cta';
import { Icon } from '../../components/icon';
import { Journey } from '../../components/journey';
import { PageHero } from '../../components/page-hero';
import { Phone } from '../../components/phone';
import { Product } from '../../components/product';

@Component({
  selector: 'app-platform',
  imports: [RouterLink, Icon, PageHero, Product, Phone, Journey, FinalCta],
  templateUrl: './platform.html'
})
export class Platform {
  protected readonly modules = [
    { title: 'Workforce Registration', copy: 'Configurable workforce registration for your company and sites.', id: 'workforce' },
    { title: 'Online Induction', copy: 'Complete required onboarding before arriving on site.' },
    { title: 'Site Induction', copy: 'Manage booking, delivery and completion of site-specific inductions.' },
    { title: 'Site Access', copy: 'Connect worker approval with physical and digital access.' },
    { title: 'Attendance', copy: 'See site sign-in, sign-out and workforce presence.', id: 'attendance' },
    { title: 'RAMS', copy: 'Issue RAMS and record worker acknowledgement.', id: 'compliance' },
    { title: 'Training & Certificates', copy: 'Bring qualifications, training records and certificates together.' },
    { title: 'Behaviour Cards', copy: 'Record positive and negative behaviour through structured controls.' },
    { title: 'Drugs & Alcohol', copy: 'Controlled testing processes for authorised management teams.' },
    { title: 'Timesheets', copy: 'Turn approved labour hours into structured timesheets.' },
    { title: 'Commercial', copy: 'Connect approved hours and agreed rates to labour costs.', id: 'labour-costs' },
    { title: 'Profiles', copy: 'Relevant worker information for authorised users.' },
    { title: 'Notifications', copy: 'Keep people informed about actions, approvals and site requirements.' }
  ];
}
