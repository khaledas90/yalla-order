"use client";
import { useTranslations } from "next-intl";
import CustomInput from "./InputProfile";
import { useFormik } from "formik";
import * as Yup from "yup";

const MyAccount = () => {
  const t = useTranslations("common.my-account");

  // Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("First Name Required")),
    lastName: Yup.string().required(t("Last Name Required")),
    email: Yup.string()
      .email(t("Invalid email format"))
      .required(t("Email Address Required")),
    password: Yup.string()
      .min(6, t("Password must be at least 6 characters"))
      .required(t("Password Required")),
    birthDate: Yup.date().required(t("Date of Birth Required")),
    gander: Yup.string().required(t("Gender Required")),
  });

  // Formik Setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthDate: "",
      gander: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full p-4 sm:p-6 mt-6 space-y-6"
      dir={t("direction") === "rtl" ? "rtl" : "ltr"}
    >
      {/* Name Inputs */}
      <div className="space-y-4">
        <CustomInput
          name="firstName"
          type="text"
          placeholder={t("First Name")}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
        />
        <CustomInput
          name="lastName"
          type="text"
          placeholder={t("Last Name")}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
        />
      </div>

      {/* Email and Password */}
      <div className="space-y-4">
        <CustomInput
          name="email"
          type="email"
          placeholder={t("Email Address")}
          value={formik.values.email}
          icon="iconamoon:edit"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <CustomInput
          name="password"
          type="password" // Corrected type to "password" instead of "email"
          placeholder={t("Password")}
          value={formik.values.password}
          icon="iconamoon:edit"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
      </div>

      {/* Gender Selection */}
      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-500">
          {t("Gender")}
        </label>
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex-1">
            <input
              type="radio"
              name="gander"
              value="male"
              onChange={formik.handleChange}
              className="hidden"
            />
            <span
              className={`block text-center px-4 py-3 rounded-lg border transition-all duration-200 ease-in-out ${formik.values.gander === "male"
                ? "bg-red-400 text-white"
                : "bg-white text-gray-500 hover:bg-red-400 hover:text-white"
                }`}
            >
              {t("Male")}
            </span>
          </label>
          <label className="flex-1">
            <input
              type="radio"
              name="gander"
              value="female"
              onChange={formik.handleChange}
              className="hidden"
            />
            <span
              className={`block text-center px-4 py-3 rounded-lg border transition-all duration-200 ease-in-out ${formik.values.gander === "female"
                ? "bg-red-400 text-white"
                : "bg-white text-gray-500 hover:bg-red-400 hover:text-white"
                }`}
            >
              {t("Female")}
            </span>
          </label>
        </div>
        {formik.touched.gander && formik.errors.gander && (
          <p className="text-red-500 text-sm">{formik.errors.gander}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-500">
          {t("Date of Birth")}
        </label>
        <input
          title="DOB"
          type="date"
          name="birthDate"
          id="birthDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birthDate}
          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        {formik.touched.birthDate && formik.errors.birthDate && (
          <p className="text-red-500 text-sm">{formik.errors.birthDate}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-all duration-200"
      >
        {t("Save Changes")}
      </button>
    </form>
  );
};

export default MyAccount;