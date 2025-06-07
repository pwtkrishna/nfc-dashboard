import React from "react";
import { FiRefreshCw } from "react-icons/fi";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: keyof typeof variants;
  toolTip?: string;
}

const variants = {
  filled:
    "flex items-center bg-[#00A8CC] text-white text-[0.8125rem] font-medium h-10 hover:bg-[#0891b2] min-w-[64px] rounded-lg py-3 px-4",
  outline:
    "flex items-center border border-[#00A8CC] text-[#00A8CC] bg-white text-[0.8125rem] font-medium h-10 hover:bg-[#e0f7fa] min-w-[64px] rounded-lg py-3 px-4",
  login:
    "bg-[#00A8CC] cursor-pointer w-full text-[1rem] rounded-lg py-3 px-6 text-white hover:bg-[#0891b2]",
  reload:
    "flex items-center justify-center bg-gray-200 text-[#00A8CC] hover:bg-gray-300 rounded-full w-10 h-10 p-0",
  none: "border-none outline-none bg-none ",
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  variant = "filled",
  className = "",
  toolTip,
  ...props
}) => (
  <button
    className={`${variants[variant]} ${className} disabled:opacity-50`}
    disabled={loading || props.disabled}
    {...props}
    title={toolTip}
  >
    {variant === "reload" ? (
      loading ? (
        // Loading spinner (optional)
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="#00A8CC"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="#00A8CC"
            d="M4 12a8 8 0 018-8v4l5-5-5-5v4a10 10 0 100 20v-2a8 8 0 01-8-8z"
          />
        </svg>
      ) : (
        // Reload icon (with react-icons or your own SVG)
        <FiRefreshCw className="h-5 w-5" />
      )
    ) : loading ? (
      "Loading..."
    ) : (
      children
    )}
  </button>
);

export default Button;
