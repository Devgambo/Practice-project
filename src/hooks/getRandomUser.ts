import { useEffect, useState } from "react";

interface UserData {
  fullName: string;
  age: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

const useUser = () => {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const url = "https://api.freeapi.app/api/v1/public/randomusers/user/random";
      const options = { method: "GET", headers: { accept: "application/json" } };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.data) {
          // Correctly extract necessary fields
          const userData: UserData = {
            fullName: `${result.data.name.first} ${result.data.name.last}`,
            age: result.data.dob.age,
            address: `${result.data.location.street.number}, ${result.data.location.street.name}, ${result.data.location.city}, ${result.data.location.state}, ${result.data.location.country} - ${result.data.location.postcode}`,
            phone: result.data.phone,
            email: result.data.email,
            image: result.data.picture.large,
          };

          setData(userData);
        } else {
          throw new Error(result.message || "Failed to fetch data.");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { data, loading, error };
};

export default useUser;
