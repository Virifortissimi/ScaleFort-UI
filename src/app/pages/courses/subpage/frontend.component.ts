import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CourseEnrollmentComponent } from '../course-enrollment/course-enrollment.component';
import { CourseInterest, DepartmentType } from '../../../shared/models/application-inquiry.model';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-frontend',
  template: `
    <div>
      <!-- Hero Section -->
      <section class="relative h-[450px] bg-gradient-to-r from-purple-900 to-indigo-900 text-center overflow-visible">
        <div class="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
            alt="Frontend development"
            class="w-full h-full object-cover"
          >
        </div>
        
        <div class="max-w-7xl mx-auto px-4 pt-20">
          <h1 class="text-5xl font-bold text-white mb-6">Modern Frontend Development</h1>
          <p class="text-xl text-center text-purple-100">
            Master cutting-edge frontend technologies and build responsive, interactive web applications.
          </p>
        </div>

        <!-- Course Info Box -->
        <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-10 border-t-4 border-gradient-to-r from-purple-500 to-pink-600 transition-transform duration-300 hover:scale-105">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
              <!-- Keep same info structure as before, update if needed -->
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
                    [class.text-purple-600]="currentSection === section.id"
                    (click)="scrollToSection(section.id, $event)"
                  >
                    <span class="relative z-10">{{ section.title }}</span>
                    <span class="absolute inset-0 bg-[url('https://source.unsplash.com/random/200x100?design')] 
                             bg-cover bg-center opacity-10 group-hover:opacity-60 transition-opacity duration-300">
                    </span>
                    <span class="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg">
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
      
            <div class="w-full md:w-auto text-center">
              <a 
                class="inline-block bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                (click)="openErollCourse()"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16">
        <div class="max-w-6xl mx-auto px-4">
          <div id="overview" class="mb-16 scroll-mt-32">
            <h2 class="text-3xl font-bold mb-6">Overview</h2>
            <p class="text-gray-600 mb-6">
              Become a proficient frontend developer mastering modern JavaScript, React, and cutting-edge tools. Learn to build
              responsive, accessible, and high-performance web applications.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-gray-50 p-6 rounded-lg">
                <iframe class="w-full h-64 md:h-80 rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/frontend_video_id" 
                  frameborder="0" allowfullscreen>
                </iframe>
              </div>

              <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">What You'll Learn</h3>
                  <ul class="space-y-2 text-gray-600">
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
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Course Highlights</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Component-Driven Development
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      UI/UX Best Practices
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Cross-Browser Compatibility
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section id="outline" class="scroll-mt-32 py-20 bg-gradient-to-r from-white via-gray-50 to-white">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Course Modules</h2>

            <div class="grid md:grid-cols-2 gap-8 text-gray-700">
              <!-- HTML/CSS Module -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-purple-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">HTML5 & CSS3</h3>
                  <p>Semantic markup, Flexbox, Grid, and responsive design principles</p>
                </div>
              </div>

              <!-- JavaScript Module -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03a7.003 7.003 0 00-4.08 11.68l-2.11 2.11A9.955 9.955 0 012.05 13H5.03c1.18 2.97 4.07 5 7.47 5 4.52 0 8.2-3.7 8.2-8.25v-.23l2.35-2.35A9.963 9.963 0 0022 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.21.72-4.26 1.94-5.94L8 9.72V7.65L3.41 3.05 2 4.46l4.05 4.05h2.07l-1.5-1.51"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Modern JavaScript</h3>
                  <p>ES6+ features, Async programming, and functional patterns</p>
                </div>
              </div>

              <!-- React Module -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20M2 5h5l2 4 2-4h5l2 4 2-4h5l2 4 2-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">React Framework</h3>
                  <p>Components, Hooks, Context API, and React Router</p>
                </div>
              </div>

              <!-- State Management Module -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">State Management</h3>
                  <p>Redux Toolkit, Context API, and Zustand</p>
                </div>
              </div>

              <!-- Testing Module -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2v-7M13 2v7h7M16 14H8m8 4H8m2-8H8"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Testing</h3>
                  <p>Jest, React Testing Library, and Cypress</p>
                </div>
              </div>

              <!-- Performance Module -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
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
      <div id="careers" class="mb-16 scroll-mt-32 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Frontend Career Paths</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-800">Frontend Roles</h3>
              </div>
              <ul class="space-y-4 text-gray-600">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  UI Developer
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  React Specialist
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Frontend Architect
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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

  constructor(private dialogService: DialogService) { }

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

  openErollCourse() {
    const ref: DynamicDialogRef = this.dialogService.open(CourseEnrollmentComponent, {
      header: 'Enroll in Frontend Program',
      width: '35vw',
      breakpoints: {
        '960px': '65vw',
        '640px': '90vw'
      },
      modal: true,
      data: {
        departmentType: DepartmentType.TechSchool,
        courseInterest: CourseInterest.FrontendDevelopment
      },
      closable: true
    });
  }
}