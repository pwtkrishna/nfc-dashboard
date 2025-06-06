import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => (
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 disabled:opacity-50"
    disabled={loading || props.disabled}
    {...props}
  >
    {loading ? "Loading..." : children}
  </button>
);

export default Button;
