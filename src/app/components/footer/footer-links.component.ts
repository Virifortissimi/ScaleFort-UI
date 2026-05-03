import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h4 class="text-lg font-semibold mb-4">Education</h4>
        <ul class="space-y-2">
          <li>
            <a routerLink="/courses" class="text-gray-400 hover:text-white transition-colors duration-300">Basic Courses</a>
          </li>
          <li>
            <a routerLink="/courses" class="text-gray-400 hover:text-white transition-colors duration-300">Advanced Courses</a>
          </li>
          <li>
            <a routerLink="/mentorship" class="text-gray-400 hover:text-white transition-colors duration-300">Mentorship</a>
          </li>
          <li>
            <a routerLink="/scholarships" class="text-gray-400 hover:text-white transition-colors duration-300">Scholarships</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-semibold mb-4">Services</h4>
        <ul class="space-y-2">
          <li>
            <a routerLink="/services" class="text-gray-400 hover:text-white transition-colors duration-300">IT Solutions</a>
          </li>
          <li>
            <a routerLink="/services" class="text-gray-400 hover:text-white transition-colors duration-300">Corporate Training</a>
          </li>
          <li>
            <a routerLink="/resources" class="text-gray-400 hover:text-white transition-colors duration-300">Resources</a>
          </li>
          <li>
            <a routerLink="/community" class="text-gray-400 hover:text-white transition-colors duration-300">Community</a>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class FooterLinksComponent {}