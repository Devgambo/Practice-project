import { useEffect, useState } from "react";

interface catData {
    name: string;
    image: string;
    desc: string;
}

const useCats = () => {
    const [data, setData] = useState<catData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCats = async () => {
            const url = 'https://api.freeapi.app/api/v1/public/cats/cat/random';
            const options = { method: 'GET', headers: { accept: 'application/json' } };
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                if (result.success && result.data) {

                    const catdata: catData = {
                        name: result.data.name,
                        image: result.data.image,
                        desc: result.data.description,
                    }
                    setData(catdata);
                } else {
                    throw new Error(result.message || "Failed to fetch");
                }
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };
        fetchCats();
    }, []);

    return { data, loading, error };
};

export default useCats;

