import { useTodosStore } from "./store";

function Todo({ name, id }) {
  const removeTodo = useTodosStore((state) => state.removeTodo);
  return (
    <div className="todo">
      <span>{name}</span> <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
}

export default Todo;
