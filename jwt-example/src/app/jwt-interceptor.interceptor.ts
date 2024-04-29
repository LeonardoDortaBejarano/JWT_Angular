import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let authService: AuthService = inject(AuthService);

  let token: string | null = authService.getToken();
  if( token != null) {
    const cloneReq = req.clone(
      {
        setHeaders: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept' : 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    );
    return next(cloneReq);
  }
  return next(req);
  

};
