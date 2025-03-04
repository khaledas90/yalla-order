"use client";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import AddressSelector from "./Map/AddressSelector";

interface AddressCardProps {
  address: string;
  onEdit: () => void;
  onDelete: () => void;
  onAdd: (newAddress: string) => void;
}

const AddressCard = ({ address, onEdit, onDelete, onAdd }: AddressCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressSelected = (selectedAddress: string) => {
    onAdd(selectedAddress); // Pass the selected address back to the parent
    setIsModalOpen(false); // Close the modal after selection
  };

  return (
    <div className="md:w-3/4 w-full mx-auto p-5 font-sans">
      <div className="bg-white rounded-2xl ring-1 ring-gray-300 mb-4 flex flex-col gap-3 p-6">
        <div className="flex justify-start gap-3 text-gray-800 font-semibold">
          <div className="flex justify-center items-center gap-1 cursor-pointer" role="button" tabIndex={0} onKeyPress={(e) => e.key === "Enter" && onEdit()}>
            <Icon className="font-bold" onClick={onEdit} icon="bitcoin-icons:edit-outline" width="20" height="20" />
            <span>Edit</span>
          </div>
          <div className="flex justify-center items-center gap-1 cursor-pointer" role="button" tabIndex={0} onKeyPress={(e) => e.key === "Enter" && onDelete()}>
            <Icon className="font-bold" onClick={onDelete} icon="mage:trash" width="20" height="20" />
            <span>Delete</span>
          </div>
        </div>
        <p className="text-gray-500 font-semibold text-sm text-start m-0">
          {address}
        </p>
      </div>
      <button
        type="button"
        onClick={handleAddClick}
        className="bg-[#ff6f61] text-white px-6 py-3 rounded-full text-lg cursor-pointer w-1/2 shadow-md hover:bg-[#e65b50] transition-colors"
        disabled={!address}
        aria-label="Add new address"
      >
        Add Address
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99]" role="dialog" aria-labelledby="modal-title">
          <div className="p-5 md:w-3/4 lg:w-1/2 w-full mx-auto font-sans rounded-lg relative">
            <AddressSelector onLocationSelect={({ lat, lng, address }) => handleAddressSelected(address || `${lat}, ${lng}`)} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressCard;