import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CourseEnrollmentComponent } from '../course-enrollment/course-enrollment.component';
import { CourseInterest, DepartmentType } from '../../../shared/models/application-inquiry.model';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-uiux',
  template: `
    <div>
      <!-- Hero Section -->
      <section class="relative h-[450px] bg-gradient-to-r from-purple-900 to-pink-700 text-center overflow-visible">
        <div class="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166" 
            alt="UI/UX design workspace"
            class="w-full h-full object-cover"
          >
        </div>
        
        <div class="max-w-7xl mx-auto px-4 pt-20">
          <h1 class="text-5xl font-bold text-white mb-6">UI/UX Design Mastery</h1>
          <p class="text-xl text-center text-purple-100">
            Craft intuitive digital experiences through user-centered design principles and modern tools.
          </p>
        </div>

        <!-- Course Info Box -->
        <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-10 border-t-4 border-gradient-to-r from-purple-500 to-pink-600 transition-transform duration-300 hover:scale-105">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Program Length</h3>
                <p class="text-lg font-semibold text-gray-900">12 Weeks</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Start Date</h3>
                <p class="text-lg font-semibold text-gray-900">June 5th, 2025</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Location</h3>
                <p class="text-lg font-semibold text-gray-900">Design Studio</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Fee</h3>
                <p class="text-lg font-semibold text-gray-900">$300</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">Certification</h3>
                <p class="text-lg font-semibold text-gray-900">Figma, Adobe XD</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-sm text-gray-500 font-medium">School</h3>
                <p class="text-lg font-semibold text-gray-900">ScaleFort Creative</p>
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
                class="inline-block bg-gradient-to-r from-purple-600 to-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-pink-800 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                (click)="openErollCourse()"
              >
                Begin Design Journey
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
              Master the art and science of creating compelling user interfaces and seamless user experiences. 
              Learn industry-standard tools, design thinking methodologies, and how to create digital products 
              that users love.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-gray-50 p-6 rounded-lg">
                <iframe class="w-full h-64 md:h-80 rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/uiux_video_id" 
                  frameborder="0" allowfullscreen>
                </iframe>
              </div>

              <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Core Competencies</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      User Research & Personas
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Wireframing & Prototyping
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Interaction Design
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Usability Testing
                    </li>
                  </ul>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Key Features</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Real Client Projects
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Design System Creation
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Portfolio Development
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Industry Mentorship
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
              <!-- Design Thinking -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-purple-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Design Thinking</h3>
                  <p>User empathy, ideation, and problem-solving frameworks</p>
                </div>
              </div>

              <!-- UI Principles -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">UI Principles</h3>
                  <p>Visual hierarchy, typography, and color theory</p>
                </div>
              </div>

              <!-- UX Research -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">UX Research</h3>
                  <p>User interviews, surveys, and usability studies</p>
                </div>
              </div>

              <!-- Figma Mastery -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Figma Mastery</h3>
                  <p>Components, auto-layout, and prototyping</p>
                </div>
              </div>

              <!-- Interaction Design -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Interaction Design</h3>
                  <p>Micro-interactions and animation principles</p>
                </div>
              </div>

              <!-- Design Systems -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Design Systems</h3>
                  <p>Creating scalable UI libraries and documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Career Outcomes -->
      <div id="careers" class="mb-16 scroll-mt-32 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Design Career Paths</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-800">Design Roles</h3>
              </div>
              <ul class="space-y-4 text-gray-600">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  UI Designer
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  UX Researcher
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Product Designer
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Interaction Designer
                </li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center mb-6">
                <div class="bg-pink-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-800">Career Support</h3>
              </div>
              <ul class="space-y-4 text-gray-600">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Portfolio Reviews
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Design Challenges
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Case Study Development
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Design Community Access
                </li>
              </ul>
            </div>
          </div>

          <!-- Stats Banner -->
          <div class="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
            <p class="text-xl font-semibold">89% of graduates land design roles within 3 months</p>
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
export class UiUxComponent implements OnInit {
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
      header: 'Enroll in UI/UX Design Program',
      width: '35vw',
      breakpoints: {
        '960px': '65vw',
        '640px': '90vw'
      },
      modal: true,
      data: {
        departmentType: DepartmentType.TechSchool,
        courseInterest: CourseInterest.ProductDesign
      },
      closable: true
    });
  }
}