import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-voucher',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Image Container -->
          <div class="relative order-last lg:order-first">
            <div class="relative rounded-2xl shadow-2xl overflow-hidden group">
              <img
                src="https://res.cloudinary.com/virifortissimi/image/upload/v1740236571/Goals/toln56xdmv6swxowxfva.jpg"
                alt="Team collaborating with voucher cards"
                class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-900/10 to-transparent"></div>
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
          </div>

          <!-- Content Container -->
          <div class="relative space-y-6">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Empower Through</span><br>
              Collective Learning
            </h2>
            
            <p class="text-lg text-gray-600 leading-relaxed">
              Transform your organization's potential with our bulk voucher program, designed for:
              <ul class="grid grid-cols-2 gap-3 mt-4">
                <li class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Corporate Teams</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">NGOs & Communities</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Support Groups</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Individual Sponsors</span>
                </li>
              </ul>
            

            <a
              routerLink="/bulk-vouchers"
              class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Explore Bulk Offers
              <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeVoucherComponent {}