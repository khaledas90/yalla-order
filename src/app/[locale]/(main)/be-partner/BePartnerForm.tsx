"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useTranslations } from "next-intl";
import CustomInput from "@/components/Inputs/CustomInputForm";

export default function BePartnerForm() {
  const t = useTranslations("common.be-partner");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("Invalid email format"))
      .required(t("Email Address Required")),
    password: Yup.string()
      .min(6, t("Password must be at least 6 characters"))
      .required(t("Password Required")),
  });

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

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <CustomInput
          name="email"
          type="email"
          placeholder={t("Email Address")}
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
          placeholder={t("Password")}
          icon="mdi:lock-outline"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />

        <p className="text-end text-sm text-gray-500 w-full">
          <Link href="/forget-password">{t("Forget password?")}</Link>
        </p>

        <button
          type="submit"
          className="w-full bg-red-400 text-white p-3 rounded-3xl font-semibold hover:bg-red-500"
        >
          {t("login")}
        </button>
      </form>
    </>
  );
}
