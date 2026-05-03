import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-verify-2fa',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-bg-base px-4 section-compact">
      <div class="mx-auto w-full max-w-md">
        <header class="mb-8 text-center">
          <p class="text-sm font-semibold text-accent-school">Two-Factor Authentication</p>
          <h1 class="text-h1 font-bold text-text-primary">Enter your verification code</h1>
          <p class="mt-2 text-text-muted">We sent a code to {{ maskedEmail() }}. Enter it below to complete your sign in.</p>
        </header>

        <form [formGroup]="form" (ngSubmit)="submit()" class="form-elevated space-y-5" novalidate>
          @if (linkError()) {
            <p class="form-feedback form-feedback-error" role="alert">{{ linkError() }}</p>
          }

          <div>
            <label for="two-factor-code" class="mb-2 block text-sm font-medium text-text-body">Verification code</label>
            <input
              id="two-factor-code"
              type="text"
              inputmode="numeric"
              formControlName="code"
              class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-center text-lg tracking-[0.35em] text-text-body placeholder:text-text-disabled"
              placeholder="123456"
              maxlength="8"
            />
            @if (isInvalid()) {
              <p class="form-error" role="alert">Enter the verification code from your email.</p>
            }
          </div>

          @if (error()) {
            <p class="form-feedback form-feedback-error" role="alert">{{ error() }}</p>
          }

          <button type="submit" class="btn-primary w-full" [disabled]="form.invalid || loading() || !!linkError()">
            {{ loading() ? 'Verifying...' : 'Verify and sign in' }}
          </button>

          <button type="button" class="btn-secondary w-full" (click)="resendCode()" [disabled]="resending() || resendCooldownSeconds() > 0 || !!linkError()">
            {{ resending() ? 'Sending a new code...' : resendCooldownSeconds() > 0 ? 'Resend locked' : 'Resend code' }}
          </button>

          @if (resendCooldownSeconds() > 0) {
            <p class="text-center text-sm text-text-muted">You can request another code in {{ formatCountdown(resendCooldownSeconds()) }}.</p>
          }

          <p class="text-center text-sm text-text-muted">
            Back to
            <a routerLink="/login" class="form-link">sign in</a>
          </p>
        </form>
      </div>
    </section>
  `,
})
export class VerifyTwoFactorComponent implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);
  private readonly toast = inject(ToastService);

  readonly loading = signal(false);
  readonly resending = signal(false);
  readonly error = signal('');
  readonly linkError = signal('');
  readonly resendCooldownSeconds = signal(0);

  readonly form = this.fb.nonNullable.group({
    code: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'blur',
    }),
  });

  private readonly challengeToken = this.route.snapshot.queryParamMap.get('token')?.trim() ?? '';
  private readonly email = this.route.snapshot.queryParamMap.get('email')?.trim() ?? '';
  private readonly initialCooldownSeconds = Number(this.route.snapshot.queryParamMap.get('cooldown') ?? 0);
  private resendCooldownTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    if (!this.challengeToken) {
      this.linkError.set('Your two-factor session is missing. Please sign in again.');
    }

    if (Number.isFinite(this.initialCooldownSeconds) && this.initialCooldownSeconds > 0) {
      this.startCooldown(this.initialCooldownSeconds);
    }
  }

  ngOnDestroy(): void {
    this.clearCooldownTimer();
  }

  maskedEmail(): string {
    if (!this.email.includes('@')) {
      return 'your email address';
    }

    const [name, domain] = this.email.split('@');
    if (name.length <= 2) {
      return `${name[0] ?? '*'}*@${domain}`;
    }

    return `${name.slice(0, 2)}${'*'.repeat(Math.max(1, name.length - 2))}@${domain}`;
  }

  isInvalid(): boolean {
    const control = this.form.controls.code;
    return control.invalid && control.touched;
  }

  submit(): void {
    if (this.form.invalid || this.loading() || this.linkError()) {
      this.form.markAllAsTouched();
      return;
    }

    this.error.set('');
    this.loading.set(true);

    this.auth
      .verifyTwoFactorLogin({
        twoFactorToken: this.challengeToken,
        code: this.form.controls.code.value,
      })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success || !response.data?.token) {
            const message = response.message ?? 'We could not verify that code. Please try again.';
            this.error.set(message);
            this.toast.error(message);
            return;
          }

          this.toast.success('Signed in successfully.');
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          void this.router.navigateByUrl(returnUrl && returnUrl.startsWith('/') ? returnUrl : '/affiliate');
        },
        error: (error: unknown) => {
          const message = this.extractErrorMessage(error);
          this.error.set(message);
          this.toast.error(message);
        },
      });
  }

  resendCode(): void {
    if (this.resending() || this.resendCooldownSeconds() > 0 || this.linkError()) {
      return;
    }

    this.form.controls.code.setValue('');
    this.form.controls.code.markAsPristine();
    this.form.controls.code.markAsUntouched();
    this.error.set('');
    this.resending.set(true);
    this.auth
      .resendTwoFactorLoginCode({ twoFactorToken: this.challengeToken })
      .pipe(finalize(() => this.resending.set(false)))
      .subscribe({
        next: (response) => {
          this.startCooldown(response.retryAfterSeconds ?? 60);
          const message = response.message ?? 'A new verification code has been sent to your email.';
          this.toast.success(message);
        },
        error: (error: unknown) => {
          const retryAfterSeconds = this.extractRetryAfterSeconds(error);
          if (retryAfterSeconds > 0) {
            this.startCooldown(retryAfterSeconds);
          }
          this.toast.error(this.extractErrorMessage(error));
        },
      });
  }

  formatCountdown(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes === 0) {
      return `${seconds}s`;
    }

    return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
  }

  private extractErrorMessage(error: unknown): string {
    const fallback = 'We could not complete two-factor verification right now. Please try again.';

    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message ?? error.error?.Message;
      if (typeof message === 'string' && message.trim()) {
        return message;
      }
    }

    return fallback;
  }

  private extractRetryAfterSeconds(error: unknown): number {
    if (!(error instanceof HttpErrorResponse)) {
      return 0;
    }

    const fromHeader = Number(error.headers.get('Retry-After'));
    if (Number.isFinite(fromHeader) && fromHeader > 0) {
      return Math.max(1, Math.ceil(fromHeader));
    }

    const fromBody = Number(error.error?.retryAfterSeconds ?? error.error?.RetryAfterSeconds);
    if (Number.isFinite(fromBody) && fromBody > 0) {
      return Math.max(1, Math.ceil(fromBody));
    }

    return 0;
  }

  private startCooldown(seconds: number): void {
    const safeSeconds = Math.max(0, Math.ceil(seconds));
    this.resendCooldownSeconds.set(safeSeconds);
    this.clearCooldownTimer();

    if (safeSeconds <= 0) {
      return;
    }

    this.resendCooldownTimer = setInterval(() => {
      const next = this.resendCooldownSeconds() - 1;
      if (next <= 0) {
        this.resendCooldownSeconds.set(0);
        this.clearCooldownTimer();
        return;
      }

      this.resendCooldownSeconds.set(next);
    }, 1000);
  }

  private clearCooldownTimer(): void {
    if (this.resendCooldownTimer !== null) {
      clearInterval(this.resendCooldownTimer);
      this.resendCooldownTimer = null;
    }
  }
}
