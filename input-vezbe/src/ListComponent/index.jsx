import { useFilterBySearch } from "../useFilterBySearch";

function ListComponent() {
  const colors = ["red", "blue", "green", "violet", "yellow"];
  const filteredColors = useFilterBySearch(colors);

  return (
    <ul>
      {filteredColors.map((color) => {
        return <li key={color}>{color}</li>;
      })}
    </ul>
  );
}

export default ListComponent;
