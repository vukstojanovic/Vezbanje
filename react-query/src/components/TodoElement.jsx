import todosServices from "../axios/services";
import { useMutation, useQueryClient } from "react-query";

function TodoElement({ title, id }) {
  const queryClient = useQueryClient();
  const removeTodoMutation = useMutation(todosServices.removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div className="todoElement">
      <span>{title}</span>{" "}
      <button onClick={() => removeTodoMutation.mutate(id)}>Delete</button>
    </div>
  );
}

export default TodoElement;
