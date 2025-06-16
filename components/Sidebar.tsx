"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./ui/Logo";
import { useProfileStore } from "@/store/profile.store";
import { sideBarLinks } from "@/constants/sidebar-links";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeProfile = useProfileStore((state) => state.activeProfile);
  const hydrated = useProfileStore((state) => state.hydrated);

  const filteredLinks =
    !hydrated || activeProfile
      ? sideBarLinks
      : sideBarLinks.filter((item) => item.href !== "/profile");

  // Sidebar content
  const sidebarContent = (
    <div className="w-[250px] bg-[#1a1825] p-4 text-white h-full">
      <div className="flex m-6 items-center justify-center">
        <Logo />
      </div>
      <ul className="flex flex-col gap-4">
        {filteredLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-[8px] ${
                  pathname === item.href ? "bg-[rgb(14,116,144)]" : ""
                } ${pathname !== item.href ? "hover:bg-[#0e74901a]" : ""}`}
              >
                <div className="min-w-14 text-white shrink-0 inline-flex">
                  {typeof item.icon === "string" ? (
                    <span>{item.icon}</span>
                  ) : (
                    <item.icon width={24} height={24} />
                  )}
                </div>
                <div className="shrink grow basis-[auto] my-1 -ml-[24px]">
                  {item.title}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#1a1825] text-white p-2 rounded"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar for desktop */}
      <div className="hidden md:block h-screen">{sidebarContent}</div>

      {/* Sidebar overlay for mobile/tablet */}
      {open && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30"
            onClick={() => setOpen(false)}
          />
          {/* Sidebar */}
          <div className="relative z-50 h-full">{sidebarContent}</div>
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-50 text-white bg-[#1a1825] p-2 rounded md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
