import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { AuthService } from '../../core/services/auth.service';

type NavIcon =
  | 'school'
  | 'build'
  | 'team'
  | 'blog'
  | 'events'
  | 'alumni'
  | 'about'
  | 'faq'
  | 'contact';

interface NavLink {
  label: string;
  href: string;
  description: string;
  icon: NavIcon;
}

interface NavDropdown {
  key: string;
  label: string;
  summary: string;
  links: ReadonlyArray<NavLink>;
}

interface ThemeOption {
  value: 'light' | 'system' | 'dark';
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="site-header navbar navbar-shell"
      [ngClass]="scrolled || !!openDropdown ? 'navbar-scrolled' : 'navbar-transparent'"
    >
      <div class="container-base flex items-center justify-between h-full w-full gap-4 lg:gap-7">
        <div class="flex items-center gap-5 lg:gap-8 min-w-0">
          <a routerLink="/" aria-label="Scalefort home" class="shrink-0" (click)="closeMenus()">
            <img [src]="theme.theme() === 'dark' ? logoDarkUrl : logoLightUrl" alt="Scalefort" class="h-9 w-auto" />
          </a>

          <nav class="hidden lg:flex items-center gap-1 lg:gap-2" aria-label="Primary">
            @for (group of navDropdowns; track group.key) {
              <button
                type="button"
                class="nav-dropdown-trigger inline-flex items-center gap-2 text-sm font-medium text-text-body px-4 py-2.5 rounded-lg transition-colors duration-150 hover:bg-bg-subtle"
                [ngClass]="(openDropdown === group.key || isGroupActive(group)) ? 'font-semibold nav-link-active' : ''"
                [attr.aria-expanded]="openDropdown === group.key"
                [attr.aria-controls]="'mega-menu-' + group.key"
                (click)="toggleDropdown(group.key)"
              >
                {{ group.label }}
                <svg
                  class="h-4 w-4 transition-transform duration-200"
                  [ngClass]="openDropdown === group.key ? 'rotate-180' : ''"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 7.5L10 12.5L15 7.5" />
                </svg>
              </button>
            }
          </nav>
        </div>

        <div class="hidden lg:flex items-center gap-2 lg:gap-3 ml-auto">
          <div class="hidden xl:flex items-center gap-1 border border-border-base rounded-pill p-1">
            @for (option of themeOptions; track option.value) {
              <button
                type="button"
                [attr.aria-label]="option.label"
                [attr.title]="option.label"
                [attr.aria-pressed]="theme.preference() === option.value"
                (click)="theme.setTheme(option.value)"
                class="inline-flex items-center justify-center h-8 w-8 rounded-full border transition-colors"
                [ngClass]="theme.preference() === option.value ? 'bg-bg-subtle border-border-base text-text-primary' : 'bg-transparent border-transparent text-text-muted hover:bg-bg-subtle hover:text-text-primary'"
              >
                @if (option.value === 'light') {
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path stroke-linecap="round" d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"></path>
                  </svg>
                } @else if (option.value === 'system') {
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                    <path stroke-linecap="round" d="M8 20h8M10 16v4M14 16v4"></path>
                  </svg>
                } @else {
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path>
                  </svg>
                }
              </button>
            }
          </div>

          @if (!auth.isAuthenticated()) {
            <a routerLink="/login" class="hidden lg:inline-flex btn-secondary text-sm px-5 py-2.5 no-underline" (click)="closeMenus()">
              Login
            </a>
            <a routerLink="/register" class="hidden lg:inline-flex btn-primary text-sm px-5 py-2.5 no-underline" (click)="closeMenus()">Register</a>
          } @else {
            <a routerLink="/affiliate" class="hidden lg:inline-flex btn-secondary text-sm px-5 py-2.5 no-underline" (click)="closeMenus()">
              Dashboard
            </a>
            <button type="button" (click)="logout()" class="hidden lg:inline-flex btn-primary text-sm px-5 py-2.5">
              Logout
            </button>
          }

          @if (!auth.isAuthenticated()) {
            <a routerLink="/tech-school/apply" class="hidden xl:inline-flex btn-secondary text-sm px-5 py-2.5 no-underline" (click)="closeMenus()">Get Started</a>
          }
        </div>

