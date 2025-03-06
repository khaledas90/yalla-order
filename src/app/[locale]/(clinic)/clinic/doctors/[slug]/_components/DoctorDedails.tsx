import Image from "next/image";
import DoctorList from "./DoctorList";
import doctorImg from "@/assets/image/suit-doctor.webp";
import MapPin from "@/assets/image/map-pin.png"
import GlobalReviews from "@/components/Reviews/GlobalReviews";

const doctorData = {
  name: "Dr. Hassan Ramdan",
  specialty: "General Ophthalmologist",
  schedule: "Sat, Sun, Mon 10:30 AM - 3:30 PM",
  fees: 200,
  rating: 4,
  isFavorite: true,
  sale: 50,
};

export default function DoctorDedails() {
  return (<>
    <div className="RestaurantDetails mx-10 mb-24">
      {/* Clinic Image */}
      <div className="image w-full">
        <Image
          src={doctorImg}
          alt="restaurant"
          className="mx-auto w-50 h-50 object-cover rounded-full border-3 border-gray-200"
        />
      </div>
      <div className="flex justify-center">
        <DoctorList doctor={doctorData} />
      </div>
      {/* Favorite Button */}
      <div className="mt-4 md:w-3/4 w-full mx-auto">
        <div>
          <h2 className="text-black font-bold text-2xl mb-2 text-start">Clinic address</h2>
          <div className="flex justify-start items-center mb-5 gap-2">
            <Image
              src={MapPin}
              alt="pin"
              className="w-10 h-10 rounded-full p-1 bg-white shadow-lg"
            />
            <p className="address text-lg text-gray-700 text-start">
              Alexandria, Smouha, Smucha Circle, Zohour Bergout Building.
              fourth 4, Apartment 2</p>
          </div>
        </div>
        <div>
          <h2 className="text-black font-bold text-2xl mb-2 text-start">Overview Specialty Dr</h2>
          <p className="text-lg text-gray-700 text-start">
            Dr. Rami Shakry, Consultant and Lecturer of Ophthalmology ar Kase Al-Aini Faculty of Medicine . Cairo University. He
            specializes in vision rehabilitation, vitreoretinal surgery, LASIK, refractive surgery, cataracts, and pediatric
            ophthalmology. He oblaired a doctorate degree in ophthalmology from Cairo Un versity, a master{"'"}s degree in
            ophthalmology from Cairo University, and a fellowship from the Royal College of Surgeons in ophthalmology in the
            United Kingdom You can book with De Ram Shukri through the Foodc website</p>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button type="button" className="bg-blue-500 text-white px-24 py-2 rounded-3xl hover:bg-blue-600">
            {/* {t("")} */}
            Reservation now
          </button>
        </div>
      </div>
      <GlobalReviews name="" mainColor="primary" />
    </div>
  </>
  );
}
