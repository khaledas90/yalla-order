import * as React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import SearchInput from "@/components/Inputs/SearchInput";
import RestaurantDetails from "./_components/RestaurantDetails";

const Page = () => {
  const t = useTranslations("common.restaurants");

  return (
    <>
      <div
        className={`hero h-[70vh] lg:mb-[100rem] md:mb-[100rem] sm:mb-[150rem] mb-[200rem]`}
      >
        <div className="flex flex-col justify-center  items-center h-full ">
          <h2
            className={`text-center lg:text-6xl md:text-6xl sm:text-4xl text-3xl  text-white ${cabinSketch.className} font-bold mb-[20px] mt-24 `}
          >
            {t("Restaurants")}
          </h2>
          <h5 className="text-center text-2xl mb-4 text-white">
            {t("Select your area to see the restaurant menu")}
          </h5>
          <div className="lg:w-1/2 px-3 w-full flex justify-center">
            <SearchInput query="" isIconSearch isIconLocation />
          </div>
        </div>
        <div className="mt-[-50px] mb-[250px]">
          <RestaurantDetails />
        </div>
      </div>
    </>
  );
};

export default Page;
