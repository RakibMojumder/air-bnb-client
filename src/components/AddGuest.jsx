import Counter from "./Counter";
import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../context/GlobalStateProvider";

const AddGuest = () => {
  const { guest, setGuest } = useContext(GLOBAL_CONTEXT);
  return (
    <div className="w-[400px] absolute top-[130%] right-0 z-[999] bg-white p-5 rounded-lg shadow-[0px_0px_16px_#ddd]">
      <Counter
        title="Adults"
        label="Ages 13 or above"
        state={guest.adults}
        setState={setGuest}
      />
      <Counter
        title="Children"
        label="Ages 2 - 12"
        state={guest.children}
        setState={setGuest}
      />
      <Counter
        title="Infants"
        label="Under 2"
        state={guest.infants}
        setState={setGuest}
      />
      <Counter
        title="Pets"
        label="Bringing a service animal"
        state={guest.pets}
        setState={setGuest}
      />
    </div>
  );
};

export default AddGuest;
