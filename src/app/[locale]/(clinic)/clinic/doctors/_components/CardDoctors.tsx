import React from 'react';
import ImageLogo from '@/assets/image/suit-doctor.webp'
import { useTranslations } from 'next-intl';
import DoctorCard from '../../../../../../components/Cards/DoctorCard';
import { StaticImageData } from 'next/image';

const CardClinics = () => {
    const t = useTranslations("common.clinics");

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
            img: ImageLogo,
            name: "Dr. Ramy Shokry",
            specialty: "General Ophthalmologist",
            schedule: "Sat, Sun, Mon 10:30 AM - 3:30 PM",
            fees: 200,
            rating: 4.9,
            isFavorite: false,
        },
        {
            img: ImageLogo,
            name: "Dr. Hassan Ramdan",
            specialty: "General Ophthalmologist",
            schedule: "Sat, Sun, Mon 10:30 AM - 3:30 PM",
            fees: 200,
            rating: 4.9,
            isFavorite: true,
            sale: 50,
        },
        {
            img: ImageLogo,
            name: "Dr. Sarah Youssef",
            specialty: "Dermatologist",
            schedule: "Tue, Thu 11:00 AM - 4:00 PM",
            fees: 300,
            rating: 4.7,
            isFavorite: true,
        },
        {
            img: ImageLogo,
            name: "Dr. Ahmed Nasser",
            specialty: "Cardiologist",
            schedule: "Mon, Wed, Fri 9:00 AM - 1:00 PM",
            fees: 500,
            rating: 4.8,
            isFavorite: false,
            sale: 20,
        },
        {
            img: ImageLogo,
            name: "Dr. Mona Khaled",
            specialty: "Pediatrician",
            schedule: "Sun, Tue, Thu 2:00 PM - 6:00 PM",
            fees: 250,
            rating: 4.6,
            isFavorite: true,
        },
        {
            img: ImageLogo,
            name: "Dr. Youssef Ali",
            specialty: "Neurologist",
            schedule: "Mon, Wed, Fri 10:00 AM - 3:00 PM",
            fees: 400,
            rating: 4.9,
            isFavorite: false,
        },
    ];

    return (
        <>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {doctors.map((doctor, index) => (
                    <DoctorCard key={index} doctor={doctor} />
                ))}
            </div>
            <div className="flex items-center justify-center w-full p-4 my-4 bg-white rounded-lg transition-shadow duration-300">
                <button type='button' className="text-primary text-xl font-medium">{t("See More")}</button>
            </div>
        </>
    );
};

export default CardClinics;