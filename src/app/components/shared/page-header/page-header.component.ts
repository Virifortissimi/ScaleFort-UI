import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="text-center mb-16">
      <h1 class="text-5xl font-bold mb-4">{{ title }}</h1>
      <p *ngIf="subtitle" class="text-xl text-gray-600">{{ subtitle }}</p>
    </div>
  `
})
export class PageHeaderComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
}