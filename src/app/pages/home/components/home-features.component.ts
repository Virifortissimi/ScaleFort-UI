import { Component } from '@angular/core';

@Component({
  selector: 'app-home-features',
  standalone: true,
  template: `
    <section class="py-20">
  <div class="max-w-7xl mx-auto px-4">
    <h4 class="text-2xl font-bold text-center mb-12 text-blue-600">Why Choose ScaleFort?</h4>
    <h2 class="text-5xl font-bold text-center mb-12 text-blue-900">We are committed to customer satisfaction.</h2>
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
        <iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/LPbiCAsuWko?si=t21Xc-a_GhBA8qSW&amp;start=1927" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <!-- Right: Intro and Link -->
      <div>
        <h3 class="text-2xl font-bold mb-4">How to prepare for learning a tech skill?</h3>
        <p class="text-gray-600 mb-4">
          Not sure where to start your tech career in 2025? Join our webinar to discover the essential steps for scaling your tech journey this year! 🚀
          Gain insights from industry experts, learn actionable strategies, and set yourself up for success. Don't miss out—secure your spot today! 🚀
        </p>
        <a
          href="https://bit.ly/sc-y"
          class="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Watch on Youtube
        </a>
      </div>
    </div>
  </div>
</section>

  `
})
export class HomeFeaturesComponent { }