import { useState } from "react";

export function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  const base = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  function reset() {
    setValue(initValue);
  }

  return [value, base, reset];
}
