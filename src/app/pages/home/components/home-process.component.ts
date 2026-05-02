import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { CardShimmerDirective } from '../../../shared/directives/card-shimmer.directive';

interface ProcessStep {
  title: string;
  body: string;
  iconPath: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home-process',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section bg-bg-white relative z-[1]">
      <div class="container-base">
        <div appAnimateOnScroll class="text-center max-w-3xl mx-auto mb-12">
          <p class="overline mb-3">How We Work</p>
          <h2 class="text-h2 font-bold text-text-primary mb-4">A Simple System That Ships Outcomes</h2>
          <p class="text-text-muted">Clear milestones, visible progress, and practical support from kickoff to delivery.</p>
        </div>

        <div class="relative">
          <div aria-hidden="true" class="hidden md:block absolute left-0 right-0 top-12 h-px bg-border-faint"></div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @for (step of steps; track step.title; let i = $index) {
              <article 
                appAnimateOnScroll 
                [animateDelay]="100 + (i * 100)" 
                class="card-base bg-bg-white p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-border-faint"
              >
                <div class="relative h-44 w-full rounded-card overflow-hidden mb-8">
                   <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/40 to-transparent z-10"></div>
                   <img
                    [src]="step.image"
                    [alt]="step.imageAlt"
                    class="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg-subtle text-accent-school border border-border-faint group-hover:bg-accent-school/10 transition-colors">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <path [attr.d]="step.iconPath" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <p class="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-2">Phase 0{{ i + 1 }}</p>
                <h3 class="type-h3 text-text-primary mb-4">{{ step.title }}</h3>
                <p class="type-body text-text-muted leading-relaxed text-sm">{{ step.body }}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeProcessComponent {
  readonly steps: ReadonlyArray<ProcessStep> = [
    {
      title: 'Discover and Align',
      body: 'We clarify goals, scope, and success metrics so everyone moves in one direction from day one.',
      iconPath: 'M8 10h8m-8 4h5m4 8l4-4m0 0l-4-4m4 4H4a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v4',
      image: 'assets/images/process/process-discover.png',
      imageAlt: 'African tech team planning and aligning on project goals in a modern Lagos office',
    },
    {
      title: 'Build With Iterations',
      body: 'Weekly execution cycles keep quality high while giving you visible progress and room to refine.',
      iconPath: 'M3 12h4l3 8 4-16 3 8h4',
      image: 'assets/images/process/process-build.png',
      imageAlt: 'African software developer coding across dual monitors in a modern workspace',
    },
    {
      title: 'Launch and Scale',
      body: 'We finalize handover, optimize performance, and support your team through growth and adoption.',
      iconPath: 'M13 3l8 8-8 8M3 11h18',
      image: 'assets/images/process/process-launch.png',
      imageAlt: 'African tech team celebrating a successful product launch with growth analytics',
    },
  ];
}
