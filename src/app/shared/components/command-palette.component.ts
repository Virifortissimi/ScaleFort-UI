import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, HostListener, ViewChild, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { BLOG_POSTS } from '../data/blog-posts.data';
import { FaqService } from '../../pages/faq/services/faq.service';

type CommandGroup = 'Course' | 'FAQ' | 'Blog';

interface PaletteCommand {
  id: string;
  group: CommandGroup;
  title: string;
  subtitle: string;
  href: string;
}

@Component({
  selector: 'app-command-palette',
  standalone: true,
  imports: [FormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (open()) {
      <div class="fixed inset-0 z-[2200]">
        <button
          type="button"
          class="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
          aria-label="Close command palette"
          (click)="close()"
        ></button>

        <section
          #dialog
          class="relative mx-auto mt-[12vh] w-[min(760px,calc(100%-1.25rem))] rounded-card border border-border-base bg-bg-white shadow-card-hover"
          role="dialog"
          aria-modal="true"
          aria-label="Quick search"
        >
          <div class="border-b border-border-base px-4 py-3">
            <div class="flex items-center gap-3">
              <span class="text-text-muted" aria-hidden="true">/</span>
              <input
                #searchInput
                [ngModel]="query()"
                (ngModelChange)="query.set($event)"
                type="text"
                class="w-full border-0 bg-transparent p-0 text-base text-text-primary focus:outline-none"
                placeholder="Search courses, FAQs, and blog posts"
              />
              <kbd class="hidden sm:inline-flex rounded border border-border-base bg-bg-subtle px-2 py-0.5 text-xs text-text-muted">
                Esc
              </kbd>
            </div>
          </div>

          <div class="max-h-[65vh] overflow-auto p-2">
            @if (filteredCommands().length === 0) {
              <div class="rounded-[14px] border border-dashed border-border-base bg-bg-subtle p-6 text-center">
                <p class="text-sm font-semibold text-text-primary mb-1">No results</p>
                <p class="text-xs text-text-muted">Try a different keyword.</p>
              </div>
            } @else {
              <ul class="m-0 list-none space-y-1 p-0">
                @for (command of filteredCommands(); track command.id) {
                  <li>
                    <a
                      [routerLink]="command.href"
                      (click)="close()"
                      class="block no-underline rounded-[12px] border border-transparent px-3 py-3 hover:border-border-base hover:bg-bg-subtle"
                    >
                      <p class="m-0 text-sm font-semibold text-text-primary">{{ command.title }}</p>
                      <p class="m-0 text-xs text-text-muted">{{ command.subtitle }}</p>
                      <span class="inline-flex mt-1 rounded-pill bg-bg-subtle px-2 py-0.5 text-[11px] font-medium text-text-muted">
                        {{ command.group }}
                      </span>
                    </a>
                  </li>
                }
              </ul>
            }
          </div>
        </section>
      </div>
    }
  `,
})
export class CommandPaletteComponent {
  @ViewChild('searchInput') private searchInput?: ElementRef<HTMLInputElement>;
  @ViewChild('dialog') private dialog?: ElementRef<HTMLElement>;

  private readonly router = inject(Router);
  private readonly faqService = inject(FaqService);
  private readonly destroyRef = inject(DestroyRef);

  readonly open = signal(false);
  readonly query = signal('');
  private previousFocus: HTMLElement | null = null;

  readonly commands: ReadonlyArray<PaletteCommand> = [
    {
      id: 'course-list',
      group: 'Course',
      title: 'All Tech School Courses',
      subtitle: 'Browse all available tracks and cohorts',
      href: '/tech-school/courses',
    },
    {
      id: 'course-frontend',
      group: 'Course',
      title: 'Frontend Development Preview',
      subtitle: 'See lesson preview and requirements',
      href: '/tech-school/preview/frontend-development',
    },
    {
      id: 'course-backend-net',
      group: 'Course',
      title: 'Backend Development (.NET) Preview',
      subtitle: 'API-first backend engineering track',
      href: '/tech-school/preview/backend-development-net',
    },
    {
      id: 'course-cloud',
      group: 'Course',
      title: 'Cloud Computing Preview',
      subtitle: 'Infrastructure, deployment, and reliability',
      href: '/tech-school/preview/cloud-computing',
    },
    {
      id: 'faq-main',
      group: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Admissions, payment, and logistics',
      href: '/faq',
    },
    ...BLOG_POSTS.map<PaletteCommand>((post) => ({
      id: `blog-${post.slug}`,
      group: 'Blog',
      title: post.title,
      subtitle: post.excerpt,
      href: `/blog/${post.slug}`,
    })),
    ...this.faqService
      .getFaqs()
      .slice(0, 8)
      .map<PaletteCommand>((faq, index) => ({
        id: `faq-q-${index}`,
        group: 'FAQ',
        title: faq.question,
        subtitle: 'Jump to FAQ page',
        href: '/faq',
      })),
  ];

  readonly filteredCommands = computed(() => {
    const value = this.query().trim().toLowerCase();
    if (!value) {
      return this.commands.slice(0, 14);
    }

    return this.commands.filter((command) => {
      return (
        command.title.toLowerCase().includes(value) ||
        command.subtitle.toLowerCase().includes(value) ||
        command.group.toLowerCase().includes(value)
      );
    });
  });

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        if (this.open()) {
          this.close();
        }
      });
  }

  @HostListener('document:keydown', ['$event'])
  onGlobalKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.openPalette();
      return;
    }

    if (
      event.key === '/' &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      !this.isTextInput(target)
    ) {
      event.preventDefault();
      this.openPalette();
      return;
    }

    if (!this.open()) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }

    if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  }

  close(): void {
    this.open.set(false);
    this.query.set('');
    this.previousFocus?.focus();
    this.previousFocus = null;
  }

  private openPalette(): void {
    if (this.open()) {
      return;
    }

    this.previousFocus = document.activeElement as HTMLElement | null;
    this.open.set(true);
    this.query.set('');

    queueMicrotask(() => {
      this.searchInput?.nativeElement.focus();
    });
  }

  private isTextInput(target: HTMLElement | null): boolean {
    if (!target) {
      return false;
    }

    const tagName = target.tagName.toLowerCase();
    return tagName === 'input' || tagName === 'textarea' || target.isContentEditable;
  }

  private trapFocus(event: KeyboardEvent): void {
    const dialogEl = this.dialog?.nativeElement;
    if (!dialogEl) {
      return;
    }

    const focusables = dialogEl.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
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
}
