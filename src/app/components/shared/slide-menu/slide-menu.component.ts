import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slide-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

    <!-- Services Dropdown -->
    <div class="relative">
      <button 
        class="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
        (click)="toggleDropdown()"
        aria-haspopup="true"
        [attr.aria-expanded]="showDropdown ? 'true' : 'false'"
      >
        Services
        <span 
          class="ml-2 transition-transform duration-200"
          [ngClass]="{ 'rotate-90': showDropdown }">
          ›
        </span>
      </button>

      <!-- Dropdown Menu -->
      <div 
        *ngIf="showDropdown"
        class="absolute left-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-50 transition-all duration-300 ease-in-out"
        [ngClass]="{ 'opacity-0': !showDropdown, 'opacity-100': showDropdown }"
      >
        <a 
          *ngFor="let service of services" 
          [routerLink]="service.path"
          (click)="close.emit()"
          class="block px-4 py-3 text-xl font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {{ service.text }}
        </a>
      </div>
    </div>
  </div>
</nav>


  `
})
export class SlideMenuComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  showDropdown = false; // State to toggle the dropdown visibility

  links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/faq', text: 'FAQ' },
    { path: '/get-started', text: 'Register' }
  ];

  // Dropdown menu items for Services
  services = [
    { path: '/tech-school', text: 'Tech School' },
    { path: '/corporate-training', text: 'Corporate Training' },
    { path: '/it-services', text: 'IT Services' }
  ];

  // Method to toggle the dropdown visibility
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
