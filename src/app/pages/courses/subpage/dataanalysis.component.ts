import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-data-analysis-detail',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <!-- Hero Section -->
      <section appAnimateOnScroll class="section-hero bg-bg-white text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

        <div class="container-base max-w-5xl">
          <p class="overline mb-4 inline-flex items-center rounded-pill border border-amber-100 bg-amber-50/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 shadow-sm">
            Tech School Course
          </p>
          <h1 class="type-display text-text-primary mb-6 tracking-tight">Data Analysis & Visualization</h1>
          <p class="type-body-l text-text-muted max-w-2xl mx-auto leading-relaxed">
            Transform raw data into actionable insights using modern analytical tools and techniques.
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
                      [class.text-amber-600]="currentSection === section.id"
                      [class.bg-amber-50]="currentSection === section.id"
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
                href="https://paystack.com/pay/scalefort-data"
                target="_blank"
                class="btn-primary btn-sm no-underline"
              >
                Start Analyzing Now
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
              Master the complete data analysis workflow from data collection to insight communication. Learn to use Python, SQL, 
              and visualization tools to turn complex datasets into clear business insights.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-bg-subtle p-6 rounded-lg">
                <img
                  class="w-full h-64 md:h-80 rounded-lg shadow-lg object-cover"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Data analyst reviewing KPI dashboards"
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
                      Data Wrangling with Python
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      SQL for Data Analysis
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Statistical Analysis
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Data Storytelling
                    </li>
                  </ul>
                </div>
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Course Highlights</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Real-World Case Studies
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Interactive Dashboard Building
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Machine Learning Basics
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Industry Best Practices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Outline -->
      <section id="outline" class="scroll-mt-32 section bg-bg-subtle">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10">
            <h2 class="text-3xl font-bold text-center text-text-primary mb-10">Curriculum Breakdown</h2>

            <div class="grid md:grid-cols-2 gap-8 text-text-body">
              <!-- Data Fundamentals -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Data Fundamentals</h3>
                  <p>Data types, structures, and basic statistics</p>
                </div>
              </div>

              <!-- Python for Data -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03a7.003 7.003 0 00-4.08 11.68l-2.11 2.11A9.955 9.955 0 012.05 13H5.03c1.18 2.97 4.07 5 7.47 5 4.52 0 8.2-3.7 8.2-8.25v-.23l2.35-2.35A9.963 9.963 0 0022 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.21.72-4.26 1.94-5.94L8 9.72V7.65L3.41 3.05 2 4.46l4.05 4.05h2.07l-1.5-1.51"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Python Analysis</h3>
                  <p>Pandas, NumPy, and data manipulation</p>
                </div>
              </div>

              <!-- SQL Module -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-rose-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">SQL Mastery</h3>
                  <p>Complex queries and database management</p>
                </div>
              </div>

              <!-- Visualization -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-amber-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Data Visualization</h3>
                  <p>Tableau, Power BI, and Matplotlib</p>
                </div>
              </div>

              <!-- Statistics -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Statistical Methods</h3>
                  <p>Hypothesis testing and regression analysis</p>
                </div>
              </div>

              <!-- Machine Learning -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">ML Foundations</h3>
                  <p>Predictive modeling with Scikit-learn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Career Outcomes -->
      <div id="careers" class="mb-16 scroll-mt-32 section bg-bg-subtle">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl font-bold text-text-primary mb-12 text-center">Data Career Opportunities</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-green-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-text-primary">Data Roles</h3>
              </div>
              <ul class="space-y-4 text-text-body">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Data Analyst
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Business Intelligence Analyst
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Data Visualization Specialist
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Junior Data Scientist
                </li>
              </ul>
            </div>

            <!-- Career Support Card -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-teal-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-text-primary">Career Support</h3>
              </div>
              <ul class="space-y-4 text-text-body">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Portfolio Project Reviews
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Technical Case Study Prep
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Data Interview Simulations
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Industry Networking Events
                </li>
              </ul>
            </div>
          </div>

          <!-- Stats Banner -->
          <div class="mt-12 card-base card-accent text-center">
            <p class="text-xl font-semibold">85% of graduates transition to data roles within 3 months</p>
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
export class DataAnalysisComponent implements OnInit {
  sections: CourseSection[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'requirements', title: 'Requirements' },
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





