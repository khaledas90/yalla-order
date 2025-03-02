"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "@/components/Inputs/CustomInputForm";
import { useTranslations } from "next-intl";

export default function ContactUsForm() {
  const t = useTranslations("common.contact-us");

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Enter a valid phone number")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 text-center">
      <CustomInput
        icon="icon-park-outline:edit-name"
        name="firstName"
        type="text"
        placeholder={t("First name")}
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.firstName}
        touched={formik.touched.firstName}
      />

      <CustomInput
        icon="icon-park-outline:edit-name"
        name="lastName"
        type="text"
        placeholder={t("Last name")}
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.lastName}
        touched={formik.touched.lastName}
      />

      <CustomInput
        icon="mdi:email-outline"
        name="email"
        type="email"
        placeholder={t("Email")}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
      />

      <div className="flex items-center border border-gray-300 rounded-lg p-2">
        <span className="text-gray-500 px-2">+20</span>
        <input
          name="phone"
          type="text"
          placeholder={t("Mobile phone number")}
          className="w-full outline-hidden bg-transparent"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.phone && formik.errors.phone && (
        <p className="text-red-500 text-sm text-start">{formik.errors.phone}</p>
      )}

      <textarea
        name="message"
        placeholder={t("Message")}
        className="w-full p-3 border border-gray-300 rounded-lg outline-hidden h-24"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      {formik.touched.message && formik.errors.message && (
        <p className="text-red-500 text-sm">{formik.errors.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-red-400 text-white p-3 rounded-3xl font-semibold hover:bg-red-500"
      >
        {t("Send")}
      </button>
    </form>
  );
}
