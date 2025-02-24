import { Component } from '@angular/core';

@Component({
  selector: 'app-mentorship-process',
  standalone: true,
  template: `
    <section class="py-16 bg-gradient-to-r from-blue-50 to-blue-100 parallax">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center text-blue-600 animate__animated animate__fadeIn">Advanced (Specialized Classes)</h2>
    <p class="text-lg text-gray-700 text-center mb-8">Take your skills to the next level with our advanced specialized courses designed for tech professionals.</p>

    <!-- Courses Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      <!-- Course 1: Backend Development with .NET -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 ease-in-out duration-300">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737719227/Goals/undraw_programming_65t2.svg" alt="Backend Development with .NET" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Backend Development with .NET</h3>
          <p class="text-gray-700 mb-4">Master the creation of scalable APIs and backend systems using .NET technologies. Perfect for enterprise applications.</p>
          <p class="text-gray-800 mb-4">
            <strong>Next Cohort:</strong> March 1st, 2025 <br>
            <strong>Weekend Classes:</strong> Saturdays <br>
            <strong class="text-red-500">Price:</strong> <del class="text-gray-500">350,000</del> <span class="font-bold text-blue-600">N299,999</span>
          </p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 hover:bg-blue-700">Apply Now →</a>
        </div>
      </div>

      <!-- Course 2: Backend Development with Python -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 ease-in-out duration-300">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737719228/Goals/undraw_firmware_3fxd.svg" alt="Backend Development with Python" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Backend Development with Python</h3>
          <p class="text-gray-700 mb-4">Learn to create efficient backends using Python and Django, focusing on scalability and performance.</p>
          <p class="text-gray-800 mb-4">
            <strong>Next Cohort:</strong> March 1st, 2025 <br>
            <strong>Weekend Classes:</strong> Saturdays <br>
            <strong class="text-red-500">Price:</strong> <del class="text-gray-500">350,000</del> <span class="font-bold text-blue-600">N299,999</span>
          </p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 hover:bg-blue-700">Apply Now →</a>
        </div>
      </div>

      <!-- Course 3: Cloud Computing -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 ease-in-out duration-300">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737717982/Goals/undraw_cloud-hosting_tfeh.svg" alt="Cloud Computing" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Cloud Computing with AWS & Azure</h3>
          <p class="text-gray-700 mb-4">Dive into cloud technologies like AWS and Azure. Learn how to build, deploy, and scale cloud applications.</p>
          <p class="text-gray-800 mb-4">
            <strong>Next Cohort:</strong> March 1st, 2025 <br>
            <strong>Weekend Classes:</strong> Saturdays <br>
            <strong class="text-red-500">Price:</strong> <del class="text-gray-500">350,000</del> <span class="font-bold text-blue-600">N299,999</span>
          </p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 hover:bg-blue-700">Apply Now →</a>
        </div>
      </div>

    </div>
  </div>
</section>

  `
})
export class MentorshipProcessComponent {}