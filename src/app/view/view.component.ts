import { Component, OnInit } from '@angular/core';
import { Todo } from '../data.service';
import { Observable } from 'rxjs';
import { TodoState } from '../store/todo.state';
import { Select, Store } from '@ngxs/store';
import { UpdateTodo } from '../store/todo.action';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Select(TodoState.getTodos) todos$!: Observable<Todo[]>;

  constructor(private store: Store) {}

  ngOnInit() {}

  completeTask(event: any, index: number) {
    this.store.dispatch(new UpdateTodo(index, event.target.checked));
  }
}
