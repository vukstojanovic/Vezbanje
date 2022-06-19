import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import { useQuery } from "react-query";

export default function Characters() {
  const [page, setPage] = useState(1);
  const {
    data,
    status,
    isLoading,
    isFetching,
    isError,
    isSuccess: isSuccessChanged,
    refetch,
  } = useQuery(["characters", page], fetchCharacters);

  async function fetchCharacters({ queryKey }) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.data.results;
  }

  return (
    <Fragment>
      {isLoading || (isFetching && <h1>Loading...</h1>)}
      {isError && <h1>Error.</h1>}
      {isSuccessChanged && (
        <ul>
          {data.map((char) => {
            const { id, name } = char;
            return <li key={id}>{name}</li>;
          })}
        </ul>
      )}
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      {/* <button onClick={refetch}>Fetch data</button> */}
    </Fragment>
  );
}
