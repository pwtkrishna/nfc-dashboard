import React from "react";

const variants = {
  default:
    "border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500",
  outline:
    "w-full py-4 px-3.5 text-base font-normal text-[#191724] border border-[#0000003b] rounded-lg focus:border-[#007da4] focus:outline-[#007da4] hover:border-[#191724] transition-colors duration-200",
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  variant?: keyof typeof variants;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, variant = "default", className = "", ...props }, ref) => (
    <input
      id={id}
      ref={ref}
      className={`${variants[variant]} ${className}`}
      {...props}
    />
  )
);

Input.displayName = "Input";

export default Input;
