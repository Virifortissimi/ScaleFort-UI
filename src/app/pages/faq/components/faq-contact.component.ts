import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-contact',
  standalone: true,
  template: `
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p class="text-gray-600 mb-6">
          Our support team is here to help you with any questions you might have.
        </p>
        <button class="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">
          Contact Support
        </button>
      </div>
    </section>
  `
})
export class FaqContactComponent {}