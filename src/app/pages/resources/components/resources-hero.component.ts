import { Component } from '@angular/core';

@Component({
  selector: 'app-resources-hero',
  standalone: true,
  template: `
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Resources Hub</h1>
        <p class="text-xl mb-8">Curated Knowledge for the Innovators of Tomorrow</p>
        <div class="max-w-2xl">
          <input 
            type="search" 
            placeholder="Search resources..." 
            class="w-full px-4 py-3 rounded-md text-gray-900"
          >
        </div>
      </div>
    </section>
  `
})
export class ResourcesHeroComponent {}