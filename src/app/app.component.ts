import { Component, OnInit } from '@angular/core';
import { RoleService } from './Service/role.service';
import { User } from './Interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private roleService: RoleService){}
  Users: User[] = []
  
  ngOnInit(): void {
    this.roleService.getUser().subscribe({
      next: (response: User[] | null) => (
        console.log(response)
      ) 
    })
  }
  
}
