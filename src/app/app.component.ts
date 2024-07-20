import { Component } from '@angular/core';
import { Users } from './interface/Users';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrUsers: Users[] = []
  
  constructor(public responseServ: ResponseService){
    this.arrUsers = this.responseServ.getUsers()
  }
}
