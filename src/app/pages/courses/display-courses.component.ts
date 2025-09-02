import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-courses',
  template: `
    <div>
      <!-- Hero Section -->
       <section class="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden flex items-center">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float animation-delay-0 top-20 left-20"></div>
          <div class="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float animation-delay-2000 bottom-20 right-20"></div>
          <div class="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float animation-delay-4000 top-1/2 left-1/3"></div>
        </div>
        
        <!-- Grid Pattern -->
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0); background-size: 40px 40px;"></div>
        
        <!-- Floating particles -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particle" style="top:20%; left:10%; animation-delay: 0s"></div>
          <div class="absolute w-1 h-1 bg-white/40 rounded-full animate-float-particle" style="top:60%; left:80%; animation-delay: 2s"></div>
          <div class="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-float-particle" style="top:40%; left:30%; animation-delay: 4s"></div>
          <div class="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style="top:70%; left:50%; animation-delay: 1s"></div>
          <div class="absolute w-1.5 h-1.5 bg-white/25 rounded-full animate-float-particle" style="top:30%; left:70%; animation-delay: 3s"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div class="animate-fade-in">
              <div class="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8 animate-slide-up">
                <div class="w-5 h-5 mr-2">🎓</div>
                <span class="text-sm font-medium">Transform Your Future in Tech</span>
              </div>
              
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up" style="animation-delay: 200ms">
                Welcome to<br />
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">ScaleFort School</span>
              </h1>
              
              <p class="text-xl md:text-2xl mb-8 text-blue-100/90 leading-relaxed animate-slide-up" style="animation-delay: 400ms">
                Empowering Africa's next generation of tech leaders through world-class education, practical training, and career transformation.
              </p>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-6 mb-8 animate-slide-up" style="animation-delay: 600ms">
                <div class="flex items-center">
                  <div class="text-3xl md:text-4xl font-bold text-blue-300 mr-3">100+</div>
                  <div class="text-sm text-blue-100/80">Students<br>Trained</div>
                </div>
                <!-- <div class="flex items-center">
                  <div class="text-3xl md:text-4xl font-bold text-blue-300 mr-3">95%</div>
                  <div class="text-sm text-blue-100/80">Success Rate</div>
                </div>
                <div class="flex items-center">
                  <div class="text-3xl md:text-4xl font-bold text-blue-300 mr-3">50+</div>
                  <div class="text-sm text-blue-100/80">Industry<br>Partners</div>
                </div> -->
                <div class="flex items-center">
                  <div class="text-3xl md:text-4xl font-bold text-blue-300 mr-3">4.9/5</div>
                  <div class="text-sm text-blue-100/80">Student<br>Rating</div>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="animation-delay: 800ms">
                <a href="assets/pdf/scalefort-brochure.pdf"
                  download="Scalefort-Brochure.pdf" 
                  class="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 font-semibold text-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
                
                <a href="/courses#apply" 
                  class="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-center">
                  <span class="mr-2">Start Learning Today</span>
                  <svg class="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Visual Element -->
            <div class="relative animate-fade-in [animation-delay:400ms]">
              <div class="relative aspect-square max-w-md mx-auto">
                <!-- Main graphic -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl rotate-45 backdrop-blur-sm border border-white/10 animate-pulse-slow"></div>
                </div>
                
                <!-- Floating elements -->
                <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 animate-float animation-delay-1000">
                  <div class="w-full h-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                
                <div class="absolute bottom-10 right-10 w-16 h-16 bg-indigo-400/20 rounded-2xl backdrop-blur-sm border border-white/10 animate-float animation-delay-1500">
                  <div class="w-full h-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                
                <div class="absolute top-1/2 right-4 w-12 h-12 bg-blue-400/15 rounded-xl backdrop-blur-sm border border-white/10 animate-float animation-delay-2000">
                  <div class="w-full h-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <!-- Central icon -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-0 hover:rotate-45 transition-transform duration-700">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14v6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <!-- About Our School Section -->
      <section class="py-24 md:py-36 bg-white relative overflow-hidden">
        <!-- Background elements -->
        <div class="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-50/70 to-transparent"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50/40 rounded-full -translate-x-1/3 translate-y-1/3"></div>
        
        <!-- Floating shapes -->
        <div class="absolute top-20 left-10 w-24 h-24 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div class="absolute bottom-20 right-20 w-32 h-32 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
        <div class="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <!-- Content -->
            <div class="space-y-8">
              <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm animate-fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                About Our School
              </div>
              
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
                Building the Next Generation of 
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Tech Leaders</span>
              </h2>
              
              <p class="text-lg text-gray-600 leading-relaxed animate-fade-in [animation-delay:400ms]">
                At ScaleFort School, we're more than just a tech education provider. We're a community of learners, 
                innovators, and industry experts committed to delivering practical, industry-relevant training that 
                prepares you for real-world success.
              </p>
              
              <!-- Stats -->
              <div class="grid grid-cols-2 gap-6 py-4 animate-fade-in [animation-delay:600ms]">
                <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div class="text-3xl font-bold text-blue-600 mb-1">100+</div>
                  <div class="text-sm text-gray-600">Students Trained</div>
                </div>
                <!-- <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div class="text-3xl font-bold text-blue-600 mb-1">95%</div>
                  <div class="text-sm text-gray-600">Employment Rate</div>
                </div>
                <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div class="text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div class="text-sm text-gray-600">Industry Partners</div>
                </div> -->
                <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div class="text-3xl font-bold text-blue-600 mb-1">4.9/5</div>
                  <div class="text-sm text-gray-600">Student Rating</div>
                </div>
              </div>
              
              <!-- Features -->
              <ul class="space-y-4 animate-fade-in [animation-delay:800ms]">
                <li class="flex items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                  <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-5 group-hover:bg-blue-100 transition-colors">
                    <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Industry-Experienced Instructors</h3>
                    <p class="text-gray-600 text-sm">Learn from professionals who work at top tech companies</p>
                  </div>
                </li>
                
                <li class="flex items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                  <div class="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mr-5 group-hover:bg-green-100 transition-colors">
                    <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Hands-On Practical Training</h3>
                    <p class="text-gray-600 text-sm">Work on real-world projects and build a portfolio</p>
                  </div>
                </li>
                
                <li class="flex items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                  <div class="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mr-5 group-hover:bg-purple-100 transition-colors">
                    <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Career Support & Placement</h3>
                    <p class="text-gray-600 text-sm">Get help with job placement and career advancement</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <!-- Video -->
            <div class="relative animate-fade-in [animation-delay:1000ms]">
              <div class="aspect-video group relative">
                <!-- Video thumbnail with play button -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl transform group-hover:scale-95 transition-all duration-500 z-0"></div>
                
                <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 border-4 border-white">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/8nr-xKruKDI?si=FnnKKjrhuK-yw2Jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
                <!-- Decorative elements -->
                <div class="absolute -z-10 -inset-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full"></div>
                <div class="absolute -top-4 -left-4 w-16 h-16 bg-indigo-500/10 rounded-full"></div>
              </div>
              
              <!-- Stats badge -->
              <div class="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-bounce-slow">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span class="text-sm font-medium text-gray-700">100+ students enrolled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Programs Section -->
      <section id="apply" class="py-32 bg-gray-50 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-white to-transparent h-32"></div>
        <div class="max-w-7xl mx-auto px-4 relative">
          <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div class="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Our Programs
            </div>
            <h2 class="text-4xl font-bold mb-6">Choose Your Path to Success</h2>
            <p class="text-gray-600 text-lg">
              Explore our comprehensive range of tech programs designed to help you achieve your career goals.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let program of programs; let i = index" 
                 class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-on-scroll"
                 [style.animation-delay]="i * 100 + 'ms'">
              <div class="relative overflow-hidden">
                <img [src]="program.image" [alt]="program.title" 
                     class="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <span class="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                    {{ program.level }}
                  </span>
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {{ program.title }}
                </h3>
                <p class="text-gray-600 mb-6">{{ program.description }}</p>
                <div class="space-y-3 mb-8">
                  <p class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duration: {{ program.duration }}
                  </p>
                  <p class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Classes: {{ program.classes }}
                  </p>
                </div>
                <a [routerLink]="['/courses/', program.id]" 
                   class="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-600 rounded-full font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  Learn More
                  <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What Are You Learning Today Section -->
      <section class="py-24 md:py-36 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float animation-delay-0 top-20 left-20"></div>
          <div class="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float animation-delay-2000 bottom-20 right-20"></div>
          <div class="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float animation-delay-4000 top-1/2 left-1/3"></div>
        </div>
        
        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
        
        <!-- Floating Particles -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particle" style="top:20%; left:10%; animation-delay: 0s"></div>
          <div class="absolute w-1 h-1 bg-white/40 rounded-full animate-float-particle" style="top:60%; left:80%; animation-delay: 2s"></div>
          <div class="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-float-particle" style="top:40%; left:30%; animation-delay: 4s"></div>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center animate-fade-in">
            <!-- Decorative Icon -->
            <div class="flex justify-center mb-8">
              <div class="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 animate-pulse-slow">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up" style="animation-delay: 200ms">
              "The best time to start was yesterday.<br class="hidden md:block"/><span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200"> The next best time is now.</span>"
            </h2>
            
            <p class="text-xl md:text-2xl mb-12 text-blue-100/90 max-w-3xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 400ms">
              Join thousands of students who transformed their careers with ScaleFort. Take the first step towards your tech future today.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto animate-slide-up" style="animation-delay: 600ms">
              <div class="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div class="text-2xl md:text-3xl font-bold text-white mb-1"></div>
                <div class="text-sm text-blue-100/80"></div>
              </div>
              <div class="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
                <div class="text-sm text-blue-100/80">Students</div>
              </div>
              <div class="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">4.9/5</div>
                <div class="text-sm text-blue-100/80">Rating</div>
              </div>
              <div class="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div class="text-2xl md:text-3xl font-bold text-white mb-1"></div>
                <div class="text-sm text-blue-100/80"></div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 800ms">
              <a href="/courses#apply" 
                class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[200px]">
                Explore Programs
                <svg class="w-5 h-5 ml-2 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <!-- Trust Indicator -->
            <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-blue-100/80 animate-fade-in" style="animation-delay: 1000ms">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                No coding experience required
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Flexible learning options
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Career support included
              </div>
            </div>
          </div>
        </div>

        <!-- Floating elements -->
        <div class="absolute bottom-10 left-10 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm animate-float animation-delay-3000"></div>
        <div class="absolute top-10 right-10 w-6 h-6 bg-white/5 rounded-full backdrop-blur-sm animate-float animation-delay-3500"></div>
      </section>

      <!-- Success Stories Section -->
      <section class="py-32 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div class="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Success Stories
            </div>
            <h2 class="text-4xl font-bold mb-6">From Students to Tech Leaders</h2>
            <p class="text-gray-600 text-lg">
              Hear from our graduates who have transformed their careers through ScaleFort.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let story of successStories; let i = index" 
                 class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll"
                 [style.animation-delay]="i * 200 + 'ms'">
              <div class="flex items-center mb-6">
                <!-- <img [src]="story.image" [alt]="story.name" 
                     class="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-50"> -->
                <div>
                  <h3 class="font-semibold text-lg">{{ story.name }}</h3>
                  <p class="text-blue-600">{{ story.role }}</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6 italic">"{{ story.testimonial }}"</p>
              <p class="text-blue-600 font-semibold flex items-center">
                {{ story.company }}
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- What Are You Learning Today Section -->
      <section class="py-24 md:py-36 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float animation-delay-0 top-20 left-20"></div>
          <div class="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float animation-delay-2000 bottom-20 right-20"></div>
          <div class="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float animation-delay-4000 top-1/2 left-1/3"></div>
        </div>
        
        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
        
        <!-- Floating Particles -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particle" style="top:20%; left:10%; animation-delay: 0s"></div>
          <div class="absolute w-1 h-1 bg-white/40 rounded-full animate-float-particle" style="top:60%; left:80%; animation-delay: 2s"></div>
          <div class="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-float-particle" style="top:40%; left:30%; animation-delay: 4s"></div>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center animate-fade-in">
            <!-- Decorative Icon -->
            <div class="flex justify-center mb-8">
              <div class="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 animate-pulse-slow">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            
            <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up" style="animation-delay: 200ms">
              Need Help <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">Choosing a Course</span>?
            </h2>
            
            <p class="text-xl md:text-2xl mb-8 text-blue-100/90 max-w-3xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 400ms">
              Talk to our Tech Experts who are ready to guide you in making the right decision for your tech career journey.
            </p>

            <!-- Benefits -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-slide-up" style="animation-delay: 600ms">
              <div class="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 class="font-semibold mb-2">Career Guidance</h3>
                <p class="text-blue-100/80 text-sm">Get personalized advice based on your goals and background</p>
              </div>
              
              <div class="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="font-semibold mb-2">Expert Consultation</h3>
                <p class="text-blue-100/80 text-sm">Connect with industry professionals with real-world experience</p>
              </div>
              
              <div class="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="font-semibold mb-2">No Pressure</h3>
                <p class="text-blue-100/80 text-sm">Free consultation with no obligation to enroll</p>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="animate-slide-up" style="animation-delay: 800ms">
              <a href="https://wa.me/message/H6MHZGJ2FLYHM1" 
                class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl mx-auto group">
                <span class="mr-2">Chat with an Expert</span>
                <svg class="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <!-- Additional Info -->
            <div class="mt-8 text-sm text-blue-100/80 animate-fade-in" style="animation-delay: 1000ms">
              <p>📍 Available via WhatsApp • ⚡ Quick responses • 🎓 Free consultation</p>
            </div>

            <!-- Trust Indicators -->
            <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-100/80 animate-fade-in" style="animation-delay: 1200ms">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                300+ Students Guided
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                24/7 Availability
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                No Commitment Required
              </div>
            </div>
          </div>
        </div>

        <!-- Floating elements -->
        <div class="absolute bottom-10 left-10 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm animate-float animation-delay-3000"></div>
        <div class="absolute top-10 right-10 w-6 h-6 bg-white/5 rounded-full backdrop-blur-sm animate-float animation-delay-3500"></div>
      </section>

      <!-- Scholarship Section -->
      <!-- <section class="py-32 bg-white relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/0"></div>
        <div class="max-w-4xl mx-auto px-4 text-center relative animate-on-scroll">
          <div class="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            Scholarships
          </div>
          <h2 class="text-4xl font-bold mb-6">Empowering Future Tech Leaders</h2>
          <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We believe in making quality tech education accessible to all. Our scholarship programs 
            are designed to support talented individuals who demonstrate exceptional potential.
          </p>
          <a routerLink="/scholarships" 
             class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
            Learn More About Scholarships
            <svg class="w-5 h-5 ml-2 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section> -->
    </div>
  `,
  styles: [`
    @keyframes blob1 {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30%, -20%) scale(1.1); }
      66% { transform: translate(-20%, 20%) scale(0.9); }
      100% { transform: translate(0, 0) scale(1); }
    }
    @keyframes blob2 {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(-30%, 30%) scale(1.1); }
      66% { transform: translate(20%, -20%) scale(0.9); }
      100% { transform: translate(0, 0) scale(1); }
    }
    @keyframes blob3 {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(20%, 20%) scale(1.1); }
      66% { transform: translate(-30%, -30%) scale(0.9); }
      100% { transform: translate(0, 0) scale(1); }
    }
    .animate-blob1 { animation: blob1 12s infinite linear; }
    .animate-blob2 { animation: blob2 12s infinite linear; }
    .animate-blob3 { animation: blob3 12s infinite linear; }
    
    @keyframes bounce-x {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }
    .animate-bounce-x {
      animation: bounce-x 1s infinite;
    }
    
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      opacity: 0;
      animation: fade-in 1s forwards;
    }
    
    .animate-slide-up {
      opacity: 0;
      animation: slide-up 1s forwards;
    }
    
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: all 1s;
    }
    
    .animate-on-scroll.active {
      opacity: 1;
      transform: translateY(0);
    }

    .animate-fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
  }
  
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-bounce-slow {
    animation: bounceSlow 2s ease-in-out infinite;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes bounceSlow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  `]
})
export class DisplayCoursesComponent implements OnInit {
  programs = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks.',
      image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3',
      duration: '24 weekends',
      level: 'Intermediate',
      classes: "Online"
    },
    {
      id: 'python',
      title: 'Python Development',
      description: 'Learn server-side programming, databases, and API development with Python.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3',
      duration: '24 weekends',
      level: 'Intermediate',
      classes: "Online"
    },
    {
      id: 'dotnet',
      title: 'Dotnet Development',
      description: 'Learn server-side programming, databases, and API development with C#, Dotnet.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3',
      duration: '24 weekends',
      level: 'Intermediate',
      classes: "Online"
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      description: 'Explore cloud platforms, deployment, and DevOps practices.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3',
      duration: '24 weekends',
      level: 'Basics',
      classes: "Online"
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      description: 'Master data analysis, machine learning, and statistical modeling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      duration: '24 weekends',
      level: 'Basics',
      classes: "Online"
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Learn to protect systems, networks, and data from cyber threats.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3',
      duration: '24 weekends',
      level: 'Basics',
      classes: "Online"
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Create beautiful, user-friendly interfaces and experiences.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3',
      duration: '24 weekends',
      level: 'Beginner to Intermediate',
      classes: "Online"
    }
  ];

  successStories = [
    {
      name: 'Samuel A.',
      role: 'Dotnet Developer',
      company: 'Kaybill Technologies',
      image: '',
      testimonial: 'Scalefort was a game-changer for me. The structured learning, practical projects, and supportive mentors provided all I needed to transition into tech confidently.'
    },
    {
      name: 'Halimat B.',
      role: 'Software Intern',
      company: 'Wema bank',
      image: '',
      testimonial: 'Scalefort gave me the skills and confidence to excel in tech. The hands-on projects, expert mentorship, and real-world focus made all the difference.'
    },
    {
      name: 'Maureen O.',
      role: 'Software Engineer',
      company: 'Sterling Bank',
      image: '',
      testimonial: 'Scalefort provided me with a solid foundation in programming, equipping me with the technical skills and knowledge I needed to thrive in the tech industry.'
    }
  ];

  ngOnInit() {
    // Wait for the DOM to be ready
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }, 0);
  }
}


