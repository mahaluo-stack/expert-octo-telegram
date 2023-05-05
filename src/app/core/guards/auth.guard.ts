import { inject } from '@angular/core';
import { CurrentUserService } from '../services/current.user.service';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const currentUserService: CurrentUserService = inject(CurrentUserService);
  const router: Router = inject(Router);

  return currentUserService.currentUser.subscribe((currentUser) => {
    if (currentUser.name === '') {
      router.navigateByUrl("/sign in");
      return false;
    }
    else {
      return true;
    }
  })
}
