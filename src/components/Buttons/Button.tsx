import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  href?: string | undefined;
  variant?: "contained" | "outlined";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, variant, className }) => {
  return (
    <div className="button">
      <Link
        href={href || "#"}
        title="button"
        type="submit"
        className={`ring-[0.8px] px-16 py-1 rounded-3xl transition-all duration-300 text-md ${className} ${variant === "contained"
            ? "bg-white text-gray-800 hover:bg-transparent hover:text-white"
            : "hover:bg-white hover:text-gray-800 bg-transparent border border-white"
          }`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
