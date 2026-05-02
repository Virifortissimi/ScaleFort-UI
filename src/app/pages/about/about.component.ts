import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';

interface Stat {
  value: string;
  label: string;
}

interface FocusArea {
  label: string;
  title: string;
  body: string;
  href: string;
  accentClass: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NgClass, AnimateOnScrollDirective, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="bg-bg-base text-text-body">
      <section appAnimateOnScroll class="section-hero bg-bg-base">
        <div class="container-base">
          <div class="mx-auto max-w-4xl text-center">
            <p class="overline mb-5">About Scalefort</p>
            <h1 class="type-display text-text-primary">We Are Scalefort</h1>
            <p class="mx-auto mt-7 max-w-3xl type-body-l text-text-body">
              ScaleFort is dedicated to empowering tech enthusiasts, programmers, developers, and businesses across Africa through mentorship, resources, and innovative digital solutions.
            </p>
            <p class="mx-auto mt-5 max-w-3xl type-body text-text-muted">
              We believe in bridging the gap in tech mentorship and resources, fostering innovation, and driving digital transformation across the African continent - one learner and one business at a time.
            </p>
            <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a appMagnetic routerLink="/tech-school" class="btn-primary w-full no-underline sm:w-auto">Explore Tech School</a>
              <a appMagnetic routerLink="/contact" class="btn-secondary w-full no-underline sm:w-auto">Talk to Us</a>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-bg-base pb-12">
        <div class="container-base">
          <div class="overflow-hidden rounded-[16px] border border-border-base bg-bg-white p-2">
            <img
              src="assets/images/home/hero-main.png"
              alt="Scalefort learners and team members collaborating"
              class="h-[18rem] w-full rounded-[12px] object-cover sm:h-[28rem]"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section class="section bg-bg-white">
        <div class="container-base">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article appAnimateOnScroll class="rounded-[16px] border border-border-base bg-bg-white p-8">
              <p class="mb-4 text-sm font-semibold text-primary">Mission</p>
              <h2 class="type-h3 text-text-primary">Africa's most trusted tech partner.</h2>
              <p class="mt-5 type-body text-text-body">
                To be Africa's most trusted tech partner - training the next generation of developers, building the digital products of tomorrow, and empowering enterprise teams to lead in the digital economy.
              </p>
            </article>

            <article appAnimateOnScroll [animateDelay]="90" class="rounded-[16px] border border-border-base bg-bg-white p-8">
              <p class="mb-4 text-sm font-semibold text-tertiary">Vision</p>
              <h2 class="type-h3 text-text-primary">A thriving African tech ecosystem.</h2>
              <p class="mt-5 type-body text-text-body">
                A thriving African tech ecosystem where talent is limitless and opportunity is equally distributed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section bg-bg-subtle">
        <div class="container-base">
          <div class="section-header">
            <p class="overline mb-4">What We Do</p>
            <h2 class="type-h2 text-text-primary">One Company. Three Ways to Scale.</h2>
            <p class="mt-5 type-body text-text-muted">
              Whether you're starting a career, growing a business, or upskilling a team - Scalefort has you covered.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
            @for (area of focusAreas; track area.title; let i = $index) {
              <article appAnimateOnScroll [animateDelay]="80 + (i * 80)" class="rounded-[16px] border border-border-base bg-bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
                <p class="mb-4 text-sm font-semibold" [ngClass]="area.accentClass">{{ area.label }}</p>
                <h3 class="type-h3 text-text-primary">{{ area.title }}</h3>
                <p class="mt-4 text-base leading-7 text-text-body">{{ area.body }}</p>
                <a [routerLink]="area.href" class="mt-6 inline-flex text-sm font-semibold text-text-primary no-underline">
                  Learn more
                </a>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="section bg-bg-base">
        <div class="container-base">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            @for (stat of stats; track stat.label; let i = $index) {
              <div appAnimateOnScroll [animateDelay]="60 + (i * 60)" class="rounded-[16px] border border-border-base bg-bg-white p-6 text-center">
                <p class="text-[clamp(2rem,5vw,3rem)] font-extrabold leading-none text-text-primary">{{ stat.value }}</p>
                <p class="mt-3 text-sm text-text-muted">{{ stat.label }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="section bg-bg-white">
        <div class="container-base">
          <div class="grid grid-cols-1 gap-8 rounded-[16px] border border-border-base bg-bg-white p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p class="overline mb-4">Ready to Scale?</p>
              <h2 class="type-h2 text-text-primary">Build your next step with Scalefort.</h2>
              <p class="mt-4 max-w-2xl type-body text-text-muted">
                Join 100+ learners and businesses already growing with Scalefort.
              </p>
            </div>
            <div class="flex flex-col gap-4 sm:flex-row">
              <a appMagnetic routerLink="/get-started" class="btn-primary w-full no-underline sm:w-auto">Start Your Journey</a>
              <a appMagnetic routerLink="/contact" class="btn-secondary w-full no-underline sm:w-auto">Talk to Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
})
export class AboutComponent {
  readonly focusAreas: ReadonlyArray<FocusArea> = [
    {
      label: 'Tech School',
      title: 'Training job-ready talent',
      body: 'Industry-driven curriculum with hands-on learning, real internships, and recruitment support.',
      href: '/tech-school',
      accentClass: 'text-accent-school',
    },
    {
      label: 'IT Services',
      title: 'Building digital products',
      body: 'End-to-end software development, cloud integration, API engineering, and DevOps.',
      href: '/it-services',
      accentClass: 'text-accent-it',
    },
    {
      label: 'Corporate Training',
      title: 'Upskilling enterprise teams',
      body: 'Customised upskilling programs aligned directly with your business goals.',
      href: '/corporate-training',
      accentClass: 'text-accent-corporate',
    },
  ];

  readonly stats: ReadonlyArray<Stat> = [
    { value: '100+', label: 'Learners Served' },
    { value: '50+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Corporate Partners' },
  ];
}
