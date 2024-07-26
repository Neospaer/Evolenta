import { Component } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Users: User | null = null;

  constructor(private dataService: DataService){}
  
  getUser(){
    this.dataService.getUser().subscribe({
      next: (response) =>{
          this.Users = response;
          console.log('User:',response)
      },
      error: (err: HttpErrorResponse) =>{
        console.log('Ошибка:', err.status)
      }
    })
  }
}
