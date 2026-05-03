import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { companyLogos } from '../../../shared/data/company-logos.data';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget(options: { url: string }): void;
    };
  }
}

interface ProofOutcome {
  name: string;
  context: string;
  metric: string;
}

interface ProofLogo {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home-cta',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white relative z-[1]">
      <div class="dot-grid-section" aria-hidden="true"></div>
      <div class="container-base relative z-10">
        <div
          appAnimateOnScroll
          [animateDelay]="80"
          class="bg-surface-dark border border-white/5 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl"
        >
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-accent-school/20 rounded-full blur-[120px] pointer-events-none group-hover:bg-accent-school/30 transition-colors duration-1000"></div>

          <div class="relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
              @for (outcome of proofOutcomes; track outcome.name; let i = $index) {
                <article
                  appAnimateOnScroll
                  [animateDelay]="120 + (i * 100)"
                  class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-colors"
                >
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-school mb-4">{{ outcome.context }}</p>
                  <p class="type-body text-white font-medium mb-1">{{ outcome.name }}</p>
                  <p class="text-xs text-white/50 leading-relaxed">{{ outcome.metric }}</p>
                </article>
              }
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 mb-20">
              <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-10">OUR ECOSYSTEM</p>
              <div class="flex flex-wrap justify-center gap-5 md:gap-8 items-center opacity-90 hover:opacity-100 transition-opacity duration-700">
                @for (logo of proofLogos; track logo.name) {
                  <img [src]="logo.imageUrl" [alt]="logo.name" class="h-10 md:h-12 w-auto max-w-[9.5rem] md:max-w-[12rem] object-contain brightness-0 invert" loading="lazy" decoding="async" />
                }
              </div>
            </div>

            <h2 class="text-[clamp(2.5rem,8vw,5rem)] font-bold text-white tracking-tight leading-[0.9] mb-8">Ready to <span class="text-accent-school italic font-serif">Scale?</span></h2>
            <p class="type-body-l text-white/60 max-w-2xl mx-auto mb-12">
              Join 100+ learners and businesses already growing with Scalefort. Whether you're starting a career or upskilling a team, we have the path.
            </p>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a appMagnetic routerLink="/tech-school/apply" class="group relative px-10 py-5 bg-accent-school text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,70,159,0.35)] no-underline">
                Start Your Journey
              </a>
              <button appMagnetic type="button" (click)="openCalendlyPopup()" class="group relative px-10 py-5 bg-white/10 text-white rounded-full font-bold uppercase tracking-widest text-xs backdrop-blur-md border border-white/20 transition-all hover:bg-white/20">
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeCtaComponent {
  private readonly document = inject(DOCUMENT);
  private readonly calendlyUrl = 'https://calendly.com/egab/new-meeting';
  private readonly calendlyScriptSrc = 'https://assets.calendly.com/assets/external/widget.js';
  private readonly calendlyStylesHref = 'https://assets.calendly.com/assets/external/widget.css';

  readonly proofOutcomes: ReadonlyArray<ProofOutcome> = [
    { name: '100+ Learners Served', context: 'Tech School', metric: 'Hands-on training, internships, and recruitment support.' },
    { name: '50+ Projects Completed', context: 'IT Services', metric: 'Delivery across product engineering, cloud, APIs, and DevOps.' },
    { name: '5+ Corporate Partners', context: 'Corporate Training', metric: 'Custom workforce upskilling aligned to business goals.' },
  ];

  readonly proofLogos: ReadonlyArray<ProofLogo> = companyLogos;

  async openCalendlyPopup(): Promise<void> {
    try {
      this.ensureCalendlyStyles();
      await this.loadCalendlyScript();
      window.Calendly?.initPopupWidget({ url: this.calendlyUrl });
    } catch {
      this.document.defaultView?.open(this.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  }

  private ensureCalendlyStyles(): void {
    const existingStyles = this.document.querySelector<HTMLLinkElement>(`link[href="${this.calendlyStylesHref}"]`);
    if (existingStyles) {
      return;
    }

    const link = this.document.createElement('link');
    link.rel = 'stylesheet';
    link.href = this.calendlyStylesHref;
    this.document.head.appendChild(link);
  }

  private loadCalendlyScript(): Promise<void> {
    if (window.Calendly) {
      return Promise.resolve();
    }

    const existingScript = this.document.querySelector<HTMLScriptElement>(`script[src="${this.calendlyScriptSrc}"]`);
    if (existingScript) {
      return new Promise((resolve, reject) => {
        existingScript.addEventListener('load', () => resolve(), { once: true });
        existingScript.addEventListener('error', () => reject(new Error('Calendly failed to load.')), { once: true });
      });
    }

    return new Promise((resolve, reject) => {
      const script = this.document.createElement('script');
      script.src = this.calendlyScriptSrc;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Calendly failed to load.'));
      this.document.body.appendChild(script);
    });
  }
}
