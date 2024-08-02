import { Component, OnInit } from '@angular/core';
import { RoleService } from './Service/role.service';
import { User } from './Interfaces/User';
import { DataService } from './Service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuthenticated = false;
  user: any = {};

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.user$.subscribe(user => {
      this.isAuthenticated = !!user;
      this.user = user || {};
    });
  }

  goToSettings() {
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }
  
}
