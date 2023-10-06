import { Outlet } from "react-router-dom";
import Category from "./components/Category";
import Navbar from "./components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <div className="w-[94%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
