import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CourseEnrollmentComponent } from '../course-enrollment/course-enrollment.component';
import { CourseInterest, DepartmentType } from '../../../shared/models/application-inquiry.model';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-cybersecurity',
  template: `
    <div>
      <!-- Hero Section -->
      <section class="relative h-[450px] bg-gradient-to-r from-blue-900 to-gray-900 text-center overflow-visible">
        <div class="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" 
            alt="Cybersecurity infrastructure"
            class="w-full h-full object-cover"
          >
        </div>
        
        <div class="max-w-7xl mx-auto px-4 pt-20">
          <h1 class="text-5xl font-bold text-white mb-6">Cybersecurity Professional</h1>
          <p class="text-xl text-center text-blue-100">
            Master cybersecurity defenses, ethical hacking, and risk management for modern enterprises.
          </p>
        </div>

        <!-- Course Info Box -->
        <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-10 border-t-4 border-gradient-to-r from-blue-500 to-gray-600 transition-transform duration-300 hover:scale-105">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Program Length</h3>
                <p class="text-lg font-semibold text-gray-900">16 Weeks</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Start Date</h3>
                <p class="text-lg font-semibold text-gray-900">May 10th, 2025</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Location</h3>
                <p class="text-lg font-semibold text-gray-900">Virtual Cyber Range</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Fee</h3>
                <p class="text-lg font-semibold text-gray-900">$450</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Certification</h3>
                <p class="text-lg font-semibold text-gray-900">Security+, CEH Prep</p>
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
                    [class.text-blue-600]="currentSection === section.id"
                    (click)="scrollToSection(section.id, $event)"
                  >
                    <span class="relative z-10">{{ section.title }}</span>
                    <span class="absolute inset-0 bg-[url('https://source.unsplash.com/random/200x100?security')] 
                             bg-cover bg-center opacity-10 group-hover:opacity-60 transition-opacity duration-300">
                    </span>
                    <span class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg">
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
      
            <div class="w-full md:w-auto text-center">
              <a 
                class="inline-block bg-gradient-to-r from-blue-600 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                (click)="openErollCourse()"
              >
                Start Cybersecurity Journey
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
              Develop expertise in cybersecurity principles, threat detection, and defense strategies. 
              Learn to protect systems, networks, and data from digital attacks through hands-on labs 
              and real-world scenarios.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-gray-50 p-6 rounded-lg">
                <iframe class="w-full h-64 md:h-80 rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/cybersecurity_video_id" 
                  frameborder="0" allowfullscreen>
                </iframe>
              </div>

              <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Core Competencies</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Threat Analysis & Defense
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Ethical Hacking Techniques
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Network Security
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Security Compliance
                    </li>
                  </ul>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Key Features</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Cyber Range Simulations
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Red Team/Blue Team Exercises
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Certification Preparation
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Industry-Standard Tools
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
              <!-- Security Fundamentals -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Security Foundations</h3>
                  <p>CIA triad, risk management, and security frameworks</p>
                </div>
              </div>

              <!-- Network Security -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Network Defense</h3>
                  <p>Firewalls, IDS/IPS, VPNs, and secure protocols</p>
                </div>
              </div>

              <!-- Ethical Hacking -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Ethical Hacking</h3>
                  <p>Penetration testing methodologies and tools</p>
                </div>
              </div>

              <!-- Cryptography -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-purple-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Cryptography</h3>
                  <p>Encryption algorithms and PKI infrastructure</p>
                </div>
              </div>

              <!-- Cloud Security -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Cloud Security</h3>
                  <p>Securing AWS, Azure, and hybrid environments</p>
                </div>
              </div>

              <!-- Incident Response -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Incident Response</h3>
                  <p>Forensics, malware analysis, and recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Career Outcomes -->
      <div id="careers" class="mb-16 scroll-mt-32 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Cybersecurity Career Paths</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-800">Security Roles</h3>
              </div>
              <ul class="space-y-4 text-gray-600">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Security Analyst
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Penetration Tester
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Security Engineer
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  SOC Specialist
                </li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-gray-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-800">Career Support</h3>
              </div>
              <ul class="space-y-4 text-gray-600">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Security Portfolio Development
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Certification Exam Prep
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Capture The Flag Events
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  Security Employer Network
                </li>
              </ul>
            </div>
          </div>

          <!-- Stats Banner -->
          <div class="mt-12 bg-gradient-to-r from-blue-600 to-gray-600 text-white p-8 rounded-2xl text-center">
            <p class="text-xl font-semibold">92% job placement rate with hands-on cyber range experience</p>
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
export class CybersecurityComponent implements OnInit {
  sections: CourseSection[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'requirements', title: 'Requirements' },
    { id: 'outline', title: 'Curriculum' },
    { id: 'cost', title: 'Investment' },
    { id: 'careers', title: 'Careers' },
    { id: 'scholarship', title: 'Funding' }
  ];

  currentSection = 'overview';

  constructor(private dialogService: DialogService) { }

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

  openErollCourse() {
    const ref: DynamicDialogRef = this.dialogService.open(CourseEnrollmentComponent, {
      header: 'Enroll in Cybersecurity Program',
      width: '35vw',
      breakpoints: {
        '960px': '65vw',
        '640px': '90vw'
      },
      modal: true,
      data: {
        departmentType: DepartmentType.TechSchool,
        courseInterest: CourseInterest.CyberSecurity
      },
      closable: true
    });
  }
}