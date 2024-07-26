import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
  }

  users: User[] = [
    { id: 1, name: 'Alice', completed: true },
    { id: 2, name: 'Bob', completed: false },
    { id: 3, name: 'Charlie', completed: true },
    { id: 4, name: 'David', completed: false }
  ];
  
}