import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinkComponent } from '../shared/nav-link/nav-link.component';
import { MenuToggleComponent } from '../shared/menu-toggle/menu-toggle.component';
import { SlideMenuComponent } from '../shared/slide-menu/slide-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NavLinkComponent, MenuToggleComponent, SlideMenuComponent],
  template: `
    <header class="bg-white shadow-lg fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0">
              <a routerLink="/" class="text-2xl font-bold text-blue-600"><img src='https://res.cloudinary.com/virifortissimi/image/upload/v1736430718/Goals/unkxyhoxbt2mgqikwe8y.png' alt='logo' width='200px'/></a>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-center space-x-4">
                <a routerLink="/" routerLinkActive="text-blue-600" 
                  class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a routerLink="/about" routerLinkActive="text-blue-600"
                  class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a routerLink="/services" routerLinkActive="text-blue-600"
                  class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a routerLink="/bulk-vouchers" routerLinkActive="text-blue-600"
                  class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Bulk Vouchers</a>
                <a routerLink="/mentorship" routerLinkActive="text-blue-600"
                  class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Mentorship</a>
                <!-- <a routerLink="/resources" routerLinkActive="text-blue-600" class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resources</a> -->
                <a routerLink="/courses" routerLinkActive="text-blue-600"
                  class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                <a routerLink="/faq" routerLinkActive="text-blue-600"
                  class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              </div>
            </div>
            <div class="hidden md:block">
              <a routerLink="/get-started" 
                class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                Register
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
  `
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}