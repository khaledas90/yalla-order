import React from 'react'
import CardDoctors from './CardDoctors'
import { useTranslations } from 'next-intl';


const Index = () => {
    const t = useTranslations("common.clinics");

    return (
        <>
            <div className='p-14'>
                <h2 className='text-2xl font-bold mb-4'><span className='text-primary'>{t("All")}</span> {t("Doctors")}</h2>
                <CardDoctors />
            </div>
        </>
    )
}

export default Index