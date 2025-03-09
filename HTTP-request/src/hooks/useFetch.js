import { useState, useEffect } from "react";

export const useFetch = (fetchFn, initialValue) => {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    setFetching(true);
    const fetchData = async () => {
      try {
        const data = await fetchFn();

        setFetchedData(data);
      } catch (error) {
        setError({
          message:
            error.message || 'Failed to fetch data.',
        });
      }

      setFetching(false);
    };

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    error,
    setFetchedData,
  }
}