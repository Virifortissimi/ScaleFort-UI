import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  ApiResponse,
  ApiService,
  AuthData,
  ForgotPasswordPayload,
  LoginPayload,
  RequestEmailChangePayload,
  RegisterPayload,
  ResendConfirmationPayload,
  ResetPasswordPayload,
  TwoFactorChallengePayload,
  TwoFactorCodePayload,
  TwoFactorLoginPayload,
  TwoFactorSetupPayload,
} from './api.service';
import { Observable, catchError, finalize, firstValueFrom, map, of, shareReplay, tap } from 'rxjs';
import { clearLegacyAuthStorage, isJwtUsable } from '../utils/auth-token.util';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly platformId = inject(PLATFORM_ID);
  private refreshRequest$: Observable<string | null> | null = null;

  readonly token = signal<string | null>(null);
  readonly isAuthenticated = computed(() => isJwtUsable(this.token()));

  async init(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    clearLegacyAuthStorage();
    await firstValueFrom(this.ensureValidAccessToken());
  }

  login(payload: LoginPayload): Observable<ApiResponse<AuthData>> {
    return this.api.login(payload).pipe(
      tap((response) => {
        if (response.data?.token) {
          this.setSession(response.data.token);
        }
      })
    );
  }

  register(payload: RegisterPayload): Observable<ApiResponse<AuthData>> {
    return this.api.register(payload).pipe(
      tap((response) => {
        if (response.data?.token) {
          this.setSession(response.data.token);
        }
      })
    );
  }

  confirmEmail(userId: string, token: string): Observable<ApiResponse> {
    return this.api.confirmEmail(userId, token);
  }

  confirmEmailChange(userId: string, newEmail: string, token: string): Observable<ApiResponse> {
    return this.api.confirmEmailChange(userId, newEmail, token);
  }

  resendConfirmation(payload: ResendConfirmationPayload): Observable<ApiResponse> {
    return this.api.resendConfirmation(payload);
  }

  forgotPassword(payload: ForgotPasswordPayload): Observable<ApiResponse> {
    return this.api.forgotPassword(payload);
  }

  resetPassword(payload: ResetPasswordPayload): Observable<ApiResponse> {
    return this.api.resetPassword(payload);
  }

  requestEmailChange(payload: RequestEmailChangePayload): Observable<ApiResponse> {
    return this.api.requestEmailChange(payload);
  }

  beginEmailTwoFactorSetup(payload: TwoFactorSetupPayload): Observable<ApiResponse> {
    return this.api.beginEmailTwoFactorSetup(payload);
  }

  resendEmailTwoFactorSetupCode(): Observable<ApiResponse> {
    return this.api.resendEmailTwoFactorSetupCode();
  }

  enableEmailTwoFactor(payload: TwoFactorCodePayload): Observable<ApiResponse> {
    return this.api.enableEmailTwoFactor(payload);
  }

  disableEmailTwoFactor(payload: TwoFactorSetupPayload): Observable<ApiResponse> {
    return this.api.disableEmailTwoFactor(payload);
  }

  verifyTwoFactorLogin(payload: TwoFactorLoginPayload): Observable<ApiResponse<AuthData>> {
    return this.api.verifyTwoFactorLogin(payload).pipe(
      tap((response) => {
        if (response.data?.token) {
          this.setSession(response.data.token);
        }
      })
    );
  }

  resendTwoFactorLoginCode(payload: TwoFactorChallengePayload): Observable<ApiResponse> {
    return this.api.resendTwoFactorLoginCode(payload);
  }

  logout(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.token.set(null);
      return;
    }

    this.api.logout().subscribe({
      error: () => {
        // Ignore logout API failures during local sign-out.
      },
    });

    this.token.set(null);
    clearLegacyAuthStorage();
  }

  syncSession(data?: AuthData): void {
    if (data?.token) {
      this.setSession(data.token);
    }
  }

  logoutOtherDevices(): Observable<ApiResponse<AuthData>> {
    return this.api.logoutOtherDevices().pipe(
      tap((response) => {
        if (response.data?.token) {
          this.setSession(response.data.token);
        }
      })
    );
  }

  ensureValidAccessToken(): Observable<string | null> {
    const token = this.token();
    if (isJwtUsable(token)) {
      return of(token);
    }

    if (this.refreshRequest$) {
      return this.refreshRequest$;
    }

    this.refreshRequest$ = this.api.refreshAuthToken(token).pipe(
      map((response) => {
        if (!response.success || !response.data?.token) {
          this.token.set(null);
          return null;
        }

        this.setSession(response.data.token);
        return response.data.token;
      }),
      catchError(() => {
        this.token.set(null);
        return of(null);
      }),
      finalize(() => {
        this.refreshRequest$ = null;
      }),
      shareReplay(1)
    );

    return this.refreshRequest$;
  }

  private setSession(token: string): void {
    if (!isJwtUsable(token)) {
      this.token.set(null);
      return;
    }

    if (isPlatformBrowser(this.platformId)) {
      clearLegacyAuthStorage();
    }

    this.token.set(token);
  }
}
