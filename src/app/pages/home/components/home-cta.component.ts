import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Scale Your Tech Journey?</h2>
        <p class="text-xl text-gray-600 mb-8">Join thousands of tech professionals in Lagos, Nigeria and Africa who are scaling their careers with ScaleFort.</p>
        <div class="space-x-4">
          <a routerLink="/get-started" class="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold inline-block">
            Get Started
          </a>
          <a
            href="assets/pdf/scalefort-brochure.pdf"
            download="Scalefort-Brochure.pdf" 
            class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold inline-block">
              Download Brochure
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeCtaComponent {}