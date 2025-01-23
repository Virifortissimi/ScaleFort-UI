import { Component } from '@angular/core';

@Component({
  selector: 'app-home-features',
  standalone: true,
  template: `
    <section class="py-20">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Why Choose ScaleFort?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center p-6">
        <div class="text-blue-600 text-4xl mb-4">🎯</div>
        <h3 class="text-xl font-semibold mb-4">Expert Training</h3>
        <p class="text-gray-600">Get matched with mentors who understand your goals and can guide your growth.</p>
      </div>
      <div class="text-center p-6">
        <div class="text-blue-600 text-4xl mb-4">📚</div>
        <h3 class="text-xl font-semibold mb-4">Rich Resources</h3>
        <p class="text-gray-600">Access a comprehensive library of guides, tutorials, and tools.</p>
      </div>
      <div class="text-center p-6">
        <div class="text-blue-600 text-4xl mb-4">🤝</div>
        <h3 class="text-xl font-semibold mb-4">Strong Community</h3>
        <p class="text-gray-600">Join a network of tech professionals who support and inspire each other.</p>
      </div>
    </div>

    <!-- New Div: BootCamp Promo Section -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Left: Image -->
      <div>
        <img
          src="https://res.cloudinary.com/virifortissimi/image/upload/v1737550959/Goals/Youtube_Live.png"
          alt="Upcoming Webinar"
          class="w-full rounded-lg shadow-lg"
        />
      </div>
      <!-- Right: Intro and Link -->
      <div>
        <h3 class="text-2xl font-bold mb-4">Upcoming Webinar</h3>
        <p class="text-gray-600 mb-4">
          Don't know where to start your tech career in 2025? Attend our upcoming Webinar and
          see firsthand how we unveil the steps to scaling your tech careers this 2025. 
        </p>
        <a
          href="https://bit.ly/sc-y"
          class="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Attend Webinar
        </a>
      </div>
    </div>
  </div>
</section>

  `
})
export class HomeFeaturesComponent { }