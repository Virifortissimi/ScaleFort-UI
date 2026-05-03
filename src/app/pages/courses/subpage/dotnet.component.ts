import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-dotnet-detail',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <!-- Hero Section -->
      <section appAnimateOnScroll class="section-hero bg-bg-white text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

        <div class="container-base max-w-5xl">
          <p class="overline mb-4 inline-flex items-center rounded-pill border border-violet-100 bg-violet-50/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600 shadow-sm">
            Tech School Course
          </p>
          <h1 class="type-display text-text-primary mb-6 tracking-tight">Enterprise Development with .NET</h1>
          <p class="type-body-l text-text-muted max-w-2xl mx-auto leading-relaxed">
            Master C# and ASP.NET Core to build scalable enterprise applications with cloud integration.
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
                      [class.text-violet-600]="currentSection === section.id"
                      [class.bg-violet-50]="currentSection === section.id"
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
                href="#enroll"
                class="btn-primary btn-sm no-underline"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Updated Overview Section -->
      <section appAnimateOnScroll class="section-compact">
        <div class="max-w-6xl mx-auto px-4">
          <div id="overview" class="mb-16 scroll-mt-32">
            <h2 class="text-3xl font-bold mb-6">Program Overview</h2>
            <p class="text-text-body mb-6">
              Become an expert in enterprise-grade application development using Microsoft's .NET ecosystem. 
              Learn to build secure, high-performance backend systems with C# and cloud technologies.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-bg-subtle p-6 rounded-lg">
                <img
                  class="w-full h-64 md:h-80 rounded-lg shadow-lg object-cover"
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80"
                  alt=".NET backend architecture planning on whiteboard and laptop"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="space-y-6">
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Core Competencies</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      C# & .NET Fundamentals
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      ASP.NET Core Web APIs
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      Entity Framework Core
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      Cloud Integration
                    </li>
                  </ul>
                </div>
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Key Features</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Azure DevOps Integration
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Microservices Architecture
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Enterprise Patterns
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
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

      <!-- Updated Course Outline -->
      <section id="outline" class="scroll-mt-32 section bg-bg-subtle">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10">
            <h2 class="text-3xl font-bold text-center text-text-primary mb-10">Curriculum Breakdown</h2>
            <div class="grid md:grid-cols-2 gap-8 text-text-body">
              <!-- .NET Modules -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03a7.003 7.003 0 00-4.08 11.68l-2.11 2.11A9.955 9.955 0 012.05 13H5.03c1.18 2.97 4.07 5 7.47 5 4.52 0 8.2-3.7 8.2-8.25v-.23l2.35-2.35A9.963 9.963 0 0022 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.21.72-4.26 1.94-5.94L8 9.72V7.65L3.41 3.05 2 4.46l4.05 4.05h2.07l-1.5-1.51"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">C# Mastery</h3>
                  <p>Advanced language features, LINQ, and asynchronous programming</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-rose-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2v-7M13 2v7h7M16 14H8m8 4H8m2-8H8"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">ASP.NET Core</h3>
                  <p>Build RESTful APIs with middleware and dependency injection</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Entity Framework</h3>
                  <p>ORM patterns, migrations, and SQL Server integration</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Security</h3>
                  <p>JWT, OAuth2, and Identity Server implementation</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Cloud Integration</h3>
                  <p>Azure services deployment and serverless architecture</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-amber-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 13h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1zm10-8h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V6a1 1 0 011-1zM4 4h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm14 2h2m0 0h2m-2 0v2m0-2V4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Microservices</h3>
                  <p>Building distributed systems with Docker and Kubernetes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Remaining sections (Cost, Careers, Scholarship) keep similar structure but update content -->
      <!-- ... (other sections with .NET-focused content) ... -->
      
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
export class DotnetComponent implements OnInit {
  sections: CourseSection[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'outline', title: 'Curriculum' },
    { id: 'cost', title: 'Investment' },
    { id: 'careers', title: 'Careers' },
    { id: 'scholarship', title: 'Funding' }
  ];

  currentSection = 'overview';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
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






