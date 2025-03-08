import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import MenuItem from "@/assets/image/menuItem.png";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function MenuList() {
  const t = useTranslations("common.restaurants");
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-auto justify-center shadow-lg rounded-[20px] mt-6">
        <div className="md:col-span-1   border rounded-[20px]">
          <div className="text-center bg-black py-2 px-4 rounded-t-[20px] text-white">
            <h1 className="font-bold text-xl px-4 py-4">{t("Categories")}</h1>
          </div>
          <ul className="my-4">
            <li className="py-4 px-6 text-xl font-semibold justify-center w-full text-black hover:bg-main rounded-md border-white hover:text-white cursor-pointer flex items-center gap-2">
              Best Selling
            </li>
          </ul>
        </div>
        <div className="md:col-span-3 w-full overflow-x-auto ">
          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
            <div className="my-3 mx-2">
              <h5 className="text-xl font-semibold mx-2">Best Selling</h5>
              <div className="cards_Items my-5 mx-3">
                <div className="card ">
                  <div className="flex md:flex-row flex-col items-center gap-4 rounded-xl border shadow-md relative">
                    <div className="relative sm:w-60 sm:h-60 w-full flex-shrink-0">
                      <Image
                        src={MenuItem}
                        alt="Sausage Hawawshi"
                        className="w-full h-full object-cover rounded-l-lg border"
                      />
                      <span className="absolute top-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-tl-lg">
                        Sale 50%
                      </span>
                    </div>
                    <div className="flex-1 h-auto p-5 grid gap-4">
                      <h2 className="text-xl md:text-2xl font-bold truncate">Sausage Hawawshi</h2>
                      <p className="text-sm md:text-base text-gray-600 line-clamp-4">
                        Dough stuffed with Oriental sausage, Mozzarella cheese, Roumi cheese, and vegetables.
                        Dough stuffed with Oriental sausage, Mozzarella cheese, Roumi cheese, and vegetables.
                        Dough stuffed with Oriental sausage, Mozzarella cheese, Roumi cheese, and vegetables.
                      </p>
                      <p className="text-lg md:text-xl font-bold mt-2">EGP 95.00</p>
                    </div>
                    <button type="button" title="heart" className="absolute top-3 ltr:right-3 rtl:left-3 sm:text-red-500 text-white">
                      <Icon icon="mynaui:heart" width="24" height="24" />
                    </button>
                    <button type="button" title="cart" className="absolute bottom-3 ltr:right-3 rtl:left-3 bg-white shadow-md rounded-full p-2">
                      <Icon icon="proicons:cart" width="24" height="24" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
