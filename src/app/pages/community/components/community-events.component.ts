import { Component } from '@angular/core';

@Component({
  selector: 'app-community-events',
  standalone: true,
  template: `
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 font-semibold mb-2">MAR 15</div>
            <h3 class="text-xl font-semibold mb-2">Tech Meetup Lagos</h3>
            <p class="text-gray-600 mb-4">Network with fellow tech entrepreneurs and innovators.</p>
            <button class="text-blue-600 font-semibold">Learn More →</button>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 font-semibold mb-2">MAR 20</div>
            <h3 class="text-xl font-semibold mb-2">Startup Pitch Night</h3>
            <p class="text-gray-600 mb-4">Present your startup to potential investors.</p>
            <button class="text-blue-600 font-semibold">Learn More →</button>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 font-semibold mb-2">MAR 25</div>
            <h3 class="text-xl font-semibold mb-2">Code Workshop</h3>
            <p class="text-gray-600 mb-4">Hands-on coding workshop for developers.</p>
            <button class="text-blue-600 font-semibold">Learn More →</button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CommunityEventsComponent {}