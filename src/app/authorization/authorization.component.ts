import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../Service/role.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent{
  
  public username: string = '';
  public password: string = '';

  constructor(private roleService: RoleService, private router: Router) {}

  public login() {
    this.roleService.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}