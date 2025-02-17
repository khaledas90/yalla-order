import React from 'react'
import Image from 'next/image'
import burgerFrizze from "@/assets/image/burger-frizze.png";
import Carousel from '../../../../components/Carousel/Carousel';
import { cabinSketch, cairoFont } from "@/utils/fonts";
import LineWithDot from "../../../../components/LineWithDot/LineWithDot";
import { useTranslations } from "next-intl";

const HowWeWork = () => {
    const t = useTranslations("common.howWeWork");
    return (
        <>
            <section className='how-we-work md:pt-16 pt-40'>
                <div className='container mx-auto px-4 my-8 relative'>
                    <div className='absolute inset-0 background-pan'></div>
                    <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-5'>
                        <div className='Big-image w-full lg:w-1/2 mb-8 lg:mb-0 z-30'>
                            <Image
                                src={burgerFrizze}
                                alt="Hero Image"
                                width={500}
                                height={500}
                                className="w-full max-w-lg mx-auto"
                            />
                        </div>
                        <div className="Content w-full lg:w-1/2 flex justify-center items-center">
                            <div className="w-full ps-10 relative ltr:text-left rtl:text-right">
                                <LineWithDot />
                                <h2 className={`text-5xl mb-3`}>
                                    <span className={`${cairoFont.className} rtl:inline ltr:hidden`}>
                                        {t("How We Work")}
                                    </span>
                                    <span className={`${cabinSketch.className} rtl:hidden ltr:inline`}>
                                        {t("How We Work")}
                                    </span>
                                </h2>
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
                            <h2 className={`text-center text-5xl text-white`}>
                                <span className={`${cairoFont.className} rtl:inline ltr:hidden`}>
                                    {t("Customer Favorite Cuisine")}
                                </span>
                                <span className={`${cabinSketch.className} rtl:hidden ltr:inline`}>
                                    {t("Customer Favorite Cuisine")}
                                </span>
                            </h2>
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