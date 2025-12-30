import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule, NgClass, NgFor } from "@angular/common";
import { RouterLink } from "@angular/router";
import { IUserDetails } from "../../../shared/models/authentication.model";

@Component({
  selector: "app-slide-menu",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav
      [class]="{
        'mobile-menu': true,
        open: isOpen
      }"
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
      <div
        class="overflow-y-auto grid items-center justify-center gap-10 h-full"
      >
        <nav>
          <ul class="flex flex-col items-center gap-[10px]">
            <li *ngFor="let link of links">
              <a
                [routerLink]="link.path"
                (click)="link.path ? close.emit() : toggleDropdown()"
                class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2 relative"
              >
                {{ link.text }}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right-icon lucide-chevron-right"
                  *ngIf="link.text === 'Services'"
                  [class]="{
                    'rotate-90': showDropdown
                  }"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>

              <!-- Services Dropdown -->
              <div
                *ngIf="link.text === 'Services' && showDropdown"
                class="absolute mt-2 py-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-50 transition-all duration-300 ease-in-out"
                [ngClass]="{
                  'opacity-0': !showDropdown,
                  'opacity-100': showDropdown
                }"
              >
                <a
                  *ngFor="let child of link.children"
                  [routerLink]="child.path"
                  (click)="close.emit()"
                  class="block px-4 py-3 text-xl font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {{ child.text }}
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <div class="grid gap-[16px]" *ngIf="!userDetails">
          <a
            routerLink="/earn"
            class="inline-flex items-center px-5 py-2 rounded-md border border-blue-500 text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 justify-center"
          >
            Earn
          </a>

          <a
            routerLink="/login"
            class="inline-flex items-center px-5 py-2 rounded-md border border-blue-500 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 justify-center"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: `
    .mobile-menu {
      display: block;
      position: fixed;
      top: 0px;
      right: -100%;
      background-color: #ffffff;
      width: 80%;
      height: 100vh;
      padding: 24px;
      box-shadow: 0px 8px 24px 0px #081A3D1F;
      z-index: 900;
      transition: all 0.5s;
      &.open {
        right: 0px;
      }
    }

    .rotate-90 {
      transform: rotate(90deg);
    }
  `,
})
export class SlideMenuComponent {
  @Input() isOpen = false;
  @Input() userDetails!: IUserDetails | null;
  @Output() close = new EventEmitter<void>();

  showDropdown = false; // State to toggle the dropdown visibility

  links = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { 
      text: "Services", 
      children: [
        { path: "/courses", text: "Tech School" },
        { path: "/corporate-training", text: "Corporate Training" },
        { path: "/it-services", text: "IT Services" }
      ]
    },
    { path: "/faq", text: "FAQ" }
  ];

  // Method to toggle the dropdown visibility
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
