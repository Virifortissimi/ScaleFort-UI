import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ApiService, EnrolmentPayload, PricingDetails } from '../../core/services/api.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { ReferralService } from '../../core/services/referral.service';
import { ToastService } from '../../core/services/toast.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const TRACKS = [
  'Frontend Development',
  'Backend Development (.NET)',
  'Backend Development (Python/Django)',
  'Cloud Computing',
  'Data Analysis',
  'UI/UX Design',
  'Cybersecurity',
] as const;

type PaymentPlan = 'full' | 'instalment' | 'secure_slot';

const APPLICATION_DRAFT_KEY = 'scalefort-tech-school-application-draft-v1';

interface PaymentPlanSummary {
  title: string;
  dueNow: number;
  balance: string;
  note: string;
}

const PLAN_SUMMARIES: Record<PaymentPlan, PaymentPlanSummary> = {
  full: {
    title: 'Full Payment',
    dueNow: 300000,
    balance: 'No balance outstanding',
    note: 'Fastest path to final enrolment confirmation.',
  },
  instalment: {
    title: 'Instalment',
    dueNow: 150000,
    balance: 'NGN 150,000 due within 2 months',
    note: 'Same programme access with split payment.',
  },
  secure_slot: {
    title: 'Secure Slot',
    dueNow: 50000,
    balance: 'Remaining tuition coordinated with admissions',
    note: 'Best when you want to reserve a seat immediately.',
  },
};

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section bg-bg-white">
      <div class="container-base max-w-4xl">
        <div class="text-center mb-10">
          <p class="overline mb-2">Tech School Application</p>
          <h1 class="text-h1 font-bold text-text-primary mb-3">Apply to Scalefort Tech School</h1>
          <p class="text-text-muted">Complete the 3-step form below. We will review and respond within 24-48 hours.</p>
        </div>

        @if (status() === 'success') {
          <div class="card-base border-success text-center mb-8">
            <h2 class="text-h3 font-semibold text-text-primary mb-2">Application Received</h2>
            <p class="text-text-muted">Thank you. Our admissions team has received your details and will contact you with next steps.</p>
          </div>
        }

        @if (status() === 'preparing_payment') {
          <div class="card-base border-border-base text-center mb-8">
            <h2 class="text-h3 font-semibold text-text-primary mb-2">Preparing Payment</h2>
            <p class="text-text-muted">Hold on while we set up your Paystack checkout...</p>
          </div>
        }

        <div class="grid grid-cols-3 gap-3 mb-8">
          @for (idx of stepNumbers; track idx) {
            <div [ngClass]="stepClass(idx)" class="rounded-pill px-4 py-2 text-center text-sm font-semibold border">Step {{ idx }}</div>
          }
        </div>

        <form [formGroup]="form" (ngSubmit)="submit()" novalidate class="form-elevated">
          @if (step() === 1) {
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="md:col-span-2">
                <label for="name" class="text-sm font-medium text-text-body">Full Name</label>
                <input id="name" type="text" formControlName="name" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary" placeholder="Your full name" />
                @if (isInvalid('name')) { <p class="text-xs text-error mt-1" role="alert">Please enter your full name (2-100 characters).</p> }
              </div>

              <div>
                <label for="email" class="text-sm font-medium text-text-body">Email</label>
                <input id="email" type="email" formControlName="email" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary" placeholder="you@example.com" />
                @if (isInvalid('email')) { <p class="text-xs text-error mt-1" role="alert">Please enter a valid email address.</p> }
              </div>

              <div>
                <label for="phone" class="text-sm font-medium text-text-body">Phone</label>
                <input id="phone" type="tel" formControlName="phone" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary" placeholder="+234..." />
                @if (isInvalid('phone')) { <p class="text-xs text-error mt-1" role="alert">Enter a valid Nigerian phone number.</p> }
              </div>

              <div class="md:col-span-2">
                <label for="whatsapp" class="text-sm font-medium text-text-body">WhatsApp Number (optional)</label>
                <input id="whatsapp" type="tel" formControlName="whatsapp" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary" placeholder="+234..." />
              </div>
            </div>
          }

          @if (step() === 2) {
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="occupation" class="text-sm font-medium text-text-body">Current Occupation</label>
                <input id="occupation" type="text" formControlName="occupation" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary" />
                @if (isInvalid('occupation')) { <p class="text-xs text-error mt-1" role="alert">Please enter your current occupation.</p> }
              </div>

              <div>
                <label for="experience" class="text-sm font-medium text-text-body">Experience Level</label>
                <select id="experience" formControlName="experience" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary">
                  <option value="">Select level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                @if (isInvalid('experience')) { <p class="text-xs text-error mt-1" role="alert">Please choose your experience level.</p> }
              </div>

              <div class="md:col-span-2">
                <label for="track" class="text-sm font-medium text-text-body">Preferred Track</label>
                <select id="track" formControlName="track" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary">
                  <option value="">Select track</option>
                  @for (track of tracks; track track) {
                    <option [value]="track">{{ track }}</option>
                  }
                </select>
                @if (isInvalid('track')) { <p class="text-xs text-error mt-1" role="alert">Please select a track.</p> }
              </div>
            </div>
          }

          @if (step() === 3) {
            <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-5">
              <div class="space-y-5">
                <p class="text-sm font-medium text-text-body">Choose Payment Plan</p>
                <label class="block border border-border-base rounded-card p-4 cursor-pointer" [ngClass]="form.controls.plan.value === 'full' ? 'ring-2 ring-btn-dark' : ''">
                  <input type="radio" class="sr-only" formControlName="plan" value="full" />
                  <p class="font-semibold text-text-primary">Full Payment - NGN 300,000</p>
                  <p class="text-sm text-text-muted">Save NGN 50,000 versus instalment option.</p>
                </label>
                <label class="block border border-border-base rounded-card p-4 cursor-pointer" [ngClass]="form.controls.plan.value === 'instalment' ? 'ring-2 ring-btn-dark' : ''">
                  <input type="radio" class="sr-only" formControlName="plan" value="instalment" />
                  <p class="font-semibold text-text-primary">Instalment - NGN 150,000 upfront</p>
                  <p class="text-sm text-text-muted">Pay balance within 2 months of starting.</p>
                </label>
                <label class="block border border-border-base rounded-card p-4 cursor-pointer" [ngClass]="form.controls.plan.value === 'secure_slot' ? 'ring-2 ring-btn-dark' : ''">
                  <input type="radio" class="sr-only" formControlName="plan" value="secure_slot" />
                  <p class="font-semibold text-text-primary">Secure Slot - NGN 50,000</p>
                  <p class="text-sm text-text-muted">Reserve your seat now and complete payment later with admissions guidance.</p>
                </label>

                <div>
                  <label for="referral" class="text-sm font-medium text-text-body">How did you hear about us? (optional)</label>
                  <input id="referral" type="text" formControlName="referral" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary" />
                </div>

                <div>
                  <label for="referralId" class="text-sm font-medium text-text-body">Referral ID (optional)</label>
                  <div class="mt-2 flex flex-col sm:flex-row gap-2">
                    <input
                      id="referralId"
                      type="text"
                      formControlName="referralId"
                      (blur)="validateReferralId()"
                      class="w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white text-base text-text-primary"
                      placeholder="Enter referral code"
                    />
                    <button
                      type="button"
                      class="btn-secondary sm:w-auto"
                      (click)="validateReferralId()"
                      [disabled]="!form.controls.referralId.value || referralValidationStatus() === 'checking'"
                    >
                      {{ referralValidationStatus() === 'checking' ? 'Checking...' : 'Validate' }}
                    </button>
                  </div>
                  @if (referralValidationStatus() === 'valid') {
                    <p class="text-xs text-success mt-2" role="status">Referral ID is valid.</p>
                  }
                  @if (referralValidationStatus() === 'invalid') {
                    <p class="text-xs text-error mt-2" role="alert">Referral ID is invalid. Please check and try again.</p>
                  }
                </div>
              </div>

              <aside class="space-y-4">
                <article class="rounded-card border border-border-base bg-bg-subtle p-4">
                  <p class="text-xs font-semibold uppercase tracking-overline text-text-muted mb-2">Live Summary</p>
                  <h3 class="text-base font-semibold text-text-primary mb-3">{{ planSummary().title }}</h3>
                  <dl class="m-0 space-y-2 text-sm">
                    <div class="flex items-center justify-between gap-2">
                      <dt class="text-text-muted">Track</dt>
                      <dd class="m-0 text-text-primary font-medium text-right">{{ form.controls.track.value || 'Select in step 2' }}</dd>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                      <dt class="text-text-muted">Due now</dt>
                      <dd class="m-0 text-text-primary font-semibold">{{ formatNaira(planSummary().dueNow) }}</dd>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                      <dt class="text-text-muted">Balance</dt>
                      <dd class="m-0 text-text-primary font-medium text-right">{{ planSummary().balance }}</dd>
                    </div>
                  </dl>
                  <p class="mt-3 mb-0 text-xs text-text-muted">{{ planSummary().note }}</p>
                  @if (lastSavedAt()) {
                    <p class="mt-2 mb-0 text-xs text-success" role="status">Draft auto-saved at {{ lastSavedAt() }}.</p>
                  }
                </article>

                <article class="rounded-card border border-green-100 bg-green-50 p-4">
                  <p class="text-xs font-semibold uppercase tracking-overline text-green-700 mb-2">Trust Signals</p>
                  <ul class="list-disc pl-5 m-0 space-y-1 text-xs text-green-900">
                    @for (item of trustSignals; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>
                </article>
              </aside>
            </div>
          }

          @if (status() === 'error') {
            <p class="text-sm text-error mt-6" role="alert">We couldn't submit your application right now. Please try again.</p>
          }

          <div class="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between">
            @if (step() > 1) {
              <button type="button" (click)="prevStep()" class="btn-secondary">Back</button>
            }

            @if (step() < 3) {
              <button type="button" (click)="nextStep()" class="btn-primary sm:ml-auto">Continue</button>
            } @else {
              <button type="submit" [disabled]="form.invalid || loading() || status() === 'preparing_payment'" [attr.aria-busy]="loading() || status() === 'preparing_payment'" class="btn-primary sm:ml-auto disabled:opacity-50 disabled:cursor-not-allowed">
                {{ loading() ? 'Submitting...' : status() === 'preparing_payment' ? 'Preparing Payment...' : 'Submit & Continue to Payment' }}
              </button>
            }
          </div>
        </form>

      </div>
    </section>

    @if (paymentModalOpen() && paymentIframeUrl()) {
      <div class="payment-overlay" role="dialog" aria-modal="true" aria-labelledby="tech-school-payment-title">
        <div class="payment-dialog" [style.top.px]="paymentDialogTop()" [style.left.px]="paymentDialogLeft()">
          <div class="payment-header">
            <h3 id="tech-school-payment-title" class="text-base font-semibold text-text-primary m-0">Pay with Paystack</h3>
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

    .payment-overlay {
      position: absolute;
      inset: 0;
      z-index: 5000;
      padding: 1rem;
      background: transparent;
    }

    .payment-overlay::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
      background: rgba(15, 23, 42, 0.58);
    }

    .payment-dialog {
      position: absolute;
      z-index: 1;
      transform: translate(-50%, -50%);
      width: min(100%, 48rem);
      height: min(82svh, 44rem);
      overflow: hidden;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 28px 90px rgba(15, 23, 42, 0.28);
    }

    .payment-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--border-default);
    }

    @media (max-width: 640px) {
      .payment-overlay {
        padding: 0;
      }

      .payment-dialog {
        width: calc(100% - 1rem);
        height: min(88svh, 44rem);
      }

      .payment-header {
        align-items: flex-start;
        flex-direction: column;
      }
    }
  `],
})
export class GetStartedComponent implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly analytics = inject(AnalyticsService);
  private readonly referralService = inject(ReferralService);
  private readonly toast = inject(ToastService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly tracks = TRACKS;
  readonly stepNumbers = [1, 2, 3] as const;
  readonly trustSignals: ReadonlyArray<string> = [
    'Payments are processed securely via Paystack (PCI-compliant).',
    'You can verify your payment status before confirmation.',
    'Your draft is auto-saved locally so you do not lose progress.',
  ];
  readonly step = signal<1 | 2 | 3>(1);
  readonly status = signal<'idle' | 'loading' | 'success' | 'error' | 'preparing_payment'>('idle');
  readonly loading = computed(() => this.status() === 'loading');
  readonly referralValidationStatus = signal<'idle' | 'checking' | 'valid' | 'invalid'>('idle');
  readonly lastSavedAt = signal<string | null>(null);
  readonly paymentModalOpen = signal(false);
  readonly paymentIframeUrl = signal<SafeResourceUrl | null>(null);
  readonly paymentVerificationStatus = signal<'idle' | 'verifying'>('idle');
  readonly currentApplicationId = signal<string | null>(null);
  readonly currentPaymentReference = signal<string | null>(null);
  readonly paymentDialogTop = signal(0);
  readonly paymentDialogLeft = signal(0);

  readonly form = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)], updateOn: 'blur' }),
    email: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    phone: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.pattern(/^(\+234|0)[789]\d{9}$/)], updateOn: 'blur' }),
    whatsapp: this.fb.nonNullable.control('', { updateOn: 'blur' }),
    occupation: this.fb.nonNullable.control('', { validators: [Validators.required], updateOn: 'blur' }),
    experience: this.fb.nonNullable.control('', { validators: [Validators.required], updateOn: 'blur' }),
    track: this.fb.nonNullable.control('', { validators: [Validators.required], updateOn: 'blur' }),
    plan: this.fb.nonNullable.control<PaymentPlan>('full', { validators: [Validators.required], updateOn: 'change' }),
    referral: this.fb.nonNullable.control('', { updateOn: 'blur' }),
    referralId: this.fb.nonNullable.control('', { updateOn: 'blur' }),
  });

  constructor() {
    this.restoreDraft();
    this.applyRoutePresets();
    this.form.valueChanges.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.persistDraft();
    });
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

  stepClass(stepIndex: number): string {
    return this.step() === stepIndex
      ? 'bg-btn-dark text-white border-btn-dark'
      : this.step() > stepIndex
      ? 'bg-bg-white text-text-body border-border-base'
      : 'bg-bg-subtle text-text-muted border-border-base';
  }

  planSummary(): PaymentPlanSummary {
    return PLAN_SUMMARIES[this.form.controls.plan.value];
  }

  formatNaira(amount: number): string {
    return `NGN ${amount.toLocaleString('en-NG')}`;
  }

  prevStep(): void {
    if (this.step() === 3) {
      this.step.set(2);
      this.persistDraft();
      return;
    }

    this.step.set(1);
    this.persistDraft();
  }

  nextStep(): void {
    const currentStep = this.step();
    const fields = currentStep === 1 ? (['name', 'email', 'phone'] as const) : (['occupation', 'experience', 'track'] as const);

    fields.forEach((field) => this.form.controls[field].markAsTouched());

    const isStepValid = fields.every((field) => this.form.controls[field].valid);
    if (!isStepValid) {
      return;
    }

    if (currentStep === 1) {
      this.step.set(2);
      this.persistDraft();
      return;
    }

    this.step.set(3);
    this.persistDraft();
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const manualReferralId = this.form.controls.referralId.value.trim();
    if (manualReferralId && this.referralValidationStatus() !== 'valid') {
      this.toast.error('Please validate the referral ID before submitting.');
      return;
    }
    const savedReferralId = this.referralService.getReferralCode().trim();
    const referralId = manualReferralId || savedReferralId || undefined;
    const allowFallbackReferralDiscount = Boolean(manualReferralId && this.referralValidationStatus() === 'valid');

    this.currentApplicationId.set(null);
    this.currentPaymentReference.set(null);
    this.paymentVerificationStatus.set('idle');
    this.status.set('loading');

    const payload: EnrolmentPayload = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      phone: this.form.controls.phone.value,
      whatsapp: this.form.controls.whatsapp.value || undefined,
      occupation: this.form.controls.occupation.value,
      experience: this.form.controls.experience.value,
      track: this.form.controls.track.value,
      plan: this.form.controls.plan.value,
      referral: referralId,
    };

    this.api.submitEnrolment(payload).subscribe({
      next: (response) => {
        const applicationId = response.data?.applicationId;
        if (!applicationId) {
          this.status.set('error');
          this.toast.error('Application submitted but payment setup failed. Please contact support.');
          return;
        }

        this.status.set('preparing_payment');
        this.preparePaymentAndOpenCheckout(applicationId, payload, allowFallbackReferralDiscount);
      },
      error: () => {
        this.status.set('error');
        this.toast.error("We couldn't submit your application right now. Please try again.");
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
      next: () => {
        this.pollPaymentStatus(applicationId, 8);
      },
      error: () => {
        // Verification can be temporarily delayed; keep checking status before failing.
        this.pollPaymentStatus(applicationId, 8);
      },
    });
  }

  validateReferralId(showErrorToast = true): void {
    const referralId = this.form.controls.referralId.value.trim();
    if (!referralId) {
      this.referralValidationStatus.set('idle');
      return;
    }

    this.referralValidationStatus.set('checking');
    this.api.validateReferralId(referralId).subscribe({
      next: (isValid) => {
        this.referralValidationStatus.set(isValid ? 'valid' : 'invalid');
      },
      error: () => {
        this.referralValidationStatus.set('invalid');
        if (showErrorToast) {
          this.toast.error('Unable to validate referral ID right now.');
        }
      },
    });
  }

  closePaymentModal(): void {
    this.paymentModalOpen.set(false);
    this.paymentIframeUrl.set(null);
    this.paymentVerificationStatus.set('idle');
    this.unlockPageScroll();
  }

  private pollPaymentStatus(applicationId: string, remainingAttempts: number): void {
    this.api.getPaymentStatus(applicationId).subscribe({
      next: (statusResponse) => {
        if (statusResponse.success && statusResponse.data?.isPaid) {
          this.paymentVerificationStatus.set('idle');
          this.status.set('success');
          this.clearDraft();
          this.closePaymentModal();
          this.toast.success('Payment verified successfully.');
          this.router.navigate(['/payment/success'], {
            queryParams: { applicationId },
            state: { paymentStatus: statusResponse.data },
          });
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

  private preparePaymentAndOpenCheckout(applicationId: string, payload: EnrolmentPayload, allowFallbackReferralDiscount: boolean): void {
    const referralId = payload.referral?.trim() || undefined;
    const hasReferral = Boolean(referralId);
    const fallbackAmount = this.amountForPlan(payload.plan, undefined, hasReferral && allowFallbackReferralDiscount);

    this.api.getPricing(referralId).subscribe({
      next: (pricing) => {
        const amount = this.amountForPlan(payload.plan, pricing, hasReferral);
        this.initializePaystackCheckout(applicationId, payload, amount);
      },
      error: () => {
        this.initializePaystackCheckout(applicationId, payload, fallbackAmount);
      },
    });
  }

  private initializePaystackCheckout(applicationId: string, payload: EnrolmentPayload, amount: number): void {
    const regularAmount = this.amountForPlan(payload.plan);
    if (amount < regularAmount) {
      this.toast.info(`Referral discount applied. You will pay NGN ${amount.toLocaleString('en-NG')}.`);
    }

    setTimeout(() => {
      this.api
        .initializePaystackPayment(applicationId, {
          customerEmail: payload.email,
          amount,
          currency: 'NGN',
          orderReference: `SCF-${Date.now()}`,
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
            this.analytics.trackLead('Tech School', payload.track, amount);
            this.toast.info('Complete payment in the modal to secure your spot.');
          },
          error: () => {
            this.status.set('error');
            this.toast.error('Unable to initialize payment right now. Please try again.');
          },
        });
    }, 1200);
  }

  private amountForPlan(plan: PaymentPlan, pricing?: PricingDetails, hasReferral = false): number {
    const regularAmount = this.defaultAmountForPlan(plan);
    if (!pricing) {
      return hasReferral ? this.applyReferralFallbackDiscount(regularAmount) : regularAmount;
    }

    const referralAmount = this.pickAmountForPlan(plan, pricing.onceAmount, pricing.twiceAmount, pricing.thriceAmount);
    const regularPricingAmount = this.pickAmountForPlan(plan, pricing.mainOnceAmount, pricing.mainTwiceAmount, pricing.mainThriceAmount);

    if (hasReferral) {
      if (referralAmount > 0) return referralAmount;
      if (regularPricingAmount > 0) return regularPricingAmount;
      return this.applyReferralFallbackDiscount(regularAmount);
    }

    if (regularPricingAmount > 0) return regularPricingAmount;
    if (referralAmount > 0) return referralAmount;
    return regularAmount;
  }

  private defaultAmountForPlan(plan: PaymentPlan): number {
    if (plan === 'full') return 300000;
    if (plan === 'instalment') return 150000;
    return 50000;
  }

  private pickAmountForPlan(plan: PaymentPlan, full: number, instalment: number, secureSlot: number): number {
    if (plan === 'full') return full;
    if (plan === 'instalment') return instalment;
    return secureSlot;
  }

  private applyReferralFallbackDiscount(amount: number): number {
    return Math.round(amount * 0.9);
  }

  private persistDraft(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const payload = {
      step: this.step(),
      values: this.form.getRawValue(),
      savedAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(APPLICATION_DRAFT_KEY, JSON.stringify(payload));
      this.lastSavedAt.set(this.formatSavedTime(payload.savedAt));
    } catch {
      // Ignore localStorage failures (private mode/quota) without blocking submission.
    }
  }

  private restoreDraft(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const rawDraft = window.localStorage.getItem(APPLICATION_DRAFT_KEY);
    if (!rawDraft) {
      return;
    }

    try {
      const parsed = JSON.parse(rawDraft) as {
        step?: 1 | 2 | 3;
        values?: Record<string, unknown>;
        savedAt?: string;
      };

      if (parsed.values) {
        this.form.patchValue(parsed.values as Partial<typeof this.form.value>, { emitEvent: false });
      }

      if (parsed.step && [1, 2, 3].includes(parsed.step)) {
        this.step.set(parsed.step);
      }

      if (parsed.savedAt) {
        this.lastSavedAt.set(this.formatSavedTime(parsed.savedAt));
      }
    } catch {
      window.localStorage.removeItem(APPLICATION_DRAFT_KEY);
    }
  }

  private applyRoutePresets(): void {
    const presetTrack = this.route.snapshot.queryParamMap.get('track');
    const presetPlan = this.route.snapshot.queryParamMap.get('plan');
    const presetReferralId = this.route.snapshot.queryParamMap.get('ref')?.trim();
    let updated = false;

    if (presetTrack && this.isKnownTrack(presetTrack)) {
      this.form.controls.track.setValue(presetTrack, { emitEvent: false });
      updated = true;
    }

    if (presetPlan && this.isKnownPlan(presetPlan)) {
      this.form.controls.plan.setValue(presetPlan, { emitEvent: false });
      updated = true;
    }

    if (presetReferralId) {
      this.form.controls.referralId.setValue(presetReferralId, { emitEvent: false });
      this.referralValidationStatus.set('idle');
      updated = true;
    }

    if (updated) {
      this.persistDraft();
    }

    if (presetReferralId) {
      queueMicrotask(() => this.validateReferralId(false));
    }
  }

  private isKnownTrack(track: string): track is (typeof TRACKS)[number] {
    return (TRACKS as readonly string[]).includes(track);
  }

  private isKnownPlan(plan: string): plan is PaymentPlan {
    return plan === 'full' || plan === 'instalment' || plan === 'secure_slot';
  }

  private clearDraft(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.removeItem(APPLICATION_DRAFT_KEY);
    this.lastSavedAt.set(null);
  }

  private formatSavedTime(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
    const host = document.querySelector('app-get-started');
    if (!host) {
      return 0;
    }

    return host.getBoundingClientRect().top + window.scrollY;
  }
}



