import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const httpConfigInterceptor: HttpInterceptorFn = (req, next) => {
  let modifiedRequest = req;

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
      return throwError(() => error);
    })
  );
};
