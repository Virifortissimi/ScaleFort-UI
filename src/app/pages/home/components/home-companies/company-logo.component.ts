import { Component, Input } from '@angular/core';
import { CompanyLogo } from '../../../../shared/interfaces/company-logo.interface';

@Component({
  selector: 'app-company-logo',
  standalone: true,
  template: `
    <img 
      [src]="logo.imageUrl" 
      [alt]="logo.name"
      class="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
      [title]="logo.name"
    >
  `
})
export class CompanyLogoComponent {
  @Input() logo!: CompanyLogo;
}