import React from 'react'
import CardRestaurants from './CardRestaurants'
import { useTranslations } from 'next-intl';


const Index = () => {
    const t = useTranslations("common.restaurants");

    return (
        <>
            <div className='p-14'>
                <h2 className='text-2xl font-bold mb-4'><span className='text-main'>{t("All")}</span> {t("Restaurants")}</h2>
                <CardRestaurants />
            </div>
        </>
    )
}

export default Index