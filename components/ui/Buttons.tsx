import { FiRefreshCw } from "react-icons/fi";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: keyof typeof variants;
  toolTip?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const variants = {
  filled:
    "flex items-center bg-[#00A8CC] text-white text-[0.8125rem] font-medium h-10 hover:bg-[#0891b2] min-w-[64px] rounded-lg py-3 px-4",
  outline:
    "flex items-center border border-[#00A8CC] text-[#00A8CC] bg-white text-[0.8125rem] font-medium h-10 hover:bg-[#e0f7fa] min-w-[64px] rounded-lg py-3 px-4",
  login:
    "bg-[#00A8CC] cursor-pointer w-full text-[1rem] rounded-lg py-3 px-6 text-white hover:bg-[#0891b2]",
  reload:
    "flex items-center justify-center bg-gray-200 text-[#00A8CC] hover:bg-gray-300 rounded-full w-10 h-10 p-0 cursor-pointer",
  profileHeaderIcons:
    "cursor-pointer font-semibold text-sm leading-7 border-r border-r-[#0000001f]  flex flex-col items-center justify-center gap-2 p-2",
  none: "border-none outline-none bg-none ",
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  variant = "filled",
  className = "",
  toolTip,
  onClick,
  ...props
}) => (
  <button
    className={`${variants[variant]} ${className} disabled:opacity-50`}
    disabled={loading || props.disabled}
    {...props}
    title={toolTip}
    onClick={onClick}
  >
    {variant === "reload" ? (
      loading ? (
        // Loading spinner with rotation animation
        <FiRefreshCw className="h-5 w-5 animate-spin" />
      ) : (
        // Reload icon
        <FiRefreshCw className="h-5 w-5 hover:rotate-180 transition-transform duration-300" />
      )
    ) : loading ? (
      "Loading..."
    ) : (
      children
    )}
  </button>
);

export default Button;
