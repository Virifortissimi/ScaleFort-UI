import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="pt-16">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">About ScaleFort</h1>
          <p class="text-xl">Empowering Africa's Digital Revolution—One Tech User at a Time</p>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
              <p class="text-gray-600 mb-4">
                ScaleFort is dedicated to empowering tech users, entrepreneurs, developers, 
                and startups across Africa through mentorship, resources, and community support.
              </p>
              <p class="text-gray-600">
                We believe in bridging the gap in tech mentorship and resources, fostering 
                innovation, and driving digital transformation across the continent.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-bold mb-6">Our Vision</h2>
              <p class="text-gray-600">
                To create Africa's largest and most impactful tech mentorship platform, 
                where every tech enthusiast can find the guidance, resources, and community 
                they need to scale their dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {}