import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  standalone: true,
  template: `
    <div>

      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl font-extrabold mb-6">Register with ScaleFort</h1>
          <p class="text-xl mb-6">Your journey to tech excellence begins here. Join us and make a real impact.</p>
          
          <!-- Download Brochure Button -->
          <a 
            href="assets/pdf/scalefort-brochure.pdf"
            download="Scalefort-Brochure.pdf" 
            class="bg-white text-blue-600 px-10 py-4 rounded-md font-semibold inline-block hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
              <path fill-rule="evenodd" d="M5 13l4 4 4-4H9V3H7v10H5z" clip-rule="evenodd" />
            </svg> Download Brochure
          </a>
        </div>
      </section>

      <!-- Requirements Section -->
<section class="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold text-blue-600 mb-8">Requirements</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Requirement Item 1 -->
      <div class="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
          <path fill-rule="evenodd" d="M9 11V5H5v6H9zm0 4H5v6h4v-6z" clip-rule="evenodd" />
        </svg>
        <span class="text-lg text-gray-700 font-medium">Basic computer literacy: Familiarity with technology is essential.</span>
      </div>

      <!-- Requirement Item 2 -->
      <div class="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
          <path fill-rule="evenodd" d="M9 11V5H5v6H9zm0 4H5v6h4v-6z" clip-rule="evenodd" />
        </svg>
        <span class="text-lg text-gray-700 font-medium">Passion for learning and a drive to grow in the field.</span>
      </div>

      <!-- Requirement Item 3 -->
      <div class="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
          <path fill-rule="evenodd" d="M9 11V5H5v6H9zm0 4H5v6h4v-6z" clip-rule="evenodd" />
        </svg>
        <span class="text-lg text-gray-700 font-medium">Commitment to attend scheduled mentorship sessions.</span>
      </div>

      <!-- Requirement Item 4 -->
      <div class="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
          <path fill-rule="evenodd" d="M9 11V5H5v6H9zm0 4H5v6h4v-6z" clip-rule="evenodd" />
        </svg>
        <span class="text-lg text-gray-700 font-medium">Personal computer with minimum specs: 250 GB Storage, 4GB RAM, Speakers, Microphone, and Camera.</span>
      </div>
    </div>
  </div>
</section>


      <!-- Application Process Section -->
      <section class="py-16 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-blue-600 mb-8">Application Process</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <!-- Step 1 -->
            <div class="relative p-6 bg-white shadow-lg rounded-xl text-center">
              <div class="absolute left-0 right-0 top-[-16px] flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                  <path fill-rule="evenodd" d="M5 13l4 4 4-4H9V3H7v10H5z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="font-bold text-xl mb-4">Step 1: Fill out the application</h3>
              <p class="text-gray-700">Provide your background and goals to start the process.</p>
            </div>

            <!-- Step 2 -->
            <div class="relative p-6 bg-white shadow-lg rounded-xl text-center">
              <div class="absolute left-0 right-0 top-[-16px] flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                  <path fill-rule="evenodd" d="M5 13l4 4 4-4H9V3H7v10H5z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="font-bold text-xl mb-4">Step 2: Application Review</h3>
              <p class="text-gray-700">Our team will review your application within 48 hours.</p>
            </div>

            <!-- Step 3 -->
            <div class="relative p-6 bg-white shadow-lg rounded-xl text-center">
              <div class="absolute left-0 right-0 top-[-16px] flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                  <path fill-rule="evenodd" d="M5 13l4 4 4-4H9V3H7v10H5z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="font-bold text-xl mb-4">Step 3: Payment</h3>
              <p class="text-gray-700">Make the payment to proceed with the training.</p>
            </div>

            <!-- Step 4 -->
            <div class="relative p-6 bg-white shadow-lg rounded-xl text-center">
              <div class="absolute left-0 right-0 top-[-16px] flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                  <path fill-rule="evenodd" d="M5 13l4 4 4-4H9V3H7v10H5z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="font-bold text-xl mb-4">Step 4: Consultation</h3>
              <p class="text-gray-700">Schedule an initial consultation call with our experts.</p>
            </div>

            <!-- Step 5 -->
            <div class="relative p-6 bg-white shadow-lg rounded-xl text-center">
              <div class="absolute left-0 right-0 top-[-16px] flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                  <path fill-rule="evenodd" d="M5 13l4 4 4-4H9V3H7v10H5z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="font-bold text-xl mb-4">Step 5: Begin Your Journey</h3>
              <p class="text-gray-700">Start your exciting tech journey with ScaleFort!</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Bank Transfer Section -->
      <section class="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-blue-600 mb-8">Bank Transfer Details</h2>
          <div class="space-y-6 text-left text-lg text-gray-700">
            
            <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Transfer Amount To:</h3>
              <div class="space-y-4">
              
                <!-- FirstBank Account -->
                <div class="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                    <path fill-rule="evenodd" d="M5 3l7 7-7 7V3z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-lg text-gray-700 font-medium">
                    FirstBank - <strong>2046392385</strong> (Account Name: <strong>Scalefort Services</strong>)
                  </span>
                </div>

                <!-- Moniepoint Account -->
                <div class="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                    <path fill-rule="evenodd" d="M5 3l7 7-7 7V3z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-lg text-gray-700 font-medium">
                    Moniepoint MFB - <strong>6908252843</strong> (Account Name: <strong>Scalefort Services</strong>)
                  </span>
                </div>
              </div>
            </div>

            <!-- Steps -->
            <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Next Steps:</h3>
              <div class="flex flex-col space-y-4">
                <!-- Step 1 -->
                <div class="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                    <path fill-rule="evenodd" d="M5 3l7 7-7 7V3z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-lg text-gray-700 font-medium">
                    Send evidence of payment to <a href="mailto:school@scalefort.org" class="text-blue-600">school&#64;scalefort.org</a>
                  </span>
                </div>

                <!-- Step 2 -->
                <div class="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                    <path fill-rule="evenodd" d="M5 3l7 7-7 7V3z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-lg text-gray-700 font-medium">
                    Schedule an initial consultation call.
                  </span>
                </div>

                <!-- Step 3 -->
                <div class="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                    <path fill-rule="evenodd" d="M5 3l7 7-7 7V3z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-lg text-gray-700 font-medium">
                    Begin your journey towards tech excellence.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>




      <!-- Apply Button -->
      <section class="py-16 text-center">
        <div>
          <a 
            href="https://paystack.com/buy/scalefort?discount=LEARN2SCALE2025"  
            target="_blank"
            class="inline-block bg-blue-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
              <path fill-rule="evenodd" d="M5 3l7 7-7 7V3z" clip-rule="evenodd" />
            </svg> Apply Now
          </a>
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
  `
})
export class GetStartedComponent { }
