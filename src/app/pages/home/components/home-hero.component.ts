import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section-hero bg-transparent relative z-[1]">
      <div class="container-base grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div class="text-center lg:text-left">
          <p appAnimateOnScroll [animateDelay]="80" class="overline mb-6 inline-flex items-center rounded-pill border border-border-base bg-bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-school shadow-sm">
            Transforming Africa's Digital Future
          </p>
          <h1 appAnimateOnScroll [animateDelay]="120" class="type-display text-text-primary mb-8 tracking-tight">Africa's Complete Tech Company</h1>
          <p appAnimateOnScroll [animateDelay]="180" class="type-body-l text-text-muted max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
            We train your developers, build your digital products, and upskill your enterprise teams from Lagos, for Africa.
          </p>
          <div appAnimateOnScroll [animateDelay]="240" class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a appMagnetic routerLink="/tech-school/apply" class="btn-school w-full sm:w-auto no-underline">Start Your Tech Career</a>
            <a appMagnetic routerLink="/it-services/quote" class="btn-it-outline w-full sm:w-auto no-underline">Build My Product</a>
            <a appMagnetic routerLink="/corporate-training/apply" class="btn-corporate-outline w-full sm:w-auto no-underline">Train My Team</a>
          </div>
          <ul appAnimateOnScroll [animateDelay]="320" class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest text-text-muted list-none p-0">
            <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-school"></span> NDPR/GDPR Compliant</li>
            <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-it"></span> 100+ Learners Trained</li>
            <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-corporate"></span> 98% Client Satisfaction</li>
            <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-border-strong"></span> Lagos-Based, Africa-Focused</li>
          </ul>
        </div>

        <div appAnimateOnScroll [animateDelay]="180" class="relative group">
          <div class="card-base p-3 sm:p-4 bg-bg-white relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-school/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <img
              src="assets/images/home/hero-main.png"
              alt="Scalefort team and learner collaboration hero image"
              class="w-full h-[22rem] sm:h-[30rem] object-cover rounded-card grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              decoding="async"
            />
          </div>

          <div class="hidden sm:block absolute -left-8 -bottom-10 w-44 md:w-56 card-base p-2 bg-bg-white shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <img
              src="assets/images/home/hero-secondary-left.png"
              alt="Scalefort learner and mentor collaboration scene"
              class="w-full h-28 md:h-34 object-cover rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="hidden md:block absolute -right-8 -top-12 w-48 md:w-52 card-base p-2 bg-bg-white shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <img
              src="assets/images/home/hero-secondary-right.png"
              alt="Scalefort team delivery and engineering scene"
              class="w-full h-28 object-cover rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeHeroComponent {}
