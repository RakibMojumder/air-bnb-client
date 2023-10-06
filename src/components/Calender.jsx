// theme css file

import { useContext } from "react";
import { DateRangePicker } from "react-date-range";
import { GLOBAL_CONTEXT } from "../context/GlobalStateProvider";

const Calender = () => {
  const { date, setDate } = useContext(GLOBAL_CONTEXT);
  console.log(date);

  return (
    <DateRangePicker
      onChange={(item) => setDate([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={date}
      minDate={new Date()}
      direction="horizontal"
      rangeColors={["#f33e5b"]}
      className="absolute top-[130%] -left-full shadow-[0px_0px_16px_#ddd] font-medium rounded"
    />
  );
};

export default Calender;
