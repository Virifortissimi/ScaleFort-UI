import { Component } from '@angular/core';
import { CompaniesCarouselComponent } from './companies-carousel.component';
import { companyLogos } from '../../../../shared/data/company-logos.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-companies',
  standalone: true,
  imports: [CompaniesCarouselComponent, CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Where our Mentees and Graduates Work</h2>
        <app-companies-carousel [logos]="companyLogos" />
      </div>
    </section>
  `
})
export class HomeCompaniesComponent {
  companyLogos = companyLogos;
}