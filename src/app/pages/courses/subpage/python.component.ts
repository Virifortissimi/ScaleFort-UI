import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface CourseSection {
  id: string;
  title: string;
}

@Component({
  selector: 'app-python-detail',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <!-- Hero Section -->
      <section appAnimateOnScroll class="section-hero bg-bg-white text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

        <div class="container-base max-w-5xl">
          <p class="overline mb-4 inline-flex items-center rounded-pill border border-green-100 bg-green-50/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-green-600 shadow-sm">
            Tech School Course
          </p>
          <h1 class="type-display text-text-primary mb-6 tracking-tight">Backend Development with Python</h1>
          <p class="type-body-l text-text-muted max-w-2xl mx-auto leading-relaxed">
            Master Python backend development and build scalable web applications with industry best practices.
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
                      [class.text-green-600]="currentSection === section.id"
                      [class.bg-green-50]="currentSection === section.id"
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
                href="https://paystack.com/pay/scalefort-python"
                target="_blank"
                class="btn-primary btn-sm no-underline"
              >
                Start Learning Now
              </a>
            </div>
          </div>
        </div>
      </section>


      <!-- Content Sections -->
      <section appAnimateOnScroll class="section-compact">
        <div class="max-w-6xl mx-auto px-4">
          <!-- Overview -->
          <div id="overview" class="mb-16 scroll-mt-32">
            <h2 class="text-3xl font-bold mb-6">Overview</h2>
            <p class="text-text-body mb-6">
              This comprehensive Python Backend Development course is designed to take you from basics to advanced concepts
              in web development using Python. You'll learn how to build robust, scalable web applications using modern
              frameworks and best practices.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div class="flex justify-center items-center bg-bg-subtle p-6 rounded-lg">
                <img
                  class="w-full h-64 md:h-80 rounded-lg shadow-lg object-cover"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
                  alt="Python backend code and terminal setup"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <!-- Text Content -->
              <div class="space-y-6">
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">What You'll Learn</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Python Programming Fundamentals
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Web Development with Django
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Database Design & Management
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      API Development
                    </li>
                  </ul>
                </div>
                <div class="bg-bg-subtle p-6 rounded-lg">
                  <h3 class="font-semibold mb-4">Course Highlights</h3>
                  <ul class="space-y-2 text-text-body">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Live Online Classes
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Hands-on Projects
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      1-on-1 Mentorship
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Career Support
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
              <h2 class="text-3xl font-bold text-text-primary mb-8 text-center">Requirements & Expectations</h2>

              <div class="grid md:grid-cols-2 gap-10 text-text-body">
                <!-- Educational Background -->
                <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-accent-school flex items-center">
                    <svg class="w-6 h-6 mr-2 text-accent-school" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                    </svg>
                    Educational Background
                  </h3>
                  <p>You don’t need to have a certificate to apply for this diploma program. We expect anyone to take the program regardless of their educational qualifications.</p>
                </div>

                <!-- Language Proficiency -->
                <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-accent-school flex items-center">
                    <svg class="w-6 h-6 mr-2 text-accent-school" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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
                  <h3 class="text-xl font-semibold text-accent-school flex items-center">
                    <svg class="w-6 h-6 mr-2 text-accent-school" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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
                  <h3 class="text-xl font-semibold text-accent-school flex items-center">
                    <svg class="w-6 h-6 mr-2 text-accent-school" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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
        <section id="outline" class="scroll-mt-32 section bg-bg-subtle">
          <div class="max-w-6xl mx-auto px-6">
            <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10">
              <h2 class="text-3xl font-bold text-center text-text-primary mb-10">Course Outline</h2>

              <div class="grid md:grid-cols-2 gap-8 text-text-body">
                
                <!-- Python Fundamentals -->
                <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                  <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M13 2.05v3.03a7.003 7.003 0 00-4.08 11.68l-2.11 2.11A9.955 9.955 0 012.05 13H5.03c1.18 2.97 4.07 5 7.47 5 4.52 0 8.2-3.7 8.2-8.25v-.23l2.35-2.35A9.963 9.963 0 0022 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.21.72-4.26 1.94-5.94L8 9.72V7.65L3.41 3.05 2 4.46l4.05 4.05h2.07l-1.5-1.51"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-lg">Python Fundamentals</h3>
                    <p>Master Python syntax, data structures, and object-oriented programming concepts.</p>
                  </div>
                </div>

                <!-- Web Frameworks -->
                <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                  <svg class="w-8 h-8 text-green-500 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 3v5m0 0V3m0 5H7m5 0h5M5 21a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5z"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-lg">Django & Flask</h3>
                    <p>Build robust web applications using Python's most popular frameworks.</p>
                  </div>
                </div>

                <!-- Database Integration -->
                <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                  <svg class="w-8 h-8 text-rose-500 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-lg">Database Integration</h3>
                    <p>Work with ORMs, PostgreSQL, and MySQL for data-driven applications.</p>
                  </div>
                </div>

                <!-- REST APIs -->
                <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                  <svg class="w-8 h-8 text-amber-500 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 13h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1zm10-8h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V6a1 1 0 011-1zM4 4h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm14 2h2m0 0h2m-2 0v2m0-2V4"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-lg">REST API Development</h3>
                    <p>Create secure and scalable RESTful APIs with Django REST Framework.</p>
                  </div>
                </div>

                <!-- Authentication -->
                <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                  <svg class="w-8 h-8 text-pink-500 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-lg">User Authentication</h3>
                    <p>Implement secure login systems with OAuth2 and JWT authentication.</p>
                  </div>
                </div>

                <!-- Deployment -->
                <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                  <svg class="w-8 h-8 text-yellow-500 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-lg">Deployment & DevOps</h3>
                    <p>Deploy applications using Docker, AWS, and CI/CD pipelines.</p>
                  </div>
                </div>

                <!-- Testing -->
                <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                  <svg class="w-8 h-8 text-red-500 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2v-7"/>
                    <path d="M13 2v7h7M16 14H8m8 4H8m2-8H8"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-lg">Testing & Debugging</h3>
                    <p>Write unit tests, conduct debugging, and ensure code reliability.</p>
                  </div>
                </div>

                <!-- Scalability -->
                <div class="flex items-start space-x-4 p-6 bg-bg-subtle rounded-xl shadow-sm hover:shadow-md transition">
                  <svg class="w-8 h-8 text-amber-500 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-lg">Scalability & Performance</h3>
                    <p>Optimize applications with caching, load balancing, and async tasks.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <!-- Cost -->
        <section appAnimateOnScroll class="scroll-mt-32 section bg-bg-subtle">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-bold text-text-primary mb-4">Investment in Your Future</h2>
              <p class="text-xl text-text-body max-w-2xl mx-auto">Flexible payment options designed for ambitious learners</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <!-- Monthly Plan -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div class="text-center">
                  <h3 class="text-2xl font-bold text-text-primary mb-2">Pay Thrice</h3>
                  <div class="flex justify-center items-baseline my-6">
                    <span class="text-4xl font-extrabold">$80</span>
                    <span class="ml-2 text-text-muted font-medium">x 3</span>
                  </div>
                  <p class="text-text-body mb-6">Ideal for flexible budgeting</p>
                  <a href="#" class="w-full inline-block bg-bg-subtle border border-border-base text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-bg-white transition">
                    Pay Thrice
                  </a>
                </div>
              </div>

              <!-- Featured Plan -->
              <div class="relative card-base card-accent p-8">
                <div class="absolute top-0 right-0 bg-amber-400 text-text-primary px-5 py-1 rounded-bl-xl text-sm font-bold">
                  Most Popular
                </div>
                <div class="text-center text-text-primary">
                  <h3 class="text-2xl font-bold mb-2">Upfront Payment</h3>
                  <div class="flex justify-center items-baseline my-6">
                    <span class="text-5xl font-extrabold">$200</span>
                  </div>
                  <p class="mb-6 opacity-90">Save $40 + No Final Payments</p>
                  <a href="#" class="w-full inline-block bg-amber-400 text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition">
                    Save $40 Now
                  </a>
                </div>
              </div>

              <!-- Quarterly Plan -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div class="text-center">
                  <h3 class="text-2xl font-bold text-text-primary mb-2">Pay Twice</h3>
                  <div class="flex justify-center items-baseline my-6">
                    <span class="text-4xl font-extrabold">$110</span>
                    <span class="ml-2 text-text-muted font-medium">x 2</span>
                  </div>
                  <p class="text-text-body mb-6">Save $20 with quarterly payments</p>
                  <a href="#" class="w-full btn-primary">
                    Pay Twice
                  </a>
                </div>
              </div>
            </div>

            <!-- Value Proposition -->
            <div class="mt-16 max-w-3xl mx-auto">
              <div class="bg-white rounded-xl p-8 shadow-lg border border-border-base">
                <h3 class="text-xl font-semibold text-center mb-6">Complete Learning Package Includes:</h3>
                <div class="grid md:grid-cols-2 gap-6 text-text-body">
                  <div class="flex items-start space-x-3">
                    <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <p class="font-medium">1-on-1 Mentorship</p>
                      <p class="text-sm">Weekly sessions with industry experts</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <p class="font-medium">Career Support</p>
                      <p class="text-sm">Resume reviews & interview preparation</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <p class="font-medium">Project Portfolio</p>
                      <p class="text-sm">Real-world projects with code reviews</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <p class="font-medium">Certification</p>
                      <p class="text-sm">Industry-recognized completion certificate</p>
                    </div>
                  </div>
                </div>

                <div class="mt-8 text-center">
                  <p class="text-sm text-text-muted flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    No Refund after Payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

         <!-- Career Outcomes -->
        <div id="careers" class="mb-16 scroll-mt-32 section bg-bg-subtle">
          <div class="max-w-6xl mx-auto px-6">
            <h2 class="text-4xl font-bold text-text-primary mb-12 text-center">Launch Your Tech Career</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <!-- Potential Roles Card -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-center mb-6">
                  <div class="bg-green-50 p-3 rounded-lg mr-4">
                    <svg class="w-8 h-8 text-accent-school" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-semibold text-text-primary">Career Paths</h3>
                </div>
                <ul class="space-y-4 text-text-body">
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Backend Developer
                  </li>
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Python Developer
                  </li>
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Full Stack Engineer
                  </li>
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    API Specialist
                  </li>
                </ul>
              </div>

              <!-- Career Support Card -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-center mb-6">
                  <div class="bg-green-100 p-3 rounded-lg mr-4">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-semibold text-text-primary">Career Support</h3>
                </div>
                <ul class="space-y-4 text-text-body">
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Professional Portfolio Reviews
                  </li>
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Technical Interview Prep
                  </li>
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    LinkedIn Optimization
                  </li>
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Job Search Strategy Sessions
                  </li>
                </ul>
              </div>
            </div>

            <!-- Stats Banner -->
            <div class="mt-12 card-base card-accent text-center">
              <p class="text-xl font-semibold">92% of graduates land tech roles within 6 months of completion</p>
            </div>
          </div>
        </div>

        <!-- Scholarship -->
        <div id="scholarship" class="scroll-mt-32 section bg-bg-subtle">
          <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-text-primary mb-4">Funding Your Future</h2>
              <p class="text-lg text-text-body max-w-2xl mx-auto">We invest in exceptional talent through our merit-based scholarship program</p>
            </div>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div class="grid lg:grid-cols-2 gap-10 p-10">
                <!-- Left Content -->
                <div class="space-y-6">
                  <div class="bg-green-50 text-green-800 px-4 py-2 rounded-full inline-block text-sm font-semibold">
                    🎓 Partial Funding Available
                  </div>
                  <h3 class="text-3xl font-bold text-text-primary">ScaleFort Merit Scholarship</h3>
                  <p class="text-lg text-text-body">
                    Receive up to 50% tuition coverage while demonstrating exceptional technical aptitude and commitment to learning.
                  </p>
                  
                  <!-- Stats -->
                  <div class="grid grid-cols-2 gap-4 mt-8">
                    <div class="text-center p-4 bg-green-50 rounded-xl">
                      <div class="text-2xl font-bold text-accent-school">50%</div>
                      <div class="text-sm text-text-body">Max Coverage</div>
                    </div>
                    <div class="text-center p-4 bg-green-50 rounded-xl">
                      <div class="text-2xl font-bold text-accent-school">120+</div>
                      <div class="text-sm text-text-body">Awarded Annually</div>
                    </div>
                  </div>
                </div>

                <!-- Right Content -->
                <div class="space-y-6">
                  <div class="border-l-4 border-blue-500 pl-4">
                    <h4 class="text-xl font-semibold text-text-primary mb-4">Eligibility Requirements</h4>
                    <ul class="space-y-4">
                      <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-text-body">Proven academic excellence or professional achievement</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-text-body">Technical aptitude assessment</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-text-body">Clear career vision statement</span>
                      </li>
                    </ul>
                  </div>

                  <button class="w-full mt-8 btn-primary">
                    <span>Start Scholarship Application</span>
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Footer Note -->
              <div class="bg-green-50 p-6 text-center border-t border-blue-100">
                <p class="text-sm text-text-body">
                  Applications reviewed quarterly • Next deadline: August 30, 2024
                </p>
              </div>
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
export class PythonComponent implements OnInit {
  sections: CourseSection[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'requirements', title: 'Requirements' },
    { id: 'outline', title: 'Course Outline' },
    { id: 'cost', title: 'Cost' },
    { id: 'careers', title: 'Career Outcomes' },
    { id: 'scholarship', title: 'Scholarship' }
  ];

  currentSection = 'overview';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Add scroll spy functionality
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.currentSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px'
      }
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






