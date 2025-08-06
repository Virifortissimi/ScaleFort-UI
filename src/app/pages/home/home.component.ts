import { Component } from '@angular/core';
import { HomeFeaturesComponent } from './components/home-features.component';
import { HomeTestimonialsComponent } from './components/home-testimonials.component';
import { HomeHeroComponent } from './components/home-hero.component';
import { HomeCompaniesComponent } from './components/home-companies.component';
import { HomeServicesComponent } from './components/home-services.component';
import { HomeVoucherComponent } from './components/home-voucher.component';
import { HomeBlogComponent } from './components/home-blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeroComponent,
    HomeServicesComponent,
    HomeFeaturesComponent,
    HomeTestimonialsComponent,
    HomeCompaniesComponent,
    HomeBlogComponent,
    HomeVoucherComponent
  ],
  template: `
    <div>
      <app-home-hero/>
      <app-home-features />
      <app-home-services />
      <app-home-voucher />
      <app-home-companies />
      <app-home-testimonials />
      <app-home-blog />
    </div>
  `
})
export class HomeComponent {}