import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly error = signal('');

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

  isInvalid(field: 'name' | 'email' | 'phone' | 'password' | 'confirmPassword'): boolean {
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
    if (this.form.invalid || this.loading()) {
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
      .register({
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        phone: this.form.controls.phone.value,
        password: this.form.controls.password.value,
        confirmPassword: this.form.controls.confirmPassword.value,
      })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            const message = response.message ?? 'Unable to create account with these details. Please try again.';
            this.error.set(message);
            this.toast.error(message);
            return;
          }

          const message = response.message ?? 'Account created successfully. Please confirm your email before signing in.';
          this.toast.success(message);
          void this.router.navigate(['/login'], {
            queryParams: {
              confirmation: 'pending',
              email: this.form.controls.email.value,
            },
          });
        },
        error: (error: unknown) => {
          const message = this.extractErrorMessage(error, 'Unable to create account right now. Please try again shortly.');
          this.error.set(message);
          this.toast.error(message);
        },
      });
  }

  private extractErrorMessage(error: unknown, fallback: string): string {
    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message ?? error.error?.Message;
      if (typeof message === 'string' && message.trim()) {
        return message;
      }
    }

    return fallback;
  }
}
