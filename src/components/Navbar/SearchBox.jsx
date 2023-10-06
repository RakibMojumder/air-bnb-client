import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { GLOBAL_CONTEXT } from "../../context/GlobalStateProvider";

const SearchBox = ({ showModal, setShowModal }) => {
  const { setCurrentStep } = useContext(GLOBAL_CONTEXT);

  const handleClick = (value) => {
    setShowModal(true);
    setCurrentStep(value);
  };

  return (
    <>
      {showModal ? (
        <div className="flex justify-between items-center gap-5 font-medium py-2">
          <h3 className="hover:underline cursor-pointer">Stays</h3>
          <h3 className="hover:underline cursor-pointer">Experience</h3>
          <h3 className="hover:underline cursor-pointer">Online experiences</h3>
        </div>
      ) : (
        <div className="flex items-center shadow-md border border-neutral-200 px-3 py-2.5 divide-x rounded-full text-slate-900 font-medium">
          <button onClick={() => handleClick(0)} className="px-5">
            Anywhere
          </button>
          <button onClick={() => handleClick(1)} className="px-5">
            Any week
          </button>
          <button
            onClick={() => handleClick(3)}
            className="flex justify-between items-center"
          >
            <span className="px-5 text-neutral-400 font-normal">Add guest</span>
            <span className="h-7 w-7 bg-rose-500 rounded-full flex justify-center items-center text-white">
              <CiSearch size={18} />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBox;
