import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType = "",
  listener: any = () => null,
  target = window,
  options = null
) {
  const savedListener = useRef(null);
  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target.addEventListener) return;
    // const eventListener = (event) => savedListener.current(event);
    target.addEventListener(eventType, listener);
    return target.removeEventListener(eventType, listener);
  }, [eventType, listener, target, options]);
}
