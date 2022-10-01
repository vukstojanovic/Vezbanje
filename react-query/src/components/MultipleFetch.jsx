import React, { useEffect } from "react";
import { useQueries, useQuery } from "react-query";
import todosService from "../axios/services";

export default function MultipleFetch() {
  const {
    data: allTodos,
    isLoading: isTodosLoading,
    isError: isTodosError,
  } = useQuery(["todos"], () => todosService.getTodos());

  function returnMultipleQueries(arr) {
    if (!arr) return [];
    return arr?.map((singleTodo) => ({
      queryKey: ["todo", singleTodo.id],
      queryFn: () => todosService.getTodo(singleTodo.id),
    }));
  }

  function returnArrayOfFetches(arr) {
    return arr.map((singleItem) => todosService.getTodo(singleItem.id));
  }

  //   fetching multiple queries by useQuery and Promise.all
  const { data, isLoading, isError } = useQuery(
    ["multipleTodos"],
    () => Promise.all(returnArrayOfFetches(allTodos)),
    { enabled: !!allTodos }
  );
  //   fetching multiple queries by useQueries
  const results = useQueries(returnMultipleQueries(allTodos));

  return (
    <div>
      {/* {isLoading && <p>Loading...</p>}
      {isError && <p>Error!!!</p>}
      {data && (
        <ul>
          {data?.map((item) => {
            const { id, title } = item;
            return <li key={id}>{title}</li>;
          })}
        </ul>
      )} */}
      <ul>
        {results.map((singleQuery, index) => {
          const { data, isLoading, isError, error } = singleQuery;
          return (
            <li key={index}>
              {isLoading
                ? "Loading..."
                : isError
                ? error?.message
                : data?.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
