import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-hero',
  standalone: true,
  template: `
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p class="text-xl">Find answers to common questions about ScaleFort's mentorship and resources.</p>
      </div>
    </section>
  `
})
export class FaqHeroComponent {}