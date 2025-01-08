import { Component } from '@angular/core';

@Component({
  selector: 'app-community-forum',
  standalone: true,
  template: `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Community Forum</h2>
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Tech Discussion</h3>
            <p class="text-gray-600 mb-4">Join discussions about the latest tech trends and innovations.</p>
            <button class="text-blue-600 font-semibold">Join Discussion →</button>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Startup Support</h3>
            <p class="text-gray-600 mb-4">Get advice and support for your startup journey.</p>
            <button class="text-blue-600 font-semibold">Join Discussion →</button>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Job Board</h3>
            <p class="text-gray-600 mb-4">Find opportunities or post jobs in the tech industry.</p>
            <button class="text-blue-600 font-semibold">View Jobs →</button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CommunityForumComponent {}