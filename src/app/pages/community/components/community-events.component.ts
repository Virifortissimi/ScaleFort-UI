import { Component } from '@angular/core';

@Component({
  selector: 'app-community-events',
  standalone: true,
  template: `
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">Basic (Foundational Classes)</h2>
          <div class="space-y-16">
            <!-- Course 1: Image Left, Content Right -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-md">
              <!-- Image -->
              <div class="w-full">
                <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737717982/Goals/undraw_blog_1ca8.svg" alt="Frontend Development Icon" class="w-full h-64 object-cover rounded-lg">
              </div>
              <!-- Content -->
              <div>
                <h3 class="text-2xl font-semibold mb-4">Frontend Web Development</h3>
                <p class="text-gray-600 mb-4">
                  HTML/CSS/JavaScript: Learn the building blocks of web development and create stunning, interactive websites.
                </p>

                <p class="text-gray-700 mb-4">
                  <strong>Next Cohort:</strong> March 1st, 2025 <br>
                  <strong>Weekend Classes:</strong> Saturdays <br>
                  <strong>Price:</strong> <del> 350,000</del> N299,999
                </p>
                <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="text-blue-600 font-semibold">Apply Now →</a>
              </div>
            </div>

            <!-- Course 2: Content Left, Image Right -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-md md:flex-row-reverse">
              <!-- Content -->
              <div>
                <h3 class="text-2xl font-semibold mb-4">Cloud Computing</h3>
                <p class="text-gray-600 mb-4">
                  Understand cloud platforms, deployments, and how to leverage services like AWS and Azure.
                </p>
                
                <p class="text-gray-700 mb-4">
                  <strong>Next Cohort:</strong> March 1st, 2025 <br>
                  <strong>Weekend Classes:</strong> Saturdays <br>
                  <strong>Price:</strong> <del> 350,000</del> N299,999
                </p>
                <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="text-blue-600 font-semibold">Apply Now →</a>
              </div>
              <!-- Image -->
              <div class="w-full">
                <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737717982/Goals/undraw_cloud-hosting_tfeh.svg" alt="Cloud Computing Icon" class="w-full h-64 object-cover rounded-lg">
              </div>
            </div>

            <!-- Course 3: Image Left, Content Right -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-md">
              <!-- Image -->
              <div class="w-full">
                <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737717982/Goals/undraw_in-the-zone_07y7.svg" alt="Customer Support Icon" class="w-full h-64 object-cover rounded-lg">
              </div>
              <!-- Content -->
              <div>
                <h3 class="text-2xl font-semibold mb-4">Customer Support/Success</h3>
                <p class="text-gray-600 mb-4">
                  Gain essential communication, problem-solving, and technical skills to excel in tech-driven customer support roles.
                </p>
                
                <p class="text-gray-700 mb-4">
                  <strong>Next Cohort:</strong> March 1st, 2025 <br>
                  <strong>Weekend Classes:</strong> Saturdays <br>
                  <strong>Price:</strong> <del> 350,000</del> N299,999
                </p>
                <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="text-blue-600 font-semibold">Apply Now →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  `
})
export class CommunityEventsComponent { }