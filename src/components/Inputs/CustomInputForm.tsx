import React from "react";
import { Icon } from "@iconify/react";

interface CustomInputProps {
  name: string;
  type: string;
  placeholder: string;
  icon?: string | undefined;
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
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="relative">
      <Icon
        icon={icon || ""}
        className="absolute left-3 top-4 text-gray-500 text-xl"
      />
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full pl-10 p-3 border rounded-3xl text-black focus:outline-hidden focus:ring-2 focus:ring-gray-400"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && error ? (
        <p className="text-red-500 text-sm ps-3">{error}</p>
      ) : null}
    </div>
  );
};

export default CustomInput;