// <section class="py-24 md:py-36 bg-gradient-to-b from-blue-50/30 to-white/50 relative overflow-hidden">
//   <!-- Background elements -->
//   <div class="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-100/20 to-transparent"></div>
//   <div class="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full -translate-x-1/3 translate-y-1/3"></div>
  
//   <!-- Floating shapes -->
//   <div class="absolute top-20 left-10 w-24 h-24 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
//   <div class="absolute bottom-20 right-20 w-32 h-32 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
//   <div class="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>

//   <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//     <!-- Header -->
//     <div class="text-center mb-20 animate-fade-in">
//       <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
//           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//         </svg>
//         Scholarship Opportunities
//       </div>
      
//       <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in [animation-delay:200ms]">
//         Empowering Future 
//         <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Tech Leaders</span>
//       </h2>
      
//       <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms]">
//         We believe in making quality tech education accessible to all. Our scholarship programs 
//         are designed to support talented individuals who demonstrate exceptional potential and commitment to learning.
//       </p>
//     </div>

//     <!-- Scholarship Stats -->
//     <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto animate-fade-in [animation-delay:600ms]">
//       <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//         <div class="text-3xl font-bold text-blue-600 mb-2">$500K+</div>
//         <div class="text-sm text-gray-600">Awarded in Scholarships</div>
//       </div>
//       <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//         <div class="text-3xl font-bold text-blue-600 mb-2">200+</div>
//         <div class="text-sm text-gray-600">Students Supported</div>
//       </div>
//       <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//         <div class="text-3xl font-bold text-blue-600 mb-2">85%</div>
//         <div class="text-sm text-gray-600">Success Rate</div>
//       </div>
//       <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//         <div class="text-3xl font-bold text-blue-600 mb-2">4</div>
//         <div class="text-sm text-gray-600">Scholarship Types</div>
//       </div>
//     </div>

