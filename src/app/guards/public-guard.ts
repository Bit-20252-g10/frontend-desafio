import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth-service';

export const publicGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    console.warn('Acceso denegado: Usuario ya autenticado. Redirigiendo a /home');
    return router.createUrlTree(['/home']);
  } else {
    return true;
  }
};