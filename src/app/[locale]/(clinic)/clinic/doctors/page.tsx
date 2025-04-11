import * as React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import SearchInput from "@/components/Inputs/SearchInput";
import Doctors from "./_components";

const Page = () => {
  const t = useTranslations("clinic.header");

  return (
    <>
      <div className="h-full">
        <div className={`hero h-[70vh]`}>
          <div className="flex flex-col justify-center items-center h-full ">
            <h2
              className={`text-center text-3xl sm:text-4xl md:text-6xl text-white ${cabinSketch.className} font-bold mb-[60px]`}
            >
              {t("Doctors")}
            </h2>
            <div className="md:w-1/2 px-3 w-full">
              <SearchInput query="" isIconSearch isIconLocation />
            </div>
          </div>
        </div>
        <Doctors />
      </div>
    </>
  );
};

export default Page;
