import * as React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import Profile from "./_components";

const Page = () => {
  const t = useTranslations("common.profile");

  return (
    <>
      <div
        className={`hero h-[90vh] lg:mb-[20rem] md:mb-[48rem] sm:mb-[55rem] mb-[55rem]`}
      >
        <div className="flex justify-center items-center lg:pt-[13rem] md:pt-[13rem] sm:pt-[10rem] pt-[8rem] ">
          <h2
            className={`text-center text-6xl text-white ${cabinSketch.className} font-bold mb-[60px] `}
          >
            {t("My Profile")}
          </h2>
        </div>
        <Profile />
      </div>
    </>
  );
};

export default Page;