//     <!-- Scholarship Types -->
//     <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
//       <!-- Merit-Based -->
//       <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 animate-fade-in [animation-delay:800ms]">
//         <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
//           <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//           </svg>
//         </div>
//         <h3 class="text-xl font-bold text-gray-900 mb-3">Merit-Based Scholarships</h3>
//         <p class="text-gray-600 mb-4">Awarded to students who demonstrate exceptional academic achievement and technical skills.</p>
//         <ul class="text-sm text-gray-600 space-y-2">
//           <li class="flex items-center">
//             <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
//             </svg>
//             Up to 100% tuition coverage
//           </li>
//           <li class="flex items-center">
//             <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
//             </svg>
//             Portfolio review required
//           </li>
//         </ul>
//       </div>

//       <!-- Need-Based -->
//       <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 animate-fade-in [animation-delay:1000ms]">
//         <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
//           <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         </div>
//         <h3 class="text-xl font-bold text-gray-900 mb-3">Need-Based Scholarships</h3>
//         <p class="text-gray-600 mb-4">Designed to support students from underrepresented backgrounds and financial constraints.</p>
//         <ul class="text-sm text-gray-600 space-y-2">
//           <li class="flex items-center">
//             <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
//             </svg>
//             Financial documentation required
//           </li>
//           <li class="flex items-center">
//             <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
//             </svg>
//             Personalized payment plans
//           </li>
//         </ul>
//       </div>
//     </div>

