"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/Buttons/Button";
import { links } from "@/utils/Links";
import { useTranslations } from "next-intl";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/image/FOoDc.png";
import LanguageSwitcher from "./LanguageSwitcher";
import FavoriteDropdown from "./FavoriteDropdown";

const HeaderClient: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("common.header");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 start-0 end-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/30" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-5 lg:px-20">
        <Link href="/" className="z-30">
          <Image
            src={logo}
            loading="lazy"
            alt="Logo"
            width={125}
            height={115}
          />
        </Link>
        <div className="lg:hidden cursor-pointer flex items-center gap-3  text-2xl z-600 text-white">
          <FavoriteDropdown />
          <LanguageSwitcher />
          <Icon
            icon={`${menuOpen ? "material-symbols:close-rounded" : "fe:bar"}`}
            width="30"
            height="30"
            onClick={toggleMenu}
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
          <FavoriteDropdown />
          <LanguageSwitcher />
          <Button text={t("Login")} href="/login" />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 -z-20 lg:hidden">
          <div
            ref={sidebarRef}
            className="fixed top-0 ltr:left-0 rtl:right-0 h-full w-64 bg-black shadow-lg z-20"
          >
            <ul className="flex flex-col gap-4 mt-[90px] text-white px-4">
              {links.map((link) =>
                link.name === "Clinics" ? null : (
                  <li key={link.name}>
                    <NavLinks
                      id={link.id}
                      name={t(link.name)}
                      icon={link.icon}
                      href={link.href}
                    />
                  </li>
                )
              )}
              <li className="mt-3">
                <Button text={t("Login")} href="/login" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderClient;
