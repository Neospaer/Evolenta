import { Component, OnInit } from '@angular/core';
import { RoleService } from './Service/role.service';
import { Auth, Role, User } from './Interfaces/User';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public isLoggedIn$!: Observable<boolean>;
  public user: Auth | null = null;

  constructor(private roleService: RoleService, private router: Router) {
    Notiflix.Notify.init({
      width: '380px',
      position: 'center-top',
      borderRadius: '8px',
      fontFamily: 'Inter',
      fontSize: '14px',
      useIcon: true,
      success: {
        background: '#FFF',
        textColor: 'rgba(17, 24, 39, 1)',
        notiflixIconColor: 'green',
      },
    });
  }

  public ngOnInit() {
    this.isLoggedIn$ = this.roleService.isLoggedIn$;
    this.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.user = this.roleService.currentUser;
      }
    });
  }

  public goToSettings() {
    this.router.navigate(['/']);
  }

  public logout() {
    this.roleService.logout();
  }
}
