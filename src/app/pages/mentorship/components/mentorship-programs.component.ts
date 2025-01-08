import { Component } from '@angular/core';

@Component({
  selector: 'app-mentorship-programs',
  standalone: true,
  template: `
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Mentorship Programs</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">1:1 Mentorship</h3>
            <p class="text-gray-600">Personalized guidance from industry experts tailored to your goals.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Group Sessions</h3>
            <p class="text-gray-600">Learn and grow together with peers in structured group mentoring.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Startup Mentoring</h3>
            <p class="text-gray-600">Specialized mentorship for tech startups looking to scale.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MentorshipProgramsComponent {}