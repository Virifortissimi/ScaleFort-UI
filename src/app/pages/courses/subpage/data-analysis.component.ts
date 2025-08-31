import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CourseEnrollmentComponent } from '../course-enrollment/course-enrollment.component';
import { CourseInterest, DepartmentType } from '../../../shared/models/application-inquiry.model';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-data-analysis',
  template: `
    <div>
      <!-- Hero Section with Overlay Info Box -->
      <section class="relative min-h-[500px] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-center overflow-visible">
        <!-- Background with overlay -->
        <div class="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550439062-609e1531270e" 
            alt="Developer working"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/70 to-indigo-900/80"></div>
        </div>
        
        <!-- Floating elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-0 top-20 left-20"></div>
          <div class="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000 bottom-20 right-20"></div>
          <div class="absolute w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-float animation-delay-4000 top-1/2 left-1/3"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-20">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Professional Certification Program
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in [animation-delay:200ms]">
            Data Analysis <br class="hidden md:block" />
            & <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"> Visualization</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in [animation-delay:400ms]">
            Master data analysis and visualization techniques to derive insights from complex datasets.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:600ms]">
            <a class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl" (click)="openErollCourse()">
              Enroll Now
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a href="/courses/data-analyst#outline" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all transform hover:-translate-y-1">
              View Curriculum
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Course Info Box -->
        <div class="relative z-20 -mb-24 px-4 animate-fade-in [animation-delay:800ms]">
          <div class="max-w-6xl mx-auto">
            <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-t-4 border-purple-600 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                <!-- Program Length -->
                <div class="text-center group">
                  <div class="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-sm text-gray-500 font-medium mb-1">Program Length</h3>
                  <p class="text-lg font-semibold text-gray-900">24 Weeks</p>
                </div>
                
                <!-- Start Date -->
                <div class="text-center group">
                  <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 class="text-sm text-gray-500 font-medium mb-1">Start Date</h3>
                  <p class="text-lg font-semibold text-gray-900">October 25, 2025</p>
                </div>
                
                <!-- Skill Level -->
                <div class="text-center group">
                  <div class="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 class="text-sm text-gray-500 font-medium mb-1">Skill Level</h3>
                  <p class="text-lg font-semibold text-gray-900">Intermediate</p>
                </div>
                
                <!-- Fee -->
                <div class="text-center group">
                  <div class="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-colors">
                    <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-sm text-gray-500 font-medium mb-1">Program Fee</h3>
                  <p class="text-lg font-semibold text-gray-900">₦300,000</p>
                  <p class="text-xs text-green-600 font-medium">Payment plans available</p>
                </div>
                
                <!-- Certification -->
                <div class="text-center group">
                  <div class="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 class="text-sm text-gray-500 font-medium mb-1">Certification</h3>
                  <p class="text-lg font-semibold text-gray-900">Yes upon completion</p>
                </div>
                
                <!-- Platform -->
                <div class="text-center group">
                  <div class="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                    <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 class="text-sm text-gray-500 font-medium mb-1">School</h3>
                  <p class="text-lg font-semibold text-gray-900">Scalefort School</p>
                </div>
              </div>
              
              <!-- Additional info -->
              <div class="mt-8 pt-6 border-t border-gray-100 text-center">
                <p class="text-sm text-gray-500">
                  <span class="inline-flex items-center mx-2">
                    <svg class="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hands-on projects
                  </span>
                  <span class="inline-flex items-center mx-2">
                    <svg class="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Career support
                  </span>
                  <span class="inline-flex items-center mx-2">
                    <svg class="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Flexible scheduling
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation Bar -->
      <section class="relative z-10 mt-48">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center py-4 space-y-6 md:space-y-0 bg-white/70 backdrop-blur-md shadow-md rounded-2xl px-6">
            <nav class="w-full md:w-auto">
              <ul class="flex flex-wrap gap-4 md:gap-6">
                <li *ngFor="let section of sections" class="group relative overflow-hidden rounded-lg">
                  <a 
                    [href]="'#' + section.id"
                    class="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 
                           transition-colors duration-300 hover:text-white"
                    [class.text-green-600]="currentSection === section.id"
                    (click)="scrollToSection(section.id, $event)"
                  >
                    <span class="relative z-10">{{ section.title }}</span>
                    <span class="absolute inset-0 bg-[url('https://source.unsplash.com/random/200x100?data')] 
                             bg-cover bg-center opacity-10 group-hover:opacity-60 transition-opacity duration-300">
                    </span>
                    <span class="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg">
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
      
            <div class="w-full md:w-auto text-center">
              <a
                class="inline-block bg-gradient-to-r from-green-600 to-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-green-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                (click)="openErollCourse()"
              >
                Start Analyzing Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Content Sections -->
      <section class="py-16 md:py-24 bg-gradient-to-br from-gray-50/50 to-white/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Overview -->
          <div id="overview" class="mb-16 scroll-mt-32">
            <!-- Header -->
            <div class="text-center mb-12">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Course <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">Overview</span>
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                This comprehensive Python Backend Development course is designed to take you from basics to advanced concepts
                in web development using Python. You'll learn how to build robust, scalable web applications using modern
                frameworks and industry best practices.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <!-- <div class="relative group">
                <div class="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative bg-white p-2 rounded-2xl shadow-lg">
                  <div class="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                    <div class="w-full h-full bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center relative">
                      <div class="text-center text-white p-8">
                        <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Course Introduction</h3>
                        <p class="text-blue-200">Watch our overview video</p>
                      </div>
                      <iframe class="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/your_video_id" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div> -->

                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div class="flex items-center mb-6">
                    <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">What You'll Learn</h3>
                  </div>
                  <ul class="space-y-4">
                    <li class="flex items-start p-3 bg-green-50/50 rounded-lg group hover:bg-green-100 transition-colors">
                      <svg class="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 class="font-medium text-gray-900">Data Wrangling with Python</h4>
                        <p class="text-sm text-gray-600 mt-1">Clean and prepare data for analysis using Python libraries</p>
                      </div>
                    </li>
                    <li class="flex items-start p-3 bg-green-50/50 rounded-lg group hover:bg-green-100 transition-colors">
                      <svg class="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 class="font-medium text-gray-900">SQL for Data Analysis</h4>
                        <p class="text-sm text-gray-600 mt-1">Analyze and visualize data using SQL queries</p>
                      </div>
                    </li>
                    <li class="flex items-start p-3 bg-green-50/50 rounded-lg group hover:bg-green-100 transition-colors">
                      <svg class="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 class="font-medium text-gray-900">Statistical Analysis</h4>
                        <p class="text-sm text-gray-600 mt-1">Learn statistical methods and data visualization techniques</p>
                      </div>
                    </li>
                    <li class="flex items-start p-3 bg-green-50/50 rounded-lg group hover:bg-green-100 transition-colors">
                      <svg class="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 class="font-medium text-gray-900">Data Storytelling</h4>
                        <p class="text-sm text-gray-600 mt-1">Create RESTful APIs and integrate third-party services</p>
                      </div>
                    </li>
                  </ul>
                </div>
              <!-- Text Content -->
              <div class="space-y-8">
                <!-- What You'll Learn -->

                <!-- Course Highlights -->
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div class="flex items-center mb-6">
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">Course Highlights</h3>
                  </div>
                  <ul class="space-y-4">
                    <li class="flex items-start p-3 bg-blue-50/50 rounded-lg group hover:bg-blue-100 transition-colors">
                      <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 class="font-medium text-gray-900">Live Online Classes</h4>
                        <p class="text-sm text-gray-600 mt-1">Interactive sessions with expert instructors</p>
                      </div>
                    </li>
                    <li class="flex items-start p-3 bg-blue-50/50 rounded-lg group hover:bg-blue-100 transition-colors">
                      <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 class="font-medium text-gray-900">Hands-on Projects</h4>
                        <p class="text-sm text-gray-600 mt-1">Build real-world applications and portfolio pieces</p>
                      </div>
                    </li>
                    <li class="flex items-start p-3 bg-blue-50/50 rounded-lg group hover:bg-blue-100 transition-colors">
                      <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 class="font-medium text-gray-900">1-on-1 Mentorship</h4>
                        <p class="text-sm text-gray-600 mt-1">Personalized guidance from industry experts</p>
                      </div>
                    </li>
                    <li class="flex items-start p-3 bg-blue-50/50 rounded-lg group hover:bg-blue-100 transition-colors">
                      <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 class="font-medium text-gray-900">Career Support</h4>
                        <p class="text-sm text-gray-600 mt-1">Job placement assistance and interview preparation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Requirements -->
      <div class="max-w-6xl mx-auto px-6">
        <div class="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Requirements & Expectations</h2>

          <div class="grid md:grid-cols-2 gap-10 text-gray-700">
            <!-- Educational Background -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-blue-600 flex items-center">
                <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                </svg>
                Educational Background
              </h3>
              <p>You don’t need to have a certificate to apply for this diploma program. We expect anyone to take the program regardless of their educational qualifications.</p>
            </div>

            <!-- Language Proficiency -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-blue-600 flex items-center">
                <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 00-3 3L19 12l3-3-5.5-5.5z" />
                      <path d="M7 9h2" />
                      <path d="M5 12h6" />
                    </svg>
                    Language Proficiency
                  </h3>
                  <p>The course is conducted in English, so applicants must have a basic understanding of the English language to effectively engage with the curriculum and participate in discussions.</p>
                </div>

                <!-- Entrance Exam -->
                <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-blue-600 flex items-center">
                    <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 6v6l4 2" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    Assessment & Study Kit
                  </h3>
                  <p>All applicants will be required to take an entrance assessment. But don’t worry — we’ll provide a study kit to help you prepare.</p>
                  <p>The exam will evaluate your problem-solving skills, programming knowledge, and readiness for the program.</p>
                </div>

                <!-- Tools & Commitment -->
                <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-blue-600 flex items-center">
                    <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M9 12h6M9 16h6M9 8h6" />
                      <path d="M4 6h16v14H4z" />
                    </svg>
                    Tools & Commitment
                  </h3>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      A computer with a stable internet connection
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      Basic understanding of programming concepts (we’ll help you from there)
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      Dedication to practice 15–20 hours weekly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

      <!-- Course Outline -->
      <section id="outline" class="scroll-mt-32 py-20 bg-gradient-to-r from-white via-gray-50 to-white">
        <div class="max-w-6xl mx-auto px-6">
          <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Curriculum Breakdown</h2>

            <div class="grid md:grid-cols-2 gap-8 text-gray-700">
              <!-- Data Fundamentals -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Data Fundamentals</h3>
                  <p>Data types, structures, and basic statistics</p>
                </div>
              </div>

              <!-- Python for Data -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03a7.003 7.003 0 00-4.08 11.68l-2.11 2.11A9.955 9.955 0 012.05 13H5.03c1.18 2.97 4.07 5 7.47 5 4.52 0 8.2-3.7 8.2-8.25v-.23l2.35-2.35A9.963 9.963 0 0022 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.21.72-4.26 1.94-5.94L8 9.72V7.65L3.41 3.05 2 4.46l4.05 4.05h2.07l-1.5-1.51"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Python Analysis</h3>
                  <p>Pandas, NumPy, and data manipulation</p>
                </div>
              </div>

              <!-- SQL Module -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-purple-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">SQL Mastery</h3>
                  <p>Complex queries and database management</p>
                </div>
              </div>

              <!-- Visualization -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <svg class="w-8 h-8 text-teal-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-lg">Data Visualization</h3>
                  <p>Tableau, Power BI, and Matplotlib</p>
                </div>
              </div>

              <!-- Statistics -->
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
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
              <div class="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
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
        <div id="careers" class="scroll-mt-32 py-24 bg-gradient-to-br from-gray-50/80 to-white/80">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Launch Your <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">Tech Career</span>
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your skills into a rewarding career with our comprehensive training and dedicated support system.
              </p>
            </div>
            
            <!-- Cards Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              <!-- Potential Roles Card -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                <div class="flex items-center mb-8">
                  <div class="bg-blue-100 p-3 rounded-xl mr-5 group-hover:bg-blue-200 transition-colors">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-semibold text-gray-900">Career Paths</h3>
                </div>
                <ul class="space-y-5">
                  <li class="flex items-center p-3 bg-blue-50/50 rounded-lg group hover:bg-blue-100 transition-colors">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-medium text-gray-900">Data Analyst</h4>
                      <p class="text-sm text-gray-600">$80K - $120K average salary</p>
                    </div>
                  </li>
                  <li class="flex items-center p-3 bg-blue-50/50 rounded-lg group hover:bg-blue-100 transition-colors">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-medium text-gray-900">Business Intelligence Analyst</h4>
                      <p class="text-sm text-gray-600">$75K - $110K average salary</p>
                    </div>
                  </li>
                  <li class="flex items-center p-3 bg-blue-50/50 rounded-lg group hover:bg-blue-100 transition-colors">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-medium text-gray-900">Data Visualization Specialist</h4>
                      <p class="text-sm text-gray-600">$83K - $130K average salary</p>
                    </div>
                  </li>
                  <li class="flex items-center p-3 bg-blue-50/50 rounded-lg group hover:bg-blue-100 transition-colors">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-medium text-gray-900">Junior Data Scientist</h4>
                      <p class="text-sm text-gray-600">$78K - $115K average salary</p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Career Support Card -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                <div class="flex items-center mb-8">
                  <div class="bg-green-100 p-3 rounded-xl mr-5 group-hover:bg-green-200 transition-colors">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-semibold text-gray-900">Career Support</h3>
                </div>
                <ul class="space-y-5">
                  <li class="flex items-center p-3 bg-green-50/50 rounded-lg group hover:bg-green-100 transition-colors">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-medium text-gray-900">Professional Portfolio Reviews</h4>
                      <p class="text-sm text-gray-600">Showcase your best work</p>
                    </div>
                  </li>
                  <li class="flex items-center p-3 bg-green-50/50 rounded-lg group hover:bg-green-100 transition-colors">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-medium text-gray-900">Technical Interview Prep</h4>
                      <p class="text-sm text-gray-600">Mock interviews & coding challenges</p>
                    </div>
                  </li>
                  <li class="flex items-center p-3 bg-green-50/50 rounded-lg group hover:bg-green-100 transition-colors">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-medium text-gray-900">LinkedIn Optimization</h4>
                      <p class="text-sm text-gray-600">Get noticed by recruiters</p>
                    </div>
                  </li>
                  <li class="flex items-center p-3 bg-green-50/50 rounded-lg group hover:bg-green-100 transition-colors">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-medium text-gray-900">Job Search Strategy Sessions</h4>
                      <p class="text-sm text-gray-600">Personalized job hunting plan</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Stats Banner -->
            <div class="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 md:p-12 rounded-2xl text-center shadow-lg">
              <div class="max-w-4xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div>
                    <div class="text-4xl md:text-5xl font-bold mb-2">85%</div>
                    <p class="text-blue-100">Employment Rate</p>
                  </div>
                  <div>
                    <div class="text-4xl md:text-5xl font-bold mb-2">$83K</div>
                    <p class="text-blue-100">Average Starting Salary</p>
                  </div>
                  <div>
                    <div class="text-4xl md:text-5xl font-bold mb-2">6mo</div>
                    <p class="text-blue-100">Average Time to Hire</p>
                  </div>
                </div>
                <p class="text-lg mt-6 text-blue-100 font-medium">
                  85% of graduates land tech roles within 6 months of completion
                </p>
              </div>
            </div>

            <!-- Additional CTA -->
            <div class="text-center mt-12">
              <a (click)="openErollCourse()" class="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Start Your Career Journey
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
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
    { id: 'outline', title: 'Course Outline' },
    // { id: 'cost', title: 'Cost' },
    { id: 'careers', title: 'Career Outcomes' },
    // { id: 'scholarship', title: 'Scholarship' }
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
      header: 'Enroll in Data Analysis Program',
      width: '35vw',
      breakpoints: {
        '960px': '65vw',
        '640px': '90vw'
      },
      modal: true,
      data: {
        departmentType: DepartmentType.TechSchool,
        courseInterest: CourseInterest.DataAnalysis
      },
      closable: true
    });
  }
}