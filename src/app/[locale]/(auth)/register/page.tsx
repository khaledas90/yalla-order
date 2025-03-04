import * as React from "react";
import { useTranslations } from "next-intl";
import RegisterForm from "./_components/RegisterForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Register = () => {
  const t = useTranslations("common.register");

  return (
    <>
      <div className={`hero min-h-screen px-1.5 py-16`}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold mb-6">
              {t("Create Account")}
            </h2>

            <RegisterForm />

            <div className="flex items-center my-4">
              <div className="grow border-t"></div>
              <span className="mx-4 text-gray-400">{t("Or")}</span>
              <div className="grow border-t"></div>
            </div>

            <div className="flex justify-center gap-4 py-3">
              <Icon
                icon="flat-color-icons:google"
                className="text-3xl cursor-pointer"
              />
              <Icon icon="logos:facebook" className="text-3xl cursor-pointer" />
              <Icon icon="cib:apple" className="text-3xl cursor-pointer" />
            </div>

            <p className="text-center text-sm text-gray-500">
              {t("Already have an account")}{" "}
              <Link href="/login" className="text-blue-500 cursor-pointer">
                {t("Sign In")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
