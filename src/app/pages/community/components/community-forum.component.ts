import { Component } from '@angular/core';

@Component({
  selector: 'app-community-forum',
  standalone: true,
  template: `
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">Advanced (Specialized Classes)</h2>
          <div class="space-y-16">
            <!-- Course 1: Image Left, Content Right -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-md">
              <!-- Image -->
              <div class="w-full">
                <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737719227/Goals/undraw_programming_65t2.svg" alt="Frontend Development Icon" class="w-full h-64 object-cover rounded-lg">
              </div>
              <!-- Content -->
              <div>
                <h3 class="text-xl font-semibold mb-2">Backend Development with .NET:</h3>
                <p class="text-gray-600 mb-4">Build robust, scalable, and secure APIs and systems using .NET technologies.</p>
                
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
                <h3 class="text-xl font-semibold mb-2">Backend Development with Python:</h3>
                <p class="text-gray-600 mb-4"> Develop efficient, high-performance backends using Python and Django. </p>
                
                <p class="text-gray-700 mb-4">
                  <strong>Next Cohort:</strong> March 1st, 2025 <br>
                  <strong>Weekend Classes:</strong> Saturdays <br>
                  <strong>Price:</strong> <del> 350,000</del> N299,999
                </p>
                <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="text-blue-600 font-semibold">Apply Now →</a>
              </div>
              <!-- Image -->
              <div class="w-full">
                <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737719228/Goals/undraw_firmware_3fxd.svg" alt="Cloud Computing Icon" class="w-full h-64 object-cover rounded-lg">
              </div>
            </div>
          </div>
        </div>
      </section>
  `
})
export class CommunityForumComponent {}