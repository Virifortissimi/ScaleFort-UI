import { Component } from '@angular/core';

@Component({
  selector: 'app-resources-featured',
  standalone: true,
  template: `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Featured Resources</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Scaling Your Tech Startup</h3>
              <p class="text-gray-600 mb-4">Learn proven strategies for scaling your tech startup in Africa.</p>
              <button class="text-blue-600 font-semibold">Read More →</button>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Tech Leadership 101</h3>
              <p class="text-gray-600 mb-4">Essential leadership skills for tech professionals.</p>
              <button class="text-blue-600 font-semibold">Read More →</button>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Fundraising Guide</h3>
              <p class="text-gray-600 mb-4">Complete guide to raising funds for your tech startup.</p>
              <button class="text-blue-600 font-semibold">Read More →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ResourcesFeaturedComponent {}