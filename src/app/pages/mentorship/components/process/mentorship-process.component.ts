import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProcessStepComponent } from './process-step.component';
import { processSteps } from './process-steps.data';

@Component({
  selector: 'app-mentorship-process',
  standalone: true,
  imports: [NgFor, ProcessStepComponent],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-4">How It Works</h2>
          <p class="text-gray-600 text-lg">
            Our structured mentorship process ensures you get the most out of your journey
          </p>
        </div>

        <!-- Process Steps -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <app-process-step
            *ngFor="let step of steps; let i = index; let last = last"
            [stepNumber]="i + 1"
            [title]="step.title"
            [description]="step.description"
            [isLast]="last"
          />
        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
          <button 
            class="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 
                   transform transition-transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  `
})
export class MentorshipProcessComponent {
  steps = processSteps;
}