import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Countdown } from '../../components/countdown';
import { FinalCta } from '../../components/final-cta';
import { Icon } from '../../components/icon';
import { PageHero } from '../../components/page-hero';

@Component({
  selector: 'app-coming-soon',
  imports: [RouterLink, Icon, PageHero, Countdown, FinalCta],
  templateUrl: './coming-soon.html'
})
export class ComingSoon {
  protected readonly modules = [
    'Registration',
    'Company Accounts',
    'Online Induction',
    'Site Induction',
    'Site Access',
    'Access Monitoring',
    'Time & Attendance',
    'RAMS',
    'Training',
    'Certificates & Cards',
    'Behaviour Cards',
    'Drugs & Alcohol',
    'Timesheets',
    'Commercial',
    'Profiles',
    'Notifications',
    'Mobile App'
  ];
  protected readonly roadmap = [
    ['COMING NEXT', 'Logistics Management', 'Connect deliveries, drivers, vehicle movements and logistics information.'],
    ['COMING NEXT', 'Plant & Tools', 'Improve visibility of plant, tools and equipment across projects.'],
    ['FUTURE DEVELOPMENT', 'Emergency Response & Muster', 'Support workforce presence management during emergency situations.'],
    ['FUTURE DEVELOPMENT', 'Health & Safety Audits', 'Structured inspection and audit workflows.'],
    ['FUTURE DEVELOPMENT', 'Temporary Works', 'Management and visibility of temporary works information.'],
    ['FUTURE DEVELOPMENT', 'Quality Control', 'Construction inspections, evidence and close-out workflows.']
  ];
}
