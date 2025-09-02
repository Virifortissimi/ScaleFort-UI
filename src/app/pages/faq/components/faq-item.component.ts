import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [NgClass],
  template: `
    <div id="faq-section" class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
      <button
        (click)="toggle()"
        [attr.aria-expanded]="isOpen"
        aria-controls="faq-content"
        class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
      >
        <h3 class="text-lg font-semibold text-gray-900">{{ question }}</h3>
        <span class="flex-shrink-0 ml-4">
          <svg class="w-6 h-6 text-blue-600 transform transition-transform duration-300" 
               [class.rotate-180]="isOpen" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id="faq-content"
        [ngClass]="{'max-h-0': !isOpen, 'max-h-[500px]': isOpen}"
        class="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div class="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
          <p class="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
            {{ answer }}
          </p>
        </div>
      </div>
    </div>
  `
})
export class FaqItemComponent {
  @Input() question!: string;
  @Input() answer!: string;
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}