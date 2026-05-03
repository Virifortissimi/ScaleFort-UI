import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface ConversionAction {
  label: string;
  href: string;
}

interface ConversionContext {
  title: string;
  body: string;
  primaryHref: string;
}

@Component({
  selector: 'app-conversion-rail',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <aside
        class="fixed z-[980] left-0 right-0 bottom-0 px-3 pb-[calc(10px+env(safe-area-inset-bottom))] md:px-5 md:pb-4 pointer-events-none"
        aria-label="Quick actions"
      >
        <div class="mx-auto max-w-5xl pointer-events-auto rounded-[18px] border border-border-base bg-[var(--surface-glass)] backdrop-blur-xl shadow-card-soft">
          <div class="hidden lg:flex items-center justify-between gap-5 px-5 py-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-text-primary">{{ context().title }}</p>
              <p class="text-xs text-text-muted">{{ context().body }}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              @for (action of actions; track action.href) {
                <a
                  [routerLink]="action.href"
                  class="no-underline text-sm"
                  [class.btn-primary]="action.href === context().primaryHref"
                  [class.btn-secondary]="action.href !== context().primaryHref"
                >
                  {{ action.label }}
                </a>
              }
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2 p-2 lg:hidden">
            @for (action of actions; track action.href) {
              <a
                [routerLink]="action.href"
                class="no-underline text-center rounded-[12px] border px-2 py-2.5 text-xs font-semibold"
                [class.bg-green-500]="action.href === context().primaryHref"
                [class.text-white]="action.href === context().primaryHref"
                [class.border-green-500]="action.href === context().primaryHref"
                [class.border-border-base]="action.href !== context().primaryHref"
                [class.text-text-body]="action.href !== context().primaryHref"
                [class.bg-bg-white]="action.href !== context().primaryHref"
              >
                {{ action.label }}
              </a>
            }
          </div>
        </div>
      </aside>
    }
  `,
})
export class ConversionRailComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly currentUrl = signal(this.router.url);

  readonly actions: ReadonlyArray<ConversionAction> = [
    { label: 'Apply', href: '/tech-school/apply' },
    { label: 'Get Quote', href: '/it-services/quote' },
    { label: 'Train Team', href: '/corporate-training/apply' },
  ];

  readonly context = computed<ConversionContext>(() => {
    const path = this.cleanPath(this.currentUrl());
    if (path.startsWith('/tech-school')) {
      return {
        title: 'Next cohort is filling up',
        body: 'Start your application now and lock your preferred track.',
        primaryHref: '/tech-school/apply',
      };
    }

    if (path.startsWith('/it-services')) {
      return {
        title: 'Have a product to build?',
        body: 'Share your scope and get a response from our engineering team.',
        primaryHref: '/it-services/quote',
      };
    }

    if (path.startsWith('/corporate-training')) {
      return {
        title: 'Upskilling your workforce?',
        body: 'Tell us your team goals and we will tailor a training plan.',
        primaryHref: '/corporate-training/apply',
      };
    }

    return {
      title: 'Choose your next move',
      body: 'Apply for training, get a build quote, or request enterprise upskilling.',
      primaryHref: '/tech-school/apply',
    };
  });

  readonly visible = computed<boolean>(() => {
    const path = this.cleanPath(this.currentUrl());
    const hiddenPrefixes = ['/affiliate', '/login', '/register', '/payment/success'];
    return !hiddenPrefixes.some((prefix) => path.startsWith(prefix));
  });

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });
  }

  private cleanPath(url: string): string {
    return url.split('?')[0].split('#')[0] || '/';
  }
}
