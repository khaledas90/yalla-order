import * as React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import SearchInput from "@/components/Inputs/SearchInput";
import ClinicDetails from "./_components/ClinicDedails";

const Page = () => {
  const t = useTranslations("common.clinics");

  return (
    <div className="h-full">
      <div className={`hero h-[70vh]`}>
        <div className="flex flex-col justify-center  items-center h-full ">
          <h2
            className={`text-center lg:text-6xl md:text-6xl sm:text-4xl text-3xl  text-white ${cabinSketch.className} font-bold mb-[60px]   `}
          >
            {t("Clinics")}
          </h2>
          <h5 className="text-center text-2xl mb-4 text-white">
            {t("Select your area to see the clinic near you")}
          </h5>
          <div className="lg:w-1/2 px-3 w-full flex justify-center">
            <SearchInput query="" isIconSearch isIconLocation />
          </div>
        </div>
      </div>
      <div className="mt-[-50px] mb-[250px]">
        <ClinicDetails />
      </div>
    </div>
  );
};

export default Page;
