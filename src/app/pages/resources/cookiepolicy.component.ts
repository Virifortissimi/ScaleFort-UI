import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white">
      <div class="container-base max-w-4xl">
        <header appAnimateOnScroll [animateDelay]="80" class="text-center mb-10">
          <p class="overline mb-2">Legal</p>
          <h1 class="text-h1 font-bold text-text-primary mb-3">Cookie Policy</h1>
          <p class="text-text-muted">Effective Date: October 11, 2024 | Last Updated: October 11, 2024</p>
        </header>

        <div class="space-y-6">
          @for (section of sections; track section.title; let i = $index) {
            <article appAnimateOnScroll [animateDelay]="140 + (i * 40)" class="card-base">
              <h2 class="text-h3 font-semibold text-text-primary mb-3">{{ i + 1 }}. {{ section.title }}</h2>
              @if (section.body) {
                <p class="text-text-body leading-relaxed mb-3">{{ section.body }}</p>
              }
              @if (section.items.length) {
                <ul class="list-disc pl-5 space-y-2 text-text-body leading-relaxed">
                  @for (item of section.items; track item) {
                    <li [innerHTML]="item"></li>
                  }
                </ul>
              }
            </article>
          }
        </div>

        <div appAnimateOnScroll [animateDelay]="260" class="card-base mt-8 text-center">
          <h2 class="text-h3 font-semibold text-text-primary mb-2">Contact</h2>
          <p class="text-text-muted mb-5">Questions about our cookie usage?</p>
          <a href="mailto:privacy@scalefort.org" class="btn-primary no-underline">privacy&#64;scalefort.org</a>
        </div>
      </div>
    </section>
  `,
})
export class CookiePolicyComponent {
  readonly sections = [
    {
      title: 'What Are Cookies',
      body: 'Cookies are small text files stored on your device. They help websites remember useful details about your visit.',
      items: [] as string[],
    },
    {
      title: 'How We Use Cookies',
      body: '',
      items: [
        '<strong>Essential Cookies:</strong> Required for core functionality and security.',
        '<strong>Preference Cookies:</strong> Remember your settings and choices.',
        '<strong>Analytics Cookies:</strong> Help us understand usage and improve performance.',
        '<strong>Marketing Cookies:</strong> Support relevant campaign measurement where applicable.',
      ],
    },
    {
      title: 'Types of Cookies',
      body: '',
      items: [
        '<strong>Session Cookies:</strong> Deleted when your browser closes.',
        '<strong>Persistent Cookies:</strong> Stored until expiry or manual deletion.',
        '<strong>First-Party Cookies:</strong> Set directly by Scalefort.',
        '<strong>Third-Party Cookies:</strong> Set by trusted external services.',
      ],
    },
    {
      title: 'Managing Cookies',
      body: 'You can manage cookie preferences through your browser settings at any time.',
      items: [
        'Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" class="underline">Cookie Settings</a>',
        'Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" class="underline">Cookie Settings</a>',
        'Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" class="underline">Cookie Settings</a>',
        'Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" class="underline">Cookie Settings</a>',
      ],
    },
    {
      title: 'Third-Party Cookies',
      body: '',
      items: ['Google Analytics', 'Hotjar', 'Facebook Pixel (if enabled)', 'LinkedIn Insight Tag (if enabled)'],
    },
    {
      title: 'Policy Updates',
      body: "We may update this Cookie Policy from time to time. Significant changes will be communicated on our website.",
      items: [] as string[],
    },
  ] as const;
}


