import React, { useState } from "react";

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function reset() {
    setValue(initialValue);
  }

  const bind = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };

  return [value, bind, reset];
}
