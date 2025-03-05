import React from "react";
import { cabinSketch, cairoFont } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import { IBestFavorite } from "@/utils/Main";
import HomeSlider from "../Carousel/HomeSlider";

const slides = [
  { icon: "mdi:food", title: "Food" },
  { icon: "mdi:coffee", title: "Coffee" },
  { icon: "mdi:beer", title: "Beer" },
  { icon: "mdi:beer", title: "Beer" },
  { icon: "mdi:beer", title: "Beer" },
  { icon: "mdi:beer", title: "Beer" },
  { icon: "mdi:beer", title: "Beer" },
  { icon: "mdi:beer", title: "Beer" },
];

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
          <HomeSlider slides={slides} autoPlay={true} />
        </div>
      </div>
    </>
  );
};

export default BestFavorite;
