import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function ListComponent() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const colors = ["red", "blue", "green", "violet", "yellow"];

  function filterBySearch(arr) {
    const searchedWord = searchParams.get("search");
    return arr.filter((item) => item.includes(searchedWord));
  }

  useEffect(() => {
    console.log("searchParams changed!!!");
  }, [searchParams]);

  return (
    <ul>
      {filterBySearch(colors).map((color) => {
        return <li key={color}>{color}</li>;
      })}
    </ul>
  );
}

export default ListComponent;
