import React from "react";
import Image from "next/image";
import Link from "next/link";
import appStore from "@/assets/image/appStore.svg";
import googlePlay from "@/assets/image/googlePlay.svg";
import logo from "@/assets/image/FOoDc.png";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
const Footer: React.FC = () => {
  const t = useTranslations("restaurant.footer");

  return (
    <footer className={`flex flex-col items-center bg-black py-10 `}>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl px-4">
        <div className="mb-6 lg:mb-4">
          <Image
            src={logo}
            loading="lazy"
            alt="Logo"
            width={225}
            height={115}
          />
        </div>
        <div className="flex flex-col items-center justify-center  gap-5">
          <div className="flex items-center gap-4 text-white">
            <p className="mb-0">
              <Link href="/ContactUs" className="hover:underline">
                {t("Contact us")}
              </Link>
            </p>
            <p className="mb-0">{t("Follow Us")}</p>
            <Icon icon="logos:facebook" width="30" height="30" />
            <Icon icon="skill-icons:instagram" width="30" height="30" />
          </div>
          <div className="flex mt-7 gap-4">
            <button type="button" title="btn" className="border-0">
              <Image
                src={appStore}
                alt="Download on the App Store"
                className="w-32"
              />
            </button>
            <button type="button" title="btn" className="border-0">
              <Image
                src={googlePlay}
                alt="Get it on Google Play"
                className="w-32"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-5   text-center lg:ltr:text-left lg:rtl:text-right">
        <p className="text-gray-300">
          {t("Copyright © 2023 LOGO Design & Develop by Majec Soft")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
