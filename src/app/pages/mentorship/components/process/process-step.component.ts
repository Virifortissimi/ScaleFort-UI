import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-step',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="relative">
      <!-- Step Number -->
      <div 
        class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 
               shadow-lg transform transition-transform hover:scale-110 hover:rotate-12"
      >
        {{ stepNumber }}
      </div>
      
      <!-- Content -->
      <div class="space-y-2">
        <h3 class="text-xl font-semibold">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>

      <!-- Connector Line -->
      <div 
        *ngIf="!isLast"
        class="absolute top-6 left-12 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent -z-10"
      ></div>
    </div>
  `
})
export class ProcessStepComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() isLast = false;
}