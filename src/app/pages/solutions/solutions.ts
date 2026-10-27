import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Audiences } from '../../components/audiences';
import { FinalCta } from '../../components/final-cta';
import { Icon } from '../../components/icon';
import { PageHero } from '../../components/page-hero';

@Component({
  selector: 'app-solutions',
  imports: [RouterLink, Icon, PageHero, Audiences, FinalCta],
  templateUrl: './solutions.html'
})
export class Solutions {}
