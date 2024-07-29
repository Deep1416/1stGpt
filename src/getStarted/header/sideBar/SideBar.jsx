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

const Sidebar = ({ isSidebarCollapsed, toggleSidebar }) => {
  return (
    <>
      <div className="flex justify-between items-center h-[100px] px-4 border-b border-red-700 text-black">
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
      <div className="p-5">
        <div className="flex items-center gap-4 bg-yellow-400 py-3 pr-[10px] rounded-md pl-4">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex justify-center items-center">
            <MdAdd className="text-white" />
          </div>
          {!isSidebarCollapsed && (
            <div className="uppercase text-[14px] font-medium font-heebo">
              New chat
            </div>
          )}
        </div>
      </div>
      <div className="p-6 bg-gray-800">
        {!isSidebarCollapsed && <p className="text-[12px]">TODAY</p>}
        <ul>
          <li className="p-2 hover:bg-gray-700 flex justify-between items-center space-x-2">
            <span>Chat Bot Definition</span>
            {!isSidebarCollapsed && <BsThreeDots />}
          </li>
          <li className="p-2 hover:bg-gray-700 flex justify-between items-center space-x-2">
            <span>Chat Bot Definition</span>
            {!isSidebarCollapsed && <BsThreeDots />}
          </li>
          <li className="p-2 hover:bg-gray-700 flex justify-between items-center space-x-2">
            <span>Essay Writing</span>
            {!isSidebarCollapsed && <BsThreeDots />}
          </li>
        </ul>
      </div>
      <div className={`fixed bottom-0 left-0 right-0 ${!isSidebarCollapsed ? "p-6" : "p-2"}`}>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830]">
            <GoHome className="text-xl" />
            {!isSidebarCollapsed && <span className="font-semibold">Clear Conversations</span>}
          </li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830]">
            <MdOutlineGroups className="text-xl" />
            {!isSidebarCollapsed && <span>AI Models</span>}
          </li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830]">
            <FaUser className="text-xl" />
            {!isSidebarCollapsed && <span>0 Credits</span>}
          </li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830]">
            <IoCubeOutline className="text-xl" />
            {!isSidebarCollapsed && <span>Affiliate Program</span>}
          </li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830]">
            <BiLogOut className="text-xl" />
            {!isSidebarCollapsed && <span>Login to get 50 credits</span>}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
