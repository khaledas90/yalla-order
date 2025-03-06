import Image from "next/image";
import React from "react";
import imageOne from "@/assets/image/restaurantElmaqam.png";
import { useTranslations } from "next-intl";
import RestaurantRating from "../../_components/RestaurantRating";
import openImag from "@/assets/image/openResturant.webp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuList from "./MenuList";
import Info from "./Info";

export default function RestaurantMenu() {
  const t = useTranslations("common.restaurants");
  return (
    <>
      <div className="RestaurantMenu mx-10 mb-10">
        <div className="image w-full">
          <Image
            src={imageOne}
            alt="restaurant"
            width={300}
            height={300}
            className=" mx-auto"
          />
        </div>
        <div className="flex justify-center items-center  ">
          <RestaurantRating initialRating={3} editable={false} />
        </div>
        <div className=" text-center my-1.5 lg:mx-10 md:mx-10 mx-5 mb-6">
          <h2 className="md:text-3xl text-main text-xl font-bold mb-1.5">
            El Maqam
          </h2>
          <p className="text-lg">in Sidi Gaber, Alex</p>
          <div className="flex justify-center">
            <Image
              src={openImag}
              width={100}
              height={100}
              quality={100}
              alt="restaurant  open"
            />
          </div>
        </div>
        <div className="menuTap mt-10">
          <Tabs defaultValue="menu" className="w-full">
            <TabsList className="grid w-full h-[70px] bg-white grid-cols-2 border-b-2 border-t-2 border-gray-200">
              <TabsTrigger
                value="menu"
                className="relative flex items-center justify-center gap-2 text-black border-b-2 border-gray-200 data-[state=active]:text-main data-[state=active]:border-b-2 data-[state=active]:border-main px-4  data-[state=active]:shadow-none text-3xl font-semibold transition-all duration-300 ease-in-out  py-[14px]"
              >
                <Icon
                  icon="medical-icon:restaurant"
                  className="mx-2"
                  width="30"
                  height="30"
                />
                {t("Menu")}
              </TabsTrigger>
              <TabsTrigger
                value="info"
                className="relative flex items-center justify-center gap-2  text-black border-b-2 border-gray-200 data-[state=active]:text-main data-[state=active]:border-b-2 data-[state=active]:border-main px-4  data-[state=active]:shadow-none text-3xl font-semibold transition-all duration-300 ease-in-out py-[14px]"
              >
                <Icon
                  icon="ic:round-info"
                  className="mx-2"
                  width="30"
                  height="30"
                />
                {t("Info")}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="menu">
              <MenuList />
            </TabsContent>
            <TabsContent value="info">
              <Info />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
