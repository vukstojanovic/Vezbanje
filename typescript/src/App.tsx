import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import SingleChild from "./components/SingleChild";

function App() {
  const queryClient = useQueryClient();
  // const {} = useQuery([''])

  function getTodos() {
    return axios.get("http://localhost:4000/todos");
  }

  function addNewTodo(todo: any) {
    return axios.post("http://localhost:4000/todos", todo);
  }

  const postMutation = useMutation(addNewTodo, {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="App">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <button
        onClick={() =>
          postMutation.mutate({
            title: "Buy strawberry",
            description: "with cream",
          })
        }
      >
        Add a new todo!!!
      </button>
      <SingleChild />
    </div>
  );
}

export default App;
