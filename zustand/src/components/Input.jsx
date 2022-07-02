import React, { useState } from "react";
import { usePeopleStore } from "../store";

export default function Input() {
  const [value, setValue] = useState("");
  const addPerson = usePeopleStore((state) => state.addPerson);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={() => addPerson(value)}>Add person</button>
    </div>
  );
}
