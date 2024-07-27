import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { FaCaretDown } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
//zoom in
import { RiFullscreenFill } from "react-icons/ri";
import { RiFullscreenExitFill } from "react-icons/ri";
// zoom out
import { IoLanguage } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
const Topbar = ({isSidebarOpen}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className={`text-white h-[100px] px-8 flex items-center justify-between  fixed ${isSidebarOpen === true ? "left-[300px]" :"left-[90px]"}  top-0 right-0  z-50 border border-b-2 border-red-600 gap-6 bg-black transition-all`}>
      {/* Left side of the top bar */}
      {/* <h1 className="text-2xl font-bold mb-2 sm:mb-0">My App</h1> */}
      <div className="">
        <div className="flex gap-5 justify-evenly items-center flex-grow">
          <div className="font-heebo text-black ">
            <div className="flex gap-1 items-center w-full text-center rounded-[5px] bg-[#2b2830] py-[5px] pr-2">
              <span className="inline-block w-[50%] text-[#c0bcca]">50</span>
              <div className="h-6 w-[1px] bg-[#413e45]"></div>
              <span className="inline-block w-[50%] text-[12px] text-[#7e7a86]">
                Credit Remain
              </span>
            </div>
          </div>
          <div className="font-heebo ">
            <div className="uppercase tracking-[1px] text-black py-2 px-5 rounded-3xl bg-blue-400 text-[14px] font-medium w-fit">
              upgrade
            </div>
          </div>
        </div>
      </div>

    <div className=" ">
    <div className="border-gray-900 border " onClick={handlePopupToggle}>
        <div className="uppercase text-black flex cursor-pointer items-center gap-2 px-2 py-2 border rounded-md">
          <span className="inline-block w-[60%] text-[10px] font-heebo text-[#212529] bg-white ">
            Selected Modal
          </span>
          <span className="uppercase w-[40%] font-bold text-[12px] font-heebo flex items-center">
            <span>Liberty</span>
            <FaCaretDown className="text-[15px]" />
          </span>
        </div>
      </div>
    </div>

      {/* Right side of the top bar */}
      <div className="">
        <div className="flex items-center space-x-4 flex-wrap gap-2 flex-shrink-0">
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
            <IoShareSocialOutline />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
            <IoSearchOutline />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
            <IoNotificationsOutline />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
            {/* SVG icon */}
            <RiFullscreenFill />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
            <IoLanguage />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
            <MdOutlineLightMode />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
            <i className="fas fa-user-circle h-5 w-5"></i>
          </button>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white text-black p-5 rounded shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Popup Title</h2>
            <button onClick={handlePopupToggle} className="text-red-500">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <p>This is a sample line of text inside the popup.</p>
          <p>Another line of text inside the popup.</p>
        </div>
      )}
    </div>
  );
};

export default Topbar;
