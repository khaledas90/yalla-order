"use client";
import { useState } from "react";
import MapComponent from "./MapComponent";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AddressSelectorProps {
    onLocationSelect: (location: { lat: number; lng: number; address?: string }) => void;
    onClose: () => void;
}

const AddressSelector = ({ onLocationSelect, onClose }: AddressSelectorProps) => {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number; address?: string } | null>(null);

    const handleLocationSelectInternal = (latlng: { lat: number; lng: number }, address?: string) => {
        setSelectedLocation({ lat: latlng.lat, lng: latlng.lng, address });
    };

    const handleDeliverHere = () => {
        if (selectedLocation) {
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
        <div className="p-5 w-full mx-auto font-sans bg-white rounded-lg shadow-md relative">
            <div className="flex justify-between items-center mb-3">
                <div></div>
                <h2 className="text-gray-800 mb-2 text-lg font-bold text-center">Delivery Address</h2>
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-300 transition-colors"
                    aria-label="Close modal"
                >
                    <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                </button>
            </div>
            <MapComponent onLocationSelect={handleLocationSelectInternal} />
            {/* Display selected address only */}
            {selectedLocation?.address && (
                <div className="mt-4 text-gray-600 text-sm text-center">
                    <p>
                        <strong>Selected Location:</strong> {selectedLocation.address}
                    </p>
                </div>
            )}
            <button
                type="button"
                onClick={handleDeliverHere}
                className="bg-red-500 text-white border-none py-3 px-6 rounded-3xl text-base cursor-pointer w-full mt-4 shadow-md transition-colors duration-300 disabled:opacity-50"
                disabled={!selectedLocation}
                aria-label="Deliver to selected address"
            >
                Deliver Here
            </button>
        </div>
    );
};

export default AddressSelector;
