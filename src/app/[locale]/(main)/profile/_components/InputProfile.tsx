import React from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

interface CustomInputProps {
  name: string;
  type: string;
  placeholder: string;
  icon?: string | undefined;
  hent?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  type,
  placeholder,
  icon,
  hent,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
    const t = useTranslations("common.my-account");
  return (
    <div className="input w-full">
      <div className="flex relative lg:flex-row md:flex-row sm:flex-col lg:gap-0 md:gap-0 sm:gap-2 flex-col  items-center justify-between">
        <label className="text-lg md:text-2xl font-medium text-gray-500 w-full md:w-[30%]">
          {placeholder}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className="border w-full md:w-[70%] focus:outline-hidden px-4 py-3 rounded-lg"
        />
        {hent && (
          <p className="text-red-400 lg:block hidden  text-sm md:text-base font-medium hover:text-red-500 absolute right-4 top-1/2 transform -translate-y-1/2">
            {name === "Password" && t("Change Password")}
            {name === "Email Address" && t("Change Email")}
          </p>
        )}
        {hent && (
          <span className="block lg:hidden">
            {name === "Password" && (
              <Icon
                icon={icon || ""}
                className="absolute ltr:right-5 rtl:left-5 lg:top-4 md:top-4 sm-top-[41px] top-10 text-main cursor-pointer hover:text-primary text-2xl"
              />
            )}
            {name === "Email Address" && (
              <Icon
                icon={icon || ""}
                className="absolute ltr:right-5 rtl:left-5 lg:top-4 md:top-4 sm-top-[41px] top-10 text-main cursor-pointer hover:text-primary text-2xl"
              />
            )}
          </span>
        )}
        {touched && error ? (
          <p className="text-red-500 text-sm ps-3">{error}</p>
        ) : null}
      </div>
    </div>
  );
};

export default CustomInput;
