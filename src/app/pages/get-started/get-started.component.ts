import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  standalone: true,
  template: `
    <div class="pt-16">
      <section class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">Get Started with ScaleFort</h1>
          <p class="text-xl">Your journey to tech excellence begins here</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4">
          <div class="space-y-12">
            <!-- Requirements -->
            <div>
              <h2 class="text-2xl font-bold mb-6">Requirements</h2>
              <ul class="space-y-4 text-gray-600">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Must be actively involved in tech (developer, designer, product manager, etc.)</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Minimum of 1 year experience in your field</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Commitment to attend scheduled mentorship sessions</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Strong desire to learn and grow in your tech career</span>
                </li>
              </ul>
            </div>

            <!-- Process -->
            <div>
              <h2 class="text-2xl font-bold mb-6">Application Process</h2>
              <ol class="space-y-4 text-gray-600">
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Fill out the application form with your background and goals</span>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>Our team reviews your application (typically within 48 hours)</span>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Schedule an initial consultation call if approved</span>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <span>Get matched with your mentor and begin your journey</span>
                </li>
              </ol>
            </div>

            <!-- Apply Button -->
            <div class="text-center">
              <a 
                href="https://docs.google.com/forms/d/e/your-form-id/viewform" 
                target="_blank"
                rel="noopener noreferrer" 
                class="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
              <p class="mt-4 text-sm text-gray-500">
                Applications are reviewed on a rolling basis
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class GetStartedComponent {}