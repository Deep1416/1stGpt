import React from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaPlusCircle,
  FaRobot,
  FaFileAlt,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdOutlineGroups } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { IoCubeOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";


const Sidebar = ({ isSidebarCollapsed, toggleSidebar }) => {
  return (
    <>
      <div className="flex justify-between items-center h-[100px] px-4 border-b  border-[#312e37] text-black">
        <h1 className="text-[30px] font-semibold text-[#c0bcca] font-heebo">
        {!isSidebarCollapsed === true ? "1stGPT": "1"}
        </h1>
        <div className="bg-[#2b2830] rounded-md">
          <button onClick={toggleSidebar} className="text-xl px-2 py-1 rounded">
            {!isSidebarCollapsed ? (
              <FaChevronLeft className="text-[#c0bcca]" />
            ) : (
              <FaChevronRight className="text-[#c0bcca]" />
            )}
          </button>
        </div>
      </div>
      <div className="p-5 border-b  border-[#312e37]">
        <Link to={'/get'}>
        <div className="flex items-center gap-4  bg-[#2b2830]   py-3 pr-[10px] rounded-md pl-4">
          <div className="w-6 h-6 rounded-full bg-[#454449] flex justify-center items-center">
            <MdAdd className="text-white" />
          </div>
          {!isSidebarCollapsed && (
            <div className="uppercase text-[14px] font-medium font-heebo text-white">
              New chat
            </div>
          )}
        </div>
        </Link>
      </div>
      <div className="p-6  text-[#7e7a86]">
        {!isSidebarCollapsed && <p className="text-[12px]">TODAY</p>}
        <ul className="flex flex-col gap-1">
          <li className="p-2 hover:border-[white] rounded-md border border-[#312e37] flex justify-between items-center space-x-2">
            <span>Chat Bot Definition</span>
            {!isSidebarCollapsed && <BsThreeDots />}
          </li>
          <li className="p-2 hover:border-[white] rounded-md border border-[#312e37] flex justify-between items-center space-x-2">
            <span>Chat Bot Definition</span>
            {!isSidebarCollapsed && <BsThreeDots />}
          </li>
          <li className="p-2 hover:border-[white] rounded-md border border-[#312e37] flex justify-between items-center space-x-2">
            <span>Essay Writing</span>
            {!isSidebarCollapsed && <BsThreeDots />}
          </li>
        </ul>
      </div>
      <div className={`fixed bottom-0 left-0 right-0 ${!isSidebarCollapsed ? "p-6 w-64 " : "p-6 w-24" } text-white  `}>
        <ul className={`flex flex-col gap-1 w-fit  ${!isSidebarCollapsed ? " w-64 " : " w-24 justify-center items-center" } `}>
        <Link to={'/'}>
        <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
            <GoHome className="text-xl" />
            {!isSidebarCollapsed && <span className="font-semibold inline-block w-24">Clear Conversations</span>}
          </li>
        </Link>
          <Link to={'aimodels'}>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
            <MdOutlineGroups className="text-xl" />
            {!isSidebarCollapsed && <span>AI Models</span>}
          </li>
          </Link>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
            <FaUser className="text-xl" />
            {!isSidebarCollapsed && <span>0 Credits</span>}
          </li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
            <IoCubeOutline className="text-xl" />
            {!isSidebarCollapsed && <span>Affiliate Program</span>}
          </li>
        <Link to={'/'}>
        <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
            <BiLogOut className="text-xl" />
            {!isSidebarCollapsed && <span>Login to get 50 credits</span>}
          </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
