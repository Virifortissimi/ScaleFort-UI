import { Component } from '@angular/core';

@Component({
  selector: 'app-home-stats',
  standalone: true,
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div class="text-gray-600">Active Mentors</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">2,000+</div>
            <div class="text-gray-600">Success Stories</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div class="text-gray-600">Partner Companies</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <div class="text-gray-600">Community Members</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeStatsComponent {}