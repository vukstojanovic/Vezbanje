import { useState } from "react";

export function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  const inputObj = {
    value,
    onChange: (e) => setValue(e.target.value),
  };
  const reset = () => setValue(initValue);
  return [value, inputObj, reset];
}
