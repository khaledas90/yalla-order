"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  InputGroupItem,
  CustomLoginInput,
} from "../_components/CustomLoginInput";
const InputGroup: InputGroupItem[] = [
  { name: "email", required: true, type: "email" },
  { name: "password", required: true, type: "password" },
];

export interface LoginForm {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="loginForm w-full mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        {InputGroup.map((input) => (
          <div key={input.name} className="w-full">
            <CustomLoginInput
              input={input}
              register={register}
              placeholder={`Enter your ${input.name}`}
              errors={errors}
            />
          </div>
        ))}

        <div className="flex  justify-center"></div>
      </form>
    </div>
  );
}
