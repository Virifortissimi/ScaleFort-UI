import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold text-blue-600">
              <img src='https://res.cloudinary.com/virifortissimi/image/upload/v1736430718/Goals/unkxyhoxbt2mgqikwe8y.png' alt='logo' width='200px'/>
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-4">
              <a routerLink="/" routerLinkActive="text-blue-600" 
                 class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a routerLink="/about" routerLinkActive="text-blue-600"
                 class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              
              <div class="relative group">
                <button class="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                  Services
                </button>
                <div class="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 py-2 w-48 z-50">
                  <a routerLink="/courses" routerLinkActive="text-blue-600"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tech School</a>
                  <a routerLink="/it-services" routerLinkActive="text-blue-600"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT Services</a>
                  <a routerLink="/corporate-training" routerLinkActive="text-blue-600"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Corporate Training</a>
                </div>
              </div>

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
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
