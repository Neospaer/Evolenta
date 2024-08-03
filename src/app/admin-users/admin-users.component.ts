import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { User } from '../Interfaces/User';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private dataService: DataService) { }
  users: User[] = []
  ngOnInit() {
  }
  
  getUsers() {
    this.dataService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
        Notify.success('Successfully requested users');
      }
    });
  }
}
