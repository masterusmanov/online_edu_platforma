import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  
    return (
      <div className="flex-col justify-between content-end">
          <div className="sidebar grid pl-[20px]">
            <NavLink to="/" className="flex items-center gap-2 p-2 py-4 font-[700] hover:bg-gray-200 hover:rounded-l-2xl"><i className='text-gray-400 text-[24px] bx bx-home' ></i>Bosh sahifa</NavLink>
            <NavLink to="/my_courses" className="flex items-center gap-2 p-2 py-4 font-[700] hover:bg-gray-200 hover:rounded-l-2xl"><i className='text-gray-400 text-[24px] bx bx-desktop'></i>Mening kurslarim</NavLink>
            <NavLink to="/courses" className="flex items-center gap-2 p-2 py-4 font-[700] hover:bg-gray-200 hover:rounded-l-2xl"><i className='text-gray-400 text-[24px] bx bx-folder-open' ></i>Barcha kurslar</NavLink>
            <NavLink to="/course_video" className="flex items-center gap-2 p-2 py-4 font-[700] hover:bg-gray-200 hover:rounded-l-2xl"><i className='text-gray-400 text-[24px] bx bxs-videos'></i>Videolar</NavLink>
            <NavLink to="/sertificate" className="flex items-center gap-2 p-2 py-4 font-[700] hover:bg-gray-200 hover:rounded-l-2xl"><i className='text-gray-400 text-[24px] bx bx-id-card'></i>Sertifikatlarim</NavLink>
          </div>
          <div className="hover:bg-red-200 md:mt-[55vh] lg:mt-[35vh] xl:mt-[45vh] 2xl:mt-[55vh]  pl-[20px]">
            <button className='flex gap-3 items-center p-2  rounded-lg text-red-500 font-bold  mt-[10px] '><i className='bx bx-log-out text-[24px]'></i>LogOut</button>
          </div>

      </div>
    );
  }
  
  export default Sidebar;
  