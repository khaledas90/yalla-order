import * as React from "react";
import { useTranslations } from "next-intl";
import VerifyEmailForm from "./_components/VerifyEmailForm";

const NewPassword = () => {
  const t = useTranslations("common.verify-email");

  return (
    <>
      <div className={`hero min-h-screen px-1.5 py-10`}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold mb-6">
              {t("Verify Your Email")}
            </h2>
            <h4 className="text-center text-gray-400 text-md font-bold mb-6">
              {t("Please check your email for the 4-digit code")}
            </h4>

            <VerifyEmailForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
