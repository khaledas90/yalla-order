"use client";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //   const toggleDrawer = () => {
  //     setIsDrawerOpen(!isDrawerOpen);
  //   };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      {/* <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} /> */}

      {/* Main Content Area */}
      <div className="flex flex-col w-full ">
        {/* App Navbar */}
        {/* <AppNavbar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} /> */}

        {/* Main Content */}
        <div className="flex p-3 mt-6 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
