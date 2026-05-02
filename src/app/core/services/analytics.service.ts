import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

declare const gtag: (...args: unknown[]) => void;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  init(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (typeof gtag === 'undefined') {
          return;
        }

        gtag('config', environment.ga4MeasurementId, { page_path: event.urlAfterRedirects });
      });
  }

  trackLead(category: string, label: string, value?: number): void {
    if (!isPlatformBrowser(this.platformId) || typeof gtag === 'undefined') {
      return;
    }

    gtag('event', 'generate_lead', {
      event_category: category,
      event_label: label,
      value,
    });
  }
}
