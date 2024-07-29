import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getUserParam(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments',{params: {'postId':1}})
  }
  PostUser(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{body: {}})
  }
  getErrorUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/post')
  }
  getUserHeader(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts',{headers: {'X-Test':'1'}, responseType: 'text'})
  }
  deleteUser(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }

  getPostInfo(): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
  }
}
