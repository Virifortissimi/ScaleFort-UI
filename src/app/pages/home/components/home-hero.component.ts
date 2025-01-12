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
            <h1 class="text-5xl font-bold mb-6">
              Welcome to Scalefort: Your Path to a Thriving Tech Career
            </h1>
            <p class="text-xl mb-8">
              Empowering Africa's tech innovators with expert trainings, mentorship, resources, and a supportive community.
            </p>
            <div class="space-x-4">
              <a routerLink="/get-started" 
                 class="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold inline-block hover:bg-blue-50 transition">
                Get Started
              </a>
              <a 
                href="assets/pdf/scalefort-brochure.pdf"
                download="Scalefort-Brochure.pdf" 
                class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold inline-block hover:bg-white/10 transition">
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