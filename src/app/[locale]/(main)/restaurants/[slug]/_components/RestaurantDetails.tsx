import Image from "next/image";
import React from "react";
import imageOne from "@/assets/image/restaurantElmaqam.webp";
import imagetwo from "@/assets/image/betza.webp";
import RestaurantRating from "./RestaurantRating";
import { useTranslations } from "next-intl";
import BestSellerCard from "./BestSellerCard";
import GlobalReviews from "@/components/Reviews/GlobalReviews";

const bestSellers = [
  { img: imagetwo, title: "Pies" },
  { img: imagetwo, title: "Pies" },
  { img: imagetwo, title: "Pies" },
  { img: imagetwo, title: "Pies" },
];

export default function RestaurantDetails() {
  const t = useTranslations("common.restaurants");

  return (
    <>
      <div className="RestaurantDetails mx-10 mb-24">
        <div className="image w-full">
          <Image
            src={imageOne}
            alt="restaurant"
            width={300}
            height={300}
            className=" mx-auto"
          />
        </div>
        <div className="flex justify-center items-center mb-20">
          <RestaurantRating />
        </div>
        <div className="mt-6 lg:mx-10 md:mx-10 mx-5">
          <h2 className="md:text-3xl text-xl font-bold mb-4">
            <span className="text-main">El Maqam </span>
            {t("delivers to you")}
          </h2>
          <p>
            El Maqam is a restaurant located in Egypt, serving a selection of
            Pies, Pizza, Pasta that delivers across Semouha - Sidi Gaber
            Station, Semouha - Sidi Gaber Station 2 and Sidi Besher Bahary.
            Their best selling dishes are Margherita Pizza, Oriental Sausage And
            Pastrami Pie, Pastrami Pie and Oriental Sausage Pie, although they
            have a variety of dishes and meals to choose from like Pies, Pizza,
            Pasta.
          </p>
          <h2 className="md:text-3xl text-xl font-bold my-10">
            {t("Best Seller Dishes")}
          </h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bestSellers.map((item, index) => (
              <BestSellerCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
          <div className="flex justify-center mb-10">
            <button
              type="button"
              className="bg-[#ff6f61] text-white my-10 px-6 py-3 rounded-full text-lg cursor-pointer sm:w-1/4 w-full shadow-md hover:bg-[#e65b50] transition-colors"
              aria-label="View Menu"
            >
              {t("View Menu")}
            </button>
          </div>
          <GlobalReviews name="El Maqam" mainColor="main" />
        </div>
      </div>
    </>
  );
}
