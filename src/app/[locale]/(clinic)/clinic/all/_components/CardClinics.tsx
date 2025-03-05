import React from 'react';
import Image from 'next/image';
import ImageLogo from '@/assets/image/clinic-card.webp'
import { useTranslations } from 'next-intl';

const CardClinics = () => {
    const t = useTranslations("common.clinics");

    const clinics = [
        { name: 'El Maqam', logo: ImageLogo },
        { name: 'Bakiza', logo: ImageLogo },
        { name: 'Stone Yard', logo: ImageLogo },
        { name: 'Al Baki', logo: ImageLogo },
        { name: 'El Aseel', logo: ImageLogo },
        { name: 'Aish & Malh', logo: ImageLogo },
        { name: 'Al Tasaa', logo: ImageLogo },
        { name: 'Bab Sharq', logo: ImageLogo },
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {clinics.map((clinic, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md border border-gray-200 sm:w-[250px] w-full hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                        <div className='absolute inset-0 bg-white -rotate-[4deg] translate-y-[65%] translate-x-1.5 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.5),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'></div>
                        <div className="w-full h-[200px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
                            <Image
                                src={clinic.logo}
                                alt={`${clinic.name} logo`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full p-2 bg-white rounded-b-lg z-20">
                            <h3 className="text-xl text-gray-800 text-center font-bold pb-4">{clinic.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-full p-4 my-4 bg-white rounded-lg transition-shadow duration-300">
                <button type='button' className="text-primary text-xl font-medium">{t("See More")}</button>
            </div>
        </>
    );
};

export default CardClinics;