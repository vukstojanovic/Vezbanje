import React, { useMemo, useState } from "react";

function Child({ counter, updateCounterFromChild }) {
  const childNumber = useMemo(() => {
    let output = 0;
    for (let i = 0; i < 500000000; i++) {
      output++;
    }
    return output;
  }, []);

  console.log("child is rendering");

  return (
    <div style={{ border: "2px solid black", margin: "40px", width: "50%" }}>
      <h1>Child - {counter}</h1>
      <h2>Child number is: {childNumber}</h2>
      <button onClick={updateCounterFromChild}>Increase count</button>
    </div>
  );
}

export default React.memo(Child);
