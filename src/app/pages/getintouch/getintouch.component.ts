import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService, ContactPayload } from '../../core/services/api.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { ToastService } from '../../core/services/toast.service';

type FormMode = 'contact' | 'quote' | 'corporate';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white">
      <div class="container-base max-w-4xl">
        <div appAnimateOnScroll [animateDelay]="80" class="text-center mb-10">
          <p class="overline mb-2">{{ modeLabel() }}</p>
          <h1 class="text-h1 font-bold text-text-primary mb-3">{{ heading() }}</h1>
          <p class="text-text-muted">{{ subline() }}</p>
        </div>

        <form appAnimateOnScroll [animateDelay]="140" [formGroup]="form" (ngSubmit)="submit()" class="form-elevated grid grid-cols-1 md:grid-cols-2 gap-6" novalidate>
          <div class="md:col-span-2">
            <label for="name" class="text-sm font-medium text-text-body">Full Name</label>
            <input id="name" type="text" formControlName="name" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white" />
            @if (isInvalid('name')) {
              <p class="text-xs text-error mt-1" role="alert">Please enter your full name.</p>
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
              <p class="text-xs text-error mt-1" role="alert">Please enter a valid Nigerian phone number.</p>
            }
          </div>

          <div>
            <label for="enquiryType" class="text-sm font-medium text-text-body">Enquiry Type</label>
            <select id="enquiryType" formControlName="enquiryType" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white">
              <option value="Tech School">Tech School</option>
              <option value="IT Services">IT Services</option>
              <option value="Corporate Training">Corporate Training</option>
              <option value="General">General</option>
            </select>
          </div>

          @if (mode() === 'quote') {
            <div>
              <label for="budgetRange" class="text-sm font-medium text-text-body">Budget Range</label>
              <select id="budgetRange" formControlName="budgetRange" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white">
                <option value="">Select budget</option>
                <option value="Under NGN 500K">Under NGN 500K</option>
                <option value="NGN 500K-NGN 2M">NGN 500K-NGN 2M</option>
                <option value="NGN 2M-NGN 10M">NGN 2M-NGN 10M</option>
                <option value="NGN 10M+">NGN 10M+</option>
              </select>
              @if (isInvalid('budgetRange')) {
                <p class="text-xs text-error mt-1" role="alert">Please select a budget range.</p>
              }
            </div>
          }

          @if (mode() === 'corporate') {
            <div>
              <label for="companySector" class="text-sm font-medium text-text-body">Company Sector</label>
              <select id="companySector" formControlName="companySector" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white">
                <option value="">Select sector</option>
                <option value="Financial Services">Financial Services</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Telecommunications">Telecommunications</option>
                <option value="Public Sector">Public Sector</option>
                <option value="Other">Other</option>
              </select>
              @if (isInvalid('companySector')) {
                <p class="text-xs text-error mt-1" role="alert">Please choose a sector.</p>
              }
            </div>
            <div>
              <label for="preferredStartDate" class="text-sm font-medium text-text-body">Preferred Start Date</label>
              <input id="preferredStartDate" type="date" formControlName="preferredStartDate" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white" />
              @if (isInvalid('preferredStartDate')) {
                <p class="text-xs text-error mt-1" role="alert">Please pick a preferred start date.</p>
              }
            </div>
          }

          <div class="md:col-span-2">
            <label for="message" class="text-sm font-medium text-text-body">Message</label>
            <textarea id="message" rows="5" formControlName="message" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base bg-bg-white"></textarea>
            @if (isInvalid('message')) {
              <p class="text-xs text-error mt-1" role="alert">Please enter your message.</p>
            }
          </div>

          <div class="md:col-span-2">
            <button type="submit" [disabled]="form.invalid || loading()" [attr.aria-busy]="loading()" class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              {{ loading() ? 'Submitting...' : submitLabel() }}
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class GetInTouchComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly api = inject(ApiService);
  private readonly analytics = inject(AnalyticsService);
  private readonly toast = inject(ToastService);

  readonly mode = signal<FormMode>('contact');
  readonly status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  readonly loading = computed(() => this.status() === 'loading');

  readonly form = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)],
      updateOn: 'blur',
    }),
    email: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    phone: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.pattern(/^(\+234|0)[789]\d{9}$/)],
      updateOn: 'blur',
    }),
    enquiryType: this.fb.nonNullable.control<'Tech School' | 'IT Services' | 'Corporate Training' | 'General'>('General', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    budgetRange: this.fb.nonNullable.control('', { updateOn: 'blur' }),
    preferredStartDate: this.fb.nonNullable.control('', { updateOn: 'blur' }),
    companySector: this.fb.nonNullable.control('', { updateOn: 'blur' }),
    message: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(10)],
      updateOn: 'blur',
    }),
  });

  ngOnInit(): void {
    const currentUrl = this.router.url;

    if (currentUrl.startsWith('/it-services/quote')) {
      this.mode.set('quote');
      this.form.controls.enquiryType.setValue('IT Services');
      this.form.controls.budgetRange.addValidators([Validators.required]);
      this.form.controls.budgetRange.updateValueAndValidity();
      return;
    }

    if (currentUrl.startsWith('/corporate-training/apply')) {
      this.mode.set('corporate');
      this.form.controls.enquiryType.setValue('Corporate Training');
      this.form.controls.preferredStartDate.addValidators([Validators.required]);
      this.form.controls.companySector.addValidators([Validators.required]);
      this.form.controls.preferredStartDate.updateValueAndValidity();
      this.form.controls.companySector.updateValueAndValidity();
      return;
    }

    this.mode.set('contact');
  }

  isInvalid(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  modeLabel(): string {
    return this.mode() === 'quote' ? 'IT Services Quote' : this.mode() === 'corporate' ? 'Corporate Training Enquiry' : 'Contact Scalefort';
  }

  heading(): string {
    return this.mode() === 'quote'
      ? 'Tell Us About Your Project'
      : this.mode() === 'corporate'
      ? 'Plan Training for Your Team'
      : 'Get in Touch with Scalefort';
  }

  subline(): string {
    return this.mode() === 'quote'
      ? 'Share scope and budget so our IT team can respond with next steps.'
      : this.mode() === 'corporate'
      ? 'Let us know your training goals, team context, and preferred timeline.'
      : 'Questions about Tech School, IT Services, or Corporate Training? Send us a message.';
  }

  submitLabel(): string {
    return this.mode() === 'quote' ? 'Request Quote' : this.mode() === 'corporate' ? 'Submit Enquiry' : 'Send Message';
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('loading');

    const payload: ContactPayload = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      phone: this.form.controls.phone.value,
      enquiryType: this.form.controls.enquiryType.value,
      message: this.form.controls.message.value,
      budgetRange: this.form.controls.budgetRange.value || undefined,
      preferredStartDate: this.form.controls.preferredStartDate.value || undefined,
      companySector: this.form.controls.companySector.value || undefined,
    };

    const request =
      this.mode() === 'quote'
        ? this.api.submitQuoteRequest(payload)
        : this.mode() === 'corporate'
        ? this.api.submitCorporateEnquiry(payload)
        : this.api.submitContactForm(payload);

    request.subscribe({
      next: (response) => {
        this.resetForm();
        this.status.set('idle');
        this.analytics.trackLead('Contact', payload.enquiryType);
        this.toast.success(response.message?.trim() || "Your request has been sent. We'll get back within 1 business day.");
      },
      error: () => {
        this.status.set('idle');
        this.toast.error('Submission failed. Please try again.');
      },
    });
  }

  private resetForm(): void {
    this.form.reset({
      name: '',
      email: '',
      phone: '',
      enquiryType: this.defaultEnquiryType(),
      budgetRange: '',
      preferredStartDate: '',
      companySector: '',
      message: '',
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  private defaultEnquiryType(): 'Tech School' | 'IT Services' | 'Corporate Training' | 'General' {
    return this.mode() === 'quote' ? 'IT Services' : this.mode() === 'corporate' ? 'Corporate Training' : 'General';
  }
}


