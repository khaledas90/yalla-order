import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import imageOne from "@/assets/image/clinic-card.webp";
import { useTranslations } from "next-intl";
import DoctorCard from "../../../../../../../components/Cards/DoctorCard";
import doctorImg from "@/assets/image/suit-doctor.webp";

interface Doctor {
  img: StaticImageData;
  name: string;
  specialty: string;
  schedule: string;
  fees: number;
  rating: number;
  isFavorite: boolean;
  sale?: number;
}

const doctors: Doctor[] = [
  {
    img: doctorImg,
    name: "Dr. Ramy Shokry",
    specialty: "General Ophthalmologist",
    schedule: "Sat, Sun, Mon 10:30 AM - 3:30 PM",
    fees: 200,
    rating: 4.9,
    isFavorite: false,
  },
  {
    img: doctorImg,
    name: "Dr. Hassan Ramdan",
    specialty: "General Ophthalmologist",
    schedule: "Sat, Sun, Mon 10:30 AM - 3:30 PM",
    fees: 200,
    rating: 4.9,
    isFavorite: true,
    sale: 50,
  },
  {
    img: doctorImg,
    name: "Dr. Sarah Youssef",
    specialty: "Dermatologist",
    schedule: "Tue, Thu 11:00 AM - 4:00 PM",
    fees: 300,
    rating: 4.7,
    isFavorite: true,
  },
  {
    img: doctorImg,
    name: "Dr. Ahmed Nasser",
    specialty: "Cardiologist",
    schedule: "Mon, Wed, Fri 9:00 AM - 1:00 PM",
    fees: 500,
    rating: 4.8,
    isFavorite: false,
    sale: 20,
  },
  {
    img: doctorImg,
    name: "Dr. Mona Khaled",
    specialty: "Pediatrician",
    schedule: "Sun, Tue, Thu 2:00 PM - 6:00 PM",
    fees: 250,
    rating: 4.6,
    isFavorite: true,
  },
  {
    img: doctorImg,
    name: "Dr. Youssef Ali",
    specialty: "Neurologist",
    schedule: "Mon, Wed, Fri 10:00 AM - 3:00 PM",
    fees: 400,
    rating: 4.9,
    isFavorite: false,
  },
];



export default function RestaurantDetails() {
  const t = useTranslations("common.clinics");

  return (
    <div className="RestaurantDetails mx-10 mb-24">
      {/* Clinic Image */}
      <div className="image w-full">
        <Image
          src={imageOne}
          alt="restaurant"
          className="mx-auto w-50 h-50 object-cover rounded-2xl border-3 border-gray-200"
        />
      </div>

      <div className="flex justify-center items-center md:text-3xl text-xl font-bold">
        {t("eye clinics")}
      </div>

      {/* Summary */}
      <div className="mt-6 lg:mx-10 md:mx-10 mx-5">
        <h2 className="md:text-3xl text-xl font-bold mb-4">
          {t("Summary of")} <span className="text-primary">{t("eye clinics")}</span>
        </h2>
        <p>
          {t("Our eye clinic")}
        </p>

        {/* Best Doctors */}
        <h2 className="md:text-3xl text-xl font-bold my-10">
          {t("The best doctors in the clinic")}
        </h2>

        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
