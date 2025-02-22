import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slide-menu',
  standalone: true,
  imports: [NgClass, NgFor, RouterLink],
  template: `
    <nav 
      class="fixed top-0 right-0 h-screen w-full bg-white transform transition-transform duration-300 ease-in-out z-50"
      [ngClass]="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Close Button -->
      <button 
        (click)="close.emit()"
        class="absolute top-6 right-6 p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Close menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Menu Items -->
      <div class="h-full flex flex-col justify-center items-center space-y-8 p-6">
        <a 
          *ngFor="let link of links" 
          [routerLink]="link.path"
          (click)="close.emit()"
          class="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
        >
          {{link.text}}
        </a>
      </div>
    </nav>
  `
})
export class SlideMenuComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/services', text: 'Services' },
    { path: '/bulk-vouchers', text: 'Vouchers' },
    { path: '/mentorship', text: 'Mentorship' },
    { path: '/courses', text: 'Courses' },
    { path: '/faq', text: 'FAQ' },
    { path: '/get-started', text: 'Register' }
  ];
}