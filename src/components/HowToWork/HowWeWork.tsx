import React from 'react'
import Image from 'next/image'
import heroImg from "@/assets/image/hero_restaurant.png";
import Carousel from './Carousel';
import { cabinSketch } from "@/utils/fonts";
import LineWithDot from "../LineWithDot/LineWithDot";

const HowWeWork = () => {
    return (
        <>
            <section className='how-we-work pt-16 bg-white'>
                <div className='container mx-auto px-4 py-8'>
                    <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-5'>
                        <div className='Big-image w-full lg:w-1/2 mb-8 lg:mb-0'>
                            <Image
                                src={heroImg}
                                alt="Hero Image"
                                width={500}
                                height={500}
                                className="w-full max-w-lg mx-auto"
                            />
                        </div>
                        <div className="Content w-full lg:w-1/2 flex justify-center items-center">
                            <div className="w-full ps-10 relative text-left">
                                <LineWithDot />
                                <h2 className={`text-5xl ${cabinSketch.className}`}>How We Work</h2>
                                <h4 className="text-4xl font-bold">
                                    <span className="text-[#fe7e7e] font-semibold">We Value</span>{" "}
                                    <span>Our</span>{" "}
                                    <p>Clients & Customers</p>
                                </h4>
                                <p className="leading-loose text-xl font-semibold">
                                    Register or login in our portal<br />
                                    Search your location<br />
                                    Find your preferred restaurant<br />
                                    Choose your cuisine<br />
                                    Get your food delivered to your address
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='customer-fav-cuisine w-full  mx-auto p-12 flex-col gap-10 bg-black rounded-xl'>
                        <div className='title-customer-fav-cuisine'>
                            <h2 className={`text-center text-5xl text-white ${cabinSketch.className}`}>Customer Favorite Cuisine</h2>
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