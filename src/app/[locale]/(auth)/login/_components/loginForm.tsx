"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useTranslations } from "next-intl";
import CustomInput from "@/components/Inputs/CustomInputForm";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const t = useTranslations("common.login");
  const router = useRouter();
  const [authError, setAuthError] = React.useState<string | null>(null);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("Invalid email format"))
      .required(t("Email Address Required")),
    password: Yup.string()
      .min(6, t("Password must be at least 6 characters"))
      .required(t("Password Required")),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setAuthError(null);
      try {
        const result = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });

        if (result?.error) {
          setAuthError(t("Invalid email or password"));
          console.error("Login failed:", result.error);
        } else if (result?.ok) {
          router.push("/");
        }
      } catch (error) {
        setAuthError(t("An unexpected error occurred"));
        console.error("Login error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {authError && (
        <p className="text-red-500 text-sm text-center">{authError}</p>
      )}
      <CustomInput
        name="email"
        type="email"
        placeholder={t("Email Address")}
        icon="mdi:email-outline"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : undefined
        }
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
        error={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : undefined
        }
        touched={formik.touched.password}
      />
      <p className="text-end text-sm text-gray-500 w-full">
        <Link href="/forget-password">{t("Forget password?")}</Link>
      </p>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full bg-red-400 text-white p-3 rounded-3xl font-semibold hover:bg-red-500 disabled:bg-gray-400"
      >
        {formik.isSubmitting ? t("Logging in") : t("login")}
      </button>
    </form>
  );
}
