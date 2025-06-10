import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  loading?: boolean;
  variant?: "outline" | "none";
  title?: string;
  toolTip: string;
};

const NextLink: React.FC<ButtonProps> = ({
  href,
  title,
  className,
  children,
  toolTip,
  variant = "outline",
  ...props
}) => {
  const variants = {
    none: "",
    outline: "",
  };

  return (
    <Link
      href={href}
      className={`${variants[variant]} ${className}`}
      {...props}
      title={toolTip}
    >
      {title}
      {children}
    </Link>
  );
};

export default NextLink;
