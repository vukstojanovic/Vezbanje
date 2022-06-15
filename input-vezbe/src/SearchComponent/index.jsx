import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchComponent() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [value, setValue] = useState("");

  function search(e) {
    e.preventDefault();
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  }

  return (
    <form onSubmit={search}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Search!</button>
    </form>
  );
}

export default SearchComponent;
