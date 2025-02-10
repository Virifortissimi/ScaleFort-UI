import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Our Services</h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business scale and succeed
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div class="text-blue-600 text-3xl mb-4">💻</div>
            <h3 class="text-xl font-semibold mb-3">Application Development</h3>
            <p class="text-gray-600 mb-4">Custom web applications tailored to your business needs with cutting-edge technologies.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div class="text-blue-600 text-3xl mb-4">📱</div>
            <h3 class="text-xl font-semibold mb-3">Mobile Development</h3>
            <p class="text-gray-600 mb-4">Native and cross-platform mobile applications for iOS and Android platforms.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div class="text-blue-600 text-3xl mb-4">🛠️</div>
            <h3 class="text-xl font-semibold mb-3">Application Support</h3>
            <p class="text-gray-600 mb-4">24/7 maintenance and support to ensure your applications run smoothly.</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <a routerLink="/services" 
             class="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            View All Services
          </a>
        </div>
      </div>
    </section>
  `
})


export class HomeServicesComponent { }