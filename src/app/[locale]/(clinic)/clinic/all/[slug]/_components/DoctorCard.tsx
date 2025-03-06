import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";

interface Doctor {
  img: string | StaticImageData;
  name: string;
  specialty: string;
  schedule: string;
  fees: number;
  rating: number;
  isFavorite: boolean;
  sale?: number;
}

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="border rounded-3xl p-4 shadow-md relative bg-white">
      {/* Sale Badge */}
      {doctor.sale && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-3xl">
          Sale {doctor.sale}%
        </span>
      )}

      {/* Favorite Icon */}
      <button type="button" className="text-xl absolute top-5 right-5 text-gray-500 hover:text-red-500">
        {doctor.isFavorite ? (
          <Icon icon="mdi:heart" className="text-red-500" />
        ) : (
          <Icon icon="mdi:heart-outline" />
        )}
      </button>

      {/* Doctor Image */}
      <div className="flex justify-center">
        <Image
          src={doctor.img}
          alt={doctor.name}
          className="rounded-full border p-1 w-20 h-20 object-cover"
        />
      </div>

      {/* Doctor Details */}
      <div className="text-center mt-3">
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm">
          <Icon icon="mdi:star" /> <span>{doctor.rating}</span>
        </div>

        {/* Name & Specialty */}
        <h3 className="font-semibold">{doctor.name}</h3>
        <p className="text-gray-500 text-sm">{doctor.specialty}</p>

        {/* Schedule */}
        <p className="text-gray-600 text-xs">{doctor.schedule}</p>

        {/* Fees */}
        <p className="font-bold mt-2">Fees {doctor.fees} L.E</p>

        {/* Calendar Icon */}
        <button title="Calendar" type="button" className="mt-2 text-gray-500 hover:text-primary">
          <Icon icon="mdi:calendar" />
        </button>
      </div>
    </div>
  );
}
