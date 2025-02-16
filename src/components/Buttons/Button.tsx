import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "contained" | "outlined";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, variant, className }) => {
  return (
    <div className="button">
      <Link
        href={href}
        title="button"
        type="submit"
        className={`ring-[0.8px]  px-16 py-2 rounded-3xl  ${
          variant === "contained"
            ? "bg-white text-main hover:bg-transparent hover:text-white"
            : "hover:bg-white hover:text-main bg-transparent border border-white"
        }  transition-all duration-300 text-md ${className}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
