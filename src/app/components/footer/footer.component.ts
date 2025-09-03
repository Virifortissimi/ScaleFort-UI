import { Component, HostListener } from '@angular/core';
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
    <footer class="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 relative overflow-hidden">
  <!-- Background decorative elements -->
  <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-900/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
  <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-900/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
  
  <div class="max-w-7xl mx-auto px-4 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <app-footer-brand />
      <app-footer-links />
      <app-footer-contact />
      <app-footer-newsletter />
    </div>
    
    <!-- Bottom Copyright -->
    <div class="mt-16 pt-10 border-t border-gray-800/40">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="text-sm text-gray-400 mb-1">
            &copy; 2025 ScaleFort. All rights reserved.
          </p>
          <p class="text-xs text-gray-500">
            Empowering tech careers worldwide.
          </p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-6">
          <a href="/privacy-policy" 
             class="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:underline underline-offset-4 flex items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Privacy Policy
          </a>
          <a href="/terms" 
             class="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:underline underline-offset-4 flex items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Terms of Service
          </a>
          <a href="/cookie-policy" 
             class="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:underline underline-offset-4 flex items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Cookie Policy
          </a>
        </div>
      </div>
      
      <!-- Additional badges/credentials -->
      <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6 pt-6 border-t border-gray-800/30">
        <div class="flex items-center text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Secure & NDPR/GDPR Compliant
        </div>
        <div class="flex items-center text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          100+ Students Trained
        </div>
      </div>
    </div>
  </div>
  
  <!-- Back to top button -->
  <button (click)="scrollToTop()" 
          class="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50 group">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
    <span class="sr-only">Back to top</span>
  </button>
</footer>
  `
})
export class FooterComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}