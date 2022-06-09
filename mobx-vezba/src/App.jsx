import "./App.css";
import TodoList from "./TodoList";
import { TodoStoreInstance } from "./mobx/TodoStore";

function App() {
  return (
    <div className="App">
      <TodoList todoStore={TodoStoreInstance} />
    </div>
  );
}

export default App;
