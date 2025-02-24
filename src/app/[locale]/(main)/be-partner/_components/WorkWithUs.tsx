import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { WorkWithUsData } from "@/utils/BeAPartener";
import { cabinSketch } from "@/utils/fonts";

const WorkWithUs: React.FC = () => {
  const t = useTranslations("common.be-partner");

  return (
    <div className="WhyUs">
      <div className="mx-auto pb-3">
        <h2
          className={`lg:text-6xl md:text-4xl text-3xl ${cabinSketch.className} text-center font-bold`}
        >
          {t("How we'll work to")}
          <span className="text-red-400"> {t("gether")}</span>
        </h2>
        <section className="w-full background-work-with-us lg:h-[900px] h-auto py-10 text-center bg-no-repeat bg-left-bottom bg-auto">
          <div className="grid grid-cols-1 bg-[url('./img/Group 1171276403.png')] md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {WorkWithUsData.map((e) => (
              <div
                key={e.title}
                className="p-6 flex flex-col self-start items-center text-center"
              >
                <Image
                  src={e.url}
                  alt={e.title}
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h3 className="text-xl mb-3 font-semibold text-red-400">
                  {e.title}
                </h3>
                <p>{e.discretion}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkWithUs;
