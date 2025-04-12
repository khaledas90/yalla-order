import * as React from "react";
import { useTranslations } from "next-intl";
import LoginForm from "./_components/loginForm";
import Link from "next/link";
import LoginIcons from "./_components/LoginIcons";

const Login = () => {
  const t = useTranslations("common.login");

  return (
    <>
      <div className={`hero h-screen px-1.5 py-9`}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold mb-6">
              {t("login")}
            </h2>

            <LoginForm />

            <div className="flex items-center my-4">
              <div className="grow border-t"></div>
              <span className="mx-4 text-gray-400">{t("Or")}</span>
              <div className="grow border-t"></div>
            </div>
            <LoginIcons />
            <p className="text-center text-sm text-gray-500">
              {t("Don’t have an account?")}{" "}
              <Link href="/register" className="text-blue-500 cursor-pointer">
                {t("Sign Up")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
