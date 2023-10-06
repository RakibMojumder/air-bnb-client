import { RxCross2 } from "react-icons/rx";
import house from "../../assets/properites/house.png";
import apartment from "../../assets/properites/apertment.png";
import guestHouse from "../../assets/properites/guesthouse.png";
import Checkbox from "./Checkbox";
import Slider from "react-slider";
import { AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../context/GlobalStateProvider";

const propertiesType = [
  { id: 101, name: "House", image: house },
  { id: 102, name: "Apartment", image: apartment },
  { id: 103, name: "Guesthouse", image: guestHouse },
];

const Filter = ({ setShowFilter }) => {
  const {
    bed,
    values,
    hotels,
    bathroom,
    properties,
    propertyType,
    setBed,
    setWifi,
    setDryer,
    setWasher,
    setValues,
    setKitchen,
    setBathroom,
    setProperties,
    setPropertyType,
    setAirConditioner,
  } = useContext(GLOBAL_CONTEXT);

  const handleProperty = (propertyName) => {
    let values = [...properties];

    const findIndex = values.findIndex(
      (property) => property === propertyName.toLowerCase()
    );

    if (findIndex < 0) {
      values.splice(findIndex + 1, 0, propertyName.toLowerCase());
      setProperties(values);
    } else {
      values = values.filter((value) => value !== propertyName.toLowerCase());
      setProperties(values);
    }

    const toggle = !propertyType[propertyName.toLowerCase()];
    const newProp = {
      ...propertyType,
      [propertyName.toLowerCase()]: toggle,
    };
    setPropertyType(newProp);
  };

  return (
    <div className="h-screen w-full bg-black/50 fixed top-0 left-0">
      <div className="w-3/5 h-[calc(100vh_-_100px)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg flex flex-col">
        {/* HEADER */}
        <div className="flex justify-between p-5 border-b">
          <RxCross2
            onClick={() => setShowFilter((prev) => !prev)}
            size={24}
            className="cursor-pointer"
          />
          <div className="w-1/2 text-lg font-semibold">Filter</div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* PRICE RANGE */}
          <div className="mx-auto pb-12">
            <h2 className="text-2xl font-semibold">Price range</h2>
            <p>
              The average nightly price is ‎$74, not including fees or taxes.
            </p>
            <div className="w-3/4 mx-auto">
              <Slider
                className="h-[3px] w-full mx-auto bg-black rounded-full mt-10"
                thumbClassName="h-9 w-9 -top-4 -right-2 border bg-white cursor-pointer rounded-full shadow-[0px_0px_5px_#c2bdbd]"
                thumbActiveClassName="border outline-none"
                trackClassName="example-track"
                value={values}
                min={0}
                max={200}
                onChange={setValues}
                minDistance={20}
              />

              <div className="flex items-center gap-7 mt-10">
                <div className="px-5 py-1 text-sm border rounded w-1/2">
                  <h6>Minimum</h6>
                  <h3 className="font-semibold">$ {values[0]}</h3>
                </div>
                <span className="text-neutral-400">
                  <AiOutlineMinus size={30} />
                </span>
                <div className="px-5 py-1 text-sm border rounded w-1/2">
                  <h6>Minimum</h6>
                  <h3 className="font-semibold">$ {values[1]}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* BEDS AND BATHROOMS */}
          <div className="pb-5 border-b">
            <h2 className="text-2xl font-semibold mb-6">Beds and Bathrooms</h2>
            {/* BEDS */}
            <h4 className="text-lg mb-4">Beds</h4>
            <div className="space-x-3 mb-5">
              <button
                onClick={() => setBed(null)}
                className={`px-7 py-2 rounded-full border border-neutral-400 hover:border-slate-950 ${
                  bed === null ? "bg-slate-950 text-white" : "bg-white"
                }`}
              >
                Any
              </button>
              {[...Array(8)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setBed(index + 1)}
                  className={`px-6 py-2 rounded-full border border-neutral-400 transition-all duration-300 hover:border-slate-950 ${
                    bed === index + 1 ? "bg-slate-950 text-white" : "bg-white"
                  }`}
                >
                  {index === 7 ? `${index + 1}+` : index + 1}
                </button>
              ))}
            </div>

            {/* BATHROOMS */}
            <h4 className="text-lg mb-4">Bathrooms</h4>
            <div className="space-x-3 mb-5">
              <button
                onClick={() => setBathroom(null)}
                className={`px-7 py-2 rounded-full border border-neutral-400 hover:border-slate-950 ${
                  bathroom === null ? "bg-slate-950 text-white" : "bg-white"
                }`}
              >
                Any
              </button>
              {[...Array(8)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setBathroom(index + 1)}
                  className={`px-6 py-2 rounded-full border border-neutral-400 transition-all duration-300 hover:border-slate-950 ${
                    bathroom === index + 1
                      ? "bg-slate-950 text-white"
                      : "bg-white"
                  }`}
                >
                  {index === 7 ? `${index + 1}+` : index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* PROPERTY TYPE */}
          <div className="py-5 border-b">
            <h2 className="text-2xl font-semibold mb-6">Property Type</h2>
            <div className="flex gap-7 items-center">
              {propertiesType.map((property) => (
                <div
                  key={property.id}
                  onClick={() => handleProperty(property.name)}
                  className={`border h-36 w-40 flex flex-col justify-between rounded-lg cursor-pointer hover:border-black p-5 duration-300 active:scale-[.80] ${
                    propertyType[property.name.toLowerCase()] &&
                    "border-2 border-black"
                  }`}
                >
                  <img
                    src={property.image}
                    alt="property image"
                    className="w-10"
                  />
                  <h4 className="font-medium">{property.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="py-5">
            <h2 className="text-2xl font-semibold mb-6">Amenities</h2>
            <div className="flex justify-between flex-wrap items-center gap-y-6">
              <Checkbox label="Wifi" name="wifi" setState={setWifi} />
              <Checkbox label="Kitchen" name="kitchen" setState={setKitchen} />
              <Checkbox label="Dryer" name="dryer" setState={setDryer} />
              <Checkbox label="Washer" name="washer" setState={setWasher} />
              <Checkbox
                label="Air Conditioner"
                name="airCondition"
                setState={setAirConditioner}
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-5 border-t text-right">
          <button
            onClick={() => setShowFilter(false)}
            className="px-8 py-2 rounded bg-black/90 font-bold text-white"
          >
            {hotels.length == 0
              ? "No exact matches"
              : `Show ${hotels.length} places`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
