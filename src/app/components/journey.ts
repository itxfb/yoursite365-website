import { booleanAttribute, Component, input, signal } from '@angular/core';
import { Icon } from './icon';

@Component({
  selector: 'div[journey]',
  imports: [Icon],
  host: { class: 'journey', '[class.detailed]': 'detailed()' },
  template: `
    <div class="journey-track">
      @for (step of steps; track step; let i = $index) {
        <button [class.current]="current() === i" [attr.aria-pressed]="current() === i" (click)="current.set(i)">
          <span>0{{ i + 1 }}</span><b>{{ step }}</b>
          @if (i < steps.length - 1) {
            <svg icon="arrow-right" size="17" />
          }
        </button>
      }
    </div>
    <div class="journey-detail">
      <span>0{{ current() + 1 }}</span>
      <div><h3>{{ titles[current()] }}</h3><p>{{ copies[current()] }}</p></div>
      <span class="journey-icon"><svg [icon]="current() === 3 ? 'scan-line' : current() === 7 ? 'chart-column' : 'hard-hat'" /></span>
    </div>
  `
})
export class Journey {
  readonly detailed = input(false, { transform: booleanAttribute });
  protected readonly current = signal(0);
  protected readonly steps = ['Register', 'Induct', 'Approve', 'Access', 'Attend', 'Comply', 'Timesheet', 'Cost'];
  protected readonly titles = [
    'Collect worker details',
    'Explain the site safety rules',
    'Review and approve workers',
    'Control site entry',
    'Record sign-in and sign-out',
    'Keep requirements up to date',
    'Review hours and prepare timesheets',
    'Calculate labour costs'
  ];
  protected readonly copies = [
    'Collect each worker’s details, company information and required documents before they start on site.',
    'Give workers the site safety information they need and record completion of their required online and site inductions.',
    'Authorised staff check the required information and decide whether a worker is approved for site access.',
    'Apply your site’s access rules when workers use the supported entry system configured for your site.',
    'Record when workers arrive and leave, so your team can see attendance and review working hours.',
    'Track required training, certificates and safety documents before site approval and throughout the job.',
    'Review recorded working hours and turn approved hours into timesheets.',
    'Apply agreed labour rates to approved hours to calculate labour costs.'
  ];
}
