import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { WhyUsData } from "@/utils/BeAPartener";
import { cabinSketch } from "@/utils/fonts";

const WhyUs: React.FC = () => {
  const t = useTranslations("common.be-partner");

  return (
    <div className={`WhyUs`}>
      <div className=" mx-auto  pb-3">
        <h2
          className={`lg:text-6xl md:text-4xl  text-3xl ${cabinSketch.className} text-center font-bold`}
        >
          {t("Why you should")}
          <span className="text-red-400"> {t("partner with us")}</span>
        </h2>
        <div className="bg-[#1F1F1F] rounded-lg mx-10 my-20">
          <div className="background-pan grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 justify-center items-center max-w-4xl mx-auto    gap-6 mt-6 p-4 sm:p-6 md:p-10  rounded-lg   md:bg-auto bg-no-repeat bg-right min-h-[400px] md:h-auto ">
            {WhyUsData.map((e) => (
              <div
                key={e.id}
                className="text-white p-6 rounded-lg flex flex-col items-center text-center"
              >
                <Image
                  src={e.url}
                  width={220}
                  height={220}
                  alt={e.title}
                  className="mb-4"
                />
                <h3 className="text-xl mb-4 text-red-400 font-semibold">
                  {t("title-" + e.title)}
                </h3>
                <p className="text-lg">{t("description-" + e.discretion)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
