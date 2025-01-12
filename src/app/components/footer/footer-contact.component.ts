import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  standalone: true,
  template: `
    <div>
      <h4 class="text-lg font-semibold mb-4">Contact</h4>
      <ul class="space-y-2 text-gray-400">
        <li>Email: <a href="mailto:info@scalefort.org">info&#64;scalefort.org</a></li>
        <li>Whatsapp: <a href="https://wa.me/message/H6MHZGJ2FLYHM1">+234 815 840 6306</a></li>
      </ul>
    </div>
  `
})
export class FooterContactComponent {}