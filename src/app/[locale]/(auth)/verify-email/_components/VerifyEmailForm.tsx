"use client";
import React, { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function VerifyEmailForm() {
  const t = useTranslations("common.verify-email");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const validationSchema = Yup.object({
    otp: Yup.string()
      .length(4, t("OTP must be exactly 4 digits"))
      .required(t("OTP is required")),
  });

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema,
    onSubmit: () => {
      console.log("OTP Submitted:", otp.join(""));
    },
  });

  useEffect(() => {
    formik.setFieldValue("otp", otp.join(""));
  }, [otp, formik]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    if (index > 0 && otp[0] === "") {
      inputRefs.current[0]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 text-center">
      <div className="flex justify-center gap-3">
        {otp.map((digit, index) => (
          <input
            title="otp"
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-lg outline-0 font-bold border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
          />
        ))}
      </div>

      {formik.touched.otp && formik.errors.otp ? (
        <p className="text-red-500 text-sm ps-3">{formik.errors.otp}</p>
      ) : null}

      <button
        type="submit"
        className="w-full bg-red-400 text-white p-3 rounded-3xl font-semibold hover:bg-red-500"
      >
        {t("Send")}
      </button>

      <p className="text-sm text-gray-500">
        {t("Didn't receive code?")}{" "}
        <button type="button" className="text-blue-500 cursor-pointer">
          {t("send again")}
        </button>
      </p>

      <Link href="/login">
        <button
          type="button"
          className="w-full mt-3 text-blue-400 bg-white hover:ring-1 hover:ring-blue-500 transition-all duration-300 p-3 rounded-3xl font-semibold"
        >
          {t("back to login")}
        </button>
      </Link>
    </form>
  );
}
