import { booleanAttribute, Component, computed, input, linkedSignal } from '@angular/core';
import { Icon } from './icon';

type Tab = 'workforce' | 'attendance' | 'commercial';

@Component({
  selector: 'div[product]',
  imports: [Icon],
  templateUrl: './product.html',
  host: { class: 'product', '[class.full]': 'full()' }
})
export class Product {
  readonly variant = input<Tab>('workforce');
  readonly full = input(false, { transform: booleanAttribute });
  protected readonly tab = linkedSignal(() => this.variant());

  protected readonly tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'workforce', label: 'Workforce', icon: 'users' },
    { id: 'attendance', label: 'Attendance', icon: 'clock-3' },
    { id: 'commercial', label: 'Commercial', icon: 'chart-column' }
  ];
  protected readonly statIcons = ['users', 'circle-check', 'activity'];
  protected readonly bars = [50, 71, 63, 84, 76, 32, 12];
  protected readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  protected readonly title = computed(() =>
    ({ workforce: 'Site overview', attendance: 'Site attendance', commercial: 'Labour overview' })[this.tab()]
  );

  protected readonly stats = computed(() =>
    this.tab() === 'commercial'
      ? [
          ['Approved hours', '234.0', 'This reporting period'],
          ['Labour value', '£5,382', 'Gross labour cost'],
          ['Awaiting review', '12.0 h', 'Review required']
        ]
      : [
          ['On site now', '128', 'Across 8 companies'],
          ['Approved workers', '164', 'Ready for site'],
          ['Actions required', '06', 'Review outstanding items']
        ]
  );

  protected readonly heads = computed(
    () =>
      ({
        workforce: ['WORKER', 'TRADE', 'REQUIREMENTS', 'STATUS'],
        attendance: ['WORKER', 'COMPANY', 'SIGN IN', 'STATUS'],
        commercial: ['WORKER', 'TRADE', 'HOURS', 'LABOUR VALUE']
      })[this.tab()]
  );

  protected readonly rows = computed(
    () =>
      ({
        workforce: [
          ['J. Williams', 'Groundworker', 'Complete', 'Approved'],
          ['A. Clarke', 'Carpenter', 'Complete', 'Approved'],
          ['M. Taylor', 'Site engineer', 'Review required', 'Pending']
        ],
        attendance: [
          ['J. Williams', 'Oakfield Construction', '07:02', 'On site'],
          ['A. Clarke', 'Riverside Joinery', '07:14', 'On site'],
          ['M. Taylor', 'Oakfield Construction', '07:26', 'On site']
        ],
        commercial: [
          ['J. Williams', 'Groundworker', '9.0 h', '£166.50'],
          ['A. Clarke', 'Carpenter', '9.0 h', '£180.00'],
          ['M. Taylor', 'Site engineer', '8.0 h', '£240.00']
        ]
      })[this.tab()]
  );
}
