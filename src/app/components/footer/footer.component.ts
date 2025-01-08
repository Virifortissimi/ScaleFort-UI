import { Component } from '@angular/core';
import { FooterBrandComponent } from './footer-brand.component';
import { FooterLinksComponent } from './footer-links.component';
import { FooterContactComponent } from './footer-contact.component';
import { FooterNewsletterComponent } from './footer-newsletter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FooterBrandComponent,
    FooterLinksComponent,
    FooterContactComponent,
    FooterNewsletterComponent
  ],
  template: `
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <app-footer-brand />
          <app-footer-links />
          <app-footer-contact />
          <app-footer-newsletter />
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 ScaleFort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}