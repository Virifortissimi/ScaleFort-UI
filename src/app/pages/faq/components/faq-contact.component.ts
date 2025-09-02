import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-contact',
  standalone: true,
  template: `
    <section class="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
  <!-- Background decorative elements -->
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div class="absolute top-10 left-10 w-80 h-80 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
  </div>
  
  <!-- Geometric shapes -->
  <div class="absolute top-20 left-20 w-16 h-16 border-2 border-blue-300/30 rounded-lg rotate-45 animate-spin-slow"></div>
  <div class="absolute bottom-20 right-20 w-12 h-12 border-2 border-indigo-300/30 rounded-full animate-ping-slow"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center space-y-8">
      <div class="mb-10">
        <div class="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 mb-6 border border-blue-200/50 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd" />
          </svg>
          24/7 Support Available
        </div>
        
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Need More <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Assistance</span>?
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our dedicated support team is here to help you succeed. Get answers to your questions and personalized guidance.
        </p>
      </div>
      
      <!-- Contact Options Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
        <!-- Email Support -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
          <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors mx-auto">
            <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2 text-center">Email Support</h3>
          <p class="text-gray-600 text-center mb-4">Get detailed responses to your questions</p>
          <a href="mailto:info@scalefort.org" 
             class="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg
                    hover:bg-blue-700 transition-all transform hover:-translate-y-0.5
                    shadow-md hover:shadow-lg">
            <span>info&#64;scalefort.org</span>
          </a>
        </div>
        
        <!-- Phone Support -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 group">
          <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors mx-auto">
            <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2 text-center">Phone Support</h3>
          <p class="text-gray-600 text-center mb-4">Speak directly with our support team</p>
          <a href="tel:+2348158406306"
             class="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-gray-900 font-medium rounded-lg
                    hover:bg-gray-50 transition-all transform hover:-translate-y-0.5
                    shadow-md hover:shadow-lg border border-gray-200">
            <span>+234 815 840 6306</span>
          </a>
        </div>

        <!-- Email Support -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
          <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors mx-auto">
            <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2 text-center">Contact Us</h3>
          <p class="text-gray-600 text-center mb-4">Get detailed responses to your questions</p>
          <a href="/contact" 
             class="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg
                    hover:bg-blue-700 transition-all transform hover:-translate-y-0.5
                    shadow-md hover:shadow-lg">
            <span>Go to Contact Us</span>
          </a>
        </div>
        
        <!-- Live Chat -->
        <!-- <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
          <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors mx-auto">
            <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2 text-center">Live Chat</h3>
          <p class="text-gray-600 text-center mb-4">Get instant answers to your questions</p>
          <button (click)="openChat()"
             class="inline-flex items-center justify-center w-full px-4 py-3 bg-purple-600 text-white font-medium rounded-lg
                    hover:bg-purple-700 transition-all transform hover:-translate-y-0.5
                    shadow-md hover:shadow-lg">
            <span>Start Chat</span>
          </button>
        </div>-->
      </div> 
      
      <!-- Support Stats -->
      <div class="flex flex-wrap justify-center gap-6 mb-10">
        <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
          <div class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span class="text-sm font-medium text-gray-700">Typically responds in under 4 hours</span>
        </div>
        <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
          <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-sm font-medium text-gray-700">24/7 support availability</span>
        </div>
        <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
          <svg class="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span class="text-sm font-medium text-gray-700">95% satisfaction rate</span>
        </div>
      </div>
      
      <!-- Additional Help Resources -->
      <!-- <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 max-w-3xl mx-auto">
        <h3 class="text-lg font-semibold text-gray-900 mb-4 text-center">Additional Resources</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="/faq" class="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            FAQ Center
          </a>
          <a href="/documentation" class="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Documentation
          </a>
          <a href="/community" class="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Community Forum
          </a>
        </div>
      </div> -->
    </div>
  </div>
</section>
  `,
  styles: [`
    .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .animate-spin-slow {
    animation: spin 15s linear infinite;
  }
  
  .animate-ping-slow {
    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.3;
    }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  `]
})
export class FaqContactComponent { }