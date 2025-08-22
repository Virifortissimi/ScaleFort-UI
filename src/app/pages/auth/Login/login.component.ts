import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { SpinnerIconComponent } from '../../../shared/components/spinner-icon.component';
import { ILoginUser } from '../../../shared/models/authentication.model';
import { finalize } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, SpinnerIconComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private readonly _authenticationService = inject(AuthenticationService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  formGroup!: FormGroup;
  loading = signal(false);
  passwordVisible = signal(false);
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  togglePasswordVisibility() {
    this.passwordVisible.set(!this.passwordVisible());
  }

  onSubmit() {
      this.loading.set(true);
      const { value } = this.formGroup;
      const payload: ILoginUser = {
        username: value.username,
        password: value.password
      } 
  
      this._authenticationService
        .login(payload)
        .pipe(finalize(() => this.loading.set(false)))
        .subscribe({
          next: (res) => {
            this.authService.login(res.token);
          },
          error: (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Login error',
              detail: error?.error?.error || 'Something went wrong',
              life: 5000
            });
          },
        });
    }

}