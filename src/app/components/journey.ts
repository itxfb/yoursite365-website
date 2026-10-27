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
    'A better first step.',
    'Ready before arrival.',
    'The right people decide.',
    'Approval meets the gate.',
    'Every working day, connected.',
    'Keep requirements visible.',
    'One structured record.',
    'From hours to insight.'
  ];
  protected readonly copies = [
    'Capture the right information through configurable company and site registration.',
    'Complete applicable online and site inductions, with completion recorded against the worker.',
    'Authorised teams review requirements and make the relevant site approval decisions.',
    'Connect access clearance with supported mobile and physical access methods.',
    'Capture sign-in and sign-out activity for site attendance and labour-hour review.',
    'Bring RAMS, training, certificates and other workforce requirements into one place.',
    'Turn reviewed and approved labour hours into organised timesheets.',
    'Apply agreed labour rates to approved hours for gross labour-cost valuation.'
  ];
}
