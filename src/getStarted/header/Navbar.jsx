import React, { useState } from "react";
import Topbar from "./topBar/TopBar";
import Sidebar from "./sideBar/SideBar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-[300px]' : 'ml-[90px]'}`}>
        <Topbar isSidebarOpen={isSidebarOpen} />
        <main className="flex-1 p-6 overflow-y-auto">
          {/* <HomePage /> */}
        </main>
      </div>
    </div>
  );
};

export default Navbar;
