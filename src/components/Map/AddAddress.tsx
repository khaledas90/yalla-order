"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";
import MapComponent from "./MapAddress";
import { useTranslations } from "next-intl";

interface AddressProps {
  onLocationSelect?: (location: {
    lat: number;
    lng: number;
    address?: string;
  }) => void;
}
const AddAddress: React.FC<AddressProps> = ({ onLocationSelect }) => {
  const t = useTranslations("common.profile");
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
    address?: string;
  } | null>(null);

  const handleLocationSelectInternal = (
    latlng: { lat: number; lng: number },
    address?: string
  ) => {
    setSelectedLocation({ lat: latlng.lat, lng: latlng.lng, address });
  };

  const handleDeliverHere = () => {
    if (selectedLocation && onLocationSelect) {
      onLocationSelect({
        lat: selectedLocation.lat,
        lng: selectedLocation.lng,
        address: selectedLocation.address,
      });
      console.log(
        "Saving location:",
        `LAT: ${selectedLocation.lat}, LNG: ${selectedLocation.lng}`
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-main text-white px-6 py-3 rounded-full text-lg cursor-pointer sm:w-full w-full shadow-md hover:bg-[#e65b50] transition-colors focus:outline-none focus:ring-0"
          aria-label="Add new address"
        >
          {t("add-address")}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{t("Delivery Address")}</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <MapComponent onLocationSelect={handleLocationSelectInternal} />
          {selectedLocation?.address && (
            <div className="mt-4 text-gray-600 text-sm text-center">
              <p>
                <strong>{t("Selected Location")}:</strong>{" "}
                {selectedLocation.address}
              </p>
            </div>
          )}
        </div>
        <DialogFooter className="flex justify-between">
          <DialogClose asChild>
            <Button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-0"
            >
              {t("Cancel")}
            </Button>
          </DialogClose>
          <Button
            type="submit"
            onClick={handleDeliverHere}
            className="bg-main text-white px-4 py-2 rounded-md hover:bg-[#e65b50] transition-colors focus:outline-none focus:ring-0"
          >
            {t("Deliver Here")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddress;
