import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FinalCta } from '../../components/final-cta';
import { Icon } from '../../components/icon';
import { Journey } from '../../components/journey';
import { PageHero } from '../../components/page-hero';

@Component({
  selector: 'app-how-it-works',
  imports: [RouterLink, Icon, PageHero, Journey, FinalCta],
  templateUrl: './how-it-works.html'
})
export class HowItWorks {
  protected readonly steps = [
    ['Register', 'Capture the information required for the company or project.'],
    ['Complete requirements', 'Complete applicable inductions, RAMS, documents and other site requirements.'],
    ['Review', 'Authorised teams review information and outstanding items.'],
    ['Approve', 'Site teams make the relevant approval decisions.'],
    ['Access', 'Approved workers use a supported site-access method.'],
    ['Attend', 'Sign-in and sign-out activity creates an attendance record.'],
    ['Approve hours', 'Review and approve labour hours for the relevant company and site.'],
    ['Labour Costs', 'Approved hours feed timesheet and labour-cost information.']
  ];
}
