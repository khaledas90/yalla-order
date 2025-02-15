import React from 'react'
import Image from 'next/image'
import heroImg from "@/assets/image/hero_restaurant.png";


const HowWeWork = () => {
    return (
        <>
            <section className='how-we-work'>
                <div className='container mx-auto px-4 py-8'>
                    <div className='w-full flex justify-center items-center'>
                        <div className='Big-image w-1/2'>
                            <Image
                                src={heroImg}
                                alt="Hero Image"
                                width={500}
                                height={500}
                                className="w-full max-w-lg"
                            />
                        </div>
                        <div className='Content w-1/2'>
                            <h2>How We Work</h2>
                            <h4>
                                <span>We Value</span>
                                Our Clients & Customers
                            </h4>
                            <p>
                                Register or login in our portal
                                Search your location
                                Find your preferred restaurant
                                Choose your cuisine
                                Get your food delivered to your address
                            </p>
                        </div>
                    </div>
                    <div className='customer-fav-cuisine'>
                        <div>
                            <h2>Customer Favorite Cuisine</h2>
                        </div>
                        <div className='Carousel'>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWeWork