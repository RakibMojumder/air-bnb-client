import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../context/GlobalStateProvider";

const Home = () => {
  const { hotels } = useContext(GLOBAL_CONTEXT);

  if (hotels.length == 0) {
    return (
      <div className="mt-5">
        <h1 className="font-semibold text-center">No Result Found</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-10">
      {hotels.map((hotel) => (
        <div key={hotel._id}>
          <div className="h-64 w-full">
            <img
              src={hotel.image}
              alt="hotel image"
              className="h-full w-full rounded-2xl"
            />
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">{hotel.location}</h3>
            <p>
              {hotel.title.length > 35 ? hotel.title.slice(0, 35) : hotel.title}
            </p>
            <p>
              <span className="font-bold">${hotel.price}</span> night
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
