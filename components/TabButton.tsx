import Button from "./ui/Buttons";

export type Tab = "profile" | "links" | "other";

type TabButtonProps = {
  label: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
};

const TabButton = ({
  label,
  isActive,
  onClick,
  className = "",
  style,
}: TabButtonProps) => (
  <Button
    variant="profileHeaderIcons"
    className={`${
      isActive ? "text-[#00a8cc] bg-[#00a8cc14]" : "text-[#191724]"
    } ${className}`}
    style={style}
    onClick={onClick}
  >
    {label}
  </Button>
);

export default TabButton;
