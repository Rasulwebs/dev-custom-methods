import { useEffect, useState } from "react";

// This custom hook helps you react to window resizing dynamically:

const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return size;
};

export default useWindowSize;