//     <!-- CTA Section -->
//     <div class="text-center animate-fade-in [animation-delay:1200ms]">
//       <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
//         <h3 class="text-2xl md:text-3xl font-bold mb-4">Ready to Apply for a Scholarship?</h3>
//         <p class="text-blue-100 max-w-2xl mx-auto mb-6">Our application process is simple and straightforward. Check your eligibility and apply today.</p>
        
//         <div class="flex flex-col sm:flex-row gap-4 justify-center">
//           <a routerLink="/scholarships" 
//              class="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
//             Explore Scholarship Options
//             <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </a>
          
//           <a routerLink="/scholarships/application" 
//              class="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl border border-blue-500">
//             Start Application
//             <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//             </svg>
//           </a>
//         </div>
        
//         <p class="text-sm text-blue-200 mt-6">
//           Applications reviewed monthly • Deadline for next cycle: 15th of each month
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

// <style>
//   .animate-fade-in {
//     opacity: 0;
//     animation: fadeIn 0.8s ease-out forwards;
//   }
  
//   .animate-float {
//     animation: float 8s ease-in-out infinite;
//   }
  
//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   @keyframes float {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-10px);
//     }
//   }
  
//   .animation-delay-2000 {
//     animation-delay: 2s;
//   }
  
//   .animation-delay-4000 {
//     animation-delay: 4s;
//   }
// </style>