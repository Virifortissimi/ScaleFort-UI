import { Component } from '@angular/core';
import { HomeStatsComponent } from './components/home-stats.component';
import { HomeFeaturesComponent } from './components/home-features.component';
import { HomeTestimonialsComponent } from './components/home-testimonials.component';
import { HomeCtaComponent } from './components/home-cta.component';
import { HomeHeroComponent } from './components/home-hero.component';
import { HomeCompaniesComponent } from './components/home-companies.component';
import { CoursesComponent } from './components/courses.component';
import { TalkToExpertComponent } from './components/talk-to-expert.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeroComponent,
    HomeStatsComponent,
    HomeFeaturesComponent,
    HomeTestimonialsComponent,
    HomeCompaniesComponent,
    HomeCtaComponent,
    CoursesComponent,
    TalkToExpertComponent
  ],
  template: `
    <div class="pt-16">
      <app-home-hero/>
      <app-home-features />
      <app-courses />
      <app-home-stats />
      <app-home-testimonials />
      <app-home-companies />
      <app-home-cta />
      <app-talk-to-expert />
    </div>
  `
})
export class HomeComponent {}