import useCats from "../hooks/getCats";

const Cats: React.FC = () => {
    const { data, loading, error } = useCats();
    if (loading) {
        return <p>Loading joke...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div className="bg-gradient-to-5  w-full h-screen flex justify-center items-center">
            <div className="bg-gray-50 p-1 rounded-xl shadow-orange-500">
                <div className="card bg-base-100 image-full w-96 shadow-4xl rounded-xl ">
                    <figure>
                        <img
                            src={data?.image}
                            alt="cat" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{data?.name}</h2>
                        <p>{data?.desc}</p>
                        <div className="card-actions justify-end font-serif">
                            <button className="btn btn-primary"><a href="/">home</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Cats
