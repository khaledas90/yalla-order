import React from "react";
import Image from "next/image";

import heroImg from "@/assets/image/hero_restaurant.png";
// import ship from "../../assets/Group 1171276204.png";
// import percentage from "../../assets/Component 8.png";
// import market from "../../assets/Component 9.png";
// import restaurantImg from "../../assets/Component 10.png";
// import locationOne from "../../assets/Location-One.svg";
// import location from "../../assets/Location.svg";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";

const Hero: React.FC = () => {
  const t = useTranslations("restaurant.hero");

  return (
    <div className={`hero bg-gray-700 text-white`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="mt-32">
              <h1
                className={`text-4xl lg:text-6xl ${cabinSketch.className}  font-light text-center `}
              >
                {t("A unique")}
                <br />
                {t("experience for")}
                <br />
                {t("food lovers")}
              </h1>
              <div className="flex justify-center lg:justify-start mt-8">
                {/* <form className="relative flex items-center bg-white rounded-full px-4 py-2 shadow-md max-w-md w-full">
                  <input
                    type="text"
                    placeholder={t("Find your Location..")}
                    className="w-3/4 border-0 focus:outline-none font-monospace"
                  />
                  <Image
                    src={locationOne}
                    alt="Location Icon"
                    className="absolute left-3 top-3"
                  />
                  <button
                    type="submit"
                    className="btn bg-blue-500 text-white rounded-full px-6 ml-auto flex items-center"
                  >
                    {t("Search")}
                    <Image src={location} alt="Search Icon" className="ml-2" />
                  </button>
                </form> */}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src={heroImg}
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      <div className="features bg-white shadow-lg rounded-2xl p-5 mt-8 mx-4">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <Image
              src={ship}
              alt="Faster Delivery"
              className="w-16 h-16 mr-4"
            />
            <p>{t("Faster Delivery")}</p>
          </div>
          <div className="flex items-center">
            <Image
              src={percentage}
              alt="Daily Discount"
              className="w-16 h-16 mr-4"
            />
            <p>{t("Daily Discount")}</p>
          </div>
          <div className="flex items-center">
            <Image
              src={market}
              alt="100+ Restaurants"
              className="w-16 h-16 mr-4"
            />
            <p>{t("100+ Restaurants")}</p>
          </div>
          <div className="flex items-center">
            <Image
              src={restaurantImg}
              alt="100+ Cuisines"
              className="w-16 h-16 mr-4"
            />
            <p>{t("100+ Cuisines")}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
