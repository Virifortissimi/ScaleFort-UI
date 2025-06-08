import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-contact',
  standalone: true,
  template: `
    <section class="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative text-center space-y-6 z-10">
          <div class="mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need More Assistance?
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated support team is ready to help you succeed
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:info@scalefort.org" 
               class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl
                      hover:bg-blue-700 transition-all transform hover:-translate-y-1
                      shadow-lg hover:shadow-xl">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email Support
            </a>
            
            <a href="tel:+2348158406306"
               class="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl
                      hover:bg-gray-50 transition-all transform hover:-translate-y-1
                      shadow-lg hover:shadow-xl border border-gray-200">
              <svg class="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +234 815 840 6306
            </a>
          </div>
          
          <p class="text-sm text-gray-500 mt-6">
            Typically responds in under 4 hours • 24/7 support
          </p>
        </div>
        
        <!-- Decorative background elements -->
        <div class="absolute top-0 left-1/2 w-72 h-72 bg-blue-100 rounded-full opacity-20 
                    mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div class="absolute top-0 right-1/2 w-72 h-72 bg-indigo-100 rounded-full opacity-20 
                    mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>
    </section>
  `,
  styles: [`
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    @keyframes blob {
      0%, 100% { transform: translate(0,0) scale(1); }
      33% { transform: translate(30px,-50px) scale(1.1); }
      66% { transform: translate(-20px,20px) scale(0.9); }
    }
  `]
})
export class FaqContactComponent {}