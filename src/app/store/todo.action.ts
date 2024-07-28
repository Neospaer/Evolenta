export interface Todo {
  id?: number;
  value: string;
  completed?: boolean;
}

export class AddTodo {
  static readonly type = '[Todo] Add';
  constructor(public payload: Todo) {}
}

export class UpdateTodo {
  static readonly type = '[Todo] Update';
  constructor(public index: number, public checked: boolean) {}
}