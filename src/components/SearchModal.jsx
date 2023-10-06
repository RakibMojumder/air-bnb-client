import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { GLOBAL_CONTEXT } from "../context/GlobalStateProvider";
import Calender from "../components/Calender";
import AddGuest from "./AddGuest";
import { format } from "date-fns";

const SearchModal = ({ targetRef, setShowModal }) => {
  const {
    date,
    totalGuest,
    currentStep,
    searchValue,
    setCurrentStep,
    setSearchValue,
    getSearchProducts,
  } = useContext(GLOBAL_CONTEXT);

  return (
    <div className="bg-black/10 h-screen w-full absolute top-full left-1/2 -translate-x-1/2 z-50">
      <div
        ref={targetRef}
        className="bg-white pb-10 w-full shadow-[0px_4px_2px_-2px_#ddd]"
      >
        <div className="w-[70%] mx-auto flex justify-between items-center border bg-neutral-200 rounded-full">
          <div
            onClick={() => setCurrentStep(0)}
            className={`w-2/5 py-2.5 pl-10 pr-3 rounded-full inline-block ${
              currentStep === 0
                ? "shadow-[0px_0px_32px_#ddd] bg-white"
                : "bg-transparent"
            }`}
          >
            <label htmlFor="search" className="text-sm">
              Where
            </label>
            <br />
            <input
              type="text"
              id="search"
              value={searchValue}
              placeholder="Search Destination"
              onChange={(e) => setSearchValue(e.target.value)}
              className="focus:outline-none w-full bg-transparent"
            />
          </div>

          <div className="relative cursor-pointer">
            <div className="flex items-center justify-between">
              <div
                onClick={() => setCurrentStep(1)}
                className={`px-7 py-3.5 rounded-full ${
                  currentStep == 1
                    ? "shadow-[0px_0px_32px_#ddd] bg-white"
                    : "bg-transparent"
                }`}
              >
                <h5 className="text-xs font-medium">Check in</h5>
                <h3 className="font-semibold">
                  {date[0].startDate
                    ? format(date[0].startDate, "PP")
                    : "Add Dates"}
                </h3>
              </div>
              <div
                onClick={() => setCurrentStep(2)}
                className={`px-7 py-3.5 rounded-full ${
                  currentStep == 2
                    ? "shadow-[0px_0px_32px_#ddd] bg-white"
                    : "bg-transparent"
                }`}
              >
                <h5 className="text-xs font-medium">Check Out</h5>
                <h3 className="font-semibold">
                  {date[0].endDate
                    ? format(date[0].endDate, "PP")
                    : "Add Dates"}
                </h3>
              </div>
            </div>
            {(currentStep === 1 || currentStep === 2) && <Calender />}
          </div>

          <div
            onClick={() => setCurrentStep(3)}
            className={`flex-1 pl-6 pr-2 py-2 rounded-full flex items-center justify-between relative ${
              currentStep === 3
                ? "shadow-[0px_0px_32px_#ddd] bg-white"
                : "bg-transparent"
            }`}
          >
            <div className="text-left">
              <h5 className="text-xs font-medium">Who</h5>
              <h3 className="text-neutral-400">
                {totalGuest ? (
                  <span className="font-semibold text-black">
                    {totalGuest} guest
                  </span>
                ) : (
                  "Add guests"
                )}
              </h3>
            </div>
            <button
              onClick={() => getSearchProducts(setShowModal)}
              className={`h-12 rounded-full text-white flex justify-center items-center transition-all duration-300 ${
                currentStep === 3
                  ? "w-28 gap-2 font-bold bg-gradient-to-tr from-rose-500 to-pink-700"
                  : "w-12 bg-rose-500"
              }`}
            >
              <IoSearch size={24} />{" "}
              {currentStep === 3 && (
                <span className="uppercase text-sm">Search</span>
              )}
            </button>

            {currentStep === 3 && <AddGuest />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
