import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  template: `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        (click)="isOpen = !isOpen"
        class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
      >
        <h3 class="text-lg font-semibold">{{ question }}</h3>
        <span class="transform transition-transform" [class.rotate-180]="isOpen">
          ↓
        </span>
      </button>
      <div
        class="px-6 py-4 bg-gray-50"
        [class.hidden]="!isOpen"
      >
        <p class="text-gray-600">{{ answer }}</p>
      </div>
    </div>
  `
})
export class FaqItemComponent {
  @Input() question!: string;
  @Input() answer!: string;
  isOpen = false;
}