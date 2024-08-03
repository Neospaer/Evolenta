import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { RoleService } from '../Service/role.service';

@Injectable({
  providedIn: 'root'
})
export class AdminerGuard implements CanActivate {
  constructor(private roleService: RoleService,private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.roleService.isLoggedIn$.pipe(
        map(isLoggedIn => {
          if (!isLoggedIn) {
            this.router.navigate(['/no-access']);
            return false;
          }
          return this.roleService.currentUser?.role === 'admin';
        }),
        tap(isAdmin => {
          if (!isAdmin) {
            this.router.navigate(['/no-access']);
          }
        }),
        catchError(() => {
          this.router.navigate(['/no-access']);
          return of(false);
        })
      );
    }
  }