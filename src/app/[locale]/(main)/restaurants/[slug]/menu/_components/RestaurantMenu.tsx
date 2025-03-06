import Image from "next/image";
import React from "react";
import imageOne from "@/assets/image/restaurantElmaqam.png";
// import { useTranslations } from "next-intl";
import RestaurantRating from "../../_components/RestaurantRating";
import openImag from "@/assets/image/openResturant.webp";
export default function RestaurantMenu() {
  //   const t = useTranslations("common.restaurants");

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
        <div className="menuTap"></div>
      </div>
    </>
  );
}
