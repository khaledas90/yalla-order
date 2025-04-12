import React from "react";
import HeaderClient from "./HeaderClient";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth";

const Header: React.FC = async () => {
  const initialSession = await getServerSession(AuthOptions);
  return (
    <nav className="fixed top-0 start-0 end-0 z-40 transition-all duration-300">
      <HeaderClient initialSession={initialSession} />
    </nav>
  );
};

export default Header;
