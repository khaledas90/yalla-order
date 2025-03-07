import React from "react";
import { Icon } from "@iconify/react";

interface Doctor {
    name: string;
    specialty?: string;
    schedule?: string;
    fees?: number;
    rating: number;
    isFavorite?: boolean;
    sale?: number;
}

interface DoctorListProps {
    doctor: Doctor;
}

const DoctorList: React.FC<DoctorListProps> = ({ doctor }) => {

    return (
        <>
            <div className="doctor-card mx-auto mb-12 p-6">
                {/* Doctor Info */}
                <div className="text-center flex flex-col gap-2">
                    <h2 className="text-3xl font-semibold">{doctor.name}</h2>
                    <p className="text-gray-500 text-xl">{doctor.specialty}</p>
                    <p className="text-gray-600 text-xl">{doctor.schedule}</p>
                    <p className="text-gray-700 text-xl font-medium">Detection per: 20min</p>
                    <p className="text-gray-800 text-xl font-bold">fees: {doctor.fees} L.E <span className="font-bold">(clinic)</span></p>
                </div>

                {/* Rating */}
                <div className="flex justify-center mt-2 text-2xl">
                    {[...Array(5)].map((_, i) => (
                        i < Math.round(doctor.rating) ? (
                            <Icon key={i} icon="mdi:star" className="text-yellow-400" />
                        ) : (
                            <Icon key={i} icon="mdi:star-outline" className="text-gray-400" />
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default DoctorList;
