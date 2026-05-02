import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-bg-base px-4 section-compact">
      <div class="mx-auto w-full max-w-md">
        <header class="mb-8 text-center">
          <p class="text-sm font-semibold text-accent-school">Account Recovery</p>
          <h1 class="text-h1 font-bold text-text-primary">Choose a new password</h1>
          <p class="mt-2 text-text-muted">Set a new secure password for your Scalefort account.</p>
        </header>

        <form [formGroup]="form" (ngSubmit)="submit()" class="form-elevated space-y-5" novalidate>
          @if (linkError()) {
            <p class="form-feedback form-feedback-error" role="alert">{{ linkError() }}</p>
          }

          <div>
            <label for="reset-password" class="mb-2 block text-sm font-medium text-text-body">New password</label>
            <input
              id="reset-password"
              type="password"
              formControlName="password"
              class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body placeholder:text-text-disabled"
              placeholder="Minimum 8 characters"
            />
            @if (isInvalid('password')) {
              <p class="form-error" role="alert">Use 8+ characters with uppercase, lowercase, a number, and a special character.</p>
            }
          </div>

          <div>
            <label for="reset-confirm-password" class="mb-2 block text-sm font-medium text-text-body">Confirm password</label>
            <input
              id="reset-confirm-password"
              type="password"
              formControlName="confirmPassword"
              class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body placeholder:text-text-disabled"
              placeholder="Re-enter your password"
            />
            @if (isInvalid('confirmPassword') || passwordsMismatch()) {
              <p class="form-error" role="alert">Passwords must match.</p>
            }
          </div>

          @if (error()) {
            <p class="form-feedback form-feedback-error" role="alert">{{ error() }}</p>
          }

          <button type="submit" class="btn-primary w-full" [disabled]="form.invalid || loading() || !!linkError()">
            {{ loading() ? 'Resetting password...' : 'Reset password' }}
          </button>

          <p class="text-center text-sm text-text-muted">
            Back to
            <a routerLink="/login" class="form-link">sign in</a>
          </p>
        </form>
      </div>
    </section>
  `,
})
export class ResetPasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly error = signal('');
  readonly linkError = signal('');

  readonly form = this.fb.nonNullable.group({
    password: this.fb.nonNullable.control('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/),
      ],
      updateOn: 'blur',
    }),
    confirmPassword: this.fb.nonNullable.control('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
  });

  private readonly userId = this.route.snapshot.queryParamMap.get('userId')?.trim() ?? '';
  private readonly token = this.route.snapshot.queryParamMap.get('token')?.trim() ?? '';

  constructor() {
    if (!this.userId || !this.token) {
      this.linkError.set('This password reset link is incomplete. Please request a new one.');
    }
  }

  isInvalid(field: 'password' | 'confirmPassword'): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  passwordsMismatch(): boolean {
    return (
      this.form.controls.confirmPassword.touched &&
      this.form.controls.password.value !== this.form.controls.confirmPassword.value
    );
  }

  submit(): void {
    if (this.form.invalid || this.loading() || this.linkError()) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.form.controls.password.value !== this.form.controls.confirmPassword.value) {
      this.form.controls.confirmPassword.markAsTouched();
      this.error.set('Passwords do not match.');
      this.toast.error('Passwords do not match.');
      return;
    }

    this.error.set('');
    this.loading.set(true);

    this.auth
      .resetPassword({
        userId: this.userId,
        token: this.token,
        password: this.form.controls.password.value,
        confirmPassword: this.form.controls.confirmPassword.value,
      })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            const message = response.message ?? 'We could not reset your password. Please request a new reset link.';
            this.error.set(message);
            this.toast.error(message);
            return;
          }

          const message = response.message ?? 'Your password has been reset successfully. You can now sign in.';
          this.toast.success(message);
          void this.router.navigate(['/login'], {
            queryParams: {
              reset: 'success',
            },
          });
        },
        error: (error: unknown) => {
          const message = this.extractErrorMessage(error);
          this.error.set(message);
          this.toast.error(message);
        },
      });
  }

  private extractErrorMessage(error: unknown): string {
    const fallback = 'We could not reset your password. Please request a new reset link.';

    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message ?? error.error?.Message;
      if (typeof message === 'string' && message.trim()) {
        return message;
      }
    }

    return fallback;
  }
}
