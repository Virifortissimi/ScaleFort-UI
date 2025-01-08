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
            <h3 class="text-xl font-semibold mb-2">Sign Up</h3>
            <p class="text-gray-600">Create your profile and set your goals</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-4">2</div>
            <h3 class="text-xl font-semibold mb-2">Match</h3>
            <p class="text-gray-600">Get matched with the perfect mentor</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-4">3</div>
            <h3 class="text-xl font-semibold mb-2">Connect</h3>
            <p class="text-gray-600">Schedule and attend mentoring sessions</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-4">4</div>
            <h3 class="text-xl font-semibold mb-2">Grow</h3>
            <p class="text-gray-600">Track progress and achieve your goals</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MentorshipProcessComponent {}