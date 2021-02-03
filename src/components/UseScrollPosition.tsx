import { useRef, useEffect } from "react";
import _ from "lodash";

const getScrollPosition = (): number => {
  if (typeof window === "undefined") {
    return 0;
  }

  return window?.scrollY || document?.body?.getBoundingClientRect()?.top || 0;
};

const useScrollPosition = (effect, deps) => {
  // Get starting position
  const position = useRef(getScrollPosition());

  // Get current position and send via effect prop
  const updatePosition = () => {
    const currentPosition: number = getScrollPosition();

    effect({ prevPos: position.current, currPos: currentPosition });
    position.current = currentPosition;
  };

  useEffect(() => {
    const handleScroll = _.throttle(updatePosition, 100);

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Stop listening to scroll events once unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
};

export default useScrollPosition;
