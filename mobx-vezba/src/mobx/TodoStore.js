import { action, observable, makeObservable } from "mobx";

export class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }

  addTodo(title) {
    const item = {
      title,
      completed: false,
    };
    this.todos.push(item);
  }
}

export const TodoStoreInstance = new TodoStore();
