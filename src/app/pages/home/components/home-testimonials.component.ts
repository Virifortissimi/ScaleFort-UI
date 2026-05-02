import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  context: string;
}

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white relative z-[1]">
      <div class="container-base">
        <div appAnimateOnScroll [animateDelay]="80" class="text-center max-w-2xl mx-auto mb-16">
          <p class="overline mb-3">What Our Graduates Say</p>
          <h2 class="type-h2 text-text-primary">Real People. Real Results.</h2>
        </div>

        <div
          appAnimateOnScroll
          [animateDelay]="120"
          class="max-w-5xl mx-auto rounded-[28px] border border-accent-school/20 bg-bg-white p-6 sm:p-10 md:p-12 relative overflow-hidden group shadow-[0_18px_60px_rgba(10,10,10,0.05)] hover:border-accent-school/35 hover:shadow-[0_24px_80px_rgba(10,10,10,0.08)] transition-all duration-700"
          (mouseenter)="pause()"
          (mouseleave)="resume()"
          (focusin)="pause()"
          (focusout)="resume()"
        >
          <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-school via-green-300 to-transparent opacity-70"></div>
          <div class="absolute top-0 right-0 p-6 sm:p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
            <svg class="w-12 h-12 sm:w-16 sm:h-16 text-accent-school" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.9124 14 15.017 13.1046 15.017 12V10C15.017 8.89543 15.9124 8 17.017 8H19.017V6H14.017V3H21.017V21H14.017ZM3.01691 21L3.01691 18C3.01691 16.8954 3.91234 16 5.01691 16H8.01691V14H6.01691C4.91234 14 4.01691 13.1046 4.01691 12V10C4.01691 8.89543 4.91234 8 6.01691 8H8.01691V6H3.01691V3H10.0169V21H3.01691Z"/></svg>
          </div>

          <article class="min-h-[14rem] relative z-10">
            <span class="inline-flex rounded-pill border border-accent-school/20 bg-accent-school/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent-school mb-8">
              {{ testimonials[activeIndex()].context }}
            </span>
            <p class="max-w-4xl type-body-l text-text-primary italic leading-relaxed mb-10">"{{ testimonials[activeIndex()].quote }}"</p>
            <div class="flex items-center gap-5">
              <div class="h-14 w-1.5 rounded-full bg-accent-school"></div>
              <div class="text-left">
                <p class="type-h3 text-text-primary">{{ testimonials[activeIndex()].name }}</p>
                <p class="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mt-1">{{ testimonials[activeIndex()].role }}</p>
              </div>
            </div>
          </article>

          <div class="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              @for (item of testimonials; track item.name; let i = $index) {
                <button
                  type="button"
                  (click)="select(i)"
                  [attr.aria-label]="'Show testimonial ' + (i + 1)"
                  [class]="activeIndex() === i
                    ? 'h-2.5 w-8 rounded-full bg-text-primary'
                    : 'h-2.5 w-2.5 rounded-full bg-border-base hover:bg-text-muted'"
                ></button>
              }
            </div>
            <div class="flex items-center gap-2">
              <button
                type="button"
                (click)="previous()"
                class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-base bg-bg-white text-text-primary hover:bg-bg-subtle"
                aria-label="Previous testimonial"
              >
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
              <button
                type="button"
                (click)="next()"
                class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-base bg-bg-white text-text-primary hover:bg-bg-subtle"
                aria-label="Next testimonial"
              >
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeTestimonialsComponent implements OnInit, OnDestroy {
  readonly activeIndex = signal(0);
  readonly isPaused = signal(false);

  readonly testimonials: ReadonlyArray<Testimonial> = [
    {
      quote:
        'Scalefort provided me with a solid foundation in programming, equipping me with the technical skills I needed to thrive in the tech industry. The hands-on learning approach, coupled with expert mentorship, helped me build confidence in my abilities.',
      name: 'Maureen O.',
      role: 'Software Engineer, Cohort 2',
      context: 'Career Switcher',
    },
    {
      quote:
        'Scalefort gave me the skills and confidence to excel in tech. The hands-on projects, expert mentorship, and real-world focus made all the difference.',
      name: 'Bakare Halimat',
      role: 'Tech School Graduate',
      context: 'Bootcamp Graduate',
    },
    {
      quote:
        'Scalefort was a game-changer for me. The structured learning, practical projects, and supportive mentors provided all I needed to transition into tech confidently.',
      name: 'Samuel Akinwole',
      role: 'Tech School Graduate',
      context: 'Backend Learner',
    },
    {
      quote: "I've been thoroughly impressed with the exceptional level of service and creativity they bring to the table.",
      name: 'Okechukwu Ebube',
      role: 'Client / IT Services',
      context: 'Business Client',
    },
  ];

  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      if (!this.isPaused()) {
        this.next();
      }
    }, 5500);
  }

  ngOnDestroy(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  select(index: number): void {
    this.activeIndex.set(index);
  }

  previous(): void {
    const total = this.testimonials.length;
    this.activeIndex.set((this.activeIndex() - 1 + total) % total);
  }

  next(): void {
    const total = this.testimonials.length;
    this.activeIndex.set((this.activeIndex() + 1) % total);
  }

  pause(): void {
    this.isPaused.set(true);
  }

  resume(): void {
    this.isPaused.set(false);
  }
}
