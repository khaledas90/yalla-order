import React from 'react'
import Image from 'next/image'
import burgerFrizze from "@/assets/image/burger-frizze.png";
import Carousel from '../../../../components/Carousel/Carousel';
import { cabinSketch } from "@/utils/fonts";
import LineWithDot from "../../../../components/LineWithDot/LineWithDot";
import { useTranslations } from "next-intl";

const HowWeWork = () => {
    const t = useTranslations("common.howWeWork");
    return (
        <>
            <section className='how-we-work pt-16'>
                <div className='container mx-auto px-4 my-8 relative'>
                    <div className='absolute inset-0 background-pan'></div>
                    <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-5'>
                        <div className='Big-image w-full lg:w-1/2 mb-8 lg:mb-0'>
                            <Image
                                src={burgerFrizze}
                                alt="Hero Image"
                                width={500}
                                height={500}
                                className="w-full max-w-lg mx-auto"
                            />
                        </div>
                        <div className="Content w-full lg:w-1/2 flex justify-center items-center">
                            <div className="w-full ltr:ps-10 rtl:pe-10 relative text-left">
                                <LineWithDot />
                                <h2 className={`text-5xl ${cabinSketch.className}`}>{t("How We Work")}</h2>
                                <h4 className="text-4xl font-bold">
                                    <span className="text-[#fe7e7e] font-semibold">{t("We Value")}</span>{" "}
                                    <span>{t("Our")}</span>{" "}
                                    <p>{t("Clients & Customers")}</p>
                                </h4>
                                <p className="leading-loose text-xl font-semibold">
                                    {t("Register or login in our portal")}<br />
                                    {t("Search your location")}<br />
                                    {t("Find your preferred restaurant")}<br />
                                    {t("Choose your cuisine")}<br />
                                    {t("Get your food delivered to your address")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='customer-fav-cuisine w-full  mx-auto p-12 flex-col gap-10 bg-black rounded-xl'>
                        <div className='title-customer-fav-cuisine'>
                            <h2 className={`text-center text-5xl text-white ${cabinSketch.className}`}>{t("Customer Favorite Cuisine")}</h2>
                        </div>
                        <div className='Carousel pt-10'>
                            <Carousel />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWeWork