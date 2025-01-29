import { useEffect, useState } from "react";

interface JokeData {
  id: number;
  content: string;
  categories: string[];
}

const useJokes = () => {
  const [data, setData] = useState<JokeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJokes = async () => {
      const url = 'https://api.freeapi.app/api/v1/public/randomjokes/joke/random';
      const options = { method: 'GET', headers: { accept: 'application/json' } };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        if (result.success && result.data) {
          setData(result.data); // Use the `data` property from the API response
        } else {
          throw new Error(result.message || "Failed to fetch joke.");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  return { data, loading, error };
};

export default useJokes;

