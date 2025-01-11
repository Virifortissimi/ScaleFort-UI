import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-community-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">See the different Courses</h1>
        <p class="text-xl mb-8">Where Tech Innovators Meet. Collaborate. Share. Scale.</p>
        <a routerLink="/get-started" 
          class="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold inline-block hover:bg-blue-50 transition">
          Apply Now
        </a>
      </div>
    </section>
  `
})
export class CommunityHeroComponent {}