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
    <section class="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-20">
          <div class="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            LIFE-AFTER TRAINING
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Where Our <span class="text-blue-600">Talented Graduates</span> Work
          </h2>
          <p class="mx-auto text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            Our graduates thrive in top companies worldwide, making meaningful contributions 
            to innovation and digital transformation across various industries.
          </p>
        </div>

        <div class="relative overflow-hidden py-8 group">
          <!-- Gradient overlays with hover effect -->
          <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
          <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
          
          <!-- Pause animation on hover -->
          <div class="flex animate-scroll items-center gap-10 md:gap-16 hover:[animation-play-state:paused]">
            <div class="flex shrink-0 items-center gap-10 md:gap-16" *ngFor="let _ of [1,2]">
              <div 
                *ngFor="let logo of companyLogos" 
                class="relative group/logo"
              >
                <img 
                  [src]="logo.imageUrl" 
                  [alt]="logo.name + ' logo'"
                  class="h-12 md:h-16 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group-hover/logo:shadow-lg group-hover/logo:shadow-blue-100/50"
                >
                <!-- Tooltip on hover -->
                <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/logo:opacity-100 transition-all duration-300 pointer-events-none">
                  <div class="bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap">
                    {{logo.name}}
                  </div>
                  <div class="w-2 h-2 bg-gray-900 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats section -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24">
          <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div class="text-gray-600">Employment Rate</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div class="text-gray-600">Partner Companies</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div class="text-gray-600">Graduates Hired</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
            <div class="text-gray-600">Employer Satisfaction</div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center mt-12">
          <a href="mailto:sales@scalefort.org">
          <button class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
            Become a Hiring Partner
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          </a>
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