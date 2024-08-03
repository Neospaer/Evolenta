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
  
  public isSubmitted = false;
  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private readonly router: Router,
    private readonly roleService: RoleService
  ) {}

  public submitForm() {
    if (this.loginForm.invalid) {
      this.isSubmitted = true;
      return;
    }
    const username = this.loginForm.controls.username.value!;
    const password = this.loginForm.controls.password.value!;

    this.roleService.login(username, password).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }
}