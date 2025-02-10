import { Component } from '@angular/core';

@Component({
  selector: 'app-home-stats',
  standalone: true,
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div class="text-gray-600">Learners Served</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div class="text-gray-600">Clients</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">4+</div>
            <div class="text-gray-600">Countries</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">30+</div>
            <div class="text-gray-600">Courses</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeStatsComponent {}