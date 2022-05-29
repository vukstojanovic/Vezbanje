import axios from "axios";
import { useEffect } from "react";

function SomeChild() {
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => console.log(res))
      .catch((err) => err);
  }, []);

  return <div>Some Child Component</div>;
}

export default SomeChild;
