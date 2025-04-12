"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signIn } from "next-auth/react";
export default function LoginIcons() {
  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const handleFacebookSignIn = async () => {
    await signIn("facebook", { callbackUrl: "/" });
  };
  return (
    <div className="flex justify-center gap-4 py-3">
      <Icon
        onClick={handleGoogleSignIn}
        icon="flat-color-icons:google"
        className="text-3xl cursor-pointer"
      />
      <Icon
        onClick={handleFacebookSignIn}
        icon="logos:facebook"
        className="text-3xl cursor-pointer"
      />
      <Icon icon="cib:apple" className="text-3xl cursor-pointer" />
    </div>
  );
}
