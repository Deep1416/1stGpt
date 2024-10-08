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
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Sidebar = ({ isSidebarCollapsed, toggleSidebar,totalCoins,setTotalCoins }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    // Clear local storage
    localStorage.clear();
  
    // Clear the AccessToken cookie by setting it to expire immediately
    document.cookie = "AccessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  
    // Redirect to the home page
    navigate('/');
  };
  return (
    <>
      <div className="flex justify-between items-center h-[100px] px-4 border-b border-[#312e37] text-black">
        <Link to={"/"}>
          <h1 className="text-[30px] font-semibold text-[#c0bcca] font-heebo">
            {!isSidebarCollapsed === true ? "1stGPT" : "1"}
          </h1>
        </Link>
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
      <div className="p-5 border-b border-[#312e37] text-center">
        <Link to={"/get"}>
          <div className="flex items-center justify-center gap-4 bg-[#2b2830] py-3 pr-[10px] rounded-md pl-3">
            {!isSidebarCollapsed && (
              <div className="uppercase text-[14px] font-medium font-heebo text-white text-center">
                chat
              </div>
            )}
          </div>
        </Link>
      </div>
     
      <div
        className={`fixed bottom-0 left-0 right-0 ${
          !isSidebarCollapsed ? "p-6 w-64 " : "p-6 w-24"
        } text-white`}
      >
        <ul
          className={`flex flex-col gap-1 w-fit ${
            !isSidebarCollapsed ? "w-64" : "w-24 justify-center items-center"
          }`}
        >
          <Link to={"/"}>
            <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
              <GoHome className="text-xl" />
              {!isSidebarCollapsed && (
                <span className="font-semibold inline-block  ">
                Home
              </span>
              )}
            </li>
          </Link>
          <Link to={"/get/aimodels"}>
            <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
              <MdOutlineGroups className="text-xl" />
              {!isSidebarCollapsed && <span>AI Models</span>}
            </li>
          </Link>
         <Link to={"/get/pricing"}>
            <li  className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
                <FaUser className="text-xl" />
                {!isSidebarCollapsed && <span> {totalCoins} Buy Credits</span>}
              </li>
         </Link>
          {/* <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit">
            <IoCubeOutline className="text-xl" />
            {!isSidebarCollapsed && <span>Affiliate Program</span>}
          </li> */}
          <li
            className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2b2830] w-fit cursor-pointer"
            onClick={handleLogout}
          >
            <BiLogOut className="text-xl" />
            {!isSidebarCollapsed && <span>Logout</span>}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
