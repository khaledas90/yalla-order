"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
      Fname: "",
      Lname: "",
      biasnessEmail: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center ">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-center text-black text-2xl font-bold mb-6">
              {t("20% commission for 60 days!")}
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <CustomInput
                name="Fname"
                type="Fname"
                placeholder={t("first name *")}
                value={formik.values.Fname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.Fname}
                touched={formik.touched.Fname}
              />
              <CustomInput
                name="Lname"
                type="Lname"
                placeholder={t("last name *")}
                value={formik.values.Lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.Lname}
                touched={formik.touched.Lname}
              />
              <CustomInput
                name="biasnessEmail"
                type="biasnessEmail"
                placeholder={t("biasness email *")}
                value={formik.values.biasnessEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.biasnessEmail}
                touched={formik.touched.biasnessEmail}
              />
              <div className="flex  gap-2 items-center">
                <span className="border-2 border-gray-200 text-gray-500 focus:ring-2 focus:ring-gray-400 bg-[#fff] rounded-full p-3">
                  +20
                </span>
                <span className="w-full">
                  <CustomInput
                    name="phone"
                    type="phone"
                    placeholder={t("mobile phone number *")}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.phone}
                    touched={formik.touched.phone}
                  />
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-red-400 text-white p-3 rounded-3xl font-semibold hover:bg-red-500"
              >
                {t("Create  Account")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
