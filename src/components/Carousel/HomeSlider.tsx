"use client";
import React, { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Icon } from "@iconify/react";
import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";

interface Slide {
  icon?: string;
  image?: StaticImageData;
  title: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
}

const HomeSlider: FC<CarouselProps> = ({ slides, autoPlay = true }) => {
  const autoplayOptions = autoPlay ? [Autoplay({ delay: 3000 })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoplayOptions
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const { locale } = useParams();
  return (
    <section className="w-full flex justify-center items-center gap-2" dir="ltr">
      <button
        type="button"
        title="Previous Slide"
        className="border bg-black border-gray-200 hover:bg-white hover:text-black text-white z-30 p-2 rounded-full transition-all"
        onClick={scrollPrev}
        aria-label="Scroll to previous slide"
      >
          <Icon icon="gravity-ui:arrow-left" width="20" height="20" />
      </button>

      <div className="relative w-full max-w-6xl">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="px-2 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
              >
                <div className="bg-black py-5 rounded-2xl shadow-md flex flex-col justify-center items-center gap-3 border border-gray-300">
                  {slide.image && (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={200}
                      height={200}
                    />
                  )}
                  {slide.icon && (
                    <Icon
                      icon={slide.icon}
                      width="50"
                      height="50"
                      className="text-white"
                    />
                  )}
                  <p className="text-lg font-semibold text-white">
                    {slide.title}
                  </p>
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
          <Icon icon="mingcute:arrow-right-line" width="20" height="20" />
      </button>
    </section>
  );
};

export default HomeSlider;
