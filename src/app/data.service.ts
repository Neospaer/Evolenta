import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id?: any;
  value: string;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _todos = new BehaviorSubject<Todo[]>([]);
  private dataStore: { todos: Todo[] } = { todos: [] };
  readonly todos = this._todos.asObservable();
  private taskId = 0;
  constructor() {}

  create(todo: Todo) {
    this.taskId = this.taskId + 1;
    todo.id = this.taskId;
    this.dataStore.todos.push(todo);
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }

  updateList(index: any, checked: any) {
    let completedTask = this.dataStore.todos.splice(index, 1)[0];
    completedTask.completed = checked;
    if (!!completedTask.completed) {
      this.dataStore.todos.push(completedTask);
    } else {
      this.dataStore.todos.unshift(completedTask);
    }
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }
}
