import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-salary-guide',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section bg-bg-white">
      <div class="container-base max-w-3xl">
        <div class="text-center mb-8">
          <p class="overline mb-2">Resource</p>
          <h1 class="text-h1 font-bold text-text-primary mb-3">Nigeria Tech Salary Guide 2026</h1>
          <p class="text-text-muted">Get the guide by email and receive recommended next steps for your path.</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="submit()" class="form-elevated grid grid-cols-1 gap-5" novalidate>
          <div>
            <label for="name" class="text-sm font-medium text-text-body">Name</label>
            <input id="name" type="text" formControlName="name" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base" />
          </div>

          <div>
            <label for="email" class="text-sm font-medium text-text-body">Email</label>
            <input id="email" type="email" formControlName="email" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base" />
          </div>

          <div>
            <label for="whatsapp" class="text-sm font-medium text-text-body">WhatsApp</label>
            <input id="whatsapp" type="tel" formControlName="whatsapp" class="mt-2 w-full px-4 py-3 rounded-[10px] border border-border-base" />
          </div>

          <button type="submit" [disabled]="form.invalid || loading()" class="btn-primary disabled:opacity-50">
            {{ loading() ? 'Submitting...' : 'Send Me the Guide' }}
          </button>

          @if (status() === 'success') {
            <div class="border border-success rounded-card p-4">
              <p class="text-text-body mb-3">Thanks. Check your email for the salary guide.</p>
              <a routerLink="/tech-school/apply" class="btn-secondary no-underline">What's your next step?</a>
            </div>
          }
        </form>
      </div>
    </section>
  `,
})
export class SalaryGuideComponent {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly toast = inject(ToastService);

  readonly status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  readonly loading = computed(() => this.status() === 'loading');

  readonly form = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur' }),
    email: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    whatsapp: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.pattern(/^(\+234|0)[789]\d{9}$/)],
      updateOn: 'blur',
    }),
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('loading');

    this.api
      .submitLeadMagnet({
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        whatsapp: this.form.controls.whatsapp.value,
      })
      .subscribe({
        next: () => {
          this.status.set('success');
          this.toast.success('Guide request submitted. Check your email shortly.');
        },
        error: () => {
          this.status.set('error');
          this.toast.error('Unable to send guide right now. Please try again.');
        },
      });
  }
}


