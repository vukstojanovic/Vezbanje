import "./App.css";
import Todo from "./Todo";
import { useTodosStore } from "./store";
import { useState } from "react";

function App() {
  const todosList = useTodosStore((state) => state.todos);
  const addTodo = useTodosStore((state) => state.addTodo);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ id: todosList.length, name: inputValue });
    console.log(todosList);
    setInputValue("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add new todo</button>
      </form>
      {todosList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default App;
