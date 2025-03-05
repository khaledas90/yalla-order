"use client";
import React, { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Icon } from "@iconify/react";
import Image, { StaticImageData } from "next/image";

interface Slide {
  image?: StaticImageData;
  name: string;
  role: string;
  review: string;
  date: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
}

const ReviewSlider: FC<CarouselProps> = ({ slides, autoPlay = true }) => {
  const autoplayOptions = autoPlay ? [Autoplay({ delay: 3000 })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoplayOptions
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="w-full flex justify-center items-center gap-2">
      <button
        type="button"
        title="Previous Slide"
        className="border bg-black border-gray-200 hover:bg-white hover:text-black text-white z-30 p-2 rounded-full transition-all"
        onClick={scrollPrev}
        aria-label="Scroll to previous slide"
      >
        <Icon icon="gravity-ui:arrow-left" width="20" height="20" />
      </button>

      <div className="relative w-full max-w-7xl">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="px-2 flex-shrink-0 w-full sm:w-full md:w-1/3 lg:w-1/4"
              >
                <div className="bg-white py-14 px-5  rounded-2xl shadow-lg flex flex-col items-start gap-3 border border-gray-200 relative">
                  <Icon
                    icon="radix-icons:quote"
                    width="40"
                    height="40"
                    className="text-main absolute top-1 left-3"
                  />

                  <div className="flex items-center gap-3">
                    <Image
                      src={slide.image || ""}
                      alt={slide.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {slide.name}
                      </p>
                      <p className="text-gray-500 text-sm">{slide.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-700">{slide.review}</p>

                  <p className="text-gray-400 text-sm">{slide.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        title="Next Slide"
        className="border bg-black border-gray-200 hover:bg-white hover:text-black text-white z-30 p-2 rounded-full transition-all"
        onClick={scrollNext}
        aria-label="Scroll to next slide"
      >
        <Icon icon="gravity-ui:arrow-right" width="20" height="20" />
      </button>
    </section>
  );
};

export default ReviewSlider;
