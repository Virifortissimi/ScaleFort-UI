import { Component } from '@angular/core';
import { AnimatedCircuitComponent } from '../../../shared/components/animated-circuit.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mentorship-hero',
  imports: [ RouterLink, AnimatedCircuitComponent ],
  standalone: true,
  template: `
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Find Your Perfect Mentor</h1>
        <p class="text-xl mb-8">Unlock Your Potential with the Right Guidance. Scale Smarter, Not Harder.</p>
        <a routerLink="/get-started" 
            class="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold inline-block hover:bg-blue-50 transition">
            Start Your Journey
        </a>
      </div>
    </section>
  `
})
export class MentorshipHeroComponent {}