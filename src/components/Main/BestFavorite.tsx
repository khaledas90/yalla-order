import React from "react";
import Carousel from "../Carousel/Carousel";
import { cabinSketch, cairoFont } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import { IBestFavorite } from "@/utils/Main";

const BestFavorite: React.FC<IBestFavorite> = ({ title }) => {
  const t = useTranslations("common.howWeWork");
  return (
    <>
      <div className="customer-fav-cuisine w-full  mx-auto p-12 flex-col gap-10 bg-black rounded-xl">
        <div className="title-customer-fav-cuisine">
          <h2 className={`text-center text-5xl text-white`}>
            <span className={`${cairoFont.className} rtl:inline ltr:hidden`}>
              {t(title)}
            </span>
            <span className={`${cabinSketch.className} rtl:hidden ltr:inline`}>
              {t(title)}
            </span>
          </h2>
        </div>
        <div className="Carousel pt-10">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default BestFavorite;
