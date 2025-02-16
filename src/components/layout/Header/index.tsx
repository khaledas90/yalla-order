"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logo from "@/assets/image/FOoDc.png";
import Image from "next/image";
import LoginButton from "@/components/Buttons/LoginButton";

const NavRestaurants: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }

  return (
    <nav className="fixed top-0 start-0 end-0 z-40 transition-all duration-300 ">
      <div className={`flex items-center justify-between px-5 py-3 lg:px-20 ${scrolled ? " backdrop-blur-lg bg-black/30" : "bg-transparent"}`}>
        <Link href="/">
          <Image src={logo} loading="lazy" alt="Logo" width={125} height={115} />
        </Link>
        <div
          className="lg:hidden cursor-pointer text-2xl z-50 text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
        <ul className="hidden lg:flex gap-6 text-white">
          <li><Link href="/home-restaurants" className="hover:text-red-500 transition-all duration-200">Home</Link></li>
          <li><Link href="/restaurants" className="hover:text-red-500 transition-all duration-200">Restaurants</Link></li>
          <li><Link href="/become-a-partner" className="hover:text-red-500 transition-all duration-200">Become a Partner</Link></li>
          <li><Link href="/about-us" className="hover:text-red-500 transition-all duration-200">About Us</Link></li>
        </ul>
        <div className="hidden lg:flex gap-5 text-white">
          <button title="button" type="submit" className="hover:scale-105 transition-all duration-300">
            <Icon icon="solar:heart-linear" width="25" height="25" />
          </button>
          <button title="button" type="submit" className="hover:scale-105 transition-all duration-300">
            <Icon icon="solar:global-outline" width="25" height="25" />
          </button>
          {/* Login button */}
          <LoginButton text="Login" href="/login" />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden">
          <div className="fixed top-0 left-0 h-full w-64 bg-black shadow-lg z-20">
            <div className="p-4">
              <Link href="/">
                <Image src={logo} loading="lazy" alt="Logo" width={125} height={115} />
              </Link>
            </div>
            <ul className="flex flex-col gap-4 text-white px-4">
              <li><Link href="/home-restaurants" className="hover:text-red-500 transition-all duration-200">Home</Link></li>
              <li><Link href="/restaurants" className="hover:text-red-500 transition-all duration-200">Restaurants</Link></li>
              <li><Link href="/become-a-partner" className="hover:text-red-500 transition-all duration-200">Become a Partner</Link></li>
              <li><Link href="/about-us" className="hover:text-red-500 transition-all duration-200">About Us</Link></li>
              <li><Link href="/login" className="hover:text-red-500 transition-all duration-200 mt-3 flex justify-start items-center gap-1"><span>Login</span><span><Icon icon="mage:login" width="15" height="15" /></span></Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavRestaurants;
