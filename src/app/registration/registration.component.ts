import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegUser } from '../Interfaces/User';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../Service/role.service';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      firstName: [''],
      lastName: [''],
      middleName: ['']
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    const user: RegUser = this.registrationForm.value;

    this.roleService.register(user).subscribe(
      response => {
        Notify.success('Регистрация прошла успешно!');
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          Notify.failure('Ошибка валидации. Пожалуйста, проверьте введенные данные.');
        } else {
          Notify.failure('Ошибка при регистрации. Попробуйте снова.');
        }
      }
    );
  }
}