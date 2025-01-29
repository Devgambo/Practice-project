import React from "react";
import useQuote from "../hooks/getQuote"

const Quote: React.FC = () => {
    const { data, loading, error } = useQuote();
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error {error}</p>
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="hero glass w-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{data?.content}</h1>
                        <p className="py-6">
                            ~{data?.author}
                        </p>
                        <button className="btn btn-primary"><a href="/">Home</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}







export default Quote
