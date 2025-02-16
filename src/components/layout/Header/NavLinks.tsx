"use client";
import React from "react";
import { usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { Links } from "@/utils/Links";
import Link from "next/link";
const NavLinks = ({ id, name, href }: Links) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        title={name}
        key={id}
        className={clsx(
          "relative block text-lg font-medium transition-all duration-[0.4s] hover:text-red-500 ",
          pathname === href ? "text-main" : "text-text-main"
        )}
      >
        {name}
      </Link>
    </>
  );
};

export default NavLinks;
