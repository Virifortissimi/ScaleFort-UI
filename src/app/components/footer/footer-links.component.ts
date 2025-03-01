import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
      <ul class="space-y-2">
        <li>
          <a routerLink="/about" class="text-gray-400 hover:text-white transition">About Us</a>
        </li>
        <li>
          <a routerLink="/services" class="text-gray-400 hover:text-white transition">Services</a>
        </li>
        <li>
          <a routerLink="/bulk-vouchers" class="text-gray-400 hover:text-white transition">Corporate</a>
        </li>
        <li>
          <a routerLink="/mentorship" class="text-gray-400 hover:text-white transition">Mentorship</a>
        </li>
        <li>
          <a routerLink="/courses" class="text-gray-400 hover:text-white transition">Courses</a>
        </li>
        <li>
          <a routerLink="/faq" class="text-gray-400 hover:text-white transition">FAQ</a>
        </li>
      </ul>
    </div>
  `
})
export class FooterLinksComponent {}