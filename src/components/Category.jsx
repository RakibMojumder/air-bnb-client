import room from "../assets/category-img/room.png";
import cabin from "../assets/category-img/cabin.png";
import luxe from "../assets/category-img/luxe.png";
import castles from "../assets/category-img/castles.png";
import boats from "../assets/category-img/boats.png";
import topical from "../assets/category-img/topical.png";
import { BiFilter } from "react-icons/bi";
import { useState } from "react";
import Filter from "./Filter/Filter";
import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../context/GlobalStateProvider";

const categories = [
  {
    id: 101,
    category: "Room",
    image: room,
  },
  {
    id: 102,
    category: "Cabin",
    image: cabin,
  },
  {
    id: 103,
    category: "Luxe",
    image: luxe,
  },
  {
    id: 104,
    category: "Castles",
    image: castles,
  },
  {
    id: 105,
    category: "Boats",
    image: boats,
  },
  {
    id: 106,
    category: "Topical",
    image: topical,
  },
];

const Category = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { getHotelByCategory } = useContext(GLOBAL_CONTEXT);

  return (
    <div>
      <div className="w-full lg:w-1/2 mx-auto flex justify-between py-5 px-5">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => getHotelByCategory(category.category)}
            className="text-center text-neutral-500 cursor-pointer space-y-1"
          >
            <img
              src={category.image}
              alt="air bnb category image"
              className="h-6 w-6 mx-auto"
            />
            <h5 className="text-sm">{category.category}</h5>
          </div>
        ))}
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-7 border border-black rounded flex items-center gap-2"
        >
          <BiFilter size={20} /> Filter
        </button>
      </div>

      {showFilter && <Filter setShowFilter={setShowFilter} />}
    </div>
  );
};

export default Category;
