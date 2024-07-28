import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../User';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  user: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUser().subscribe({
      next: (response: User[]) => {
        this.user = response;
      },
      error: (error) => {
        console.error('Ошибка при получении данных', error);
      }
    });
  }
}