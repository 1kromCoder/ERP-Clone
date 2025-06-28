import { useContext } from "react";
import Header from "../modules/Header";
import Navbar from "../modules/Navbar";
import { Context } from "../context/Context";
import DashboardRoute from "../routes/DashboardRoute";

const DashboardLayout = () => {
  const { showNavbar } = useContext(Context);
  return (
    <div className="flex">
      <Navbar />
      <div
        className={` ${
          showNavbar ? "w-full" : "w-[82%]"
        } h-[100vh] overflow-y-auto duration-300`}
      >
        <Header />
        <DashboardRoute />
      </div>
    </div>
  );
};

export default DashboardLayout;
