import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-100 transition-colors duration-300 hover:shadow-lg">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {}