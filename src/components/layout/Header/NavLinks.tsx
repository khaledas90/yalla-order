"use client";
import React from "react";
import { usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { Links } from "@/utils/Links";
import Link from "next/link";
import { Icon } from "@iconify/react";
const NavLinks = ({ id, name, icon, href }: Links) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        title={name}
        key={id}
        className={clsx(
          "relative flex  gap-2 text-lg font-medium transition-all duration-[0.4s] hover:text-red-500 ",
          pathname === href ? "text-main" : "text-text-main"
        )}
      >
        <Icon icon={icon as string} width="24" height="24" /> {name}
      </Link>
    </>
  );
};

export default NavLinks;
