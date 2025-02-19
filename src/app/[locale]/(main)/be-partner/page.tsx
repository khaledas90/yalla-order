import * as React from "react";
import { useTranslations } from "next-intl";
import BePartnerForm from "./BePartnerForm";
import Link from "next/link";

const Login = () => {
  const t = useTranslations("common.be-partner");

  return (
    <>
      <div className={`hero h-screen py-9`}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold mb-6">{t("Login a Partner")}</h2>
            <h4 className="text-center text-gray-400 text-md font-bold mb-6">{t("Welcome to the foodc Portal")}</h4>

            <BePartnerForm />

            <div className="flex items-center my-4">
              <div className="flex-grow border-t"></div>
              <span className="mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t"></div>
            </div>

            <p className="text-center text-sm text-gray-500">
              {t("Don’t have an account?")} <Link href="/register" className="text-blue-500 cursor-pointer">{t("Sign Up")}</Link>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
