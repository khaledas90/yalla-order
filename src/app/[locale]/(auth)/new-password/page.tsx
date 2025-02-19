import * as React from "react";
import { useTranslations } from "next-intl";
import NewPasswordForm from "./_components/NewPasswordForm";

const NewPassword = () => {
  const t = useTranslations("common.new-password");

  return (
    <>
      <div className={`hero min-h-screen py-16`}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold mb-6">{t("New Password")}</h2>
            <h4 className="text-center text-gray-400 text-md font-bold mb-6">{t("The new password must be different from the passwords used previously")}</h4>

            <NewPasswordForm />

          </div>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
