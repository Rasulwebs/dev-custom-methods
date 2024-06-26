import { useEffect, useState } from "react";

type FetchType = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Fetches data from the specified URL using the specified HTTP method.
 * Updates the loading state, error state, and data state accordingly.
 *
 * @return {Promise<void>} A promise that resolves when the data has been fetched and updated.
 */

const useFetch = <T>(
  url: string,
  method: FetchType = "GET",
  initialValue?: T
) => {
  const initialData = initialValue ? initialValue : null;
  const [data, setData] = useState<T | null>(initialData);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { data, error, isLoading };
};

export default useFetch;
