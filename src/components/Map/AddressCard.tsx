"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import AddressSelector from "./AddressSelector";
import NoAddressFound from "../../app/[locale]/(main)/profile/_components/notFoundData";
import NotFoundImage from "@/assets/image/not-found-location.webp";

const AddressCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedAddresses = localStorage.getItem("userAddresses");
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses));
    }
  }, []);

  useEffect(() => {
    if (addresses.length > 0) {
      localStorage.setItem("userAddresses", JSON.stringify(addresses));
    }
  }, [addresses]);

  const handleAddClick = () => {
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
  };

  const handleAddressSelected = (location: {
    lat: number;
    lng: number;
    address?: string;
  }) => {
    const newAddress = location.address || `${location.lat}, ${location.lng}`;
    if (editingIndex !== null) {
      setAddresses((prev) => {
        const newAddresses = [...prev];
        newAddresses[editingIndex] = newAddress;
        return newAddresses;
      });
    } else {
      setAddresses((prev) => [...prev, newAddress]);
    }
    setIsModalOpen(false);
    setEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    setAddresses((prev) => {
      const newAddresses = prev.filter((_, i) => i !== index);
      if (newAddresses.length === 0) {
        localStorage.removeItem("userAddresses");
      }
      return newAddresses;
    });
  };

  if (addresses.length === 0) {
    return (
      <>
        <NoAddressFound
          imageSrc={NotFoundImage}
          title="There are no saved addresses to display"
          buttonText="Add Address"
          onButtonClick={handleAddClick}
        />
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99]"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <div className="p-5 md:w-3/4 lg:w-1/2 w-full mx-auto font-sans rounded-lg relative">
              <AddressSelector
                onLocationSelect={handleAddressSelected}
                onClose={handleCloseModal}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="md:w-3/4 w-full mx-auto p-5 font-sans">
      {addresses.map((address, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl ring-1 ring-gray-300 mb-4 flex flex-col gap-3 p-6"
        >
          <div className="flex justify-start gap-3 text-gray-800 font-semibold">
            <div
              className="flex justify-center items-center gap-1 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && handleEdit(index)}
              onClick={() => handleEdit(index)}
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
              onKeyPress={(e) => e.key === "Enter" && handleDelete(index)}
              onClick={() => handleDelete(index)}
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
            {address}
          </p>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddClick}
        className="bg-main text-white px-6 py-3 rounded-full text-lg cursor-pointer sm:w-full w-full shadow-md hover:bg-[#e65b50] transition-colors"
        aria-label="Add new address"
      >
        Add Address
      </button>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99]"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <div className="p-5 md:w-3/4 lg:w-1/2 w-full mx-auto font-sans rounded-lg relative">
            <AddressSelector
              onLocationSelect={handleAddressSelected}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
