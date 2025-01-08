import { Component } from '@angular/core';
import { HomeStatsComponent } from './components/home-stats.component';
import { HomeFeaturesComponent } from './components/home-features.component';
import { HomeTestimonialsComponent } from './components/home-testimonials.component';
import { HomeCtaComponent } from './components/home-cta.component';
import { HomeHeroComponent } from './components/home-hero.component';
import { HomeCompaniesComponent } from './components/home-companies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeroComponent,
    HomeStatsComponent,
    HomeFeaturesComponent,
    HomeTestimonialsComponent,
    HomeCompaniesComponent,
    HomeCtaComponent
  ],
  template: `
    <div class="pt-16">
      <app-home-hero/>
      <app-home-features />
      <app-home-stats />
      <app-home-testimonials />
      <app-home-companies />
      <app-home-cta />
    </div>
  `
})
export class HomeComponent {}