import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-started',
  imports: [RouterLink],
  standalone: true,
  template: `
    <div class="pt-16">
      <section class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-4xl font-bold mb-7">Register with ScaleFort</h1>
          <p class="text-xl">Your journey to tech excellence begins here. </p>
              <a 
                href="assets/pdf/scalefort-brochure.pdf"
                download="Scalefort-Brochure.pdf" 
                class="bg-white text-blue-600 px-8 py-3 mt-7 rounded-md font-semibold inline-block hover:bg-blue-50 transition">
                    Download Brochure
              </a>
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
                  <span>Basic computer literacy: Familiarity with technology is essential.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Passion for learning: A drive to solve problems and grow in the field.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Commitment to attend scheduled mentorship sessions</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Personal Computer: A laptop or PC with the minimum specifications: Minimum 250 GB Storage | 4GB RAM | Functional Speakers Microphone and Camera</span>
                </li>
              </ul>
            </div>
            
            <!-- Apply Button -->
            <div class="text-center">
              <a 
                href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" 
                target="_blank"
                disabled
                rel="noopener noreferrer" 
                class="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
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
                  <span>Make payment of training fee </span>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <span>Schedule an initial consultation call</span>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <span>Begin your journey to a future with Tech</span>
                </li>
              </ol>
            </div>

            <!-- Apply Button -->
            <div class="text-center">
              <a 
                href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" 
                target="_blank"
                disabled
                rel="noopener noreferrer" 
                class="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>

            <div>
              <h2 class="text-2xl font-bold mb-6">Bank Transfer</h2>
              <ol class="space-y-4 text-gray-600">
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Transfer the sum of <del> 350,000</del> N299,999 to <strong>Bank:</strong> Moniepoint MFB, <strong>Account Number:</strong> 6908252843, <strong>Account Name:</strong> Scalefort Services</span>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>Send evidence of payment to <a href="mailto:school@scalefort.org">school&#64;scalefort.org</a></span>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <span>Schedule an initial consultation call</span>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <span>Begin your journey to a future with Tech</span>
                </li>
              </ol>
            </div>
            
            <!-- Apply Button -->
            <div class="text-center">
              <a 
                href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025" 
                target="_blank"
                disabled
                rel="noopener noreferrer" 
                class="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class GetStartedComponent { }