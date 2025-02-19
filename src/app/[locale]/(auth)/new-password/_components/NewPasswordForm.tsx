"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useTranslations } from "next-intl";
import CustomInput from "@/components/Inputs/CustomInputForm";

export default function NewPasswordForm() {

  const t = useTranslations("common.new-password");

  const validationSchema = Yup.object({
    newPassword: Yup.string().min(6, t("Password must be at least 6 characters")).required(t("New Password Required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], t("Passwords must match"))
      .required(t("Confirm Password Required")),
  });
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
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
          name="newPassword"
          type="password"
          placeholder={t("New-Password")}
          icon="mdi:lock-outline"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.newPassword}
          touched={formik.touched.newPassword}
        />

        <CustomInput
          name="confirmPassword"
          type="password"
          placeholder={t("Confirm Password")}
          icon="mdi:lock-outline"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
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
