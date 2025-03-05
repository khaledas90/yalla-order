import React from 'react';
import Image from 'next/image';
import ImageLogo from '@/assets/image/logo-restaurants.png'
import { useTranslations } from 'next-intl';

const CardRestaurants = () => {
    const t = useTranslations("common.restaurants");

    const restaurants = [
        { name: 'El Maqam', category: 'Pizza & Pastries', logo: ImageLogo },
        { name: 'Bakiza', category: 'Pizza & Pastries', logo: ImageLogo },
        { name: 'Stone Yard', category: 'Pizza & Pastries', logo: ImageLogo },
        { name: 'Al Baki', category: 'Pizza & Pastries', logo: ImageLogo },
        { name: 'El Aseel', category: 'Pizza & Pastries', logo: ImageLogo },
        { name: 'Aish & Malh', category: 'Pizza & Pastries', logo: ImageLogo },
        { name: 'Al Tasaa', category: 'Pizza & Pastries', logo: ImageLogo },
        { name: 'Bab Sharq', category: 'Pizza & Pastries', logo: ImageLogo },
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {restaurants.map((restaurant, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md border border-gray-200 sm:w-[250px] w-full hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                        <div className='absolute inset-0 bg-white -rotate-[7deg] translate-y-[65%] translate-x-3 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.5),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'></div>
                        <div className="w-full h-[200px] bg-black rounded-t-lg flex items-center justify-center">
                            <Image
                                src={restaurant.logo}
                                alt={`${restaurant.name} logo`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full p-2 bg-white rounded-b-lg z-20">
                            <h3 className="text-md text-gray-800 text-start font-bold">{restaurant.name}</h3>
                            <p className="text-sm text-gray-500 text-start font-semibold">{restaurant.category}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-full p-4 my-4 bg-white rounded-lg transition-shadow duration-300">
                <button type='button' className="text-main text-xl font-medium">{t("See More")}</button>
            </div>
        </>
    );
};

export default CardRestaurants;