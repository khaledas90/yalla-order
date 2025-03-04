import * as React from "react";
import { useTranslations } from "next-intl";
import ForgetPasswordForm from "./_components/ForgetPasswordForm";

const Register = () => {
  const t = useTranslations("common.forget-password");

  return (
    <>
      <div className={`hero h-screen px-1.5 py-10`}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold mb-6">
              {t("Forget Password?")}
            </h2>
            <h4 className="text-center text-gray-400 text-md font-bold mb-6">
              {t("Don't worry, we'll send you reset instructions")}
            </h4>

            <ForgetPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
