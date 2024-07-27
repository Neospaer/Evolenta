import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  role: 'user' | 'admin' = 'user';
  private users: User[] = []
  
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts')
  }
  setUserData(users: User[]): void {
    this.users = users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
