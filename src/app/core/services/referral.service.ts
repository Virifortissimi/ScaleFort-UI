import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const STORAGE_KEY = 'scalefort_referral_code';

@Injectable({ providedIn: 'root' })
export class ReferralService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  readonly referralCode = signal<string>('');

  init(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      this.referralCode.set(saved);
    }

    this.captureFromUrl(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.captureFromUrl(event.urlAfterRedirects));
  }

  getReferralCode(): string {
    return this.referralCode();
  }

  private captureFromUrl(url: string): void {
    const query = url.split('?')[1] ?? '';
    if (!query) {
      return;
    }

    const params = new URLSearchParams(query.split('#')[0]);
    const code = params.get('ref')?.trim();
    if (!code) {
      return;
    }

    this.referralCode.set(code);
    localStorage.setItem(STORAGE_KEY, code);
  }
}
