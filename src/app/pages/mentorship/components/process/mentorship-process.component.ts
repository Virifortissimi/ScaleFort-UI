import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProcessStepComponent } from './process-step.component';
import { processSteps } from './process-steps.data';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-mentorship-process',
  standalone: true,
  imports: [ProcessStepComponent, RouterLink, AnimateOnScrollDirective, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white">
  <div class="container-base">
    <!-- Header -->
    <div appAnimateOnScroll [animateDelay]="80" class="text-center max-w-3xl mx-auto mb-16">
      <p class="overline overline-amber mb-3">Mentorship Flow</p>
      <h2 class="type-h2 text-text-primary mb-4">How It Works</h2>
      <p class="text-text-muted text-lg mb-8">
        Our structured mentorship process ensures you get the most out of your journey
      </p>
    </div>

    <!-- Process Steps -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 relative">
      @for (step of steps; track step.title; let i = $index; let last = $last) {
        <app-process-step
          appAnimateOnScroll
          [animateDelay]="120 + (i * 60)"
          [stepNumber]="i + 1"
          [title]="step.title"
          [description]="step.description"
          [isLast]="last"
          class="p-1"
        />
      }
    </div>

    <!-- CTA -->
    <div appAnimateOnScroll [animateDelay]="220" class="text-center mt-16">
      <a appMagnetic routerLink="/get-started" class="btn-primary">
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

