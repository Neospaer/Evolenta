import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../Interfaces/recipe';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router,private http: HttpClient) { }
  private tokenKey = 'jwtToken';
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  
  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>('https://evo-academy.wckz.dev/api/cooking-blog/posts')
  }
}
