import useUser from "../hooks/getRandomUser";

function RandomUser() {

  const {data , loading , error} = useUser();

  if(loading){
    return <p>Loading user</p>;
  }
  if(error){
    return <p>Error: {error}</p>
  }


  const person = {
    name: data?.fullName,
    imageUrl: data?.image,
    phone: data?.phone,
    email: data?.email,
    address: data?.address,
    age: data?.age,
  };


    return (
        <div className="w-full h-screen">
            <div className="bg-gray-400 flex flex-auto absolute  left-80 top-29 py-24 sm:py-32 rounded-3xl w-200">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                            Meet A random Person
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            Meeting a random person is like opening a mystery gift — you never know if you'll find a lifelong friend, an awkward
                        </p>
                    </div >

                    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <div className="flex items-center gap-x-6">
                            <img alt="img" src={person.imageUrl} className="size-16 rounded-full" />
                            <div>
                                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm/6 font-semibold text-indigo-600">{person.phone}</p>
                                <p className="text-sm/6 font-semibold text-indigo-600">{person.address}</p>
                                <p className="text-sm/6 font-semibold text-indigo-600">email: {person.email}</p>
                                <p className="text-sm/6 font-semibold text-indigo-600">age: {person.age}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="rounded-3xl w-15 absolute right-0 bottom-0 btn btn-ghost"><a href="/">Home</a></button>
            </div>
        </div>
    )
}

export default RandomUser




