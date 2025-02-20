import React from "react";
import Image from "next/image";

import heroImg from "@/assets/image/be_a_partener.png";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import BePartnerForm from "./BePartnerForm";

const Hero: React.FC = () => {
  const t = useTranslations("common.be-partner");

  return (
    <div className={`hero h-[98vh] mb-[350px] text-white`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="mt-20 lg:ms-[100px] ms-0 md:ps-16 md:pt-10 ps-10 pt-5 relative">
              <h1
                className={`text-3xl md:text-5xl ltr:text-left rtl:right-0 pe-5 md:pe-10 font-light`}
              >
                <span
                  className={`${cabinSketch.className} text-main font-bold `}
                >
                  {t("Grow your business online with FOo")}
                  <span className="text-primary"> {t("Dc")}</span>!
                </span>
              </h1>
              <p className="font-medium text-white text-xl mt-10">
                {t(
                  "Partner with us to reach more customers, earn more money and grow your business online - your success story begins here"
                )}
              </p>
            </div>
            <div className="mt-20">
              <BePartnerForm />
            </div>
          </div>
          <div className="lg:w-1/2 mt-4 flex justify-center items-center">
            <Image
              src={heroImg}
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full lg:block hidden max-w-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
