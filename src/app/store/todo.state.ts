import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddTodo, RemoveTodo } from './todo.action';

export interface TodoStateModel {
  todos: string[];
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
  },
})
export class TodoState {
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    ctx.patchState({
      todos: [...state.todos, action.todo],
    });
  }

}