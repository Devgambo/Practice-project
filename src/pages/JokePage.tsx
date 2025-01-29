import React from "react";
import useJokes from "../hooks/getJokes";

const JokePage: React.FC = () => {
  const { data, loading, error } = useJokes();

  if (loading) {
    return <p>Loading joke...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center text-2xl font-mono">
        <div className=" bg-glass mockup-window bg-base-300 border justify-center my-70 mx-10">
          <div className="bg-base-200 flex justify-center items-center px-4 py-16">
            {data ? (
              <div>
                {data.content}
              </div>
            ) : (
              <h1>Sry ;( no jokes avalable...</h1>
            )}
          </div>
          <button className="btn btn-outline"><a href="/">Home</a></button>
        </div>
      </div>
    </div>
  );
};

export default JokePage;



