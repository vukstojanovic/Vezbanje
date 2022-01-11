import { useEffect } from "react";

export default function useUpdateLogger(value: unknown) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
