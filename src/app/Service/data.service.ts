import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../Interfaces/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router,private http: HttpClient) { }
  private tokenKey = 'jwtToken';
  
  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>('https://evo-academy.wckz.dev/api/cooking-blog/posts')
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

}
