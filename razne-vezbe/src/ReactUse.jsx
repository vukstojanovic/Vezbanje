import { useEffect, useRef } from "react";
import {
  useHoverDirty,
  useIdle,
  useIntersection,
  useMedia,
  useLongPress,
} from "react-use";

export default function ReactUse() {
  //   const divRef = useRef();
  //   const isHovering = useHoverDirty(divRef);
  const isIdle = useIdle(5000);

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const isWide = useMedia("(min-width: 1000px)");
  const longPressEvent = useLongPress(onLongPress, {
    isPreventDefault: true,
    delay: 3000,
  });

  function onLongPress() {
    alert("You can let go of the button now.");
  }

  return (
    <div className="helloDiv" ref={intersectionRef}>
      User is idle: {isIdle ? "Yes" : "No"}
      <p>
        {intersection && intersection.intersectionRatio < 1
          ? "Obscured"
          : "Fully in view"}
      </p>
      <p>Screen is wide: {isWide ? "Yes" : "No"}</p>
      <button {...longPressEvent}>Press me for 3 seconds</button>
    </div>
  );
}
