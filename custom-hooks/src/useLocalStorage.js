import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [startValue, setStartValue] = useState(defaultValue);

  useEffect(() => {
    if (localStorage.getItem(key)) {
      setStartValue(JSON.parse(localStorage.getItem(key)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(startValue));
  }, [startValue]);

  return [startValue, setStartValue];
}
