import React from "react";
import HeaderClient from "./HeaderClient";

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 start-0 end-0 z-40 transition-all duration-300">
      <HeaderClient />
    </nav>
  );
};

export default Header;
