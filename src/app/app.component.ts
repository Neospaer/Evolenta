import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as Notiflix from 'notiflix';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private dataServie: DataService,
    private router: Router
  ){}

  getUsers(){
    this.dataServie.getUser().subscribe({
      next: (response) => {console.log(response)}
    })
  }
  getUsersParams(){
    this.dataServie.getUserParam().subscribe({
      next: (repsonse) =>{console.log(repsonse)}
    })
  }
  postUsers(){
    this.dataServie.PostUser().subscribe({
      next: (response) =>{
        Notiflix.Notify.success('Post is done')
        console.log(response)
      }
    })
  }
  getErrorUsers(){
    this.dataServie.getErrorUser().subscribe({
      next: () =>{
        console.log('Запрос прошел')
      },
      error: (err: HttpErrorResponse) => {
        console.log('Ошибка:',err.status)
      }
    })
  }
  getUsersHeader(){
    this.dataServie.getUserHeader().subscribe({
      next: (respone) =>{
        console.log(respone)
      }
    })
  }
  deleteUsers(){
    this.dataServie.deleteUser().subscribe({
      next: () => {console.log('User deleted')}
    })
  }
  goToPostDetail() {
    this.router.navigate(['/post-detail']).then(success => {
      if (success) {
        console.log('Navigation successful');
        Notiflix.Notify.success('Successfully navigated to post detail');
      } else {
        console.error('Navigation failed');
        Notiflix.Notify.failure('Navigation failed');
      }
    });
  }
}
