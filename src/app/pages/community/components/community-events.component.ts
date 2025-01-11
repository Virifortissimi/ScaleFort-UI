import { Component } from '@angular/core';

@Component({
  selector: 'app-community-events',
  standalone: true,
  template: `
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Basic (Foundational Classes)</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- <div class="text-blue-600 font-semibold mb-2">MAR 15</div> -->
            <h3 class="text-xl font-semibold mb-2">HTML/CSS/JavaScript:</h3>
            <p class="text-gray-600 mb-4">Learn the building blocks of web development and create stunning, interactive websites.</p>
            <a href="/get-started" class="text-blue-600 font-semibold">Apply Now →</a>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- <div class="text-blue-600 font-semibold mb-2">MAR 20</div> -->
            <h3 class="text-xl font-semibold mb-2">Cloud Computing:</h3>
            <p class="text-gray-600 mb-4">Understand cloud platforms, deployments, and how to leverage services like AWS and Azure.</p>
            <a href="/get-started" class="text-blue-600 font-semibold">Apply Now →</a>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- <div class="text-blue-600 font-semibold mb-2">MAR 25</div> -->
            <h3 class="text-xl font-semibold mb-2">Customer Support: </h3>
            <p class="text-gray-600 mb-4">Gain the essential communication, problem-solving, and technical skills to excel in tech-driven customer support roles, helping users resolve issues effectively and fostering satisfaction.</p>
            <a href="/get-started" class="text-blue-600 font-semibold">Apply Now →</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CommunityEventsComponent {}