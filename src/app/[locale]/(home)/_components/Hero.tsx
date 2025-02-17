import React from "react";
import Image from "next/image";

import heroImg from "@/assets/image/hero_restaurant.png";
import { useTranslations } from "next-intl";
import { cabinSketch, cairoFont } from "@/utils/fonts";
import SearchInput from "../../../../components/Inputs/SearchInput";
import { Icon } from "@iconify/react";
import { FeatureHeroRestaurants } from "@/utils/FeatureHero";
import LineWithDot from "@/components/LineWithDot/LineWithDot";
const Hero: React.FC = () => {
  const t = useTranslations("common.hero");

  return (
    <div className={`hero text-white`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="mt-20 lg:ms-[100px] ms-0 md:ps-16 md:pt-10 ps-10 pt-5 relative">
              <LineWithDot />
              <h1
                className={`text-4xl md:text-6xl ltr:text-left rtl:right-0 pe-5 md:pe-10 font-light`}
              >
                <span className={`${cairoFont.className} font-bold rtl:inline ltr:hidden`}>
                  {t("A unique")}
                  <br />
                  {t("experience for")}
                  <br />
                  {t("food lovers")}
                </span>
                <span className={`${cabinSketch.className} rtl:hidden ltr:inline`}>
                  {t("A unique")}
                  <br />
                  {t("experience for")}
                  <br />
                  {t("food lovers")}
                </span>
              </h1>
            </div>
            <div className="flex justify-center lg:justify-start mt-16">
              <SearchInput query="" isIconSearch isIconLocation />
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

      <div className="features w-full px-6">
        <div className="bg-white shadow-lg translate-y-1/4 rounded-2xl md:w-5/6 w-full p-5 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FeatureHeroRestaurants.map((feature) => (
              <div
                className="flex flex-col sm:flex-row items-center justify-start gap-3 p-4"
                key={feature.title}
              >
                <span className="bg-main p-4 rounded-full flex items-center justify-center">
                  <Icon className="text-white" icon={feature.icon} width="44" height="44" />
                </span>
                <h6 className="text-black text-[18px] font-semibold text-center sm:text-left">
                  {t("feature-" + feature.title)}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
