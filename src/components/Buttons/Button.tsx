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
        className={`ring-1 ring-white px-16 py-1 rounded-3xl transition-all duration-300 text-md font-semibold ${className} 
    ${variant === "contained"
            ? "bg-white text-main hover:bg-transparent hover:text-white"
            : "bg-transparent hover:bg-white hover:text-main"
          }`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
