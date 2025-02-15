import React from "react";
import Image from "next/image";

import heroImg from "@/assets/image/hero_restaurant.png";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import SearchInput from "../../../../components/Inputs/SearchInput";
import { Icon } from "@iconify/react";
import { FeatureHeroRestaurants } from "@/utils/FeatureHero";
const Hero: React.FC = () => {
  const t = useTranslations("restaurant.hero");

  return (
    <div className={`hero bg-gray-700 text-white`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="mt-32 lg:ms-[100px] ms-0 ">
              <h1
                className={`sm:text-5xl text-4xl lg:text-7xl md:text-6xl ltr:lg:text-left rtl:lg:text-right text-center ${cabinSketch.className}  font-light  `}
              >
                {t("A unique")}
                <br />
                {t("experience for")}
                <br />
                {t("food lovers")}
              </h1>
              <div className="flex justify-center lg:justify-start mt-8">
                <SearchInput query="" isIconSearch isIconLocation />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src={heroImg}
              alt="Hero Image"
              width={400}
              height={400}
              className="w-full lg:block hidden max-w-lg"
            />
          </div>
        </div>
      </div>

      <div className="features bg-white shadow-lg rounded-2xl p-5 mt-8 mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
          {FeatureHeroRestaurants.map((feature) => (
            <div
              className="flex items-center justify-center"
              key={feature.title}
            >
              <span className="bg-main p-4 rounded-full">
                <Icon
                  className="text-white"
                  icon={feature.icon}
                  width="44"
                  height="44"
                />
              </span>
              <h6 className="text-black ps-3 text-[18px] font-semibold">
                {t("feature-" + feature.title)}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
