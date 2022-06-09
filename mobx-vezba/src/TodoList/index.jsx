import { useState } from "react";
import { observer } from "mobx-react";
import { TodoStoreInstance } from "../mobx/TodoStore";

function TodoList({ todoStore }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={() => TodoStoreInstance.addTodo(value)}>Submit</button>
      <ul>
        {todoStore.todos.map((item, index) => {
          const { title, completed } = item;
          console.log(title);
          return <li key={index}>{title}</li>;
        })}
      </ul>
    </div>
  );
}

export default observer(TodoList);
