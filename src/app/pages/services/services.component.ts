import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { services } from './services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="pt-16">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">Our Services</h1>
          <p class="text-xl">Comprehensive Technology Solutions for Your Business</p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a *ngFor="let service of services"
               [routerLink]="['/services', service.id]" 
               class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div class="text-blue-600 text-4xl mb-4">{{ service.icon }}</div>
              <h2 class="text-2xl font-bold mb-4">{{ service.title }}</h2>
              <p class="text-gray-600 mb-6">{{ service.description }}</p>
              <ul class="space-y-2 text-gray-600 mb-6">
                <li *ngFor="let feature of service.features">• {{ feature }}</li>
              </ul>
              <div class="text-blue-600 font-semibold flex items-center">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-gray-50 py-16">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business scale with our technology solutions.
          </p>
          <a routerLink="/get-started" 
             class="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold inline-block hover:bg-blue-700 transition">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent {
  services = services;
}