import { useTranslations } from "next-intl";
import React from "react";

export default function Info() {
  const t = useTranslations("common.restaurants");
  return (
    <>
      <div className="Info">
        <div className="md:col-span-1 mx-3 border rounded-[20px]">
          <div className=" bg-black py-2 px-4 rounded-t-[20px] text-white">
            <h1 className="font-bold text-3xl px-4 py-4">El Maqam</h1>
          </div>
          <ul className="my-4">
            <li className="py-4 px-6 lg:text-3xl text-2xl font-semibold justify-between w-full text-black     flex items-center gap-2">
              <span className="text-gray-600">{t("Minimum Order Amount")}</span>
              <span className="">Egp 20</span>
            </li>
            <li className="py-4 px-6 lg:text-3xl text-2xl font-semibold justify-between w-full text-black     flex items-center gap-2">
              <span className="text-gray-600">{t("Working Hours")}</span>
              <span className="">1:00PM - 2:30AM</span>
            </li>
            <li className="py-4 px-6 lg:text-3xl text-2xl font-semibold justify-between w-full text-black     flex items-center gap-2">
              <span className="text-gray-600">{t("Location")}</span>
              <span className="">El Maqam Cairo</span>
            </li>
            <li className="py-4 px-6 lg:text-3xl text-2xl font-semibold justify-between w-full text-black     flex items-center gap-2">
              <span className="text-gray-600">{t("Delivery Time")}</span>
              <span className="">38 mins</span>
            </li>
            <li className="py-4 px-6 lg:text-3xl text-2xl font-semibold justify-between w-full text-black     flex items-center gap-2">
              <span className="text-gray-600">{t("Delivery Fee")}</span>
              <span className="">EGP 4.99</span>
            </li>
            <li className="py-4 px-6 lg:text-3xl text-2xl font-semibold justify-between w-full text-black     flex items-center gap-2">
              <span className="text-gray-600">{t("Payment Method")}</span>
              <span className="">Cash</span>
            </li>
            <li className="py-4 px-6 lg:text-3xl text-2xl font-semibold justify-between w-full text-black     flex items-center gap-2">
              <span className="text-gray-600">{t("Rating")}</span>
              <span className="">3.5 / 5 </span>
            </li>
            <li className="py-4 px-6 lg:text-3xl text-2xl font-semibold justify-between w-full text-black     flex items-center gap-2">
              <span className="text-gray-600">{t("Cuisines")}</span>
              <span className="">Pies, Pizza, Pasta </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
