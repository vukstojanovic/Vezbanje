import { useEffect, useRef } from "react";

export default function useUpdateEffect(
  callback: any,
  dependencies: unknown[]
) {
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = !first.current;
      return;
    }
    return callback();
  }, dependencies);
}
