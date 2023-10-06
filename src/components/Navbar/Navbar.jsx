import { useState } from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import SearchModal from "../SearchModal";
import { useEffect } from "react";
import { useRef } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!ref?.current?.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`py-4 border-neutral-200 ${
          showModal ? "border-none" : "border-b"
        }`}
      >
        <div className="w-[94%] mx-auto flex justify-between items-center">
          <Logo />
          <SearchBox showModal={showModal} setShowModal={setShowModal} />
          <div className="text-slate-800 font-medium hidden lg:block">
            Airbnb your home
          </div>
        </div>
      </div>
      {showModal && <SearchModal targetRef={ref} setShowModal={setShowModal} />}
    </div>
  );
};

export default Navbar;
