import { RefObject, useEffect, useState } from "react";


/**
 * Returns a boolean value indicating whether the mouse click event occurred outside of the specified element.
 *
 * @param {RefObjectWithCurrent<T>} ref - The reference to the element to check for outside clicks.
 * @return {boolean} A boolean value indicating whether the mouse click event occurred outside of the specified element.
 */

type RefObjectWithCurrent<T extends HTMLElement> = RefObject<T> & {
  current: T | null;
};

const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObjectWithCurrent<T>
) => {
  const [isOutside, setIsOutside] = useState(false);

  useEffect(() => {
    // Define handleClickOutside within useEffect to avoid it changing on every render
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOutside(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]); // Only re-attach listener if ref changes

  return isOutside;
};

export default useOnClickOutside;
