import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  standalone: true,
  template: `
    <div>
      <h4 class="text-lg font-semibold mb-4">Contact</h4>
      <ul class="space-y-2 text-gray-400">
        <li>Email: contact&#64;scalefort.com</li>
        <li>Phone: +234 123 456 7890</li>
      </ul>
    </div>
  `
})
export class FooterContactComponent {}