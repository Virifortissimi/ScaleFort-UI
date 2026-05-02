import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../services/auth.service';

const AUTH_EXCLUDED_PATHS = [
  '/api/authentication/login',
  '/api/authentication/register',
  '/api/authentication/confirm-email',
  '/api/authentication/resend-confirmation',
  '/api/authentication/forgot-password',
  '/api/authentication/reset-password',
  '/api/authentication/two-factor/login/verify',
  '/api/authentication/two-factor/login/resend',
  '/api/authentication/refresh-token',
];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  if (req.headers.has('Authorization')) {
    return next(req);
  }

  if (!req.url.startsWith(environment.apiBaseUrl)) {
    return next(req);
  }

  if (AUTH_EXCLUDED_PATHS.some((path) => req.url.includes(path))) {
    return next(req);
  }

  return auth.ensureValidAccessToken().pipe(
    switchMap((token) => {
      const authorizedRequest = token
        ? req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          })
        : req;

      return next(authorizedRequest).pipe(
        catchError((error: unknown) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            auth.logout();
          }

          return throwError(() => error);
        })
      );
    })
  );
};
