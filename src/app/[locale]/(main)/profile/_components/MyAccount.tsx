"use client";
import { useTranslations } from "next-intl";
import CustomInput from "./InputProfile";
import { useFormik } from "formik";
import * as Yup from "yup";
const MyAccount = () => {
  const t = useTranslations("common.my-account");

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
    <>
      <form className="col-span-2 p-6 mt-6 space-y-4 w-full">
        <CustomInput
          name="First Name"
          type="text"
          placeholder={t("First Name")}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
        />
        <CustomInput
          name="Last Name"
          type="text"
          placeholder={t("Last Name")}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
        />
        <CustomInput
          name="Email Address"
          type="email"
          placeholder={t("Email Address")}
          value={formik.values.email}
          icon="iconamoon:edit"
          hent
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <CustomInput
          name="Password"
          type="email"
          placeholder={t("Password")}
          value={formik.values.password}
          icon="iconamoon:edit"
          hent
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />

        <div className="flex lg:flex-row md:flex-row sm:flex-col lg:gap-0 md:gap-0 sm:gap-2 flex-col items-center justify-between">
          <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
            {t("Gender")}
          </label>
          <div className="flex w-full flex-row sm:flex-row justify-center items-center gap-4 mt-2 sm:mt-0">
            <button
              type="button"
              name="gander"
              value="male"
              id="male"
              onChange={formik.handleChange}
              className="bg-red-400 text-white text-lg px-4 py-3 w-[30vh] rounded-lg hover:text-gray-500 hover:bg-white border transition-all duration-200 ease-in-out"
            >
              {t("Male")}
            </button>
            <button
              type="button"
              name="gander"
              value="female"
              id="female"
              onChange={formik.handleChange}
              className="bg-red-400 text-white text-lg px-4 py-3 w-[30vh] rounded-lg hover:text-gray-500 hover:bg-white border transition-all duration-200 ease-in-out"
            >
              {t("Female")}
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col lg:gap-0 md:gap-0 sm:gap-2 flex-col  items-center justify-between">
          <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
            {t("Date of Birth")}
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate}
            className="border w-full md:w-[70%] focus:outline-none px-4 py-3 rounded-lg appearance-none"
          />
        </div>
      </form>
    </>
  );
};

export default MyAccount;
