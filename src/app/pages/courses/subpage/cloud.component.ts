import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-cloud-detail',
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
          <h1 class="type-display text-text-primary mb-6 tracking-tight">Cloud Computing & DevOps</h1>
          <p class="type-body-l text-text-muted max-w-2xl mx-auto leading-relaxed">
            Master cloud infrastructure and DevOps practices using AWS, Azure, and modern tooling.
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
                href="https://paystack.com/pay/scalefort-cloud"
                target="_blank"
                class="btn-primary btn-sm no-underline"
              >
                Launch Cloud Career
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section appAnimateOnScroll class="section-compact">
        <div class="max-w-6xl mx-auto px-4">
          <div id="overview" class="mb-16 scroll-mt-32">
            <h2 class="text-3xl font-bold mb-6">Course Overview</h2>
            <p class="text-text-body mb-6">
              Gain expertise in cloud architecture, infrastructure automation, and DevOps methodologies. Learn to deploy,
              manage, and scale applications using leading cloud platforms and modern infrastructure tools.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-bg-subtle p-6 rounded-lg">
                <img
                  class="w-full h-64 md:h-80 rounded-lg shadow-lg object-cover"
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
                  alt="Cloud engineer working on infrastructure dashboard"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div class="space-y-6">
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Core Competencies</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Cloud Infrastructure Design
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      CI/CD Pipelines
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Container Orchestration
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Infrastructure as Code
                    </li>
                  </ul>
                </div>
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Key Features</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Hands-on Cloud Labs
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Multi-Cloud Environment
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Certification Prep
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Real-world Scenarios
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
            <h2 class="text-3xl font-bold text-center text-text-primary mb-10">Curriculum Modules</h2>

            <div class="grid md:grid-cols-2 gap-8 text-text-body">
              <!-- Cloud Fundamentals -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-amber-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Cloud Fundamentals</h3>
                  <p>IaaS vs PaaS vs SaaS, cloud economics, and deployment models</p>
                </div>
              </div>

              <!-- AWS Services -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">AWS Core Services</h3>
                  <p>EC2, S3, RDS, Lambda, and VPC configuration</p>
                </div>
              </div>

              <!-- Azure Basics -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-rose-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Azure Infrastructure</h3>
                  <p>Virtual Machines, Blob Storage, and Azure Active Directory</p>
                </div>
              </div>

              <!-- Infrastructure as Code -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">IaC with Terraform</h3>
                  <p>Automate cloud provisioning using HCL</p>
                </div>
              </div>

              <!-- Kubernetes -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20M2 5h5l2 4 2-4h5l2 4 2-4h5l2 4 2-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Kubernetes Orchestration</h3>
                  <p>Cluster management and container deployment</p>
                </div>
              </div>

              <!-- DevOps Pipeline -->
              <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2v-7M13 2v7h7M16 14H8m8 4H8m2-8H8"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">CI/CD Pipelines</h3>
                  <p>Jenkins, GitHub Actions, and ArgoCD workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Career Outcomes -->
      <div id="careers" class="mb-16 scroll-mt-32 section bg-bg-subtle">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl font-bold text-text-primary mb-12 text-center">Cloud Career Paths</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-amber-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-text-primary">Cloud Roles</h3>
              </div>
              <ul class="space-y-4 text-text-body">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Cloud Engineer
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  DevOps Specialist
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Solutions Architect
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Site Reliability Engineer
                </li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-green-50 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-accent-school" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-text-primary">Career Support</h3>
              </div>
              <ul class="space-y-4 text-text-body">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Cloud Portfolio Development
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Certification Exam Prep
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Architecture Design Challenges
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Cloud Employer Connections
                </li>
              </ul>
            </div>
          </div>

          <!-- Stats Banner -->
          <div class="mt-12 card-base card-accent text-center">
            <p class="text-xl font-semibold">94% certification pass rate with 100% lab-based learning</p>
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
export class CloudComponent implements OnInit {
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





