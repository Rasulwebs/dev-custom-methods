import { useEffect, useState } from "react";

// This custom hook helps you react to window resizing dynamically:

/**
 * A custom React hook that dynamically tracks window resizing.
 * @returns An object containing the width and height of the window.
 */

const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    /**
     * Event handler to update the window size on resize.
     */
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return size;
};

export default useWindowSize;
