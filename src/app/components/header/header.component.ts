import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { MenuToggleComponent } from "../shared/menu-toggle/menu-toggle.component";
import { SlideMenuComponent } from "../shared/slide-menu/slide-menu.component";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../pages/auth/services/auth.service";
import { IUserDetails } from "../../shared/models/authentication.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, MenuToggleComponent, SlideMenuComponent, CommonModule],
  template: `
    <header class="bg-white shadow-lg fixed w-full top-0 z-50 h-[4rem]">
      <div
        class="max-w-7xl mx-auto h-full px-4 flex justify-between items-center gap-4"
      >
        <div class="flex-shrink-0">
          <span routerLink="/" class="block w-[100px] md:w-[200px]">
            <img
              src="https://res.cloudinary.com/virifortissimi/image/upload/v1736430718/Goals/unkxyhoxbt2mgqikwe8y.png"
              alt="logo"
              class="w-full"
            />
          </span>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <a
            routerLink="/"
            routerLinkActive="text-blue-600"
            class="hover:text-blue-600 px-3 py-2 rounded-md text-[18px] font-medium"
            >Home</a
          >
          <a
            routerLink="/about"
            routerLinkActive="text-blue-600"
            class="hover:text-blue-600 px-3 py-2 rounded-md text-[18px] font-medium"
            >About</a
          >

          <!-- Services dropdown -->
          <div
            class="relative"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
          >
            <button
              class="flex items-center hover:text-blue-600 px-3 py-2 rounded-md text-[18px] font-medium focus:outline-none"
            >
              Services
              <span
                class="ml-1 transition-transform duration-200"
                [ngClass]="{ 'rotate-90': showDropdown }"
              >
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
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </button>
            <div
              *ngIf="showDropdown"
              class="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-80 z-50 border border-gray-100
                        transition-opacity transition-transform duration-300 delay-100 ease-out
                        opacity-100 translate-y-0 animate-fade-slide"
            >
              <ng-container *ngFor="let item of serviceLinks">
                <a
                  [routerLink]="item.link"
                  class="flex items-start px-4 py-3 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div class="text-xl mr-3">{{ item.icon }}</div>
                  <div>
                    <div class="font-medium text-sm text-gray-800">
                      {{ item.title }}
                    </div>
                    <div class="text-xs text-gray-500">
                      {{ item.description }}
                    </div>
                  </div>
                </a>
              </ng-container>
            </div>
          </div>

          <a
            routerLink="/faq"
            routerLinkActive="text-blue-600"
            class="hover:text-blue-600 px-3 py-2 rounded-md text-[18px] font-medium"
            >FAQ</a
          >
        </div>

        <div
          class="flex items-center"
          style="animation-delay: 600ms"
        >
          <!-- User is logged in -->
          <ng-container *ngIf="userDetails(); else loggedOut">
            <div class="relative" #userDropdownContainer>
              <span
                (click)="toggleUserDropdown()"
                class="cursor-pointer flex items-center gap-2"
              >
                Hello, <b>{{ userDetails()?.username }}</b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>

              <!-- User dropdown menu -->
              <div
                *ngIf="showUserDropdown()"
                class="absolute right-0 mt-2 w-48 bg-white rounded-md border border-gray-200 py-1 z-50"
              >
                <a
                  routerLink="/earn"
                  class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  (click)="toggleUserDropdown()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path
                      d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"
                    />
                  </svg>
                  Earn
                </a>
                <button
                  (click)="authService.logout()"
                  class="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                    />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </ng-container>

          <!-- User is logged out -->
          <ng-template #loggedOut>
            <div class="flex gap-2 hidden md:flex" >
              <a
                routerLink="/earn"
                class="inline-flex items-center px-5 py-2 rounded-md border border-blue-500 text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              >
                Earn
              </a>

              <a
                routerLink="/login"
                class="inline-flex items-center px-5 py-2 rounded-md border border-blue-500 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
              >
                Login
              </a>
            </div>
          </ng-template>

          <app-menu-toggle (toggle)="toggleMenu()"></app-menu-toggle>
        </div>
      </div>

      <app-slide-menu
        [isOpen]="isMenuOpen"
        [userDetails]="userDetails()"
        (close)="closeMenu()"
      ></app-slide-menu>
    </header>
  `,
  styles: [
    `
      .rotate-90 {
        transform: rotate(90deg);
      }
    `,
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public readonly authService = inject(AuthService);
  @ViewChild("userDropdownContainer") userDropdownContainer: ElementRef | null =
    null;
  isMenuOpen = false;
  showDropdown = false;
  hideDropdownTimeout: any;
  userDetails = signal<IUserDetails | null>(null);
  userSubscription!: Subscription;
  showUserDropdown = signal<boolean>(false);

  serviceLinks = [
    {
      icon: "🎓",
      title: "Tech School",
      description:
        "Industry-driven curriculum with hands-on learning experience",
      link: "/courses",
    },
    {
      icon: "💼",
      title: "Corporate Training",
      description: "Customized upskilling programs for your workforce",
      link: "/corporate-training",
    },
    {
      icon: "🚀",
      title: "IT Services",
      description: "End-to-end software solutions and consulting",
      link: "/services",
    },
    // { icon: '🔄', title: 'Innovation Hub', description: 'Integrated ecosystem for continuous growth', link: '/innovation-hub' }
  ];

  ngOnInit(): void {
    this.userSubscription = this.authService.userData$.subscribe((user) => {
      this.userDetails.set(user);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    if (this.showUserDropdown && this.userDropdownContainer) {
      const isClickInside = this.userDropdownContainer.nativeElement.contains(
        event.target as Node
      );
      if (!isClickInside) {
        this.showUserDropdown.set(false);
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleUserDropdown() {
    this.showUserDropdown.set(!this.showUserDropdown());
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
