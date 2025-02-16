import pizzaImg from "@/assets/image/pizzaImg.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cabinSketch } from "@/utils/fonts";
import Button from "@/components/Buttons/Button";

const BeWithUs: React.FC = () => {
  const t = useTranslations("common.beWithUs");

  return (
    <div className={`py-20 w-full bg-white`} dir="ltr">
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
          <span className=" mt-8">
            <Button
              text={t("Join us")}
              href="/ContactUs"
              variant="contained"
              className="mt-10"
            />
          </span>
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
