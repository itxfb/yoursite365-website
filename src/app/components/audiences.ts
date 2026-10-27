import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from './icon';

@Component({
  selector: 'div[audiences]',
  imports: [RouterLink, Icon],
  host: { class: 'audiences' },
  template: `
    @for (a of items; track a[0]) {
      <a routerLink="/get-a-quote"><span>{{ a[0] }}<svg icon="arrow-up-right" size="23" /></span><h3>{{ a[1] }}</h3><p>{{ a[2] }}</p></a>
    }
  `
})
export class Audiences {
  protected readonly items = [
    ['01', 'Main contractors', 'Connect workforce registration, subcontractors, access, compliance and labour information across increasingly complex projects.'],
    ['02', 'Subcontractors', 'Manage your people, site requirements, compliance and labour hours across demanding construction environments.'],
    ['03', 'Growing companies', 'Put professional systems in place before disconnected administration becomes a barrier to growth.']
  ];
}
