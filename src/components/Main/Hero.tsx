"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch, cairoFont } from "@/utils/fonts";
import SearchInput from "../Inputs/SearchInput";
import { Icon } from "@iconify/react";
import LineWithDot from "@/components/LineWithDot/LineWithDot";
import { HeroProps } from "@/utils/Main";
import Image from "next/image";
const Hero: React.FC<HeroProps> = ({
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  image,
  FeatureHero,
}) => {
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
                <span
                  className={`${cairoFont.className} font-bold rtl:inline ltr:hidden`}
                >
                  {t(titleOne)}
                  <br />
                  {t(titleTwo)}
                  <br />
                  {t(titleThree)}
                  <br />
                  {t(titleFour)}
                </span>
                <span
                  className={`${cabinSketch.className} rtl:hidden ltr:inline`}
                >
                  {t(titleOne)}
                  <br />
                  {t(titleTwo)}
                  <br />
                  {t(titleThree)}
                  <br />
                  {t(titleFour)}
                </span>
              </h1>
            </div>
            <div className="flex justify-center lg:justify-end mt-16">
              <SearchInput query="" isIconSearch isIconLocation />
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src={image}
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
            {FeatureHero.map((feature) => (
              <div
                className="flex flex-col sm:flex-row items-center justify-start gap-3 p-4"
                key={feature.title}
              >
                <span className="bg-main p-4 rounded-full flex items-center justify-center">
                  <Icon
                    className="text-white"
                    icon={feature.icon}
                    width="44"
                    height="44"
                  />
                </span>
                <h2 className="text-black text-[18px] font-semibold text-center sm:text-left">
                  {t("feature-" + feature.title)}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
