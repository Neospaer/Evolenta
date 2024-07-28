import { Component, OnInit } from '@angular/core';
import { DataService, Todo } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  todos!: Observable<Todo[]>;
  constructor(private todoService: DataService) {}

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  completeTask(event: any, index: any) {
    console.log(event.checked);
    this.todoService.updateList(index, event.checked);
  }

}
