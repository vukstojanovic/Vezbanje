import { useEffect } from "react";

export default function useKey(key: string, callback: () => void) {
  function handleKeyPress(e: any) {
    console.log(e);
    if (e.key === key) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [key]);
}
