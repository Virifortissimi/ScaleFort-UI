import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { AuthService } from "../../pages/auth/services/auth.service";
import { inject } from "@angular/core";
import { MessageService } from "primeng/api";

export const httpConfigInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const messageService = inject(MessageService);
  const token = authService.getToken();
  
  let modifiedRequest = req;

  if (token) {
    modifiedRequest = modifiedRequest.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  if (req.headers.has("Content-Type")) {
    modifiedRequest = modifiedRequest.clone({
      setHeaders: { "Content-Type": "application/json" },
    });
  } else if (req.headers.has("Content-Disposition")) {
    modifiedRequest = modifiedRequest.clone({
      setHeaders: { "Content-Disposition": "multipart/form-data" },
    });
  } else {
    modifiedRequest = modifiedRequest.clone({
      setHeaders: { Accept: "application/json" },
    });
  }

  return next(modifiedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logout('/login');
        messageService.add({
          severity: 'error',
          summary: 'Session expired',
          detail: 'Please login again.',
          life: 5000
        });
      }
      return throwError(() => error);
    })
  );
};
