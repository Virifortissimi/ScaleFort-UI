import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-brand',
  standalone: true,
  template: `
    <div>
      <h3 class="text-xl font-bold mb-4">ScaleFort</h3>
      <p class="text-gray-400">Scale with Confidence. Scale with ScaleFort.</p>
    </div>
  `
})
export class FooterBrandComponent {}