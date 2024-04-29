import { useState, useCallback } from "react";
import Cookies from "js-cookie";

type CookieValue<T> = T | null;

// Write a useCookie hook using a generic (`generic`) type
// For Use cookies to work with data

/**
 * Creates a custom hook for managing a cookie with the provided name and default value.
 *
 * @param {string} name - The name of the cookie.
 * @param {T} defaultValue - The default value for the cookie.
 * @return {[CookieValue<T>, () => void, () => void]} An array containing the cookie value, update function, and delete function.
 */

export default function useCookie<T>(name: string, defaultValue: T) {
  const [cookieValue, cookieSetValue] = useState<CookieValue<T>>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return JSON.parse(cookie) as T;
    Cookies.set(name, JSON.stringify(defaultValue));
    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: T, options?: Cookies.CookieAttributes | undefined) => {
      Cookies.set(name, JSON.stringify(newValue), options);
      cookieSetValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    cookieSetValue(null);
  }, [name]);

  return [cookieValue, updateCookie, deleteCookie] as const;
}
