import { Component } from '@angular/core';

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600 mb-4">"ScaleFort's mentorship program helped me scale my startup from idea to serving 10,000+ customers in just 18 months."</p>
            <div class="flex items-center">
              <div class="ml-3">
                <div class="font-semibold">Sarah Johnson</div>
                <div class="text-gray-500 text-sm">CEO, TechFlow</div>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600 mb-4">"The resources and community support were invaluable in helping me transition from a developer to a tech lead."</p>
            <div class="flex items-center">
              <div class="ml-3">
                <div class="font-semibold">Michael Okonjo</div>
                <div class="text-gray-500 text-sm">Tech Lead, PayFast</div>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600 mb-4">"As a mentor, I've seen incredible transformations. The platform makes it easy to connect and make real impact."</p>
            <div class="flex items-center">
              <div class="ml-3">
                <div class="font-semibold">Amina Diallo</div>
                <div class="text-gray-500 text-sm">CTO, DataSense</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeTestimonialsComponent {}