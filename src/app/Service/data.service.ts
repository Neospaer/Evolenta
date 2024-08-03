import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../Interfaces/recipe';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();
  public currentUser: Auth | null = null;
  constructor(private router: Router,private http: HttpClient) { }

  public getUsers() {
    return this.http.get<User[]>('users');
  }

  public getUser(id: number) {
    return this.http.get<User>(`users/${id}`);
  }

  // Рецепты
  public getRecipes() {
    return this.http.get<Recipe[]>(`https://evo-academy.wckz.dev/api/cooking-blog/posts`);
  }

  public getRecipe(id: number) {
    return this.http.get<Recipe>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`);
  }

  public updateRecipe(id: number, data: Object) {
    return this.http.patch<Recipe>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`, data);
  }

  public createRecipe(recipe: Recipe) {
    return this.http.post<Recipe>('https://evo-academy.wckz.dev/api/cooking-blog/posts', recipe);
  }

  public deleteRecipe(id: number) {
    return this.http.delete(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`)
  }
}
