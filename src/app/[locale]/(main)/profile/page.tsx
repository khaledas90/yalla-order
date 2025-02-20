import * as React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";

const ContactUs = () => {
  const t = useTranslations("common.profile");

  return (
    <>
      <div className={`hero min-h-screen py-16`}>
        <div className="flex justify-center items-center min-h-screen">
          <h2
            className={`text-center text-6xl text-white ${cabinSketch.className} font-bold mb-6`}
          >
            {t("My Profile")}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
