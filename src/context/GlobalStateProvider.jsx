import { useState } from "react";
import { createContext } from "react";
import { addDays } from "date-fns";
import { useEffect } from "react";
import axios from "axios";

export const GLOBAL_CONTEXT = createContext();

const GlobalStateProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [totalGuest, setTotalGuest] = useState(0);
  const [wifi, setWifi] = useState(false);
  const [washer, setWasher] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [dryer, setDryer] = useState(false);
  const [airConditioner, setAirConditioner] = useState(false);
  const [bed, setBed] = useState(null);
  const [bathroom, setBathroom] = useState(null);
  const [values, setValues] = useState([0, 200]);
  const [properties, setProperties] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ]);

  const [guest, setGuest] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [propertyType, setPropertyType] = useState({
    house: false,
    apartment: false,
    guesthouse: false,
  });

  const getHotelByCategory = async (category) => {
    const res = await axios.get(`https://aribnb-server.vercel.app/${category}`);
    setHotels(res.data.data);
  };

  const getSearchProducts = async (setState) => {
    const res = await axios.get(
      `https://aribnb-server.vercel.app/search?search=${searchValue}&guest=${totalGuest}`
    );
    setHotels(res.data.data);
    setState(false);
  };

  useEffect(() => {
    const getFilterHotel = async () => {
      let url = `https://aribnb-server.vercel.app/filter?min=${values[0]}&max=${values[1]}`;
      let query = "";

      if (wifi) query += "&wifi=1";
      if (kitchen) query += "&kitchen=1";
      if (dryer) query += "&dryer=1";
      if (washer) query += "&washer=1";
      if (airConditioner) query += "&airConditioner=1";
      if (bed) query += `&bed=${bed}`;
      if (bathroom) query += `&bathroom=${bathroom}`;

      if (properties.length > 0) query += `&property=${properties.join(",")}`;

      if (query) url += query;

      const res = await axios.get(url);
      setHotels(res.data.data);
    };

    getFilterHotel();
  }, [
    bed,
    wifi,
    dryer,
    washer,
    values,
    kitchen,
    bathroom,
    properties,
    airConditioner,
  ]);

  const contextValue = {
    bed,
    date,
    guest,
    values,
    hotels,
    bathroom,
    properties,
    totalGuest,
    currentStep,
    searchValue,
    propertyType,
    setBed,
    setWifi,
    setDate,
    setDryer,
    setGuest,
    setWasher,
    setValues,
    setKitchen,
    setBathroom,
    setTotalGuest,
    setProperties,
    setSearchValue,
    setCurrentStep,
    setPropertyType,
    getSearchProducts,
    setAirConditioner,
    getHotelByCategory,
  };

  return (
    <GLOBAL_CONTEXT.Provider value={contextValue}>
      {children}
    </GLOBAL_CONTEXT.Provider>
  );
};

export default GlobalStateProvider;
