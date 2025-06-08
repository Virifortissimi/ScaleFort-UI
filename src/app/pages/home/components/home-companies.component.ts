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
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 md:mb-16">
          <h4 class="text-lg md:text-xl font-semibold text-blue-600 mb-4 tracking-wide">
            LIFE-AFTER TRAINING
          </h4>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Where Our Graduates Work
          </h2>
          <p class="mx-auto text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Our talented graduates thrive in top companies worldwide, making meaningful contributions 
            to their personal development and the success of the organizations they serve.
          </p>
        </div>

        <div class="relative overflow-hidden py-8">
          <!-- Gradient overlays -->
          <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
          
          <div class="flex animate-scroll items-center gap-8 md:gap-12">
            <div class="flex shrink-0 items-center gap-8 md:gap-12" *ngFor="let _ of [1,2]">
              <img 
                *ngFor="let logo of companyLogos" 
                [src]="logo.imageUrl" 
                [alt]="logo.name + ' logo'"
                class="h-10 md:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-scroll {
      animation: scroll 40s linear infinite;
      display: flex;
      min-width: max-content;
    }

    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @media (max-width: 640px) {
      .animate-scroll {
        animation-duration: 30s;
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