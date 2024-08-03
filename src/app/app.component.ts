import { Component, OnInit } from '@angular/core';
import { RoleService } from './Service/role.service';
import { Auth, Role, User } from './Interfaces/User';
import { DataService } from './Service/data.service';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public isLoggedIn$!: Observable<boolean>;
  public user: Auth | null = null;
  public isMenuToggled = false;

  constructor(public roleService: RoleService,private router: Router) {}

  public ngOnInit() {
    this.isLoggedIn$ = this.roleService.isLoggedIn$;
    this.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        const id = localStorage.getItem('id') ?? '';
        const role = localStorage.getItem('role') as Role;
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastname');
        const middleName = localStorage.getItem('middleName') ?? '';
        const username = localStorage.getItem('username') ?? '';
        const avatar = localStorage.getItem('avatar') ?? '';
        if (firstName && lastName) {
          this.user = new Auth(id, role, firstName, lastName, middleName, username,avatar);
        } else {
          this.user = this.roleService.currentUser;
        }
      }
    });
  }
  goToSettings(){
    this.router.navigate(['**'])
  }

  goToAdmin() {
      this.router.navigate(['/admin']);
  }

  logout(){
    this.roleService.logout()
  }

  toggleMenu() {
    this.isMenuToggled = !this.isMenuToggled;
  }
}
