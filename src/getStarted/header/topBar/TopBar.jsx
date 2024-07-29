import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCaretDown } from "react-icons/fa";
import {
  IoShareSocialOutline,
  IoSearchOutline,
  IoNotificationsOutline,
  IoLanguage,
} from "react-icons/io5";
import { RiFullscreenFill } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";

const Topbar = ({ isSidebarOpen }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div
      className={`text-white h-[100px] px-8 flex items-center justify-between fixed top-0 right-0 z-50 border-b-2 border-red-600 bg-black transition-all duration-300 ${
        isSidebarOpen ? "left-[300px]" : "left-[90px]"
      }`}
    >
      <div className="">
        <div className="flex gap-5 justify-evenly items-center flex-grow">
          <div className="font-heebo text-black">
            <div className="flex gap-1 items-center w-full text-center rounded-[5px] bg-[#2b2830] py-[5px] pr-2">
              <span className="inline-block w-[50%] text-[#c0bcca]">50</span>
              <div className="h-6 w-[1px] bg-[#413e45]"></div>
              <span className="inline-block w-[50%] text-[12px] text-[#7e7a86]">
                Credit Remain
              </span>
            </div>
          </div>
          <div className="font-heebo">
            <div className="uppercase tracking-[1px] text-black py-2 px-5 rounded-3xl bg-blue-400 text-[14px] font-medium w-fit">
              upgrade
            </div>
          </div>
        </div>
      </div>

      <div className="border-gray-900 border" onClick={handlePopupToggle}>
        <div className="uppercase text-black flex cursor-pointer items-center gap-2 px-2 py-2 border rounded-md">
          <span className="inline-block w-[60%] text-[10px] font-heebo text-[#212529] bg-white">
            Selected Modal
          </span>
          <span className="uppercase w-[40%] font-bold text-[12px] font-heebo flex items-center">
            <span>Liberty</span>
            <FaCaretDown className="text-[15px]" />
          </span>
        </div>
      </div>

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

      {isPopupVisible && (
        <div className="absolute right-0 top-12 mt-2 p-6 bg-white text-black rounded-lg shadow-lg z-50">
          <p>This is the popup content!</p>
          <button
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={handlePopupToggle}
          >
            Close Popup
          </button>
        </div>
      )}
    </div>
  );
};

export default Topbar;
