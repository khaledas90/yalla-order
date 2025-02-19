import * as React from "react";
import { useTranslations } from "next-intl";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  const t = useTranslations("common.contact-us");

  return (
    <>
      <div className={`hero min-h-screen py-16`}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
            <h2 className="text-center text-2xl font-bold mb-6">{t("Contact US")}</h2>
            <h3 className="text-center text-lg font-bold mb-6"><span className="text-main">{t("Need")}</span>{" "}<span className="text-blue-500">{t("help?")}</span></h3>

            <ContactUsForm />

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
