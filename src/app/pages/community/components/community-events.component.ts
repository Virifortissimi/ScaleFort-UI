import { Component } from '@angular/core';

@Component({
  selector: 'app-community-events',
  standalone: true,
  template: `
<section class="py-16 bg-gradient-to-r from-blue-50 to-blue-100 parallax">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center text-blue-600 animate__animated animate__fadeIn">Basic (Foundational Classes)</h2>
    <p class="text-lg text-gray-700 text-center mb-8">Get started on your tech journey with our foundational classes. Our courses are designed to provide you with essential skills to thrive in today's tech-driven world.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Course 1: Frontend Web Development -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737717982/Goals/undraw_blog_1ca8.svg" alt="Wordpress Development Icon" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Wordpress Development</h3>
          <p class="text-gray-700 mb-4">Master WordPress development and build powerful, customized websites. Build a professional website or e-commerce store. No coding required! 🚀</p>
          <p class="text-gray-800 mb-4"><strong>Next Cohort:</strong> TBD <br><strong>Weekend Classes:</strong> Saturdays <br><strong class="text-red-500">Price:</strong> <del class="text-gray-500">220,000</del> <span class="font-bold text-blue-600">N149,999</span></p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">Apply Now →</a>
        </div>
      </div>

      <!-- Course 2: Cloud Computing -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1740576651/Goals/jxxcvbyk9doxdrrhbvmq.svg" alt="Leverage AI Icon" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Build A Website With AI</h3>
          <p class="text-gray-700 mb-4">Build and Deploy your website in under 2 Hours leveraging AI technologies. Start your journey to a new career or building your personal website yourself.</p>
          <p class="text-gray-800 mb-4"><strong>Next Cohort:</strong> TBD <br><strong>Time:</strong> 5pm / 7pm <br><strong class="text-red-500">Price:</strong> <del class="text-gray-500">N13,999</del> <span class="font-bold text-blue-600">N10,000</span></p>
          <a href="https://paystack.com/pay/scalefort-build-with-ai" target="_blank" class="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">Apply Now →</a>
        </div>
      </div>

      <!-- Course 3: Customer Support/Success -->
      <div class="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <div class="w-full mb-6">
          <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737717982/Goals/undraw_in-the-zone_07y7.svg" alt="Customer Support Icon" class="w-full h-48 object-cover rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-blue-600 mb-4">Customer Support/Success</h3>
          <p class="text-gray-700 mb-4">Learn how to provide top-notch customer service and support for technology products. Develop key skills to thrive in customer success roles, from communication to problem-solving.</p>
          <p class="text-gray-800 mb-4"><strong>Next Cohort:</strong> TBD <br><strong>Weekend Classes:</strong> Saturdays <br><strong class="text-red-500">Price:</strong> <del class="text-gray-500">220,000</del> <span class="font-bold text-blue-600">N149,999</span></p>
          <a href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" target="_blank" class="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">Apply Now →</a>
        </div>
      </div>

    </div>
  </div>
</section>

  `
})
export class CommunityEventsComponent { }
