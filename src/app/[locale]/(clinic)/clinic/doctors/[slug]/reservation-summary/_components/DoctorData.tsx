import Image from "next/image";
import doctorImg from "@/assets/image/suit-doctor.webp";
import ReservationTable from "./ReservationTable";

const DoctorDetails=()=> {
  return (
    <div className="mx-10 mb-24">
      <div className="image w-full">
        <Image
          src={doctorImg}
          alt="doctor"
          className="mx-auto w-50 h-50 object-cover rounded-full border-3 border-gray-200"
        />
      </div>

      <div className="flex justify-center px-0 py-5 md:px-5 md:py-5">
        <ReservationTable
          clinicName="Eye Clinic"
          doctorName="Dr. Ramy Shokry"
          specialty="General ophthalmologist"
          waitingTime="10 min"
          detectionTime="20 min"
          clinicAddress="Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, Fourth 4, Apartment 2"
          patientName="Nada Saleh"
          phoneNumber="01099******"
          gender="Female"
          age="25 Year"
          reservationDate="Sun, 17/11/2023"
          reservationTime="11:10 Am"
          paymentMethod="Cash"
          fees="200 L.E"
        />
      </div>

    </div>
  );
}

export default DoctorDetails
