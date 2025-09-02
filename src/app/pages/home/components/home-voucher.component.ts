import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-voucher',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative py-24 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 overflow-hidden">
  <!-- Background decorative elements -->
  <div class="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div class="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Content Container -->
      <div class="relative space-y-8">
        <div>
          <span class="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            TEAM LEARNING PROGRAM
          </span>
          
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Empower Through</span><br>
            Collective Learning
          </h2>
        </div>
        
        <p class="text-lg text-gray-600 leading-relaxed">
          Transform your organization's potential with our bulk voucher program, designed to upskill teams and communities at scale with special group discounts.
        </p>
        
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-gray-800">Perfect for:</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li class="flex items-start space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Corporate Teams</h4>
                <p class="text-sm text-gray-600">Upskill your workforce</p>
              </div>
            </li>
            
            <li class="flex items-start space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <div class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">NGOs & Communities</h4>
                <p class="text-sm text-gray-600">Empower those you serve</p>
              </div>
            </li>
            
            <li class="flex items-start space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Support Groups</h4>
                <p class="text-sm text-gray-600">Collective growth</p>
              </div>
            </li>
            
            <li class="flex items-start space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <div class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Individual Sponsors</h4>
                <p class="text-sm text-gray-600">Gift learning opportunities</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <a
            routerLink="/bulk-vouchers"
            class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
          >
            Explore Bulk Offers
            <svg class="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          
          <p class="text-sm text-gray-500 mt-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
            </svg>
            Save up to 30% with group discounts
          </p>
        </div>
      </div>

      <!-- Image Container -->
      <div class="relative order-last lg:order-first">
        <div class="relative rounded-2xl shadow-2xl overflow-hidden group">
          <img
            src="https://res.cloudinary.com/virifortissimi/image/upload/v1740236571/Goals/toln56xdmv6swxowxfva.jpg"
            alt="Team collaborating with voucher cards"
            class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/15 to-transparent"></div>
          
          <!-- Floating badge on image -->
          <div class="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            <div class="flex items-center">
              <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span class="text-sm font-medium text-gray-800">100+ Empowered</span>
            </div>
          </div>
        </div>
        
        <!-- Decorative elements -->
        <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/40 rounded-full opacity-70"></div>
        <div class="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200/30 rounded-full opacity-60"></div>
      </div>
    </div>
  </div>
</section>
  `,
})
export class HomeVoucherComponent {}