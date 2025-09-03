import { Component, inject, OnInit } from '@angular/core';
import { HomeFeaturesComponent } from './components/home-features.component';
import { HomeTestimonialsComponent } from './components/home-testimonials.component';
import { HomeHeroComponent } from './components/home-hero.component';
import { HomeCompaniesComponent } from './components/home-companies.component';
import { HomeServicesComponent } from './components/home-services.component';
import { HomeVoucherComponent } from './components/home-voucher.component';
import { HomeBlogComponent } from './components/home-blog.component';
import { HealthService } from '../../shared/services/health.service';
import { HomeNewsletterComponent } from './components/home-newsletter..component';
import { FormsModule } from '@angular/forms';

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
    HomeVoucherComponent,
    HomeNewsletterComponent,
    FormsModule
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
      <app-home-newsletter />
    </div>
  `
})
export class HomeComponent implements OnInit {

  private readonly _healthService = inject(HealthService);
  
  ngOnInit(): void {
    this.getApiHealth();
  }

  getApiHealth() {
    this._healthService.getHealth().subscribe();
  }
}