import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService, SKIP_AUTH } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService);
  if (request.context.get(SKIP_AUTH)) return next(request);
  const token = auth.accessToken();
  const authorized = token ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : request;
  return next(authorized).pipe(catchError((error: HttpErrorResponse) => {
    if (error.status !== 401 || !auth.refreshToken()) return throwError(() => error);
    return auth.refresh().pipe(
      switchMap(tokens => next(request.clone({ setHeaders: { Authorization: `Bearer ${tokens.accessToken}` } }))),
      catchError(refreshError => { auth.clear(); return throwError(() => refreshError); })
    );
  }));
};
