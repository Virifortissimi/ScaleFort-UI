import { Component } from '@angular/core';

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  template: `
    <section class="py-24 bg-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Community</h2>
          <p class="text-lg text-gray-600">Hear from those who've transformed their careers</p>
        </div>
        <!-- TrustBox widget - Review Collector -->
        <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="680f88dca5275ca094b5be85" data-style-height="52px" data-style-width="100%">
          <a href="https://www.trustpilot.com/review/scalefort.org" target="_blank" rel="noopener">Trustpilot</a>
        </div>
        
        <!-- End TrustBox widget -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <!-- Testimonial Card 1 -->
          <div class="bg-white group p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out">
            <div class="relative mb-6">
              <svg class="absolute -top-2 left-0 w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
              <p class="text-lg text-gray-600 leading-relaxed relative z-10">Scalefort was a game-changer for me. The structured learning, practical projects, and supportive mentors provided all I needed to transition into tech confidently.</p>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">SA</div>
              </div>
              <div class="ml-4">
                <div class="font-bold text-gray-900">Samuel A.</div>
                <div class="text-blue-600 text-sm">Dotnet Developer</div>
                <div class="text-gray-500 text-sm">Kaybill Technologies</div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 2 -->
          <div class="bg-white group p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out">
            <div class="relative mb-6">
              <svg class="absolute -top-2 left-0 w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
              <p class="text-lg text-gray-600 leading-relaxed relative z-10">Scalefort gave me the skills and confidence to excel in tech. The hands-on projects, expert mentorship, and real-world focus made all the difference.</p>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">HB</div>
              </div>
              <div class="ml-4">
                <div class="font-bold text-gray-900">Halimat B.</div>
                <div class="text-blue-600 text-sm">Software Intern</div>
                <div class="text-gray-500 text-sm">Wema Bank</div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 3 -->
          <div class="bg-white group p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out">
            <div class="relative mb-6">
              <svg class="absolute -top-2 left-0 w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
              <p class="text-lg text-gray-600 leading-relaxed relative z-10">Scalefort provided me with a solid foundation in programming, equipping me with the technical skills and knowledge I needed to thrive in the tech industry.</p>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">MO</div>
              </div>
              <div class="ml-4">
                <div class="font-bold text-gray-900">Maureen O.</div>
                <div class="text-blue-600 text-sm">Software Engineer</div>
                <div class="text-gray-500 text-sm">Sterling Bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeTestimonialsComponent {}