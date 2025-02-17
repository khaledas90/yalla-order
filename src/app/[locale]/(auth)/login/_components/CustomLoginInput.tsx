import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LoginForm } from "./loginForm";

export interface InputGroupItem {
  name: keyof LoginForm;
  required: boolean;
  type: string;
}

export const CustomLoginInput = ({
  input,
  register,
  placeholder,
  errors,
}: {
  input: InputGroupItem;
  register: UseFormRegister<LoginForm>;
  placeholder: string;
  errors: FieldErrors<LoginForm>;
}) => {
  return (
    <>
      <input
        type={input.type}
        id={input.name}
        placeholder={placeholder}
        {...register(input.name, { required: input.required })}
        className="w-full input rounded-[30px] my-3  px-8 py-[18px] border-2  focus:outline-none border-[#E6E6E6] placeholder-gray-400 transition-all duration-300 "
      />
      {errors[input.name] && (
        <p className="text-red-500">
          {errors[input.name]?.message || `${input.name} is required`}
        </p>
      )}
    </>
  );
};
