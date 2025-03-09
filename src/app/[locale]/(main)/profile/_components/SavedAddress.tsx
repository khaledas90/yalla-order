import React from "react";
import NoAddressFound from "./notFoundData";
import NotFoundImage from "@/assets/image/not-found-location.webp";
import AddAddress from "@/components/Map/AddAddress";
// import { Icon } from "@iconify/react/dist/iconify.js";

export default function SavedAddress() {
  return (
    <>
      <div className="empty_address h-[70vh]">
        <NoAddressFound
          imageSrc={NotFoundImage}
          title="There are no saved addresses to display"
        />
        <div className="grid items-center justify-center">
          <AddAddress />
        </div>
      </div>
      <div className="address">
        {/* <div className="bg-white rounded-2xl ring-1 ring-gray-300 mb-4 flex flex-col gap-3 p-6">
          <div className="flex justify-start gap-3 text-gray-800 font-semibold">
            <div
              className="flex justify-center items-center gap-1 cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <Icon
                className="font-bold"
                icon="bitcoin-icons:edit-outline"
                width="20"
                height="20"
              />
              <span>Edit</span>
            </div>
            <div
              className="flex justify-center items-center gap-1 cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <Icon
                className="font-bold"
                icon="mage:trash"
                width="20"
                height="20"
              />
              <span>Delete</span>
            </div>
          </div>
          <p className="text-gray-500 font-semibold text-sm text-start m-0">
            caoris, 1st floor, 1st floor, 1st floor, 1st floor
          </p>
        </div> */}
      </div>
    </>
  );
}
