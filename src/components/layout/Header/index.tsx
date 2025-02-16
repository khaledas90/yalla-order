"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logo from "@/assets/image/FOoDc.png";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import { links } from "@/utils/Links";
import { useTranslations } from "next-intl";
import NavLinks from "./NavLinks";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("common.header");

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
      <div
        className={`flex items-center justify-between px-5 py-3 lg:px-20 ${
          scrolled ? " backdrop-blur-lg bg-black/30" : "bg-transparent"
        }`}
      >
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
          className="lg:hidden cursor-pointer text-2xl z-[600] text-white"
          onClick={toggleMenu}
        >
          <Icon
            icon={`${menuOpen ? "material-symbols:close-rounded" : "fe:bar"}`}
            width="30"
            height="30"
          />
        </div>
        <ul className="hidden lg:flex gap-6 text-white">
          {links.map((link) =>
            link.name === "Clinics" ? null : (
              <li key={link.name}>
                <NavLinks id={link.id} name={t(link.name)} href={link.href} />
              </li>
            )
          )}
        </ul>
        <div className="hidden lg:flex gap-5 text-white">
          <button
            title="button"
            type="submit"
            className="hover:scale-105 transition-all duration-300"
          >
            <Icon icon="solar:heart-linear" width="25" height="25" />
          </button>
          <button
            title="button"
            type="submit"
            className="hover:scale-105 transition-all duration-300"
          >
            <Icon icon="solar:global-outline" width="28" height="28" />
          </button>

          <Button text="Login" href="/login" />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 -z-20 lg:hidden">
          <div className="fixed top-0 left-0 h-full w-64 bg-black shadow-lg z-20">
            <ul className="flex flex-col gap-4 mt-[90px] text-white px-4">
              {links.map((link) =>
                link.name === "Clinics" ? null : (
                  <li key={link.name}>
                    <NavLinks
                      id={link.id}
                      name={t(link.name)}
                      href={link.href}
                    />
                  </li>
                )
              )}
              <li>
                <Button text="Login"  href="/login" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;