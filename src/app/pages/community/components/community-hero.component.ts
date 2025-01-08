import { Component } from '@angular/core';

@Component({
  selector: 'app-community-hero',
  standalone: true,
  template: `
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Join Our Community</h1>
        <p class="text-xl mb-8">Where Tech Innovators Meet. Collaborate. Share. Scale.</p>
        <button class="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold">
          Join Now
        </button>
      </div>
    </section>
  `
})
export class CommunityHeroComponent {}