import { Component } from '@angular/core';

@Component({
  selector: 'app-resources-categories',
  standalone: true,
  template: `
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Resource Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <button class="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 class="font-semibold">Tech Tutorials</h3>
          </button>
          <button class="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 class="font-semibold">Business Guides</h3>
          </button>
          <button class="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 class="font-semibold">Case Studies</h3>
          </button>
          <button class="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 class="font-semibold">Webinars</h3>
          </button>
        </div>
      </div>
    </section>
  `
})
export class ResourcesCategoriesComponent {}