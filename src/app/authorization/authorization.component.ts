import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  loginObj = { username: '', password: '' };
  fastJwt = false;

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
  }

  onLogin() {
    const body = { 
      username: this.loginObj.username, 
      password: this.loginObj.password 
    };
    this.http.post('https://evo-academy.wckz.dev/api/cooking-blog/users/sign', body, { params: { fastJwt: this.fastJwt } })
      .subscribe(
        (response: any) => {
          console.log('Успешная авторизация', response);
        },
        (error) => {
          console.error('Ошибка авторизации', error);
        }
      );
  }
}
