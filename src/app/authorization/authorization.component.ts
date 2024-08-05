import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../Service/role.service';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent{
  
  public username: string = '';
  public password: string = '';

  authorizationForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]],
    quickSession: [false]
  })
  constructor(private fb: FormBuilder,private roleService: RoleService, private router: Router) {}
  
  get f() { 
    return this.authorizationForm.controls;
  }
  
  public onSubmit(): void {
    if (this.authorizationForm.invalid) {
      return;
    }

    const { username, password, quickSession } = this.authorizationForm.value;

    this.roleService.login(username, password).subscribe(
      response => {
        if (quickSession) {
          // Логику для быстрого сеанса не реализовал ;(
        }
        Notify.success('Авторизация прошла успешно!');
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            Notify.failure('Ошибка валидации. Пожалуйста, проверьте введенные данные.');
            break;
          case 401:
            Notify.failure('Ошибка по паролю.');
            break;
          case 403:
            Notify.failure('Пользователь заблокирован.');
            break;
          case 404:
            Notify.failure('Пользователь не найден.');
            break;
          default:
            Notify.failure('Ошибка при авторизации. Попробуйте снова.');
            break;
        }
      }
    );
  }
}