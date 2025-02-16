"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";


const Carousel = () => {
        const t = useTranslations("common.howWeWork");
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

    const [slidesToShow, setSlidesToShow] = useState(6);

    const updateSlidesPerView = useCallback(() => {
        if (window.innerWidth < 640) {
            setSlidesToShow(2);
        } else if (window.innerWidth < 1024) {
            setSlidesToShow(3);
        } else {
            setSlidesToShow(6);
        }
    }, []);

    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, [updateSlidesPerView]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="w-full flex justify-center items-center gap-1" dir="ltr">
            <button
                type="button"
                title="arrow-left"
                className="border-[0.5px] bg-white border-gray-200 hover:bg-gray-200 text-black z-30 hover:text-black p-2 rounded-full"
                onClick={scrollPrev}
            >
                <Icon icon="gravity-ui:arrow-left" width="20" height="20" />
            </button>
            <div className="relative w-full">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
                                className="px-2 w-full"
                            >
                                <div className="bg-transparent z-30 py-5 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-5 border-2 text-gray-200 border-gray-200">
                                    <Icon icon="stash:burger" width="60" height="60" />
                                    <p className="text-lg font-semibold">{t("Burger")}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button
                type="button"
                title="arrow-right"
                className="border-[0.5px] bg-white border-gray-200 hover:bg-gray-200 z-30 text-black hover:text-black p-2 rounded-full"
                onClick={scrollNext}
            >
                <Icon icon="gravity-ui:arrow-right" width="20" height="20" />
            </button>
        </section>
    );
};

export default Carousel;
