import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProcessStepComponent } from './process-step.component';
import { processSteps } from './process-steps.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mentorship-process',
  standalone: true,
  imports: [NgFor, ProcessStepComponent, RouterLink],
  template: `
    <section class="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
  <div class="max-w-7xl mx-auto px-4">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-4xl font-bold mb-4 text-blue-600 animate__animated animate__fadeIn">How It Works</h2>
      <p class="text-gray-600 text-lg mb-8">
        Our structured mentorship process ensures you get the most out of your journey
      </p>
    </div>

    <!-- Process Steps -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 relative">
      <app-process-step
        *ngFor="let step of steps; let i = index; let last = last"
        [stepNumber]="i + 1"
        [title]="step.title"
        [description]="step.description"
        [isLast]="last"
        class="transform transition-transform duration-500 hover:scale-105 hover:shadow-xl p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl"
      />
    </div>

    <!-- CTA -->
    <div class="text-center mt-16">
      <a routerLink="/get-started"
        class="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold inline-block transition-all duration-200 transform hover:scale-105 hover:bg-blue-700">
        Start Your Journey
      </a>
    </div>
  </div>
</section>

  `
})
export class MentorshipProcessComponent {
  steps = processSteps;
}