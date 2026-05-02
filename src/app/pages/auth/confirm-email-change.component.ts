import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-confirm-email-change',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-bg-base px-4 section-compact">
      <div class="mx-auto w-full max-w-xl">
        <div class="form-elevated text-center">
          <p class="text-sm font-semibold text-accent-school">Account Security</p>
          <h1 class="mt-2 text-h1 font-bold text-text-primary">Confirm your new email</h1>

          @if (loading()) {
            <p class="mt-4 text-text-muted">We’re confirming your new email now...</p>
          } @else {
            <p class="mt-4 text-text-muted">{{ message() }}</p>
          }

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a routerLink="/login" class="btn-primary">Go to sign in</a>
            <a routerLink="/affiliate" class="btn-secondary">Back to dashboard</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ConfirmEmailChangeComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);
  private readonly toast = inject(ToastService);

  readonly loading = signal(true);
  readonly message = signal('Confirming your new email...');

  constructor() {
    const userId = this.route.snapshot.queryParamMap.get('userId')?.trim() ?? '';
    const newEmail = this.route.snapshot.queryParamMap.get('newEmail')?.trim() ?? '';
    const token = this.route.snapshot.queryParamMap.get('token')?.trim() ?? '';

    if (!userId || !newEmail || !token) {
      this.loading.set(false);
      this.message.set('This email change link is incomplete. Please use the full link from your email or request a new one.');
      return;
    }

    this.auth
      .confirmEmailChange(userId, newEmail, token)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          const message = response.message ?? 'Your email address has been updated successfully. Please sign in again.';
          this.message.set(message);
          this.toast.success(message);
        },
        error: (error: unknown) => {
          const message = this.extractErrorMessage(error);
          this.message.set(message);
          this.toast.error(message);
        },
      });
  }

  private extractErrorMessage(error: unknown): string {
    const fallback = 'This email change link is invalid or has expired. Please request a new one from your account settings.';

    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message ?? error.error?.Message;
      if (typeof message === 'string' && message.trim()) {
        return message;
      }
    }

    return fallback;
  }
}
