import { Component } from '@angular/core';

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  template: `
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">What our Graduates and Mentees Say?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600 mb-4">"Scalefort was a game-changer for me. The structured learning, practical projects, and supportive mentors provided all I needed to transition into tech confidently."</p>
            <div class="flex items-center">
              <div class="ml-3">
                <div class="font-semibold">Samuel A.</div>
                <div class="text-gray-500 text-sm">Dotnet Developer, Kaybill Technologies</div>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600 mb-4">"Scalefort gave me the skills and confidence to excel in tech. The hands-on projects, expert mentorship, and real-world focus made all the difference. "</p>
            <div class="flex items-center">
              <div class="ml-3">
                <div class="font-semibold">Halimat B.</div>
                <div class="text-gray-500 text-sm">Intern, Wema Bank</div>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600 mb-4">"Scalefort provided me with a solid foundation in programming, equipping me with the technical skills and knowledge I needed to thrive in the tech industry."</p>
            <div class="flex items-center">
              <div class="ml-3">
                <div class="font-semibold">Maureen O.</div>
                <div class="text-gray-500 text-sm">Software Engineer, Sterling Bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeTestimonialsComponent {}