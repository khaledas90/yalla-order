import * as React from "react";
import { useTranslations } from "next-intl";
import LoginForm from "./_components/loginForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Login = () => {
  const t = useTranslations("common.login");

  return (
    <>
      <div className={`hero h-screen py-9`}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold mb-6">{t("login")}</h2>

            <LoginForm />

            <div className="flex items-center my-4">
              <div className="flex-grow border-t"></div>
              <span className="mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t"></div>
            </div>

            <div className="flex justify-center gap-4 py-3">
              <Icon icon="flat-color-icons:google" className="text-3xl cursor-pointer" />
              <Icon icon="logos:facebook" className="text-3xl cursor-pointer" />
              <Icon icon="cib:apple" className="text-3xl cursor-pointer" />
            </div>

            <p className="text-center text-sm text-gray-500">
              {t("Don’t have an account?")} <Link href="#" className="text-blue-500 cursor-pointer">{t("Sign Up")}</Link>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
