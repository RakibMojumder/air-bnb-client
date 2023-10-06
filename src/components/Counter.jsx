import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GLOBAL_CONTEXT } from "../context/GlobalStateProvider";

const Counter = ({ state, setState, title, label }) => {
  const { guest, setTotalGuest } = useContext(GLOBAL_CONTEXT);

  const handleAdd = (title) => {
    const count = guest[title.toLowerCase()] + 1;
    setState({ ...guest, [title.toLowerCase()]: count });
    setTotalGuest((prev) => prev + 1);
  };

  const handleRemove = (title) => {
    const count = guest[title.toLowerCase()] - 1;
    setState({ ...guest, [title.toLowerCase()]: count });
    setTotalGuest((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-between border-b last-of-type:border-b-0 py-4">
      <div className="text-left">
        <h3 className="font-semibold">{title}</h3>
        <h5 className="text-neutral-500">{label}</h5>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => handleRemove(title)}
          disabled={state < 1}
          className={`h-9 w-9 rounded-full border border-neutral-300 flex justify-center items-center font-semibold text-neutral-400 cursor-pointer transition-all duration-300 disabled:cursor-not-allowed ${
            state >= 1 && "hover:border-slate-950 hover:text-slate-950"
          }`}
        >
          <AiOutlineMinus size={20} />
        </button>
        <div className="text-lg">{state}</div>
        <button
          onClick={() => handleAdd(title)}
          className="h-9 w-9 rounded-full border border-neutral-300 flex justify-center items-center font-semibold text-neutral-400 cursor-pointer transition-all duration-300 hover:border-slate-950 hover:text-slate-950"
        >
          <AiOutlinePlus size={20} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
