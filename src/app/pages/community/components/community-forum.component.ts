import { Component } from '@angular/core';

@Component({
  selector: 'app-community-forum',
  standalone: true,
  template: `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Advanced (Specialized Classes)</h2>
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Backend Development with .NET:</h3>
            <p class="text-gray-600 mb-4">Build robust, scalable, and secure APIs and systems using .NET technologies.</p>
            <a href="/get-started" class="text-blue-600 font-semibold">Apply Now →</a>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Backend Development with Python:</h3>
            <p class="text-gray-600 mb-4"> Develop efficient, high-performance backends using Python and Django. </p>
            <a href="/get-started" class="text-blue-600 font-semibold">Apply Now →</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CommunityForumComponent {}