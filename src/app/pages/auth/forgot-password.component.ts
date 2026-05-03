import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-bg-base px-4 section-compact">
      <div class="mx-auto w-full max-w-md">
        <header class="mb-8 text-center">
          <p class="text-sm font-semibold text-accent-school">Account Recovery</p>
          <h1 class="text-h1 font-bold text-text-primary">Reset your password</h1>
          <p class="mt-2 text-text-muted">Enter your email and we’ll send you a secure link to choose a new password.</p>
        </header>

        <form [formGroup]="form" (ngSubmit)="submit()" class="form-elevated space-y-5" novalidate>
          <div>
            <label for="forgot-email" class="mb-2 block text-sm font-medium text-text-body">Email address</label>
            <input
              id="forgot-email"
              type="email"
              formControlName="email"
              class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body placeholder:text-text-disabled"
              placeholder="you@example.com"
            />
            @if (isInvalid()) {
              <p class="form-error" role="alert">Enter a valid email address.</p>
            }
          </div>

          @if (message()) {
            <p class="rounded-[10px] border border-accent-school/20 bg-accent-school/5 px-4 py-3 text-sm text-text-body" role="status">
              {{ message() }}
            </p>
          }

          @if (error()) {
            <p class="form-feedback form-feedback-error" role="alert">{{ error() }}</p>
          }

          <button type="submit" class="btn-primary w-full" [disabled]="form.invalid || loading()">
            {{ loading() ? 'Sending reset link...' : 'Send reset link' }}
          </button>

          <p class="text-center text-sm text-text-muted">
            Remembered your password?
            <a routerLink="/login" class="form-link">Back to sign in</a>
          </p>
        </form>
      </div>
    </section>
  `,
})
export class ForgotPasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly toast = inject(ToastService);

  readonly loading = signal(false);
  readonly message = signal('');
  readonly error = signal('');

  readonly form = this.fb.nonNullable.group({
    email: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
  });

  isInvalid(): boolean {
    const control = this.form.controls.email;
    return control.invalid && control.touched;
  }

  submit(): void {
    if (this.form.invalid || this.loading()) {
      this.form.markAllAsTouched();
      return;
    }

    this.error.set('');
    this.loading.set(true);

    this.auth
      .forgotPassword({ email: this.form.controls.email.value.trim() })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          const message =
            response.message ?? 'If an account exists for that email address, a password reset link has been sent.';
          this.message.set(message);
          this.toast.success(message);
        },
        error: (error: unknown) => {
          const message = this.extractErrorMessage(error);
          this.error.set(message);
          this.toast.error(message);
        },
      });
  }

  private extractErrorMessage(error: unknown): string {
    const fallback = 'We could not send a reset link right now. Please try again shortly.';

    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message ?? error.error?.Message;
      if (typeof message === 'string' && message.trim()) {
        return message;
      }
    }

    return fallback;
  }
}
