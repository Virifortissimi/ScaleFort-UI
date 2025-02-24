import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vouchers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-16">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl font-bold mb-6 animate-fade-in">Bulk Course Voucher</h1>
          <p class="text-xl mb-8 animate-fade-in delay-100">
            Signal the value of skills advancement by funding Scalefort with training vouchers.
          </p>
          <a
            href="#pricing"
            class="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-all animate-fade-in delay-200"
          >
            View Pricing
          </a>
        </div>
      </section>

      <!-- Main Content -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Left Column -->
      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div class="flex items-center mb-6">
          <svg class="w-10 h-10 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <h3 class="text-2xl font-bold text-gray-900">Scalefort Training Vouchers</h3>
        </div>
        <p class="text-gray-600 mb-6">
          Supporting your team or beneficiaries in getting trained by Scalefort can help them—and you—improve skills in <strong>Frontend Development</strong>, <strong>Backend Development</strong>, and <strong>Cloud Computing</strong>. Set a goal for growth and certification in your organization, and kickstart learning by providing training vouchers to team members.
        </p>
        <p class="text-gray-600 mb-6">
          With Scalefort Training Vouchers, you can empower your team to:
        </p>
        <ul class="text-gray-600 mb-6 space-y-3">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Build faster and more efficient applications.
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Improve security and reduce vulnerabilities.
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Reduce downtime and improve deployment efficiency.
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Innovate with the latest technologies and frameworks.
          </li>
        </ul>
        <p class="text-gray-600">
          Whether you're upskilling your team or supporting beneficiaries, Scalefort Training Vouchers provide a flexible and scalable way to invest in their future—and yours.
        </p>
      </div>

      <!-- Right Column -->
      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div class="flex items-center mb-6">
          <svg class="w-10 h-10 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <h3 class="text-2xl font-bold text-gray-900">Why Choose Scalefort Training?</h3>
        </div>
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-gray-600"><strong>Expert-Led Training:</strong> Learn from industry experts with real-world experience in Frontend, Backend, and Cloud technologies.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-gray-600"><strong>Hands-On Learning:</strong> Gain practical skills through interactive labs, projects, and real-world scenarios.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-gray-600"><strong>Flexible Options:</strong> Choose from self-paced courses, live sessions, or customized training programs tailored to your needs.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-gray-600"><strong>Certification Ready:</strong> Prepare for industry-recognized certifications and validate your team's skills.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <!-- IT Leaders Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-12">What IT Leaders Say About Having Scalefort Trained Staff</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Increased Productivity -->
            <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div class="text-6xl font-bold text-blue-600 animate-bounce">
                90%
              </div>
              <p class="text-gray-600 mt-4">Increased Productivity</p>
            </div>

            <!-- Improved Security -->
            <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div class="text-6xl font-bold text-blue-600 animate-bounce">
                89%
              </div>
              <p class="text-gray-600 mt-4">Improved Skill</p>
            </div>

            <!-- Increased Innovation -->
            <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div class="text-6xl font-bold text-blue-600 animate-bounce">
                91%
              </div>
              <p class="text-gray-600 mt-4">Increased Innovation</p>
            </div>

            <!-- Staff Retention -->
            <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div class="text-6xl font-bold text-blue-600 animate-bounce">
                96%
              </div>
              <p class="text-gray-600 mt-4">Improved Staff Retention</p>
            </div>
          </div>
        </div>
      </section>


      <!-- Pricing Section -->
      <!-- Pricing Section -->
<section id="pricing" class="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-12">Pricing</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Plan 1: 5 Students -->
      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">5 Students</h3>
        <p class="text-gray-600 mb-6">Perfect for small teams or individual learners.</p>
        <div class="text-4xl font-bold text-blue-600 mb-6">1,000,000 NGN</div>
        <ul class="text-gray-600 mb-6 space-y-3">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Certification Vouchers
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Volume Discounts
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            
          </li>
        </ul>
        <a
          href="https://paystack.com/pay/scalefort-voucher-5"
          class="inline-block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          Get Started
        </a>
      </div>

      <!-- Plan 2: 15 Students -->
      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">15 Students</h3>
        <p class="text-gray-600 mb-6">Ideal for medium-sized teams.</p>
        <div class="text-4xl font-bold text-blue-600 mb-6">2,500,000 NGN</div>
        <ul class="text-gray-600 mb-6 space-y-3">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Certification Vouchers
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Volume Discounts
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Priority Support
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </li>
        </ul>
        <a
          href="https://paystack.com/pay/scalefort-voucher-15"
          class="inline-block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          Get Started
        </a>
      </div>

      <!-- Plan 3: Custom Plan -->
      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Custom Plan</h3>
        <p class="text-gray-600 mb-6">Tailored for large teams or organizations.</p>
        <div class="text-4xl font-bold text-blue-600 mb-6">Contact Us</div>
        <ul class="text-gray-600 mb-6 space-y-3">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Certification Vouchers
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Even More Volume Discounts
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Priority Support
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Custom Training Options
          </li>
        </ul>
        <a
          href="mailto:sales@scalefort.org"
          class="inline-block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>



<!-- Testimonials Section -->
<section class="py-16 bg-gray-100">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold text-blue-600 mb-8">What Our Graduates Say</h2>
    <div class="space-y-6 text-lg text-gray-700">
      <div class="border p-6 rounded-md shadow-lg">
        <p class="italic">"Scalefort provided me with a solid foundation in programming, equipping me with the technical skills and knowledge I needed to thrive in the tech industry."</p>
        <p class="font-semibold mt-4">- Maureen O., Software Engineer, Sterling Bank</p>
      </div>
      <div class="border p-6 rounded-md shadow-lg">
        <p class="italic">"Scalefort was a game-changer for me. The structured learning, practical projects, and supportive mentors provided all I needed to transition into tech confidently."</p>
        <p class="font-semibold mt-4">- Samuel A., Dotnet Developer, Kaybill Technologies</p>
      </div>
    </div>
  </div>
</section>
    </div>
  `,
  // styleUrls: ['./vouchers.component.css'], // Optional: Add custom styles if needed
})
export class VouchersComponent {}