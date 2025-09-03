import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Our Services</h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering Africa's tech ecosystem through comprehensive education, training, and innovative solutions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-blue-600 text-4xl mb-6">🎓</div>
            <h3 class="text-xl font-semibold mb-4">Tech School</h3>
            <p class="text-gray-600 mb-6">World-class tech education with practical training in web development, cloud computing, and more.</p>
            <ul class="space-y-3 mb-8 text-gray-600">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Basic & Advanced Courses
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Live Online Classes
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Career Support
              </li>
            </ul>
            <a routerLink="/courses" class="text-blue-600 font-semibold flex items-center hover:text-blue-700">
              Explore Courses
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-blue-600 text-4xl mb-6">👥</div>
            <h3 class="text-xl font-semibold mb-4">Corporate Training</h3>
            <p class="text-gray-600 mb-6">Customized training programs to upskill your workforce and drive digital transformation.</p>
            <ul class="space-y-3 mb-8 text-gray-600">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Customized Curriculum
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Team Training
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Progress Tracking
              </li>
            </ul>
            <a routerLink="/corporate-training" class="text-blue-600 font-semibold flex items-center hover:text-blue-700">
              Learn More
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-blue-600 text-4xl mb-6">💻</div>
            <h3 class="text-xl font-semibold mb-4">IT Services</h3>
            <p class="text-gray-600 mb-6">End-to-end technology solutions to help your business scale and succeed in the digital age.</p>
            <ul class="space-y-3 mb-8 text-gray-600">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Custom Software Development
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Cloud Solutions
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Technical Consulting
              </li>
            </ul>
            <a routerLink="/services" class="text-blue-600 font-semibold flex items-center hover:text-blue-700">
              Learn More
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeServicesComponent { }