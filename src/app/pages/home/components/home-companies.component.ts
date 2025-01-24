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
        <h4 class="text-2xl font-bold text-center mb-12 text-blue-600">LIFE-AFTER TRAINING</h4>
        <h2 class="text-5xl font-bold text-center mb-12 text-blue-900">Where our Graduates and Mentees work?.</h2>
        <p class="text-center mb-9">Our talented graduates thrive in top companies worldwide, making meaningful contributions to their personal development and the success of the organizations they serve. They excel across diverse industries, including health technology, banking, and many more.</p>
        
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
    { name: 'Wellahealth', imageUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1736432053/Goals/cnbdfl53ndtqpowcadtq.svg' },
    { name: 'Sterling Bank', imageUrl: 'https://sterling.ng/wp-content/uploads/2019/02/cropped-cropped-Sterling_favicon.png'},
    { name: 'Prunedge', imageUrl: 'https://prunedge.com/wp-content/uploads/2022/03/logo.svg' },
    { name: 'Kaybills Technologies', imageUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1736432185/Goals/i74od5zidd4j0jxonxvw.svg' }
  ];
}