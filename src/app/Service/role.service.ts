import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  role: 'register' | 'visitor' | 'admin' = 'visitor'
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<User[]>('https://evo-academy.wckz.dev/api/cooking-blog/users').pipe(
      map((response) => response as User[]),
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
  }
}
