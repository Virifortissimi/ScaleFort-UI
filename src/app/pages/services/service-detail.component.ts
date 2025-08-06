import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { services, Service } from './services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="service">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 relative">
          <div class="text-center">
            <span class="text-7xl mb-8 block transform hover:scale-110 transition-transform">{{ service.icon }}</span>
            <h1 class="text-5xl font-bold mb-6">{{ service.title }}</h1>
            <p class="text-xl max-w-3xl mx-auto leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <span class="text-4xl mb-4 block">✨</span>
            <h2 class="text-3xl font-bold">Key Benefits</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let benefit of service.benefits" 
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div class="flex items-start space-x-4">
                <span class="text-blue-600 text-xl">✓</span>
                <p class="text-gray-700 leading-relaxed">{{ benefit }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <span class="text-4xl mb-4 block">🔄</span>
            <h2 class="text-3xl font-bold">Our Process</h2>
          </div>
          <div class="relative">
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2 hidden md:block"></div>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div *ngFor="let step of service.process; let i = index" 
                   class="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  {{ i + 1 }}
                </div>
                <h3 class="text-xl font-semibold mb-3 text-center">{{ step.title }}</h3>
                <p class="text-gray-600 text-center">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <span class="text-4xl mb-4 block">🎯</span>
            <h2 class="text-3xl font-bold">Why Choose Us</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div *ngFor="let reason of service.whyUs" 
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div class="flex items-start space-x-4">
                <span class="text-blue-600 text-2xl">⭐</span>
                <p class="text-gray-700 leading-relaxed">{{ reason }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <span class="text-5xl mb-6 block">🚀</span>
          <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p class="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business with {{ service.title.toLowerCase() }}.
          </p>
          <a href="mailto:sales@scalefort.org" 
             class="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold inline-block
                    hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  `
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service = services.find(s => s.id === id);
  }
}