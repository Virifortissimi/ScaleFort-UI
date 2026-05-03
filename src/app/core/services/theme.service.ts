import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const STORAGE_KEY = 'scalefort_theme';
type ThemePreference = 'light' | 'dark' | 'system';
type ThemeResolved = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private mediaQuery?: MediaQueryList;

  readonly preference = signal<ThemePreference>('system');
  readonly theme = signal<ThemeResolved>('light');

  init(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQuery.addEventListener('change', () => {
      if (this.preference() === 'system') {
        this.applyPreference('system', false);
      }
    });

    const saved = localStorage.getItem(STORAGE_KEY);
    const initial: ThemePreference = saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
    this.applyPreference(initial, false);
  }

  toggle(): void {
    const order: ReadonlyArray<ThemePreference> = ['light', 'system', 'dark'];
    const current = order.indexOf(this.preference());
    const next = order[(current + 1) % order.length];
    this.applyPreference(next, true);
  }

  setTheme(theme: ThemePreference): void {
    this.applyPreference(theme, true);
  }

  private applyPreference(preference: ThemePreference, persist: boolean): void {
    this.preference.set(preference);
    const resolved = this.resolveTheme(preference);
    this.theme.set(resolved);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (persist) {
      localStorage.setItem(STORAGE_KEY, preference);
    }

    document.documentElement.classList.toggle('dark', resolved === 'dark');
    document.documentElement.style.colorScheme = resolved;
  }

  private resolveTheme(preference: ThemePreference): ThemeResolved {
    if (preference === 'system') {
      return this.mediaQuery?.matches ? 'dark' : 'light';
    }

    return preference;
  }
}
