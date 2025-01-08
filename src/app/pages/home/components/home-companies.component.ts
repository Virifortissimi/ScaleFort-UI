import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CompanyLogo {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home-companies',
  imports: [CommonModule],
  standalone: true,
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Where our Mentees and Graduates Work</h2>
        
        <div class="overflow-hidden relative">
          <div class="flex animate-scroll">
            <div class="flex space-x-12 items-center min-w-full">
              <img 
                *ngFor="let logo of companyLogos" 
                [src]="logo.imageUrl" 
                [alt]="logo.name"
                class="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              >
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="flex space-x-12 items-center min-w-full">
              <img 
                *ngFor="let logo of companyLogos" 
                [src]="logo.imageUrl" 
                [alt]="logo.name"
                class="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-scroll {
      animation: scroll 30s linear infinite;
      display: flex;
    }

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `]
})
export class HomeCompaniesComponent {
  companyLogos: CompanyLogo[] = [
    { name: 'EBango', imageUrl: 'https://www.ebanqo.com/new-ebanqo-logo.svg' },
    { name: 'Wellahealth', imageUrl: 'https://www.wellahealth.com/images/common/wellahealth-transparent.svg' },
    { name: 'Sterling Bank', imageUrl: 'https://sterling.ng/wp-content/uploads/2019/02/cropped-cropped-Sterling_favicon.png'}
  ];
}