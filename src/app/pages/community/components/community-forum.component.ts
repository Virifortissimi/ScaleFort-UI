import { Component } from '@angular/core';

@Component({
  selector: 'app-community-forum',
  standalone: true,
  template: `
    <section class="py-16 bg-gradient-to-r from-blue-50 to-blue-100 parallax">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center text-blue-600 animate__animated animate__fadeIn">Advanced (Specialized Classes)</h2>
    <p class="text-lg text-gray-700 text-center mb-8">Enhance your skills with our advanced courses tailored for developers ready to dive deep into specialized areas of technology.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Course 1: Backend Development with .NET -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737719227/Goals/undraw_programming_65t2.svg" alt="Backend Development with .NET" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Backend Development with .NET</h3>
          <p class="text-gray-700 mb-4">Build robust, scalable, and secure APIs and systems using .NET technologies. Perfect for developers looking to specialize in enterprise-level applications.</p>
          <p class="text-gray-800 mb-4"><strong>Next Cohort:</strong> March 1st, 2025 <br><strong>Weekend Classes:</strong> Saturdays <br><strong class="text-red-500">Price:</strong> <del class="text-gray-500">350,000</del> <span class="font-bold text-blue-600">N299,999</span></p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">Apply Now →</a>
        </div>
      </div>

      <!-- Course 2: Backend Development with Python -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737719228/Goals/undraw_firmware_3fxd.svg" alt="Backend Development with Python" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Backend Development with Python</h3>
          <p class="text-gray-700 mb-4">Develop efficient, high-performance backends using Python and Django. Ideal for building complex systems that require scalability and flexibility.</p>
          <p class="text-gray-800 mb-4"><strong>Next Cohort:</strong> March 1st, 2025 <br><strong>Weekend Classes:</strong> Saturdays <br><strong class="text-red-500">Price:</strong> <del class="text-gray-500">350,000</del> <span class="font-bold text-blue-600">N299,999</span></p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">Apply Now →</a>
        </div>
      </div>

      <!-- Course 3: Cloud Computing (Example) -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737717982/Goals/undraw_cloud-hosting_tfeh.svg" alt="Cloud Computing" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Cloud Computing with AWS & Azure</h3>
          <p class="text-gray-700 mb-4">Learn how to build and manage scalable applications on cloud platforms like AWS and Azure. This course will give you hands-on experience with cloud deployments and services.</p>
          <p class="text-gray-800 mb-4"><strong>Next Cohort:</strong> March 1st, 2025 <br><strong>Weekend Classes:</strong> Saturdays <br><strong class="text-red-500">Price:</strong> <del class="text-gray-500">350,000</del> <span class="font-bold text-blue-600">N299,999</span></p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">Apply Now →</a>
        </div>
      </div>

      <!-- Course 4: Frontend Web Development -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737717982/Goals/undraw_blog_1ca8.svg" alt="Frontend Development Icon" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Frontend Web Development</h3>
          <p class="text-gray-700 mb-4">Learn HTML, CSS, and JavaScript to build stunning, interactive websites. Start your journey as a web developer with the fundamental skills required in the industry.</p>
          <p class="text-gray-800 mb-4"><strong>Next Cohort:</strong> March 1st, 2025 <br><strong>Weekend Classes:</strong> Saturdays <br><strong class="text-red-500">Price:</strong> <del class="text-gray-500">350,000</del> <span class="font-bold text-blue-600">N299,999</span></p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">Apply Now →</a>
        </div>
      </div>

      <!-- Course 4: Cyber Security -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737719228/Goals/undraw_firmware_3fxd.svg" alt="Cyber Security Icon" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Cyber Security</h3>
          <p class="text-gray-700 mb-4">Gain essential skills in cyber security, from threat detection to risk management. Learn how to protect digital assets, prevent cyber threats, and secure networks against attacks.</p>
          <p class="text-gray-800 mb-4"><strong>Next Cohort:</strong> March 1st, 2025 <br><strong>Weekend Classes:</strong> Saturdays <br><strong class="text-red-500">Price:</strong> <del class="text-gray-500">350,000</del> <span class="font-bold text-blue-600">N299,999</span></p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">Apply Now →</a>
        </div>
      </div>

    </div>
  </div>
</section>

  `
})
export class CommunityForumComponent {}