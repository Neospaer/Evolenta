import { Component, OnInit } from '@angular/core';
import { RoleService } from './Service/role.service';
import { Auth, Role, User } from './Interfaces/User';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public isLoggedIn$!: Observable<boolean>;
  public user: Auth | null = null;

  constructor(private roleService: RoleService, private router: Router) {}

  public ngOnInit() {
    this.isLoggedIn$ = this.roleService.isLoggedIn$;
    this.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.user = this.roleService.currentUser;
        console.log(this.user)
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
