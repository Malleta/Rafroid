import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class NeAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem('currentUser')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
