import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface FeatureCard {
  label: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  accentClass: string;
}

@Component({
  selector: 'app-home-features',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white relative z-[1]">
      <div class="container-base">
        <div appAnimateOnScroll [animateDelay]="80" class="section-header text-center max-w-3xl mx-auto mb-16">
          <p class="overline mb-3">What We Do</p>
          <h2 class="text-h2 font-bold text-text-primary mb-4">One Company. Three Ways to Scale.</h2>
          <p class="type-body text-text-muted">
            Whether you're starting a career, growing a business, or upskilling a team, Scalefort has you covered.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (card of cards; track card.title; let i = $index) {
            <article
              appAnimateOnScroll
              [animateDelay]="140 + (i * 100)"
              class="card-base bg-bg-white p-10 flex flex-col group hover:shadow-2xl transition-all duration-500 h-full border-border-faint"
            >
              <p [class]="'text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ' + card.accentClass">{{ card.label }}</p>
              <h3 class="type-h3 text-text-primary mb-4">{{ card.title }}</h3>
              <p class="type-body text-text-muted leading-relaxed mb-8 flex-1 text-sm">{{ card.body }}</p>
              <a [routerLink]="card.href" class="text-xs font-bold uppercase tracking-widest text-text-primary no-underline group-hover:underline underline-offset-4 inline-flex items-center gap-2 group/link border-t border-border-faint pt-6 mt-auto">
                {{ card.cta }}
                <span class="transform group-hover/link:translate-x-1 transition-transform">-></span>
              </a>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class HomeFeaturesComponent {
  readonly cards: ReadonlyArray<FeatureCard> = [
    {
      label: 'Tech School',
      title: 'Tech School',
      body: 'Industry-driven curriculum with hands-on learning, real internships, and recruitment support. 7 tracks. 12 weeks. 100% remote.',
      cta: 'Explore Courses',
      href: '/tech-school/courses',
      accentClass: 'text-accent-school',
    },
    {
      label: 'IT Services',
      title: 'IT Services',
      body: 'End-to-end software development, cloud integration, API engineering, and DevOps. 50+ projects delivered. 98% client satisfaction.',
      cta: 'View Our Work',
      href: '/it-services/portfolio',
      accentClass: 'text-accent-it',
    },
    {
      label: 'Corporate Training',
      title: 'Corporate Training',
      body: 'Customized upskilling programs for enterprise teams. From cloud migration to cybersecurity, tailored to your business goals.',
      cta: 'Train My Team',
      href: '/corporate-training',
      accentClass: 'text-accent-corporate',
    },
  ];
}
