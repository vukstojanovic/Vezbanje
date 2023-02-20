import React, { useState } from "react";

export default function Counter({ initialValue }) {
  const [number, setNumber] = useState(initialValue);

  return (
    <div className="counter">
      <h1>Count:</h1>
      <h1 data-testid="count">{number}</h1>
      <div>
        <button onClick={() => setNumber((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setNumber((prev) => prev - 1)}>Decrement</button>
        <button onClick={() => setNumber(initialValue)}>Restart</button>
        <button onClick={() => setNumber((prev) => prev * -1)}>
          Switch Signs
        </button>
      </div>
    </div>
  );
}
