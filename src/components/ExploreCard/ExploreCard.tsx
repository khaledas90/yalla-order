/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import useMainContext from "@/context/MainContext";
import { setCookie } from "cookies-next/client";

type Props = {
  type: string;
  textColor: string;
  imgButton: string | StaticImageData;
  h1Content: string;
  PContent: string;
};

const ExploreCard = ($: Props) => {
  const t = useTranslations("common.downloadApp");
  const { setTheme } = useMainContext();

  const handleClick = (type: string) => () => {
    if (type === "restaurant") {
      setTheme("restaurant");
      localStorage.setItem("theme", "restaurant");
      // setCookie("theme", "restaurant", { maxAge: 60 * 60 * 24 * 365 });
    } else if (type === "clinic") {
      setTheme("clinic");
      localStorage.setItem("theme", "clinic");
      // setCookie("theme", "clinic", { maxAge: 60 * 60 * 24 * 365 });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <span className="w-full sm:h-[250px] h-[250px] 2xl:max-w-xl max-w-md flex items-center bg-black/90 rounded-xl overflow-hidden">
      {/* Text Section */}
      <div className="p-5 w-2/3 h-full flex flex-col justify-between">
        <h1 className={`lg:text-3xl text-lg font-bold ${$.textColor}`}>
          {$.h1Content}
        </h1>
        <p className="text-md text-gray-300">{$.PContent}</p>
        <button
          type="button"
          onClick={handleClick($.type)}
          className={`mt-2 text-lg flex font-semibold ${$.textColor}`}
        >
          {t("Explore")}
        </button>
      </div>
      {/* Image Section */}
      <div className="w-1/3 h-full">
        <Image
          src={$.imgButton}
          alt="Button Image"
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>
    </span>
  );
};

export default ExploreCard;
