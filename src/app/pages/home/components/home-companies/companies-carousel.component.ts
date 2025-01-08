import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CompanyLogo } from '../../../../shared/interfaces/company-logo.interface';
import { CompanyLogoComponent } from './company-logo.component';

@Component({
  selector: 'app-companies-carousel',
  standalone: true,
  imports: [NgFor, CompanyLogoComponent],
  template: `
    <div class="overflow-hidden relative">
      <div class="flex animate-scroll">
        <div class="flex space-x-12 items-center min-w-full">
          <app-company-logo
            *ngFor="let logo of logos" 
            [logo]="logo"
          />
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="flex space-x-12 items-center min-w-full">
          <app-company-logo
            *ngFor="let logo of logos" 
            [logo]="logo"
          />
        </div>
      </div>
    </div>
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
export class CompaniesCarouselComponent {
  @Input() logos: CompanyLogo[] = [];
}