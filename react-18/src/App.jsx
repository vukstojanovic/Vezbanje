import { useId, useState, useTransition } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const id1 = useId();
  const id2 = useId();

  function handleInput(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleInput} />
      <div className="container">
        {isPending ? (
          <p>Loading...</p>
        ) : (
          list.map((word, index) => {
            return <p key={index}>{word}</p>;
          })
        )}
      </div>
      <p>{id1}</p>
      <p>{id2}</p>
    </div>
  );
}

export default App;
