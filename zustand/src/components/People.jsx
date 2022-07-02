import { usePeopleStore } from "../store";

function People() {
  const people = usePeopleStore((state) => state.people);

  return (
    <div>
      <ul>
        {people.map((p) => {
          return <li key={p}>{p}</li>;
        })}
      </ul>
    </div>
  );
}

export default People;
