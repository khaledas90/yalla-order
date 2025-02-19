import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cabinSketch, cairoFont } from "@/utils/fonts";
import appStore from "@/assets/image/app-store.png";
import googlePlay from "@/assets/image/google-play.png";
import Phone from "@/assets/image/OnePlus.png";

const DownloadApp = () => {
  const t = useTranslations("common.downloadApp");

  return (
    <>
      <section className="pb-36">
        <div
          className={`w-full bg-white flex md:justify-end justify-normal items-center`}
          dir="ltr"
        >
          <div className="relative lg:w-4/5 md:w-3/4 w-full h-[450px] download-app flex justify-center">
            <div className="py-16 md:ps-16 ps-10 md:pe-0 pe-10 text-white flex flex-col justify-between">
              <h1
                className={`md:text-5xl text-4xl ltr:leading-snug rtl:leading-normal rtl:text-right ltr:lg:text-left font-light`}
              >
                <span
                  className={`${cairoFont.className} rtl:inline ltr:hidden`}
                >
                  {t("Download Our")}
                  <span className="hidden md:inline">
                    <br />
                  </span>{" "}
                  {t("Application now !")}
                </span>
                <span
                  className={`${cabinSketch.className} rtl:hidden ltr:inline`}
                >
                  {t("Download Our")}
                  <span className="hidden md:inline">
                    <br />
                  </span>{" "}
                  {t("Application now !")}
                </span>
              </h1>
              <p className="font-medium text-white text-3xl rtl:text-right ltr:lg:text-left">
                <span className="text-main">{t("Enjoy")} </span>
                {t("the best meal")}
              </p>
              <span className="mt-10 flex flex-col md:flex-row justify-start items-center gap-3">
                <Image
                  src={appStore}
                  width={180}
                  height={100}
                  alt="App Store"
                />
                <Image
                  src={googlePlay}
                  width={180}
                  height={100}
                  alt="Google Play"
                />
              </span>
            </div>
            <div className="w-1/2 hidden md:block">
              <Image
                src={Phone}
                className="w-5/6 -translate-y-28"
                alt="Phone"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
