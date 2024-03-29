import { useState } from "react";

// Write a useArray hook using a generic (`generic`) type
// To work with array data
export default function useArray<T>(defaultValue: T[]) {
  const [array, setArray] = useState<T[]>(defaultValue);

  const pushArr = (element: T) => {
    setArray((a) => [...a, element]);
  };

  const filterArr = (callback: (element: T) => boolean) => {
    setArray((a) => a.filter(callback));
  };

  const updateArr = (index: number, newElement: T) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  };

  const removeArr = (index: number) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };

  const clearArr = () => {
    setArray([]);
  };

  return {
    array,
    setArr: setArray,
    pushArr,
    filterArr,
    updateArr,
    removeArr,
    clearArr,
  };
}
