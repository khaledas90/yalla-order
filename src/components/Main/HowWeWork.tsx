import React from "react";
import Image from "next/image";

import { cabinSketch, cairoFont } from "@/utils/fonts";
import LineWithDot from "../LineWithDot/LineWithDot";
import { useTranslations } from "next-intl";
import { IHowWeWork } from "@/utils/Main";

const HowWeWork: React.FC<IHowWeWork> = ({
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  image,
  Features,
}) => {
  const t = useTranslations("common.howWeWork");
  return (
    <>
      <section className="how-we-work md:pt-16 pt-40">
        <div className="container mx-auto px-4 my-8 relative">
          <div className="absolute inset-0 background-pan"></div>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center mb-5">
            <div className="Big-image w-full lg:w-1/2 mb-8 lg:mb-0 z-30">
              <Image
                src={image}
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <div className="Content w-full lg:w-1/2 flex justify-center items-center">
              <div className="w-full ps-10 relative ltr:text-left rtl:text-right">
                <LineWithDot  />
                <h2 className={`text-5xl mb-3`}>
                  <span
                    className={`${cairoFont.className} rtl:inline ltr:hidden`}
                  >
                    {t(title)}
                  </span>
                  <span
                    className={`${cabinSketch.className} rtl:hidden ltr:inline`}
                  >
                    {t(title)}
                  </span>
                </h2>
                <h4 className="text-4xl font-bold">
                  <span className="text-[#fe7e7e] font-semibold">
                    {t(descriptionOne)}
                  </span>{" "}
                  <span>{t(descriptionTwo)}</span> <p>{t(descriptionThree)}</p>
                </h4>
                <p className="leading-loose text-xl font-semibold">
                  {t(Features[0])}
                  <br />
                  {t(Features[1])}
                  <br />
                  {t(Features[2])}
                  <br />
                  {t(Features[3])}
                  <br />
                  {t(Features[4])}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
