import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuToggleComponent } from '../shared/menu-toggle/menu-toggle.component';
import { SlideMenuComponent } from '../shared/slide-menu/slide-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MenuToggleComponent, SlideMenuComponent, CommonModule],
  template: `
    <header class="bg-white shadow-lg fixed w-full top-0 z-50 h-[4rem]">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold text-blue-600">
              <img src='https://res.cloudinary.com/virifortissimi/image/upload/v1736430718/Goals/unkxyhoxbt2mgqikwe8y.png' alt='logo' width='200px'/>
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-4 relative">
              <a routerLink="/" routerLinkActive="text-blue-600" 
                class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a routerLink="/about" routerLinkActive="text-blue-600"
                class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>

              <!-- Services dropdown -->
              <div class="relative"
                  (mouseenter)="onMouseEnter()"
                  (mouseleave)="onMouseLeave()">

                <button class="flex items-center hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                  Services
                  <span 
                    class="ml-1 transition-transform duration-200"
                    [ngClass]="{ 'rotate-90': showDropdown }">
                    ›
                  </span>
                </button>
                <div *ngIf="showDropdown"
                    class="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-80 z-50 border border-gray-100
                            transition-opacity transition-transform duration-300 delay-100 ease-out
                            opacity-100 translate-y-0 animate-fade-slide">
                  <ng-container *ngFor="let item of serviceLinks">
                    <a [routerLink]="item.link"
                      class="flex items-start px-4 py-3 hover:bg-gray-100 transition-colors duration-200">
                      <div class="text-xl mr-3">{{ item.icon }}</div>
                      <div>
                        <div class="font-medium text-sm text-gray-800">{{ item.title }}</div>
                        <div class="text-xs text-gray-500">{{ item.description }}</div>
                      </div>
                    </a>
                  </ng-container>
                </div>

              </div>

              <a routerLink="/faq" routerLinkActive="text-blue-600"
                class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-4 animate-slide-up" style="animation-delay: 600ms">
            <!-- Earn button (secondary) -->
            <a routerLink="/earn"
              class="inline-flex items-center px-5 py-2 rounded-md border border-blue-500 text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700 transition-all duration-200">
              Earn
            </a>

            <!-- Get in Touch button (primary) -->
            <a routerLink="/login" 
              class="inline-flex items-center px-5 py-2 rounded-md border border-blue-500 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200">
              Login
            </a>
          </div>

          <app-menu-toggle (toggle)="toggleMenu()"></app-menu-toggle>
        </div>
      </div>

      <app-slide-menu 
        [isOpen]="isMenuOpen"
        (close)="closeMenu()"
      ></app-slide-menu>
    </header>
  `,
  styles: [`
    .rotate-90 {
      transform: rotate(90deg);
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;
  showDropdown = false;
  hideDropdownTimeout: any;

  serviceLinks = [
    { icon: '🎓', title: 'Tech School', description: 'Industry-driven curriculum with hands-on learning experience', link: '/courses' },
    { icon: '💼', title: 'Corporate Training', description: 'Customized upskilling programs for your workforce', link: '/corporate-training' },
    { icon: '🚀', title: 'IT Services', description: 'End-to-end software solutions and consulting', link: '/services' },
    // { icon: '🔄', title: 'Innovation Hub', description: 'Integrated ecosystem for continuous growth', link: '/innovation-hub' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onMouseEnter() {
    clearTimeout(this.hideDropdownTimeout);
    this.showDropdown = true;
  }

  onMouseLeave() {
    this.hideDropdownTimeout = setTimeout(() => {
      this.showDropdown = false;
    }, 100); // 100ms delay before hiding
  }
}

