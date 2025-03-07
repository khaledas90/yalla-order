import Image from "next/image";
import DoctorList from "./DoctorList";
import BookingModal from "@/components/Models/BookingModal";
import doctorImg from "@/assets/image/suit-doctor.webp";
import MapPin from "@/assets/image/map-pin.png";
import GlobalReviews from "@/components/Reviews/GlobalReviews";
import { getTranslations } from "next-intl/server";

interface Doctor {
  name: string;
  specialty: string;
  schedule: string;
  fees: number;
  rating: number;
  isFavorite: boolean;
  sale: number;
}

const doctorData: Doctor = {
  name: "Dr. Hassan Ramdan",
  specialty: "General Ophthalmologist",
  schedule: "Sat, Sun, Mon 10:30 AM - 3:30 PM",
  fees: 200,
  rating: 4,
  isFavorite: true,
  sale: 50,
};

export default async function DoctorDetails() {
  const t = await getTranslations("common.clinics");

  return (
    <div className="mx-10 mb-24">
      <div className="image w-full">
        <Image
          src={doctorImg}
          alt="doctor"
          className="mx-auto w-50 h-50 object-cover rounded-full border-3 border-gray-200"
        />
      </div>

      <div className="flex justify-center">
        <DoctorList doctor={doctorData} />
      </div>

      <div className="mt-4 md:w-3/4 w-full mx-auto">
        <h2 className="text-black font-bold text-2xl mb-2">{t("Clinic address")}</h2>
        <div className="flex items-center gap-2 mb-5">
          <Image
            src={MapPin}
            alt="pin"
            className="w-10 h-10 rounded-full p-1 bg-white shadow-lg"
          />
          <p className="text-lg text-gray-700">{t("address1")}</p>
        </div>

        <h2 className="text-black font-bold text-2xl mb-2">{t("Overview Specialty Dr")}</h2>
        <p className="text-lg text-gray-700">{t("desc doctor")}</p>

        <div className="flex justify-center mt-8">
          <BookingModal />
        </div>
      </div>

      <GlobalReviews name="" mainColor="primary" />
    </div>
  );
}
