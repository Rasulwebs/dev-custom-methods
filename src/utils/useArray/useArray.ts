import { useState } from "react";

// Write a useArray hook using a generic (`generic`) type
// To work with array data

/**
 * Creates a custom hook that manages an array state.
 *
 * @param {T[]} defaultValue - The initial value of the array state.
 * @return {Object} An object containing the following properties:
 *   - array: The current state of the array.
 *   - setArr: A function to update the array state.
 *   - pushArr: A function to add an element to the array.
 *   - filterArr: A function to filter the array based on a callback.
 *   - updateArr: A function to update an element at a specific index.
 *   - removeArr: A function to remove an element at a specific index.
 *   - clearArr: A function to clear the array.
 */

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
