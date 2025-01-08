import { Component } from '@angular/core';

@Component({
  selector: 'app-mentorship-hero',
  standalone: true,
  template: `
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Find Your Perfect Mentor</h1>
        <p class="text-xl mb-8">Unlock Your Potential with the Right Guidance. Scale Smarter, Not Harder.</p>
        <button class="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold">
          Start Your Journey
        </button>
      </div>
    </section>
  `
})
export class MentorshipHeroComponent {}