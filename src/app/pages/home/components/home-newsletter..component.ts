import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NewsletterService } from '../../../shared/services/newsletter.service';

@Component({
  selector: "app-home-newsletter",
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="py-10 md:py-16 bg-blue-50/30">
      <div
        class="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden md:flex md:flex-row-reverse"
      >
        <div
          class="p-8 md:p-12 md:basis-2/3 flex flex-col justify-center text-center md:text-left"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Join Our Newsletter
          </h2>
  
          <p class="text-gray-600 mb-6">
            Stay up to date with our latest insights, course launches, and
            special offers. Join our community of over 10,000 subscribers.
          </p>
  
          <form
            class="w-full flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            (ngSubmit)="handleFormSubmit()"
          >
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 w-full sm:w-auto p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              name="email"
              [(ngModel)]="email"
            />
            <button
              type="submit"
              class="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md"
              [disabled]="!email()"
            >
              Subscribe
            </button>
          </form>
        </div>
  
        <div class="md:basis-1/3 hidden md:block">
          <div
            class="w-full h-full flex items-center justify-center bg-blue-500 p-8 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-24 h-24 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-5H8l4-5v5h3l-4 5z"
              />
            </svg>
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