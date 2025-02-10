import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimatedCircuitComponent } from '../../../shared/components/animated-circuit.component';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink, AnimatedCircuitComponent],
  template: `
    <section class="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 overflow-hidden">
      <!-- Animated Circuit Background -->
      <div class="absolute inset-0 opacity-20">
        <app-animated-circuit />
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>          
            <p class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.675c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.974 2.89c-.784.57-1.839-.196-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L1.665 9.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69L9.05 2.927z" />
              </svg>
              No 1 Tech School/Partner in Lagos
            </p>
            <h1 class="text-5xl font-bold mb-6">
              Scalefort: Africa's Premier Tech School & Technology Solutions Partner
            </h1>
            <p class="text-xl mb-8">
              Join us and unlock your potential, whether you're building your tech career or accelerating your business growth.
            </p>
            <div class="space-x-4">
              <a routerLink="/get-started" 
                 class="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold inline-block hover:bg-blue-50 transition">
                Register
              </a>
              <a 
                href="assets/pdf/scalefort-brochure.pdf"
                download="Scalefort-Brochure.pdf" 
                class="border-2 border-white text-white px-8 py-3 download-brochure rounded-md font-semibold inline-block hover:bg-white/10 transition">
                    Download Brochure
              </a>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="bg-blue-600/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="font-semibold mb-2">100+ Learners Served</h3>
                  <p class="text-sm text-blue-100">Connect with industry experts</p>
                </div>
                <div class="bg-blue-600/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="font-semibold mb-2">Resources</h3>
                  <p class="text-sm text-blue-100">Access curated learning materials</p>
                </div>
              </div>
              <div class="space-y-4 mt-8">
                <div class="bg-blue-600/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="font-semibold mb-2">Community</h3>
                  <p class="text-sm text-blue-100">Join a network of innovators</p>
                </div>
                <div class="bg-blue-600/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="font-semibold mb-2">Growth</h3>
                  <p class="text-sm text-blue-100">Scale your tech journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeHeroComponent {}