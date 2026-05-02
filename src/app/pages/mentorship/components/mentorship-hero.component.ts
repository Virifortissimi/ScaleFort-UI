import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-mentorship-hero',
  imports: [RouterLink, AnimateOnScrollDirective, MagneticDirective],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white relative z-[1]">
      <div class="container-base">
        <p appAnimateOnScroll [animateDelay]="60" class="overline">Mentorship</p>
        <h1 appAnimateOnScroll [animateDelay]="100" class="type-h1 text-text-primary mb-4">Find Your Perfect Mentor</h1>
        <p appAnimateOnScroll [animateDelay]="160" class="type-body-l text-text-muted max-w-3xl mb-8">
          Unlock your potential with the right guidance. Scale smarter, not harder.
        </p>
        <div appAnimateOnScroll [animateDelay]="220" class="flex flex-wrap gap-3">
          <a appMagnetic routerLink="/get-started" class="btn-primary">Start Your Journey</a>
          <a appMagnetic routerLink="/contact" class="btn-secondary">Talk to a Mentor Advisor</a>
        </div>
      </div>
    </section>
  `
})
export class MentorshipHeroComponent {}

