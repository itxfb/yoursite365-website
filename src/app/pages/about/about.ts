import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FinalCta } from '../../components/final-cta';
import { Icon } from '../../components/icon';
import { PageHero } from '../../components/page-hero';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Icon, PageHero, FinalCta],
  templateUrl: './about.html'
})
export class About {}
