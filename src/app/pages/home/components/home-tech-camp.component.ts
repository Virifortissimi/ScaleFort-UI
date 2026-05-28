import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { CohortCountdownComponent } from '../../../shared/components/cohort-countdown.component';

@Component({
  selector: 'app-home-tech-camp',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective, CohortCountdownComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section-compact bg-bg-white">
      <div class="container-base">
        <article
          appAnimateOnScroll
          class="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-8 items-center rounded-[28px] border border-green-100 bg-[linear-gradient(135deg,rgba(239,253,245,0.96),rgba(255,255,255,0.98))] p-5 sm:p-7 lg:p-9 shadow-[0_24px_70px_rgba(10,42,23,0.08)]"
        >
          <div>
            <p class="overline mb-3">Maiden Edition Starts August 3, 2026</p>
            <h2 class="type-h1 text-text-primary mb-4">Future Creators Tech Camp</h2>
            <p class="type-body text-text-muted max-w-2xl mb-6">
              A practical 3-week virtual holiday camp where children learn, create, and build confidence with digital tools, coding, games, and AI on Zoom.
            </p>

            <div class="mb-6 flex justify-start">
              <app-cohort-countdown
                nextCohortDate="2026-08-03T09:00:00+01:00"
                label="Camp starts in"
                scarcityLabel="Limited slots available"
              />
            </div>

            <div class="flex flex-wrap gap-3 mb-7">
              <span class="tag tag-green">3 weeks of fun</span>
              <span class="tag tag-amber">Ages 7-15</span>
              <span class="tag tag-rose">NGN 99,999</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a
                routerLink="/future-creators-tech-camp"
                fragment="register"
                class="btn-primary no-underline"
              >
                Register Now
              </a>
              <a routerLink="/future-creators-tech-camp" class="btn-secondary no-underline">View Details</a>
            </div>
          </div>

          <a routerLink="/future-creators-tech-camp" class="block no-underline">
            <img
              src="assets/images/camps/future-creators-tech-camp.jpeg"
              alt="Scalefort Future Creators Tech Camp flyer"
              class="w-full max-h-[28rem] object-cover object-top rounded-[1.35rem] border border-border-base bg-bg-white shadow-[0_20px_55px_rgba(15,23,42,0.12)]"
              loading="lazy"
              decoding="async"
            />
          </a>
        </article>
      </div>
    </section>
  `,
})
export class HomeTechCampComponent {}
