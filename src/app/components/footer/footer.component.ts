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
    <footer class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <app-footer-brand />
          <app-footer-links />
          <app-footer-contact />
          <app-footer-newsletter />
        </div>
         <!-- Bottom Copyright -->
         <div class="mt-16 pt-8 border-t border-gray-800/50">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-400 text-center md:text-left">
              &copy; 2025 ScaleFort. All rights reserved.<br class="md:hidden">
              <span class="hidden md:inline"> • </span>Empowering tech careers worldwide.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/privacy-policy" 
                 class="text-sm hover:text-blue-400 transition-colors duration-300 hover:underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="/terms" 
                 class="text-sm hover:text-blue-400 transition-colors duration-300 hover:underline underline-offset-4">
                Terms of Service
              </a>
              <a href="/cookie-policy" 
                 class="text-sm hover:text-blue-400 transition-colors duration-300 hover:underline underline-offset-4">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}