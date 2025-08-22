import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NewsletterService } from '../../../shared/services/newsletter.service';

@Component({
  selector: "app-home-newsletter",
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="py-12 md:py-20 bg-gradient-to-br from-blue-50/40 to-indigo-50/40">
  <div class="max-w-6xl mx-auto px-4">
    <div class="bg-white shadow-2xl rounded-3xl overflow-hidden md:flex md:flex-row-reverse transition-all duration-300 hover:shadow-2xl">
      <!-- Text Content Section -->
      <div class="p-8 md:p-12 md:basis-2/3 flex flex-col justify-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Join Our <span class="text-blue-600">Exclusive</span> Newsletter
        </h2>
  
        <p class="text-gray-600 mb-6 text-lg leading-relaxed">
          Stay ahead with our latest insights, course launches, and special offers. Join our community of over <span class="font-semibold text-blue-600">10,000+</span> subscribers who receive valuable content directly.
        </p>
  
        <form
          class="w-full flex flex-col sm:flex-row items-stretch gap-3 max-w-md"
          (ngSubmit)="handleFormSubmit()"
        >
          <div class="flex-1 relative">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
              name="email"
              [(ngModel)]="email"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <button
            type="submit"
            class="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-md flex items-center justify-center gap-2"
            [disabled]="!email()"
          >
            <span>Subscribe</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </form>
        
        <p class="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
  
      <!-- Visual Section -->
      <div class="md:basis-1/3 hidden md:flex relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-95"></div>
        <div class="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-white">
          <div class="bg-white/20 p-5 rounded-2xl mb-6 transform rotate-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-5H8l4-5v5h3l-4 5z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-center">Weekly Insights</h3>
          <p class="text-sm text-white/90 text-center">Curated content delivered to your inbox every Wednesday</p>
          
          <!-- Decorative elements -->
          <div class="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/10"></div>
          <div class="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/10"></div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
})
export class HomeNewsletterComponent {
  private readonly _newsletterService = inject(NewsletterService);
  private readonly messageService = inject(MessageService);
  
  email = signal<string>('');

  handleFormSubmit() {
    this._newsletterService
      .subscribeNewsletter(this.email())
      .pipe()
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'You have successfully subscribed to our newsletter.',
            life: 5000,
          });
          this.email.set('');
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Newsletter error',
            detail: 'Something went wrong',
            life: 5000,
          });
        },
      });
  }
}