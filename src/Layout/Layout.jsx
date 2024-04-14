import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <div className=" border">
        <Header/>
      <main className="flex">
        <div className="hidden md:block md:w-[300px] bg-white md:h-[92vh] lg:h-[88.3vh] xl:h-[90vh] 2xl:h-[92vh]">
          <Sidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
