import { Component, inject, OnInit, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ICreateUser } from '../../../shared/models/authentication.model';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpinnerIconComponent } from '../../../shared/components/spinner-icon.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, SpinnerIconComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private readonly _authenticationService = inject(AuthenticationService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  formGroup!: FormGroup;
  loading = signal(false);
  passwordVisible = signal(false);

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()])[A-Za-z\\d!@#$%^&*()]{8,}$')
      ]],
      confirmPassword: ['']
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPassword?.setErrors(null);
      return null;
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible.set(!this.passwordVisible());
  }

  onSubmit() {
    this.loading.set(true);
    const { value } = this.formGroup;
    const payload: ICreateUser = {
      username: value.username.trim(),
      email: value.email.trim(),
      password: value.password,
      confirmPassword: value.confirmPassword
    } 

    this._authenticationService
      .register(payload)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Your account has been created successfully',
            life: 5000,
          });
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Registration error',
            detail: error.errors || 'Something went wrong',
            life: 5000,
          });
        },
      });
  }
}