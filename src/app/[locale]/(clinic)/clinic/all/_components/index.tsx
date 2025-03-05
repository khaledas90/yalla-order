import React from 'react'
import CardClinics from './CardClinics'
import { useTranslations } from 'next-intl';


const Index = () => {
    const t = useTranslations("common.clinics");

    return (
        <>
            <div className='p-14'>
                <h2 className='text-2xl font-bold mb-4'><span className='text-primary'>{t("All")}</span> {t("Clinics")}</h2>
                <CardClinics />
            </div>
        </>
    )
}

export default Index