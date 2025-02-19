"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useTranslations } from "next-intl";
import CustomInput from "@/components/Inputs/CustomInputForm";

export default function ForgetPasswordForm() {

  const t = useTranslations("common.forget-password");

  const validationSchema = Yup.object({
    email: Yup.string().email(t("Invalid email format")).required(t("Email Address Required")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
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

        <button
          type="submit"
          className="w-full bg-red-400 text-white p-3 rounded-3xl font-semibold hover:bg-red-500"
        >
          {t("Rest Password")}
        </button>

        <Link href="/login">
          <button
            type="button"
            className="w-full mt-3 text-blue-400 bg-white hover:ring-1 hover:ring-blue-500 transition-all duration-300 p-3 rounded-3xl font-semibold"
          >
            {t("back to login")}
          </button>
        </Link>

      </form>
    </>

  );
}
