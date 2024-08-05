import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Commit, CreateRecipe, Recipe, RecipeById } from '../Interfaces/recipe';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, User, UserById } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();
  public currentUser: Auth | null = null;
  constructor(private router: Router,private http: HttpClient) { }

  public getUsers() {
    return this.http.get<User[]>(`https://evo-academy.wckz.dev/api/cooking-blog/users`);
  }

  public getUser(id: string) {
    return this.http.get<UserById>(`https://evo-academy.wckz.dev/api/cooking-blog/users/${id}`);
  }
  
  public deleteUser(id: string){
    return this.http.delete(`https://evo-academy.wckz.dev/api/cooking-blog/users/${id}`)
  }

  // Рецепты
  public getRecipes() {
    return this.http.get<Recipe[]>(`https://evo-academy.wckz.dev/api/cooking-blog/posts`);
  }

  public getRecipe(id: string) {
    return this.http.get<RecipeById>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`);
  }

  public updateRecipe(id: string, data: RecipeById) {
    return this.http.patch<RecipeById>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`, data);
  }

  public createRecipe(recipe: CreateRecipe) {
    return this.http.post<CreateRecipe>('https://evo-academy.wckz.dev/api/cooking-blog/posts/create', recipe);
  }

  public deleteRecipe(id: string) {
    return this.http.delete(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`)
  }
  
  public createCommit(id: string, comment: string){
    return this.http.post<Commit>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}/add-comment`,comment)
  }
}
