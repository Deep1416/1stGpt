import React, { useState } from "react";
import Sidebar from "../header/sideBar/SideBar";
import TopBar from './../header/topBar/TopBar'
import { Outlet } from "react-router-dom";


const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen">
      {/* SideBar Content */}
      <div
        className={`transition-all duration-300 border border-[#312e37]  ${
          isSidebarCollapsed ? "w-24" : "w-64"
        } bg-[#17151b] h-full`}
      >
        <Sidebar
          toggleSidebar={toggleSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />
      </div>
      {/* TopBar and Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        {/* Top bar */}
        <div className="h-[100px] bg-[#17151b] flex items-center justify-between px-8">
          <TopBar isSidebarCollapsed={isSidebarCollapsed} />
        </div>
        {/* Main content */}
        <div className="flex-1 overflow-auto bg-gray-200">
          <Outlet />
        </div>
        <div>
       
        </div>
      </div>
    </div>
  );
};

export default Layout;
