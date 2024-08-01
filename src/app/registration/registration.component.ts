import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerObj = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: ''
  };

  constructor(private http: HttpClient,private router: Router) {}
 
  ngOnInit(): void {
  }

  onRegister() {
    const body = { 
      username: this.registerObj.username, 
      password: this.registerObj.password,
      firstName: this.registerObj.firstName,
      lastName: this.registerObj.lastName,
      middleName: this.registerObj.middleName || ''
    };

    this.http.post('https://evo-academy.wckz.dev/api/cooking-blog/users/registration', body)
      .subscribe(
        (response: any) => {
          console.log('Успешная регистрация', response);
        },
        (error) => {
          console.error('Ошибка регистрации', error);
        }
      );
  }
}