        <button
          type="button"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="mobileOpen"
          aria-label="Toggle navigation menu"
          class="lg:hidden ml-auto p-2 rounded-lg hover:bg-bg-subtle"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
            @if (mobileOpen) {
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
      </div>

      @if (openDropdown) {
        <button
          type="button"
          class="hidden lg:block fixed inset-0 top-[68px] bg-black/10 z-[1080]"
          aria-label="Close navigation panel"
          (click)="closeDropdown()"
        ></button>

        <section
          class="mega-menu-panel hidden lg:block fixed inset-x-0 top-[68px] z-[1090] border-b border-border-base bg-bg-white/95 backdrop-blur-xl"
          [id]="'mega-menu-' + openDropdown"
        >
          <div class="container-base py-7">
            @if (activeDropdown(); as group) {
              <div class="grid grid-cols-12 gap-6 items-start">
                <aside class="col-span-12 lg:col-span-4 rounded-card bg-bg-subtle p-6">
                  <p class="overline mb-2">Explore {{ group.label }}</p>
                  <h2 class="text-h2 font-bold text-text-primary mb-3">{{ group.label }}</h2>
                  <p class="text-text-body">{{ group.summary }}</p>
                </aside>

                <div class="col-span-12 lg:col-span-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  @for (link of group.links; track link.href) {
                    <a
                      [routerLink]="link.href"
                      routerLinkActive="border-green-300 bg-green-50/40"
                      (click)="closeDropdown()"
                      class="no-underline rounded-card border border-border-base bg-bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-default"
                    >
                      <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-bg-subtle text-accent-school mb-4">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                          @for (path of iconPaths(link.icon); track path) {
                            <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="path" />
                          }
                        </svg>
                      </span>
                      <p class="text-sm font-semibold text-text-primary mb-2">{{ link.label }}</p>
                      <p class="text-sm text-text-muted leading-relaxed">{{ link.description }}</p>
                      <span class="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent-school">
                        Open page
                        <svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </a>
                  }
                </div>
              </div>
            }
          </div>
        </section>
      }

      @if (mobileOpen) {
        <div #mobileMenuDialog class="fixed top-[68px] left-0 right-0 bg-bg-white border-b border-border-base px-4 py-5 flex flex-col gap-3 lg:hidden z-[999]" role="dialog" aria-modal="true" aria-label="Navigation menu">
          @for (group of navDropdowns; track group.key) {
            <section class="rounded-card border border-border-base bg-bg-subtle p-4">
              <button
                type="button"
                class="w-full flex items-center justify-between gap-3 text-left"
                [attr.aria-expanded]="mobileOpenGroup === group.key"
                [attr.aria-controls]="'mobile-group-' + group.key"
                (click)="toggleMobileGroup(group.key)"
              >
                <span class="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">{{ group.label }}</span>
                <svg
                  class="h-4 w-4 text-text-primary transition-transform duration-200"
                  [ngClass]="mobileOpenGroup === group.key ? 'rotate-180' : ''"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 7.5L10 12.5L15 7.5" />
                </svg>
              </button>

              @if (mobileOpenGroup === group.key) {
                <div class="grid grid-cols-1 gap-1 mt-3" [id]="'mobile-group-' + group.key">
                  @for (link of group.links; track link.href) {
                    <a
                      [routerLink]="link.href"
                      (click)="closeMobileMenu()"
                      class="px-3 py-2.5 text-[0.95rem] font-medium text-text-primary rounded-xl hover:bg-bg-white no-underline transition-colors"
                    >
                      {{ link.label }}
                    </a>
                  }
                </div>
              }
            </section>
          }

          <section class="rounded-card border border-border-base bg-bg-subtle p-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">Appearance</p>
                <p class="mt-1 text-sm leading-6 text-text-body">Choose how Scalefort looks on this device.</p>
              </div>
              <span class="rounded-full border border-border-base bg-bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-text-primary">
                {{ theme.preference() === 'system' ? 'Auto' : theme.preference() }}
              </span>
            </div>

            <div class="mt-4 grid grid-cols-3 gap-2.5">
              @for (option of themeOptions; track option.value) {
                <button
                  type="button"
                  [attr.aria-label]="option.label"
                  [attr.title]="option.label"
                  [attr.aria-pressed]="theme.preference() === option.value"
                  (click)="theme.setTheme(option.value)"
                  class="flex min-h-24 flex-col items-center justify-center gap-2.5 rounded-2xl border px-3 py-3 text-center text-sm font-semibold transition-colors"
                  [ngClass]="theme.preference() === option.value ? 'border-border-strong bg-bg-white text-text-primary ring-1 ring-border-default' : 'border-border-base bg-bg-white/40 text-text-primary hover:bg-bg-white'"
                >
                  @if (option.value === 'light') {
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path stroke-linecap="round" d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"></path>
                    </svg>
                  } @else if (option.value === 'system') {
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                      <path stroke-linecap="round" d="M8 20h8M10 16v4M14 16v4"></path>
                    </svg>
                  } @else {
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path>
                    </svg>
                  }

                  <span>{{ option.value === 'light' ? 'Light' : option.value === 'system' ? 'Auto' : 'Dark' }}</span>
                </button>
              }
            </div>
          </section>

          @if (!auth.isAuthenticated()) {
            <div class="grid grid-cols-1 gap-3 mt-1">
              <a routerLink="/login" (click)="closeMobileMenu()" class="btn-secondary no-underline">Login</a>
              <a routerLink="/register" (click)="closeMobileMenu()" class="btn-primary no-underline">Register</a>
            </div>
          } @else {
            <div class="grid grid-cols-1 gap-3 mt-1">
              <a routerLink="/affiliate" (click)="closeMobileMenu()" class="btn-secondary no-underline">Dashboard</a>
              <button type="button" (click)="logout()" class="btn-primary">Logout</button>
            </div>
          }

          @if (!auth.isAuthenticated()) {
            <a routerLink="/tech-school/apply" (click)="closeMobileMenu()" class="btn-primary mt-1 no-underline">Get Started</a>
          }
        </div>
      }
    </header>
  `,
})
export class HeaderComponent {
  @ViewChild('mobileMenuDialog') private mobileMenuDialog?: ElementRef<HTMLElement>;

  readonly logoLightUrl = 'https://res.cloudinary.com/virifortissimi/image/upload/v1736430718/Goals/unkxyhoxbt2mgqikwe8y.png';
  readonly logoDarkUrl = 'https://res.cloudinary.com/virifortissimi/image/upload/v1737720710/Goals/SCALE-small.png';

  readonly auth = inject(AuthService);
  readonly theme = inject(ThemeService);
  private readonly router = inject(Router);

  scrolled = false;
  mobileOpen = false;
  mobileOpenGroup: string | null = null;
  openDropdown: string | null = null;
  private previousFocusedElement: HTMLElement | null = null;

  readonly navDropdowns: ReadonlyArray<NavDropdown> = [
    {
      key: 'services',
      label: 'Services',
      summary: 'Explore our delivery and learning pillars built for individuals, teams, and organizations.',
      links: [
        {
          label: 'Tech School',
          href: '/tech-school',
          description: 'Job-focused programs, practical projects, and mentorship-driven learning.',
          icon: 'school',
        },
        {
          label: 'IT Services',
          href: '/it-services',
          description: 'Product engineering, web platforms, and scalable digital systems.',
          icon: 'build',
        },
        {
          label: 'Corporate Training',
          href: '/corporate-training',
          description: 'Upskill technical and non-technical teams with structured enterprise tracks.',
          icon: 'team',
        },
      ],
    },
    {
      key: 'community',
      label: 'Community',
      summary: 'Stay connected with insights, events, and stories from the Scalefort ecosystem.',
      links: [
        {
          label: 'Blog',
          href: '/blog',
          description: 'Articles on careers, engineering execution, and practical growth.',
          icon: 'blog',
        },
        {
          label: 'Events',
          href: '/events',
          description: 'Webinars, workshops, and community sessions for continuous learning.',
          icon: 'events',
        },
        {
          label: 'Alumni',
          href: '/alumni',
          description: 'See outcomes, career journeys, and post-program success stories.',
          icon: 'alumni',
        },
      ],
    },
    {
      key: 'company',
      label: 'Company',
      summary: 'Learn more about who we are, how we work, and how to reach our team quickly.',
      links: [
        {
          label: 'About',
          href: '/about',
          description: 'Our mission, operating model, and long-term vision for scalable growth.',
          icon: 'about',
        },
        {
          label: 'FAQ',
          href: '/faq',
          description: 'Answers on admissions, pricing, timelines, and support channels.',
          icon: 'faq',
        },
        {
          label: 'Contact',
          href: '/contact',
          description: 'Speak with our team about programs, partnerships, and implementation.',
          icon: 'contact',
        },
      ],
    },
  ];

  readonly themeOptions: ReadonlyArray<ThemeOption> = [
    { value: 'light', label: 'Light mode' },
    { value: 'system', label: 'System mode' },
    { value: 'dark', label: 'Dark mode' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;
    if (this.scrolled) {
      this.openDropdown = null;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth < 1024) {
      this.openDropdown = null;
      return;
    }
    this.closeMobileMenu(false);
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenus();
      return;
    }

    if (!this.mobileOpen || event.key !== 'Tab') {
      return;
    }

    this.trapMobileMenuFocus(event);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.openDropdown) {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    const clickedTrigger = !!target.closest('.nav-dropdown-trigger');
    const clickedPanel = !!target.closest('.mega-menu-panel');

    if (!clickedTrigger && !clickedPanel) {
      this.closeDropdown();
    }
  }

  toggleMobileMenu(): void {
    if (this.mobileOpen) {
      this.closeMobileMenu();
      return;
    }

    this.openDropdown = null;
    this.mobileOpen = true;
    this.mobileOpenGroup = null;
    this.lockBodyScroll();
    this.previousFocusedElement = document.activeElement as HTMLElement | null;
    queueMicrotask(() => this.focusFirstMobileMenuElement());
  }

  toggleMobileGroup(key: string): void {
    this.mobileOpenGroup = this.mobileOpenGroup === key ? null : key;
  }

  closeMobileMenu(restoreFocus = true): void {
    this.mobileOpen = false;
    this.mobileOpenGroup = null;
    this.unlockBodyScroll();
    if (restoreFocus && this.previousFocusedElement) {
      this.previousFocusedElement.focus();
    }
    this.previousFocusedElement = null;
  }

  toggleDropdown(key: string): void {
    this.closeMobileMenu(false);
    this.openDropdown = this.openDropdown === key ? null : key;
  }

  closeDropdown(): void {
    this.openDropdown = null;
  }

  closeMenus(): void {
    this.closeMobileMenu();
    this.openDropdown = null;
  }

  activeDropdown(): NavDropdown | null {
    return this.navDropdowns.find((group) => group.key === this.openDropdown) ?? null;
  }

  isGroupActive(group: NavDropdown): boolean {
    const currentUrl = this.router.url;
    return group.links.some((link) => currentUrl === link.href || currentUrl.startsWith(`${link.href}/`));
  }

  iconPaths(icon: NavIcon): readonly string[] {
    switch (icon) {
      case 'school':
        return ['M12 14L3 9l9-5 9 5-9 5z', 'M5 10v6a7 7 0 0014 0v-6'];
      case 'build':
        return ['M16 18l6-6-6-6', 'M8 6l-6 6 6 6', 'M14 4l-4 16'];
      case 'team':
        return [
          'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2',
          'M9 7a4 4 0 100-8 4 4 0 000 8',
          'M23 21v-2a4 4 0 00-3-3.87',
          'M16 3.13a4 4 0 010 7.75',
        ];
      case 'blog':
        return ['M4 5h16', 'M4 11h16', 'M4 17h10'];
      case 'events':
        return ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z'];
      case 'alumni':
        return [
          'M17 20h5v-2a3 3 0 00-5.36-1.86',
          'M9 20H2v-2a3 3 0 015.36-1.86',
          'M16 7a4 4 0 11-8 0 4 4 0 018 0',
          'M12 14a5 5 0 00-4.64 3.14',
        ];
      case 'about':
        return ['M12 8h.01', 'M11 12h1v4h1', 'M12 21a9 9 0 100-18 9 9 0 000 18z'];
      case 'faq':
        return ['M8 10h.01', 'M12 10h.01', 'M16 10h.01', 'M9 16h6', 'M5 4h14a2 2 0 012 2v9a2 2 0 01-2 2H8l-3 3v-3H5a2 2 0 01-2-2V6a2 2 0 012-2z'];
      case 'contact':
        return ['M4 4h16v16H4z', 'M22 6l-10 7L2 6'];
      default:
        return ['M12 12h.01'];
    }
  }

  private lockBodyScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll(): void {
    document.body.style.overflow = '';
  }

  private focusFirstMobileMenuElement(): void {
    const container = this.mobileMenuDialog?.nativeElement;
    if (!container) {
      return;
    }

    const firstFocusable = container.querySelector<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])');
    firstFocusable?.focus();
  }

  private trapMobileMenuFocus(event: KeyboardEvent): void {
    const container = this.mobileMenuDialog?.nativeElement;
    if (!container) {
      return;
    }

    const focusables = Array.from(
      container.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );

    if (focusables.length === 0) {
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  logout(): void {
    this.auth.logout();
    this.closeMenus();
    void this.router.navigateByUrl('/');
  }
}
