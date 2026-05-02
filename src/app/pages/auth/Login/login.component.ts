import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly loading = signal(false);
  readonly resendLoading = signal(false);
  readonly error = signal('');
  readonly notice = signal('');
  readonly canResendConfirmation = signal(false);

  readonly form = this.fb.nonNullable.group({
    usernameOrEmail: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: 'blur',
    }),
    password: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(8)],
      updateOn: 'blur',
    }),
  });

  constructor() {
    const confirmationState = this.route.snapshot.queryParamMap.get('confirmation');
    const email = this.route.snapshot.queryParamMap.get('email')?.trim();
    const resetState = this.route.snapshot.queryParamMap.get('reset');

    if (email) {
      this.form.controls.usernameOrEmail.setValue(email, { emitEvent: false });
    }

    if (confirmationState === 'pending') {
      this.notice.set('Check your email to confirm your account before signing in.');
      this.canResendConfirmation.set(true);
    } else if (resetState === 'success') {
      this.notice.set('Your password has been reset. You can sign in with your new password.');
    }

    effect(() => {
      if (!this.auth.isAuthenticated()) {
        return;
      }

      queueMicrotask(() => {
        void this.navigateToReturnUrl();
      });
    });
  }

  isInvalid(field: 'usernameOrEmail' | 'password'): boolean {
    const control = this.form.controls[field];
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
      .login({
        usernameOrEmail: this.form.controls.usernameOrEmail.value,
        password: this.form.controls.password.value,
      })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          if (response.success && response.data?.requiresTwoFactor && response.data.twoFactorToken) {
            void this.router.navigate(['/verify-2fa'], {
              queryParams: {
                token: response.data.twoFactorToken,
                email: response.data.email ?? this.form.controls.usernameOrEmail.value,
                cooldown: response.data.retryAfterSeconds ?? 0,
              },
            });
            return;
          }

          if (!response.success || !response.data?.token) {
            const message = response.message ?? 'Unable to sign in. Check your credentials and try again.';
            this.error.set(message);
            this.toast.error(message);
            return;
          }

          this.canResendConfirmation.set(false);
          this.toast.success('Signed in successfully.');
          void this.navigateToReturnUrl();
        },
        error: (error: unknown) => {
          const details = this.extractErrorDetails(error);
          this.error.set(details.message);
          this.canResendConfirmation.set(details.code === 'email_confirmation_required');
          this.toast.error(details.message);
        },
      });
  }

  resendConfirmation(): void {
    if (this.resendLoading()) {
      return;
    }

    const usernameOrEmail = this.form.controls.usernameOrEmail.value.trim();
    if (!usernameOrEmail) {
      this.form.controls.usernameOrEmail.markAsTouched();
      this.toast.error('Enter your email or username first so we know where to send the confirmation link.');
      return;
    }

    this.resendLoading.set(true);
    this.auth
      .resendConfirmation({ usernameOrEmail })
      .pipe(finalize(() => this.resendLoading.set(false)))
      .subscribe({
        next: (response) => {
          const message =
            response.message ?? 'If your account exists and still needs confirmation, a fresh confirmation email has been sent.';
          this.notice.set(message);
          this.toast.success(message);
        },
        error: () => {
          this.toast.error('We could not resend the confirmation email right now. Please try again shortly.');
        },
      });
  }

  private extractErrorDetails(error: unknown): { message: string; code?: string } {
    const fallback = 'Unable to sign in right now. Please try again shortly.';

    if (!(error instanceof HttpErrorResponse)) {
      return { message: fallback };
    }

    const message = error.error?.message ?? error.error?.Message;
    const code = error.error?.data?.code ?? error.error?.Data?.code;

    return {
      message: typeof message === 'string' && message.trim() ? message : fallback,
      code: typeof code === 'string' ? code : undefined,
    };
  }

  private navigateToReturnUrl(): Promise<boolean> {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    return this.router.navigateByUrl(returnUrl && returnUrl.startsWith('/') ? returnUrl : '/affiliate');
  }
}
