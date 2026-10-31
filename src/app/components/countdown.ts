import { booleanAttribute, Component, computed, DestroyRef, inject, input, signal } from '@angular/core';

const LAUNCH = Date.parse('2027-02-05T00:00:00+00:00');
const remaining = () => Math.max(0, LAUNCH - Date.now());

@Component({
  selector: 'div[countdown]',
  host: { class: 'countdown', '[class.compact]': 'compact()', 'aria-label': 'Countdown to 05 February 2027' },
  template: `
    @for (part of parts(); track $index) {
      <div><strong>{{ part }}</strong><small>{{ labels[$index] }}</small></div>
    }
  `
})
export class Countdown {
  readonly compact = input(false, { transform: booleanAttribute });
  protected readonly labels = ['Days', 'Hours', 'Minutes', 'Seconds'];
  private readonly ms = signal(remaining());
  protected readonly parts = computed(() => {
    const t = this.ms();
    return [t / 864e5, (t / 36e5) % 24, (t / 6e4) % 60, (t / 1e3) % 60].map(n => String(Math.floor(n)).padStart(2, '0'));
  });

  constructor() {
    const id = setInterval(() => this.ms.set(remaining()), 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }
}
