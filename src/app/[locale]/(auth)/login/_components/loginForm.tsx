"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomLoginInput";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  const t = useTranslations("common.login");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold mb-6">{t("login")}</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <CustomInput
            name="email"
            type="email"
            placeholder="Email Address"
            icon="mdi:email-outline"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          <CustomInput
            name="password"
            type="password"
            placeholder="Password"
            icon="mdi:lock-outline"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />

          <Link href="#" className="text-right text-sm text-gray-500">{t("Forget password?")}</Link>

          <button
            type="submit"
            className="w-full bg-red-400 text-white p-3 rounded-md font-semibold hover:bg-red-500"
          >
            {t("login")}
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-4 text-gray-400">Or</span>
            <div className="flex-grow border-t"></div>
          </div>

          <div className="flex justify-center gap-4">
            <Icon icon="flat-color-icons:google" className="text-3xl cursor-pointer" />
            <Icon icon="logos:facebook" className="text-3xl cursor-pointer" />
            <Icon icon="cib:apple" className="text-3xl cursor-pointer" />
          </div>

          <p className="text-center text-sm text-gray-500">
            {t("Don’t have an account?")} <Link href="#" className="text-blue-500 cursor-pointer">{t("Sign Up")}</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
