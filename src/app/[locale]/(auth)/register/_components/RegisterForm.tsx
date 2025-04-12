"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import CustomInput from "@/components/Inputs/CustomInputForm";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
export default function RegisterForm() {
  const t = useTranslations("common.register");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, t("Name must be at least 3 characters"))
      .required(t("Name Required")),
    email: Yup.string()
      .email(t("Invalid email format"))
      .required(t("Email Address Required")),
    password: Yup.string()
      .min(6, t("Password must be at least 6 characters"))
      .required(t("Password Required")),
  });

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam === "OAuthAccountNotLinked") {
      setError(
        "This email is already registered with another method (e.g., email/password, Google, or Facebook). Please log in with your original method to link your account."
      );
    } else if (errorParam) {
      setError("Authentication failed. Please try again.");
    }
  }, [searchParams]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const result = await signIn("credentials", {
          email: values.email,
          password: values.password,
          name: values.name,
          redirect: false,
        });
        if (result?.ok) {
          router.push("/");
          toast.success(t("Registration successful"));
        } else if (result?.status === 401) {
          toast.error(t("User already exists"));
        }
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <CustomInput
          name="name"
          type="name"
          placeholder={t("Name")}
          icon="wpf:name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
        />
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
        <button
          type="submit"
          className="w-full bg-red-400 text-white p-3 rounded-3xl font-semibold hover:bg-red-500"
        >
          {formik.isSubmitting ? t("Creating") : t("Create Account")}
        </button>
      </form>
    </>
  );
}
