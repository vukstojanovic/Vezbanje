import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import todosServices from "../axios/services";
import TodoElement from "./TodoElement";

function TodoPage() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();
  const {
    data: todos,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(
    "todos",
    () => todosServices.getTodos(),
    // {
    //   select: (data) => data.sort((a, b) => (b.id > a.id ? 1 : -1)),
    // },
    {
      initialData: [
        {
          userId: 1,
          id: 1,
          title: "First one",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "Second one",
          completed: true,
        },
      ],
    }
  );
  const addTodoMutation = useMutation(todosServices.addTodo, {
    onSuccess: (newTodo) => {
      // queryClient.invalidateQueries("todos");
      queryClient.setQueryData("todos", (oldTodos) => {
        return [...oldTodos, newTodo];
      });
    },
    // onMutate: async (newTodo) => {
    //   await queryClient.cancelQueries('todos');
    //   const previousTodos = queryClient.getQueryData('todos');
    // },
    // onError: (error, newTodo, context) => {
    //   queryClient.setQueryData("todos", context.previousTodos);
    // },
  });

  function addNewTodo() {
    const newDate = new Date();
    const newTodo = {
      completed: false,
      id: newDate.getTime(),
      title: inputValue,
      userId: 1,
    };
    addTodoMutation.mutate(newTodo);
  }

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  // if (isError) {
  //   return <h2>Whoops Error : (</h2>;
  // }

  return (
    <div className="todoPage">
      <h1>Todo page</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addNewTodo}>Add new todo</button>
      {isSuccess && (
        <div>
          {todos.map((todo) => {
            const { title, id } = todo;
            return <TodoElement key={id} id={id} title={title} />;
          })}
        </div>
      )}
    </div>
  );
}

export default TodoPage;
