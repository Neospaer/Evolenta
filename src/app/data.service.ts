import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  role: 'user' | 'admin' = 'user';

  
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map((response) => response as User[]),
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
  }
  
}
