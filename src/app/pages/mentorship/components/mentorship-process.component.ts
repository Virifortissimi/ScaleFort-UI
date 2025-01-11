import { Component } from '@angular/core';

@Component({
  selector: 'app-mentorship-process',
  standalone: true,
  template: `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-4">1</div>
            <h3 class="text-xl font-semibold mb-2">Explore Our Programs</h3>
            <p class="text-gray-600">Visit our website to learn about our learning tracks, including foundational and advanced classes in tech skills like 
            Cloud, .NET backend development, and more. Choose the path that fits your career goals</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-4">2</div>
            <h3 class="text-xl font-semibold mb-2">Complete the Application</h3>
            <p class="text-gray-600">Fill out the online application form and pay a non-refundable application fee. 
            This step ensures we gather all necessary details to match you to the right training.
            </p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-4">3</div>
            <h3 class="text-xl font-semibold mb-2"> Secure Your Spot</h3>
            <p class="text-gray-600">Confirm your participation, Prepare by completing all pre training instructions. This commitment reinforces your dedication to the journey</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-4">4</div>
            <h3 class="text-xl font-semibold mb-2">Kickstart Your Journey</h3>
            <p class="text-gray-600">Once enrolled, prepare to embark on a transformative learning experience. Dive into live classes, real-world projects, mentorship sessions, and internship opportunities designed to set you up for success.

              Scalefort is your gateway to tech excellence—take the first step today!</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MentorshipProcessComponent {}