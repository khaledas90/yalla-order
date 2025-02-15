"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logo from "@/assets/image/FOoDc.png";
import Image from "next/image";

type DropdownState = {
  favorite: boolean;
  bag: boolean;
  language: boolean;
  profile: boolean;
};

type Favorite = {
  restaurant_name: string;
  restaurant_address: string;
  product_name: string;
};

type BagItem = {
  id: number;
  product_name: string;
  restaurant_name: string;
};

const NavRestaurants: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    favorite: false,
    bag: false,
    language: false,
    profile: false,
  });

  const [favorites] = useState<Favorite[]>([
    {
      restaurant_name: "Pizza Place",
      restaurant_address: "123 Main St",
      product_name: "Pepperoni Pizza",
    },
  ]);

  const [bagItems] = useState<BagItem[]>([
    { id: 1, product_name: "Burger", restaurant_name: "Burger Spot" },
  ]);

  const favoriteRef = useRef<HTMLDivElement>(null);
  const bagRef = useRef<HTMLDivElement>(null);
  const favCount = favorites.length;
  const bagCount = bagItems.length;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (dropdown: keyof DropdownState) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      favoriteRef.current &&
      !favoriteRef.current.contains(event.target as Node) &&
      bagRef.current &&
      !bagRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen({
        favorite: false,
        bag: false,
        language: false,
        profile: false,
      });
    }
  };

  document.addEventListener("click", handleOutsideClick);

  const cleanup = () => {
    document.removeEventListener("click", handleOutsideClick);
  };

  React.useEffect(() => {
    return cleanup;
  }, []);

  return (
    <nav className="fixed top-0 start-0 end-0 bg-transparent px-4 py-3">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-5 lg:px-20">
        <Link href="/">
          <Image
            src={logo}
            loading="lazy"
            alt="Logo"
            width={125}
            height={115}
          />
        </Link>
        <div
          className="lg:hidden cursor-pointer text-2xl z-50 text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
        <ul className="hidden lg:flex gap-6 text-white">
          <li>
            <Link href="/HomeRestaurants">
              <p className="hover:text-red-400 font-semibold">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/restaurants">
              <p className="hover:text-red-400 font-semibold">Restaurants</p>
            </Link>
          </li>
          <li>
            <Link href="/BecomeAPartner">
              <p className="hover:text-red-400 font-semibold">
                Become a Partner
              </p>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <p className="hover:text-red-400 font-semibold">About Us</p>
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex justify-center items-center text-white gap-5">
          <div className="two-icons flex gap-3">
            <button
              className="rounded-full hover:scale-105 transition-all duration-300"
              title="fav"
              type="button"
            >
              <Icon icon="solar:heart-linear" width="25" height="25" />
            </button>
            <button
              className="rounded-full hover:scale-105 transition-all duration-300"
              title="bag"
              type="button"
            >
              <Icon icon="solar:global-outline" width="25" height="25" />
            </button>
          </div>
          <div className="Login-button">
            <button
              title="Login-button"
              type="submit"
              className="ring-[0.8px] ring-white px-16 py-2 rounded-3xl bg-transparent hover:bg-white/15 transition-all duration-300 text-sm"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for small screens */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden">
          <div className="fixed top-0 left-0 h-full w-64 bg-black shadow-lg z-20">
            <div className="p-4">
              <Link href="/">
                <Image
                  src={logo}
                  loading="lazy"
                  alt="Logo"
                  width={125}
                  height={115}
                />
              </Link>
            </div>
            <ul className="flex flex-col gap-4 text-white px-4">
              <li>
                <Link href="/HomeRestaurants">
                  <p className="hover:text-red-400 font-semibold">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/restaurants">
                  <p className="hover:text-red-400 font-semibold">
                    Restaurants
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/BecomeAPartner">
                  <p className="hover:text-red-400 font-semibold">
                    Become a Partner
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/AboutUs">
                  <p className="hover:text-red-400 font-semibold">About Us</p>
                </Link>
              </li>
              <li>
                <div
                  className="relative cursor-pointer"
                  onClick={() => toggleDropdown("favorite")}
                  ref={favoriteRef}
                >
                  <div className="flex items-center">
                    <Icon icon="mdi:heart" className="text-white text-xl" />
                    {favCount !== 0 && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {favCount}
                      </span>
                    )}
                  </div>
                  {dropdownOpen.favorite && (
                    <div className="absolute bg-white shadow-lg rounded-lg mt-2">
                      <div className="p-4">
                        <p className="font-bold">My Favorites</p>
                        {favorites.map((fav, index) => (
                          <div key={index} className="py-2">
                            <p className="font-medium">
                              {fav.restaurant_name} - {fav.restaurant_address}
                            </p>
                            <p className="text-sm">{fav.product_name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div
                  className="relative cursor-pointer"
                  onClick={() => toggleDropdown("bag")}
                  ref={bagRef}
                >
                  <div className="flex items-center">
                    <Icon icon="mdi:shopping" className="text-white text-xl" />
                    {bagCount !== 0 && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {bagCount}
                      </span>
                    )}
                  </div>
                  {dropdownOpen.bag && (
                    <div className="absolute bg-white shadow-lg rounded-lg mt-2">
                      <div className="p-4">
                        <p className="font-bold">My Bag</p>
                        {bagItems.map((item) => (
                          <div key={item.id} className="py-2">
                            <p className="font-medium">
                              {item.product_name} - {item.restaurant_name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavRestaurants;
