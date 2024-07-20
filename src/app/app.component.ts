import { Component, OnInit } from '@angular/core';
import { ResponseService } from './response.service';
import { Users } from './interface/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ArrUser: Users[] = []
  
  constructor(public responseServ: ResponseService){
  }

  ngOnInit(): void {
    this.ArrUser = this.responseServ.arr
  }
}
