"use client";
import { usePathname } from "next/navigation";
import { sideBarLinks } from "@/constants/sidebar-links";

export default function PageHeader() {
  const pathname = usePathname();

  const currentLink = sideBarLinks.find((link) => link.href === pathname);

  if (!currentLink || currentLink.href === "/") return null;

  return (
    <h2 className="text-[1.5rem] leading-[1.235] font-semibold">
      {currentLink.title}
    </h2>
  );
}
