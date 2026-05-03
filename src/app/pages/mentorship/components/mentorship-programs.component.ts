import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-mentorship-programs',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section-compact bg-bg-subtle">
      <div class="container-base">
        <div class="text-center mb-10">
          <p appAnimateOnScroll [animateDelay]="50" class="overline mb-2">Mentorship Tracks</p>
          <h2 appAnimateOnScroll [animateDelay]="90" class="text-h2 font-bold text-text-primary mb-3">Our Training Programs</h2>
          <p appAnimateOnScroll [animateDelay]="130" class="text-text-muted max-w-2xl mx-auto">
            Structured support designed to move you from learning to real-world execution.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div appAnimateOnScroll [animateDelay]="160" class="card-base">
            <h3 class="text-h3 font-semibold text-text-primary mb-3">1:1 Mentorship</h3>
            <p class="text-text-body">Personalized guidance from industry experts tailored to your goals.</p>
          </div>
          <div appAnimateOnScroll [animateDelay]="220" class="card-base">
            <h3 class="text-h3 font-semibold text-text-primary mb-3">Group Sessions</h3>
            <p class="text-text-body">Learn and grow together with peers in structured group mentoring.</p>
          </div>
          <div appAnimateOnScroll [animateDelay]="280" class="card-base">
            <h3 class="text-h3 font-semibold text-text-primary mb-3">Specialized Materials</h3>
            <p class="text-text-body">Access curated learning materials to grow and scale with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MentorshipProgramsComponent {}

