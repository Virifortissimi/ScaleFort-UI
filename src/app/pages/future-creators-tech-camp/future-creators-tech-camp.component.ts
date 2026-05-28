import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { CohortCountdownComponent } from '../../shared/components/cohort-countdown.component';
import { SchemaService } from '../../core/services/schema.service';
import { ApiService, FutureCreatorsTechCampPayload } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

interface CampTheme {
  week: string;
  title: string;
  items: readonly string[];
  projects: readonly string[];
  accentClass: string;
}

interface CampDetail {
  label: string;
  value: string;
  note: string;
}

@Component({
  selector: 'app-future-creators-tech-camp',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, AnimateOnScrollDirective, CohortCountdownComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section-hero bg-bg-white relative overflow-hidden">
      <div class="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(239,253,245,0.95),rgba(255,255,255,0))]" aria-hidden="true"></div>
      <div class="container-base grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-10 lg:gap-14 items-center">
        <div appAnimateOnScroll class="text-center lg:text-left">
          <p class="overline mb-4 inline-flex items-center rounded-pill border border-green-100 bg-green-50 px-5 py-2 text-xs font-bold text-green-700 shadow-sm">
            Maiden Edition Starts August 3, 2026
          </p>
          <h1 class="type-display text-text-primary mb-6 tracking-tight">Future Creators Tech Camp</h1>
          <p class="type-body-l text-text-muted max-w-2xl mx-auto lg:mx-0 mb-8">
            A fun, practical 3-week virtual holiday program that introduces children to technology, creativity, and problem-solving on Zoom.
          </p>

          <div class="mb-8 flex justify-center lg:justify-start">
            <app-cohort-countdown
              nextCohortDate="2026-08-03T09:00:00+01:00"
              label="Camp starts in"
              scarcityLabel="Limited slots available"
            />
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button type="button" (click)="scrollToSection('register')" class="btn-primary">Register Now</button>
            <button type="button" (click)="scrollToSection('themes')" class="btn-secondary">View Camp Themes</button>
          </div>

          <dl class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            @for (detail of details; track detail.label) {
              <div class="rounded-card border border-border-base bg-bg-subtle p-4">
                <dt class="text-xs font-semibold uppercase tracking-[0.12em] text-accent-school mb-1">{{ detail.label }}</dt>
                <dd class="text-base font-bold text-text-primary">{{ detail.value }}</dd>
                <dd class="text-sm text-text-muted mt-1">{{ detail.note }}</dd>
              </div>
            }
          </dl>
        </div>

        <figure appAnimateOnScroll [animateDelay]="120" class="relative">
          <div class="overflow-hidden rounded-[1.75rem] border border-border-base bg-bg-white p-2 shadow-[0_32px_90px_rgba(15,23,42,0.14)]">
            <img
              src="assets/images/camps/future-creators-tech-camp.jpeg"
              alt="Scalefort Future Creators Tech Camp flyer showing children learning with a laptop"
              class="w-full rounded-[1.25rem] object-cover"
              decoding="async"
              fetchpriority="high"
            />
          </div>
          <figcaption class="sr-only">Scalefort Future Creators Tech Camp flyer.</figcaption>
        </figure>
      </div>
    </section>

    <section class="section-compact bg-bg-white">
      <div class="container-base">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (benefit of benefits; track benefit.title; let i = $index) {
            <article appAnimateOnScroll [animateDelay]="i * 80" class="card-base p-6">
              <div class="w-11 h-11 rounded-xl bg-green-50 border border-green-100 text-green-700 flex items-center justify-center mb-4">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="benefit.path" />
                </svg>
              </div>
              <h2 class="text-lg font-bold text-text-primary mb-2">{{ benefit.title }}</h2>
              <p class="text-sm leading-6 text-text-muted">{{ benefit.body }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section id="themes" class="section bg-bg-subtle">
      <div class="container-base">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <p class="overline mb-2">3 Weeks. 3 Exciting Themes.</p>
          <h2 class="type-h1 text-text-primary">What Children Will Learn</h2>
          <p class="type-body text-text-muted mt-3">
            Each week gives young learners a practical theme, a clear set of skills, and creative projects they can show proudly.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          @for (theme of themes; track theme.week; let i = $index) {
            <article appAnimateOnScroll [animateDelay]="i * 100" class="card-base p-6 bg-bg-white">
              <p [class]="'inline-flex rounded-pill px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] mb-4 ' + theme.accentClass">
                {{ theme.week }}
              </p>
              <h3 class="text-h3 font-bold text-text-primary mb-4">{{ theme.title }}</h3>
              <ul class="space-y-2 text-sm text-text-muted list-disc pl-5 mb-6">
                @for (item of theme.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
              <div class="rounded-card border border-border-base bg-bg-subtle p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.12em] text-text-primary mb-2">Fun Projects</p>
                <p class="text-sm text-text-muted">{{ theme.projects.join(' | ') }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section bg-bg-white">
      <div id="register" class="container-base max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 items-start">
          <aside class="rounded-[28px] border border-green-100 bg-[linear-gradient(135deg,rgba(239,253,245,0.96),rgba(255,255,255,0.98))] p-6 md:p-8 shadow-[0_28px_80px_rgba(10,42,23,0.08)]">
            <p class="overline mb-2">Limited Slots Available</p>
            <h2 class="type-h1 text-text-primary mb-4">Register for NGN 99,999</h2>
            <p class="type-body text-text-muted mb-6">
              Complete the form and continue to Paystack checkout. Zoom access details will be shared after payment confirmation.
            </p>
            <div class="mb-6 rounded-card border border-border-base bg-bg-white p-4">
              <app-cohort-countdown
                nextCohortDate="2026-08-03T09:00:00+01:00"
                label="Camp starts in"
                scarcityLabel="Limited slots available"
              />
            </div>
            <dl class="space-y-4 m-0">
              <div>
                <dt class="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">Format</dt>
                <dd class="text-base font-semibold text-text-primary m-0">Virtual on Zoom</dd>
              </div>
              <div>
                <dt class="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">Price</dt>
                <dd class="text-base font-semibold text-text-primary m-0">NGN {{ formatAmount(campPrice) }}</dd>
              </div>
              <div>
                <dt class="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">Starts</dt>
                <dd class="text-base font-semibold text-text-primary m-0">August 3, 2026</dd>
              </div>
            </dl>
          </aside>

          <form [formGroup]="form" (ngSubmit)="submit()" class="form-elevated grid grid-cols-1 md:grid-cols-2 gap-6" novalidate>
            <div class="md:col-span-2">
              <label for="parentName" class="text-sm font-medium text-text-body">Parent or Guardian Name</label>
              <input id="parentName" type="text" formControlName="parentName" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white" />
              @if (isInvalid('parentName')) {
                <p class="text-xs text-error mt-1" role="alert">Please enter the parent or guardian name.</p>
              }
            </div>

            <div>
              <label for="email" class="text-sm font-medium text-text-body">Email</label>
              <input id="email" type="email" formControlName="email" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white" />
              @if (isInvalid('email')) {
                <p class="text-xs text-error mt-1" role="alert">Please enter a valid email address.</p>
              }
            </div>

            <div>
              <label for="phone" class="text-sm font-medium text-text-body">Phone</label>
              <input id="phone" type="tel" formControlName="phone" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white" />
              @if (isInvalid('phone')) {
                <p class="text-xs text-error mt-1" role="alert">Enter a valid Nigerian phone number.</p>
              }
            </div>

            <div>
              <label for="childName" class="text-sm font-medium text-text-body">Child's Name</label>
              <input id="childName" type="text" formControlName="childName" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white" />
              @if (isInvalid('childName')) {
                <p class="text-xs text-error mt-1" role="alert">Please enter the child's name.</p>
              }
            </div>

            <div>
              <label for="ageGroup" class="text-sm font-medium text-text-body">Age Group</label>
              <select id="ageGroup" formControlName="ageGroup" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white">
                <option value="">Select age group</option>
                <option value="7-10">7-10 years</option>
                <option value="11-15">11-15 years</option>
              </select>
              @if (isInvalid('ageGroup')) {
                <p class="text-xs text-error mt-1" role="alert">Please choose an age group.</p>
              }
            </div>

            <div class="md:col-span-2">
              <label for="message" class="text-sm font-medium text-text-body">Notes (optional)</label>
              <textarea id="message" rows="4" formControlName="message" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white"></textarea>
            </div>

            @if (status() === 'error') {
              <p class="md:col-span-2 text-sm text-error" role="alert">We couldn't submit the camp registration right now. Please try again.</p>
            }

            <div class="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p class="text-sm text-text-muted m-0">Pay securely with Paystack: NGN {{ formatAmount(campPrice) }}.</p>
              <button type="submit" [disabled]="form.invalid || loading()" [attr.aria-busy]="loading()" class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                {{ loading() ? 'Preparing Payment...' : 'Submit & Pay' }}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>

    @if (paymentModalOpen() && paymentIframeUrl()) {
      <div class="camp-payment-overlay" role="dialog" aria-modal="true" aria-labelledby="camp-payment-title">
        <div class="camp-payment-dialog" [style.top.px]="paymentDialogTop()" [style.left.px]="paymentDialogLeft()">
          <div class="camp-payment-header">
            <h3 id="camp-payment-title" class="text-base font-semibold text-text-primary m-0">Pay with Paystack</h3>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="btn-primary !px-3 !py-2 text-xs"
                [disabled]="paymentVerificationStatus() === 'verifying'"
                (click)="verifyPaymentAndContinue()"
              >
                {{ paymentVerificationStatus() === 'verifying' ? 'Verifying...' : 'I have completed payment' }}
              </button>
              <button type="button" (click)="closePaymentModal()" class="text-text-muted hover:text-text-primary text-2xl leading-none px-2" aria-label="Close payment modal">&times;</button>
            </div>
          </div>
          <div class="px-4 py-2 border-b border-border-base bg-bg-subtle text-xs text-text-muted">
            Complete checkout in Paystack, then click "I have completed payment" to verify and continue.
          </div>
          <iframe class="w-full h-[calc(82svh-97px)]" [src]="paymentIframeUrl()" title="Paystack Checkout"></iframe>
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
    }

    .camp-payment-overlay {
      position: absolute;
      inset: 0;
      z-index: 5000;
      padding: 1rem;
      background: rgba(15, 23, 42, 0.58);
    }

    .camp-payment-dialog {
      position: absolute;
      z-index: 5001;
      transform: translate(-50%, -50%);
      width: min(100%, 48rem);
      height: min(82svh, 44rem);
      overflow: hidden;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 28px 90px rgba(15, 23, 42, 0.28);
    }

    .camp-payment-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--border-default);
    }

    @media (max-width: 640px) {
      .camp-payment-overlay {
        padding: 0;
      }

      .camp-payment-dialog {
        width: calc(100% - 1rem);
        height: min(88svh, 44rem);
      }

      .camp-payment-header {
        align-items: flex-start;
        flex-direction: column;
      }
    }
  `],
})
export class FutureCreatorsTechCampComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly schema = inject(SchemaService);
  private readonly toast = inject(ToastService);

  readonly campPrice = 99999;
  readonly status = signal<'idle' | 'loading' | 'error'>('idle');
  readonly loading = computed(() => this.status() === 'loading');
  readonly paymentModalOpen = signal(false);
  readonly paymentIframeUrl = signal<SafeResourceUrl | null>(null);
  readonly paymentVerificationStatus = signal<'idle' | 'verifying'>('idle');
  readonly currentApplicationId = signal<string | null>(null);
  readonly currentPaymentReference = signal<string | null>(null);
  readonly paymentDialogTop = signal(0);
  readonly paymentDialogLeft = signal(0);

  readonly form = this.fb.nonNullable.group({
    parentName: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)], updateOn: 'blur' }),
    email: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    phone: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.pattern(/^(\+234|0)[789]\d{9}$/)], updateOn: 'blur' }),
    childName: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)], updateOn: 'blur' }),
    ageGroup: this.fb.nonNullable.control<'7-10' | '11-15' | ''>('', { validators: [Validators.required], updateOn: 'change' }),
    message: this.fb.nonNullable.control('', { validators: [Validators.maxLength(500)], updateOn: 'blur' }),
  });

  readonly details: ReadonlyArray<CampDetail> = [
    { label: 'Age Groups', value: '7-10 and 11-15 years', note: 'Grouped for age-appropriate learning.' },
    { label: 'Duration', value: '3 weeks', note: 'A focused holiday learning experience.' },
    { label: 'Schedule', value: 'Weekdays', note: '2-4 hours per day.' },
    { label: 'Location', value: 'Virtual on Zoom', note: 'Live online practical sessions.' },
  ];

  readonly benefits = [
    {
      title: 'Boost Creativity',
      body: 'Children explore design, storytelling, and digital creation in a guided environment.',
      path: 'M12 3v3M12 18v3M4.22 5.64l2.12 2.12M17.66 16.24l2.12 2.12M3 12h3M18 12h3M4.22 18.36l2.12-2.12M17.66 7.76l2.12-2.12',
    },
    {
      title: 'Hands-On Learning',
      body: 'Learners build posters, games, quizzes, websites, and AI-assisted creative projects.',
      path: 'M4 5h16v11H4zM8 21h8M10 16v5M14 16v5',
    },
    {
      title: 'Teamwork',
      body: 'Small-group activities help children communicate, collaborate, and present their ideas.',
      path: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
    },
    {
      title: 'Future-Ready Skills',
      body: 'The camp introduces practical technology habits early, with safety and curiosity at the center.',
      path: 'M5 13l4 4L19 7M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z',
    },
  ];

  readonly themes: ReadonlyArray<CampTheme> = [
    {
      week: 'Week 1',
      title: 'Digital & Creative Tech',
      items: ['Computer basics', 'Internet safety', 'Typing skills', 'Canva design', 'AI tools for kids', 'Digital storytelling', 'Creating presentations'],
      projects: ['Design a poster', 'Create your superhero brand', 'AI image generation'],
      accentClass: 'bg-green-50 text-green-700 border border-green-100',
    },
    {
      week: 'Week 2',
      title: 'Intro to Coding & Game Creation',
      items: ['Scratch programming', 'Logic building', 'Intro to websites', 'Animation basics', 'Game building'],
      projects: ['Build simple games', 'Animated stories', 'Interactive quiz'],
      accentClass: 'bg-amber-50 text-amber-700 border border-amber-100',
    },
    {
      week: 'Week 3',
      title: 'AI Explorers',
      items: ['What is AI?', 'ChatGPT for kids', 'AI image and art creation', 'Build simple websites with AI tools', 'Tech career exploration', 'Team presentations'],
      projects: ['Create with AI', 'Build a website', 'Team showcase'],
      accentClass: 'bg-rose-50 text-rose-700 border border-rose-100',
    },
  ];

  ngOnInit(): void {
    this.schema.inject(
      {
        '@context': 'https://schema.org',
        '@type': 'EducationEvent',
        name: 'Scalefort Future Creators Tech Camp',
        description: 'A 3-week holiday technology camp for children ages 7-15, starting August 2026.',
        startDate: '2026-08-03T09:00:00+01:00',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
          '@type': 'VirtualLocation',
          url: 'https://zoom.us',
        },
        offers: {
          '@type': 'Offer',
          price: '99999',
          priceCurrency: 'NGN',
          availability: 'https://schema.org/InStock',
        },
        organizer: {
          '@type': 'Organization',
          name: 'Scalefort',
          url: 'https://www.scalefort.org',
        },
      },
      'schema-future-creators-tech-camp'
    );
  }

  ngOnDestroy(): void {
    this.unlockPageScroll();
  }

  @HostListener('window:resize')
  @HostListener('window:scroll')
  updatePaymentDialogPosition(): void {
    if (!this.paymentModalOpen()) {
      return;
    }

    const hostTop = this.getHostDocumentTop();
    this.paymentDialogTop.set(window.scrollY + window.innerHeight / 2 - hostTop);
    this.paymentDialogLeft.set(window.innerWidth / 2);
  }

  isInvalid(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('loading');
    this.currentApplicationId.set(null);
    this.currentPaymentReference.set(null);

    const payload: FutureCreatorsTechCampPayload = {
      parentName: this.form.controls.parentName.value,
      email: this.form.controls.email.value,
      phone: this.form.controls.phone.value,
      childName: this.form.controls.childName.value,
      ageGroup: this.form.controls.ageGroup.value as '7-10' | '11-15',
      message: this.form.controls.message.value || undefined,
    };

    this.api.submitFutureCreatorsTechCamp(payload).subscribe({
      next: (response) => {
        const applicationId = response.data?.applicationId;
        if (!applicationId) {
          this.status.set('error');
          this.toast.error('Registration submitted but payment setup failed. Please contact support.');
          return;
        }

        this.initializePaystackCheckout(applicationId, payload.email);
      },
      error: () => {
        this.status.set('error');
        this.toast.error("We couldn't submit the camp registration right now. Please try again.");
      },
    });
  }

  verifyPaymentAndContinue(): void {
    const applicationId = this.currentApplicationId();
    const reference = this.currentPaymentReference();

    if (!applicationId || !reference) {
      this.toast.error('Missing payment reference. Please restart your payment.');
      return;
    }

    this.paymentVerificationStatus.set('verifying');
    this.api.verifyPaystackPayment(reference).subscribe({
      next: () => this.pollPaymentStatus(applicationId, 8),
      error: () => this.pollPaymentStatus(applicationId, 8),
    });
  }

  closePaymentModal(): void {
    this.paymentModalOpen.set(false);
    this.paymentIframeUrl.set(null);
    this.paymentVerificationStatus.set('idle');
    this.unlockPageScroll();
  }

  formatAmount(amount: number): string {
    return new Intl.NumberFormat('en-NG', { maximumFractionDigits: 0 }).format(amount);
  }

  scrollToSection(sectionId: string): void {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  private initializePaystackCheckout(applicationId: string, email: string): void {
    this.api
      .initializePaystackPayment(applicationId, {
        customerEmail: email,
        amount: this.campPrice,
        currency: 'NGN',
        orderReference: `SCF-CAMP-${Date.now()}`,
      })
      .subscribe({
        next: (payment) => {
          const trustedPaymentUrl = this.toTrustedPaystackUrl(payment.authorizationUrl);
          if (!trustedPaymentUrl) {
            this.status.set('error');
            this.toast.error('Invalid payment checkout URL returned. Please try again.');
            return;
          }

          this.currentApplicationId.set(applicationId);
          this.currentPaymentReference.set(payment.reference);
          this.paymentIframeUrl.set(trustedPaymentUrl);
          this.paymentModalOpen.set(true);
          this.lockPageScroll();
          this.updatePaymentDialogPosition();
          this.status.set('idle');
          this.toast.info('Complete payment in the modal to secure your child\'s spot.');
        },
        error: () => {
          this.status.set('error');
          this.toast.error('Unable to initialize payment right now. Please try again.');
        },
      });
  }

  private pollPaymentStatus(applicationId: string, remainingAttempts: number): void {
    this.api.getPaymentStatus(applicationId).subscribe({
      next: (statusResponse) => {
        if (statusResponse.success && statusResponse.data?.isPaid) {
          this.paymentVerificationStatus.set('idle');
          this.closePaymentModal();
          this.form.reset();
          this.toast.success('Payment verified. Your child\'s camp spot is confirmed.');
          return;
        }

        if (remainingAttempts > 0) {
          setTimeout(() => this.pollPaymentStatus(applicationId, remainingAttempts - 1), 2000);
          return;
        }

        this.paymentVerificationStatus.set('idle');
        this.toast.error('Payment not confirmed yet. Please wait a bit and click "I have completed payment" again.');
      },
      error: () => {
        if (remainingAttempts > 0) {
          setTimeout(() => this.pollPaymentStatus(applicationId, remainingAttempts - 1), 2000);
          return;
        }

        this.paymentVerificationStatus.set('idle');
        this.toast.error('Unable to confirm payment right now. Please try again.');
      },
    });
  }

  private toTrustedPaystackUrl(rawUrl: string): SafeResourceUrl | null {
    try {
      const parsed = new URL(rawUrl);
      const hostname = parsed.hostname.toLowerCase();
      const isPaystackHost = hostname === 'paystack.com' || hostname.endsWith('.paystack.com');

      if (parsed.protocol !== 'https:' || !isPaystackHost) {
        return null;
      }

      return this.sanitizer.bypassSecurityTrustResourceUrl(parsed.toString());
    } catch {
      return null;
    }
  }

  private lockPageScroll(): void {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('payment-modal-active');
  }

  private unlockPageScroll(): void {
    document.body.style.overflow = '';
    document.body.classList.remove('payment-modal-active');
  }

  private getHostDocumentTop(): number {
    const host = document.querySelector('app-future-creators-tech-camp');
    if (!host) {
      return 0;
    }

    return host.getBoundingClientRect().top + window.scrollY;
  }
}
