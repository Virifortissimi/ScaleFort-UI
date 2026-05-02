import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-frontend-detail',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <!-- Hero Section -->
      <section appAnimateOnScroll class="section-hero bg-bg-white text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

        <div class="container-base max-w-5xl">
          <p class="overline mb-4 inline-flex items-center rounded-pill border border-rose-100 bg-rose-50/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-600 shadow-sm">
            Tech School Course
          </p>
          <h1 class="type-display text-text-primary mb-6 tracking-tight">Modern Frontend Development</h1>
          <p class="type-body-l text-text-muted max-w-2xl mx-auto leading-relaxed">
            Master cutting-edge frontend technologies and build responsive, interactive web applications.
          </p>
        </div>
      </section>

      <!-- Navigation Bar -->
      <section appAnimateOnScroll class="relative z-10">
        <div class="container-base max-w-5xl">
          <div class="card-base flex flex-col md:flex-row justify-between items-center py-3 px-5 gap-4">
            <nav class="w-full md:w-auto">
              <ul class="flex flex-wrap gap-1">
                @for (section of sections; track section.id) {
                  <li>
                    <a
                      [href]="'#' + section.id"
                      class="block px-3 py-2 rounded-lg text-sm font-medium text-text-body
                             transition-colors duration-300 hover:text-text-primary hover:bg-bg-subtle"
                      [class.text-rose-600]="currentSection === section.id"
                      [class.bg-rose-50]="currentSection === section.id"
                      (click)="scrollToSection(section.id, $event)"
                    >
                      {{ section.title }}
                    </a>
                  </li>
                }
              </ul>
            </nav>

            <div class="w-full md:w-auto text-center">
              <a
                href="https://paystack.com/pay/scalefort-frontend"
                target="_blank"
                class="btn-primary btn-sm no-underline"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section appAnimateOnScroll class="section-compact">
        <div class="max-w-6xl mx-auto px-4">
          <div id="overview" class="mb-16 scroll-mt-32">
            <h2 class="text-3xl font-bold mb-6">Overview</h2>
            <p class="text-text-body mb-6">
              Become a proficient frontend developer mastering modern JavaScript, React, and cutting-edge tools. Learn to build
              responsive, accessible, and high-performance web applications.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-bg-subtle p-6 rounded-lg">
                <img
                  class="w-full h-64 md:h-80 rounded-lg shadow-lg object-cover"
                  src="https://images.unsplash.com/photo-1581291518062-c12149470a21?auto=format&fit=crop&w=1200&q=80"
                  alt="Frontend developer building a responsive interface"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div class="space-y-6">
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">What You'll Learn</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Modern JavaScript (ES6+)
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      React & Next.js Framework
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      State Management (Redux)
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Responsive Web Design
                    </li>
                  </ul>
                </div>
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Course Highlights</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Component-Driven Development
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      UI/UX Best Practices
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Cross-Browser Compatibility
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Performance Optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Outline Section -->
      <section id="outline" class="scroll-mt-32 section bg-bg-subtle">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10">
            <h2 class="text-3xl font-bold text-center text-text-primary mb-10">Course Modules</h2>

            <div class="grid md:grid-cols-2 gap-8 text-text-body">
              <!-- HTML/CSS Module -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-rose-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">HTML5 & CSS3</h3>
                  <p>Semantic markup, Flexbox, Grid, and responsive design principles</p>
                </div>
              </div>

              <!-- JavaScript Module -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03a7.003 7.003 0 00-4.08 11.68l-2.11 2.11A9.955 9.955 0 012.05 13H5.03c1.18 2.97 4.07 5 7.47 5 4.52 0 8.2-3.7 8.2-8.25v-.23l2.35-2.35A9.963 9.963 0 0022 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.21.72-4.26 1.94-5.94L8 9.72V7.65L3.41 3.05 2 4.46l4.05 4.05h2.07l-1.5-1.51"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Modern JavaScript</h3>
                  <p>ES6+ features, Async programming, and functional patterns</p>
                </div>
              </div>

              <!-- React Module -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20M2 5h5l2 4 2-4h5l2 4 2-4h5l2 4 2-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">React Framework</h3>
                  <p>Components, Hooks, Context API, and React Router</p>
                </div>
              </div>

              <!-- State Management Module -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">State Management</h3>
                  <p>Redux Toolkit, Context API, and Zustand</p>
                </div>
              </div>

              <!-- Testing Module -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2v-7M13 2v7h7M16 14H8m8 4H8m2-8H8"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Testing</h3>
                  <p>Jest, React Testing Library, and Cypress</p>
                </div>
              </div>

              <!-- Performance Module -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Performance Optimization</h3>
                  <p>Lazy loading, code splitting, and bundle analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Career Outcomes -->
      <div id="careers" class="mb-16 scroll-mt-32 section bg-bg-subtle">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl font-bold text-text-primary mb-12 text-center">Frontend Career Paths</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-rose-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-text-primary">Frontend Roles</h3>
              </div>
              <ul class="space-y-4 text-text-body">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  UI Developer
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  React Specialist
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  Frontend Architect
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  UX Engineer
                </li>
              </ul>
            </div>

            <!-- Keep other sections similar with frontend-focused content -->
          </div>
        </div>
      </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .scroll-mt-32 {
      scroll-margin-top: 8rem;
    }
  `]
})
export class FrontendComponent implements OnInit {
  sections: CourseSection[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'requirements', title: 'Requirements' },
    { id: 'outline', title: 'Course Outline' },
    { id: 'cost', title: 'Cost' },
    { id: 'careers', title: 'Career Paths' },
    { id: 'scholarship', title: 'Scholarship' }
  ];

  currentSection = 'overview';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Same scroll spy functionality
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.currentSection = entry.target.id;
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    this.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}





