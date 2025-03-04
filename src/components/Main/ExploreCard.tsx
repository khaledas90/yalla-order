"use client";
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { setCookie } from "cookies-next/client";
type Props = {
  typeTheme: string;
  textColor: string;
  imgButton: string | StaticImageData;
  h1Content: string;
  PContent: string;
};

const ExploreCard = ($: Props) => {
  const t = useTranslations("common.downloadApp");

  return (
    <span className="w-full sm:h-[250px] h-[250px] 2xl:max-w-xl max-w-md flex items-center bg-black/90 rounded-xl overflow-hidden">
      <div className="p-5 w-2/3 h-full flex flex-col justify-between">
        <h1 className={`lg:text-3xl text-lg font-bold ${$.textColor}`}>
          {$.h1Content}
        </h1>
        <p className="text-md text-gray-300">{$.PContent}</p>
        <Link
          href={$.typeTheme === "restaurant" ? `/` : `/clinic`}
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" });
            setCookie("type", $.typeTheme);
          }}
          className={`mt-2 text-lg flex font-semibold ${$.textColor}`}
        >
          {t("Explore")}
        </Link>
      </div>
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
