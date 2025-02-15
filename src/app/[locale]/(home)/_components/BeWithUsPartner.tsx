import Link from "next/link";
import pizzaImg from "@/assets/image/pizzaImg.png";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { cabinSketch } from "@/utils/fonts";

const BeWithUs: React.FC = () => {
  const t = useTranslations("restaurant.beWithUs");

  return (
    <div className={`py-12 mt-12 w-full`} dir="ltr">
      <div className="relative lg:w-4/5 md:w-3/4 w-full h-[450px] be-with-us flex justify-center">
        <div className="p-16 text-white flex flex-col justify-center">
          <h1
            className={`${cabinSketch.className} sm:text-5xl text-4xl lg:text-7xl md:text-6xl text-center rtl:text-right ltr:lg:text-left font-light `}
          >
            {t("BECOME ONE OF US?")}
          </h1>
          <p className="font-medium text-white text-4xl text-center rtl:text-right ltr:lg:text-left   mt-10">
            <span className="text-main text-4xl">{t("What")} </span>
            {t("are you waiting for some?")}
          </p>
          <Link
            href="/LoginAPartner"
            className="mt-4 bg-white text-dark-color rounded-[22px] py-3 px-8 font-bold text-sm"
          >
            {/* {t("Login a partner")} */}
          </Link>
        </div>
        <div className="w-1/2  hidden md:block">
          <Image
            src={pizzaImg}
            alt="pizza"
            className="absolute top-1/2  w-1/2  right-7 transform translate-x-1/2 -translate-y-1/2 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default BeWithUs;
