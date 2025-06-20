import { IconProps } from "@/types/socialIcon-type";

const DribbleIcon = ({
  color = "#fff",
  size = 30,
  className = "",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      className={`rounded-[50%] w-full h-full ${className}`}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M3.5 6.63C4.38 5.25 5.58 4.1 7.01 3.3c2.07.68 4.32 2 6.05 3.97C10.16 8.33 6.76 8.34 3.5 6.63zM6.43 20.35c-2.71-1.79-4.5-4.86-4.5-8.35 0-1.26.23-2.47.67-3.58 2.11 1.1 4.27 1.59 6.36 1.59 1.88 0 3.69-.39 5.34-1.07.37.6.69 1.26.95 1.96-.95.34-1.89.79-2.78 1.34C9.4 14.16 7.24 17.06 6.43 20.35zM9.71 2.25C10.42 2.09 11.17 2 11.93 2c2.28 0 4.37.76 6.05 2.04-.85.92-1.88 1.73-3.03 2.37C13.47 4.57 11.59 3.19 9.71 2.25zM15.94 13.89c.46 4.66-1.6 7.53-1.85 7.87-.01 0-.01.01-.01.01C13.39 21.92 12.67 22 11.93 22c-1.3 0-2.53-.25-3.67-.7.59-2.98 2.49-5.64 5.26-7.36.73-.46 1.49-.83 2.27-1.11C15.85 13.17 15.9 13.53 15.94 13.89zM21.92 12.34c-.12 3.54-2.07 6.62-4.95 8.3.66-1.6 1.26-3.96.96-6.95-.05-.48-.12-.95-.21-1.4C19.16 12.01 20.59 12.02 21.92 12.34zM17.19 10.36c-.3-.82-.66-1.59-1.09-2.3 1.27-.73 2.41-1.63 3.34-2.66 1.19 1.35 2.02 3.02 2.34 4.87C20.3 10.01 18.74 10.04 17.19 10.36z"></path>
    </svg>
  );
};

export default DribbleIcon;
