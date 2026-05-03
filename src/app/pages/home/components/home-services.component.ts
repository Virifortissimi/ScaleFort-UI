import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  template: `
    <section class="section bg-bg-subtle/30 relative z-[1]">
      <div class="dot-grid-section" aria-hidden="true"></div>
      <div class="container-base relative z-10">
        <div class="text-center mb-16" appAnimateOnScroll>
          <p class="overline mb-4">Our Expertise</p>
          <h2 class="type-h2 text-text-primary mb-6">Empowering Africa's Tech Ecosystem</h2>
          <p class="type-body text-text-muted max-w-3xl mx-auto leading-relaxed">
            Delivering comprehensive education, specialized training, and innovative digital solutions tailored for the African market.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Tech School -->
          <article 
            appAnimateOnScroll 
            [animateDelay]="100"
            class="card-base bg-bg-white p-10 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
          >
            <div class="w-14 h-14 rounded-2xl bg-accent-school/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-accent-school" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <p class="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-3">Education</p>
            <h3 class="type-h3 text-text-primary mb-4">Tech School</h3>
            <p class="type-body text-text-muted mb-8 flex-1">World-class tech education with practical training in engineering, design, and cybersecurity.</p>
            
            <ul class="space-y-4 mb-10 list-none p-0 text-sm text-text-muted font-medium">
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-school"></span> Advanced Learning Tracks</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-school"></span> Live Interactive Mentorship</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-school"></span> Guaranteed Internship Pathways</li>
            </ul>

            <a routerLink="/courses" class="text-xs font-bold uppercase tracking-widest text-accent-school no-underline inline-flex items-center gap-2 group/link border-t border-border-faint pt-6">
              Explore Courses
              <span class="transform group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </article>

          <!-- Corporate Training -->
          <article 
            appAnimateOnScroll 
            [animateDelay]="200"
            class="card-base bg-bg-white p-10 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
          >
            <div class="w-14 h-14 rounded-2xl bg-accent-it/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-accent-it" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p class="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-3">Enterprise</p>
            <h3 class="type-h3 text-text-primary mb-4">Corporate Training</h3>
            <p class="type-body text-text-muted mb-8 flex-1">Customized programs to upskill your workforce and drive measurable digital transformation.</p>
            
            <ul class="space-y-4 mb-10 list-none p-0 text-sm text-text-muted font-medium">
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-it"></span> Bespoke Team Curriculum</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-it"></span> Progress & Benchmarking</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-it"></span> Outcome-Driven Delivery</li>
            </ul>

            <a routerLink="/services" class="text-xs font-bold uppercase tracking-widest text-accent-it no-underline inline-flex items-center gap-2 group/link border-t border-border-faint pt-6">
              Upskill My Team
              <span class="transform group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </article>

          <!-- IT Services -->
          <article 
            appAnimateOnScroll 
            [animateDelay]="300"
            class="card-base bg-bg-white p-10 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
          >
            <div class="w-14 h-14 rounded-2xl bg-accent-corporate/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-accent-corporate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p class="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-3">Delivery</p>
            <h3 class="type-h3 text-text-primary mb-4">IT Services</h3>
            <p class="type-body text-text-muted mb-8 flex-1">End-to-end technology solutions to help your organization scale with resilient systems.</p>
            
            <ul class="space-y-4 mb-10 list-none p-0 text-sm text-text-muted font-medium">
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-corporate"></span> Custom Product Delivery</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-corporate"></span> Cloud & Systems Strategy</li>
              <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-accent-corporate"></span> Legacy Modernization</li>
            </ul>

            <a routerLink="/it-services" class="text-xs font-bold uppercase tracking-widest text-accent-corporate no-underline inline-flex items-center gap-2 group/link border-t border-border-faint pt-6">
              Start Project
              <span class="transform group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  `
})
export class HomeServicesComponent { }
