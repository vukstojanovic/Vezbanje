import create from "zustand";

const todosStore = (set) => ({
  todos: [],
  addTodo: (todoObj) =>
    set((state) => ({
      todos: [...state.todos, todoObj],
    })),
  removeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((obj) => obj.id !== todoId),
    })),
});
const useTodosStore = create(todosStore);

export { useTodosStore };
