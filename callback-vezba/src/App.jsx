import "./App.css";
import React, { useCallback, useState } from "react";
import Child from "./Child";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const arr = [1, 2, 3];

  const updateCounterFromChild = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  console.log("parent is rendering");

  return (
    <div className="App">
      <h1>Hello from parent:{counter}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={updateCounterFromChild}>Increase count</button>
      <Child
        counter={counter}
        updateCounterFromChild={updateCounterFromChild}
        // arr={arr}
      />
    </div>
  );
}

export default App;
