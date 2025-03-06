"use client";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { links, Links } from "@/utils/Links";

export const useFilteredLinks = (): Links[] => {
  const [filteredLinks, setFilteredLinks] = useState<Links[]>([]);

  useEffect(() => {
    const type = getCookie("type");

    const newLinks = links.filter((link) =>
      type === "clinic" ? link.name !== "Restaurants" : link.name !== "Clinics"
    );

    setFilteredLinks(newLinks);
  }, []);

  return filteredLinks;
};
