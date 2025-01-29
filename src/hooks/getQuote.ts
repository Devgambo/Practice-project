import { useEffect, useState } from "react";

interface QuoteData {
    author: string;
    content: string;
}
const useQuote = () => {
    const [data, setData] = useState<QuoteData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
            const options = { method: 'GET', headers: { accept: 'application/json' } };

            try {
                const response = await fetch(url, options);
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const result = await response.json();
                if(result.success && result.data){
                    const quoteData:QuoteData ={
                        author: result.data.author,
                        content: result.data.content
                    } 
                    setData(quoteData)
                }else{
                    throw new Error(result.message)
                }

            } catch (err: any) {
                setError(err.message || "Something is wrong")
            }finally{
                setLoading(false);
            }
        };
        fetchQuote();
    }, []);
    return{data , loading , error};
}

export default useQuote