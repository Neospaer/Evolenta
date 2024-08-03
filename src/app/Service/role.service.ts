import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, RegUser, User } from '../Interfaces/User';
import { BehaviorSubject, tap} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();
  public currentUser: Auth | null = null;

  constructor(private readonly http: HttpClient, private router: Router) {
  }

  public login(username: string, password: string) {
    const response = this.http.post('https://evo-academy.wckz.dev/api/cooking-blog/users/sign', { username, password });

    return response.pipe(
      tap((response: any) => {
        this.currentUser = new Auth(
          response.id,
          response.role,
          response.firstName,
          response.lastName,
          response.middleName,
          response.username,
          response.avatar
        )

        this._isLoggedIn$.next(true);

        localStorage.setItem('id', this.currentUser.id);
        localStorage.setItem('role', this.currentUser.role);
        localStorage.setItem('firstName', this.currentUser.firstName);
        localStorage.setItem('lastName', this.currentUser.lastName);
        localStorage.setItem('middleName', this.currentUser.middleName);
        localStorage.setItem('username', this.currentUser.username);
        localStorage.setItem('jwtToken', response.jwtToken);
        localStorage.setItem('avatar', this.currentUser.avatar);
      })
    );
  }

  public logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('middleName');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('avatar');
  
    this._isLoggedIn$.next(false)
    this.currentUser = null;
    this.router.navigate(['/'])
  }

  public register(user: RegUser) {
    return this.http.post<RegUser>('https://evo-academy.wckz.dev/api/cooking-blog/users/registration', user);
  }
}
