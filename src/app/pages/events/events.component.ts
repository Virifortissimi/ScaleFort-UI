import { ChangeDetectionStrategy, Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../core/services/events.service';
import { EventItem } from '../../shared/models/event.model';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [DatePipe, RouterLink, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- ═══════════ HERO ═══════════ -->
    <section class="section-hero bg-bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full -ml-40 -mt-40"></div>
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/5 blur-[100px] rounded-full -mr-32 -mb-32"></div>

      <div class="container-base max-w-5xl">
        <header class="text-center" appAnimateOnScroll animateVariant="blur-up">
          <p class="overline mb-4 inline-flex items-center rounded-pill border border-green-100 bg-green-50/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-green-600 shadow-sm">
            Events &amp; Webinars
          </p>
          <h1 class="type-display text-text-primary mb-6 tracking-tight">Upcoming Open Days</h1>
          <p class="type-body-l text-text-muted max-w-2xl mx-auto leading-relaxed">
            Join our virtual sessions to explore programmes, ask questions, and meet the team behind ScaleFort.
          </p>
          @if (!loading() && events().length === 0) {
            <div class="mt-8 inline-flex max-w-2xl items-center justify-center rounded-card border border-amber-200 bg-amber-50 px-5 py-4 text-center shadow-sm">
              <p class="text-sm font-medium text-amber-700">
                Please note that there are no upcoming events at this time.
              </p>
            </div>
          }
        </header>
      </div>
    </section>

    <!-- ═══════════ EVENTS GRID ═══════════ -->
    <section class="section-compact bg-bg-white">
      <div class="container-base max-w-5xl">
        @if (loading()) {
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @for (item of [1, 2]; track item) {
              <article class="card-base animate-pulse" aria-hidden="true">
                <div class="flex gap-4 mb-4">
                  <div class="w-16 h-16 rounded-2xl bg-bg-subtle"></div>
                  <div class="flex-1">
                    <div class="h-3 w-24 rounded bg-bg-subtle mb-2"></div>
                    <div class="h-5 w-4/5 rounded bg-bg-subtle mb-2"></div>
                    <div class="h-3 w-20 rounded bg-bg-subtle"></div>
                  </div>
                </div>
                <div class="h-4 w-full rounded bg-bg-subtle mb-2"></div>
                <div class="h-4 w-3/5 rounded bg-bg-subtle"></div>
              </article>
            }
          </div>
        } @else if (events().length > 0) {
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @for (event of events(); track event.id; let i = $index) {
              <article
                appAnimateOnScroll
                [animateDelay]="i * 120"
                animateVariant="scale-up"
                class="card-base group hover:border-green-500/30 transition-all duration-500 relative"
              >
                <!-- Accent top bar -->
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-500 to-green-400 rounded-t-card opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div class="flex items-start gap-4 mb-4">
                  <!-- Date badge -->
                  <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex flex-col items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-colors duration-300">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-green-600 group-hover:text-white transition-colors duration-300">
                      {{ event.startsAt | date: 'MMM' }}
                    </span>
                    <span class="text-xl font-bold text-green-700 group-hover:text-white transition-colors duration-300 -mt-0.5">
                      {{ event.startsAt | date: 'd' }}
                    </span>
                  </div>

                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-semibold text-green-600 mb-1">
                      {{ event.startsAt | date: 'EEEE, h:mm a' }}
                    </p>
                    <h2 class="type-h3 text-text-primary mb-1">{{ event.title }}</h2>
                    <!-- Location tag -->
                    <span class="tag tag-green !text-[10px] !py-0.5 !px-2">
                      📍 {{ event.location }}
                    </span>
                  </div>
                </div>

                <p class="type-body text-text-body leading-relaxed mb-5">{{ event.summary }}</p>

                <div class="flex items-center gap-3">
                  @if (event.sourceUrl) {
                    <a
                      [href]="event.sourceUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn-primary btn-sm no-underline"
                    >
                      Reserve a Seat →
                    </a>
                  } @else {
                    <a routerLink="/contact" class="btn-primary btn-sm no-underline">
                      Reserve a Seat →
                    </a>
                  }
                  <span class="text-xs text-text-muted">Free &bull; Virtual</span>
                </div>
              </article>
            }
          </div>
        } @else {
          <article
            appAnimateOnScroll
            animateVariant="blur-up"
            class="card-base text-center py-16 max-w-xl mx-auto"
          >
            <div class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">📅</div>
            <h2 class="type-h2 text-text-primary mb-3">No Upcoming Events</h2>
            <p class="type-body text-text-muted mb-8 max-w-md mx-auto">
              Please note that there are no upcoming events at this time. We will announce the next sessions soon.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              <a routerLink="/contact" class="btn-primary no-underline">Contact Team</a>
              <a href="#why-attend" class="btn-ghost">Learn More ↓</a>
            </div>
          </article>
        }
      </div>
    </section>

    <!-- ═══════════ WHY ATTEND ═══════════ -->
    <section id="why-attend" class="section-compact bg-bg-white">
      <div class="container-base max-w-5xl">
        <div class="text-center mb-12" appAnimateOnScroll animateVariant="up">
          <p class="overline mb-2">Why Attend</p>
          <h2 class="type-h1 text-text-primary tracking-tight">What You Will Get</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (benefit of benefits; track benefit.title; let i = $index) {
            <div
              appAnimateOnScroll
              [animateDelay]="i * 80"
              animateVariant="up"
              class="card-base text-center group cursor-default"
            >
              <div class="w-12 h-12 bg-bg-subtle rounded-xl flex items-center justify-center text-xl mx-auto mb-4 group-hover:bg-green-50 transition-colors duration-300">
                {{ benefit.icon }}
              </div>
              <h3 class="text-sm font-bold text-text-primary mb-1">{{ benefit.title }}</h3>
              <p class="text-xs text-text-muted leading-relaxed">{{ benefit.subtitle }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════ BOTTOM CTA ═══════════ -->
    <section class="section-compact bg-bg-white">
      <div class="container-base max-w-3xl">
        <div
          appAnimateOnScroll
          animateVariant="blur-up"
          class="card-base bg-gradient-to-br from-green-50 to-bg-white border-green-100 text-center py-12"
        >
          <h2 class="type-h2 text-text-primary mb-3">Can't Make It to an Event?</h2>
          <p class="text-text-muted mb-8 max-w-lg mx-auto">
            No problem. You can explore our programmes, speak with the admissions team, or start your application at any time.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a routerLink="/tech-school/apply" class="btn-primary no-underline">Start Application</a>
            <a routerLink="/contact" class="btn-secondary no-underline">Talk to the Team</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class EventsComponent implements OnInit {
  private readonly eventsService = inject(EventsService);

  readonly loading = signal(true);
  readonly events = signal<EventItem[]>([]);

  readonly benefits = [
    { icon: '🎯', title: 'Live Q&A', subtitle: 'Get your questions answered by mentors and alumni in real time.' },
    { icon: '🗺️', title: 'Programme Tour', subtitle: 'Walk through our full curriculum, tools, and career support.' },
    { icon: '🤝', title: 'Meet the Team', subtitle: 'Connect with instructors and admissions before you apply.' },
    { icon: '🎁', title: 'Exclusive Offers', subtitle: 'Early-bird discounts and scholarship info for attendees.' },
  ];

  ngOnInit(): void {
    this.eventsService.listUpcoming().subscribe((items) => {
      this.events.set(items);
      this.loading.set(false);
    });
  }
}



