import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-cloud-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pt-16">
      <!-- Hero Section -->
      <section class="relative h-[450px] bg-gradient-to-r from-orange-900 to-blue-900 text-center overflow-visible">
        <div class="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
            alt="Cloud infrastructure"
            class="w-full h-full object-cover"
          >
        </div>
        
        <div class="max-w-7xl mx-auto px-4 pt-20">
          <h1 class="text-5xl font-bold text-white mb-6">Cloud Computing & DevOps</h1>
          <p class="text-xl text-center text-orange-100">
            Master cloud infrastructure and DevOps practices using AWS, Azure, and modern tooling.
          </p>
        </div>

        <!-- Course Info Box -->
        <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-10 border-t-4 border-gradient-to-r from-orange-500 to-blue-600 transition-transform duration-300 hover:scale-105">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Program Length</h3>
                <p class="text-lg font-semibold text-gray-900">14 Weeks</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Start Date</h3>
                <p class="text-lg font-semibold text-gray-900">April 15th, 2025</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Location</h3>
                <p class="text-lg font-semibold text-gray-900">Virtual Labs</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Fee</h3>
                <p class="text-lg font-semibold text-gray-900">$350</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Certification</h3>
                <p class="text-lg font-semibold text-gray-900">AWS, Azure Prep</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">School</h3>
                <p class="text-lg font-semibold text-gray-900">ScaleFort Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation Bar -->
      <section class="relative z-10 mt-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center py-4 space-y-6 md:space-y-0 bg-white/70 backdrop-blur-md shadow-md rounded-2xl px-6">
            <nav class="w-full md:w-auto">
              <ul class="flex flex-wrap gap-4 md:gap-6">
                <li *ngFor="let section of sections" class="group relative overflow-hidden rounded-lg">
                  <a 
                    [href]="'#' + section.id"
                    class="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 
                           transition-colors duration-300 hover:text-white"
                    [class.text-orange-600]="currentSection === section.id"
                    (click)="scrollToSection(section.id, $event)"
                  >
                    <span class="relative z-10">{{ section.title }}</span>
                    <span class="absolute inset-0 bg-[url('https://source.unsplash.com/random/200x100?cloud')] 
                             bg-cover bg-center opacity-10 group-hover:opacity-60 transition-opacity duration-300">
                    </span>
                    <span class="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg">
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
      
            <div class="w-full md:w-auto text-center">
              <a 
                href="https://paystack.com/pay/scalefort-cloud"
                target="_blank"
                class="inline-block bg-gradient-to-r from-orange-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-orange-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
              >
                Launch Cloud Career
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16">
        <div class="max-w-6xl mx-auto px-4">
          <div id="overview" class="mb-16 scroll-mt-32">
            <h2 class="text-3xl font-bold mb-6">Course Overview</h2>
            <p class="text-gray-600 mb-6">
              Gain expertise in cloud architecture, infrastructure automation, and DevOps methodologies. Learn to deploy,
              manage, and scale applications using leading cloud platforms and modern infrastructure tools.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-gray-50 p-6 rounded-lg">
                <iframe class="w-full h-64 md:h-80 rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/cloud_video_id" 
                  frameborder="0" allowfullscreen>
                </iframe>
              </div>

              <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Core Competencies</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Cloud Infrastructure Design
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      CI/CD Pipelines
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Container Orchestration
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Infrastructure as Code
                    </li>
                  </ul>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Key Features</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Hands-on Cloud Labs
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Multi-Cloud Environment
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Certification Prep
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section id="outline" class="scroll-mt-32 py-20 bg-gradient-to-r from-white via-gray-50 to-white">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Curriculum Modules</h2>

            <div class="grid md:grid-cols-2 gap-8 text-gray-700">
              <!-- Cloud Fundamentals -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Cloud Fundamentals</h3>
                  <p>IaaS vs PaaS vs SaaS, cloud economics, and deployment models</p>
                </div>
              </div>

              <!-- AWS Services -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">AWS Core Services</h3>
                  <p>EC2, S3, RDS, Lambda, and VPC configuration</p>
                </div>
              </div>

              <!-- Azure Basics -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-purple-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Azure Infrastructure</h3>
                  <p>Virtual Machines, Blob Storage, and Azure Active Directory</p>
                </div>
              </div>

              <!-- Infrastructure as Code -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">IaC with Terraform</h3>
                  <p>Automate cloud provisioning using HCL</p>
                </div>
              </div>

              <!-- Kubernetes -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20M2 5h5l2 4 2-4h5l2 4 2-4h5l2 4 2-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Kubernetes Orchestration</h3>
                  <p>Cluster management and container deployment</p>
                </div>
              </div>

              <!-- DevOps Pipeline -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
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
      <div id="careers" class="mb-16 scroll-mt-32 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Cloud Career Paths</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-orange-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-800">Cloud Roles</h3>
              </div>
              <ul class="space-y-4 text-gray-600">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Cloud Engineer
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  DevOps Specialist
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Solutions Architect
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Site Reliability Engineer
                </li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-800">Career Support</h3>
              </div>
              <ul class="space-y-4 text-gray-600">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Cloud Portfolio Development
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Certification Exam Prep
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Architecture Design Challenges
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Cloud Employer Connections
                </li>
              </ul>
            </div>
          </div>

          <!-- Stats Banner -->
          <div class="mt-12 bg-gradient-to-r from-orange-600 to-blue-600 text-white p-8 rounded-2xl text-center">
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