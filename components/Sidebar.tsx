"use client";

import Link from "next/link";
import { SideBarLinkTypes } from "@/types/sidebar-links";
import DashboardSvgIcon from "./ui/svgs/DashboardSvgIcon";
import Logo from "./ui/Logo";
import MyProfilesSvgIcon from "./ui/svgs/MyProfilesSvgIcon";
import ProfileSettingSvgIcon from "./ui/svgs/ProfileSettingSvgIcon";
import { useProfileStore } from "@/store/profile.store";

const sideBarLinks: SideBarLinkTypes = [
  {
    title: "Dashboard",
    href: "/",
    icon: DashboardSvgIcon,
  },
  {
    title: "My Profiles",
    href: "/my-profiles",
    icon: MyProfilesSvgIcon,
  },
  {
    title: "Profile Settings",
    href: "/profile",
    icon: ProfileSettingSvgIcon,
  },
];

const Sidebar = () => {
  const activeProfile = useProfileStore((state) => state.activeProfile);
  const hydrated = useProfileStore((state) => state.hydrated);

  // Decide which links to show
  const filteredLinks =
    !hydrated || activeProfile
      ? sideBarLinks
      : sideBarLinks.filter((item) => item.href !== "/profile");

  return (
    <div className="w-[250px] bg-[#1a1825] p-4 text-white">
      <div className="flex m-6 items-center justify-center">
        <Logo />
      </div>
      <ul>
        {filteredLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <div className="flex items-center gap-2 px-4 py-2">
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
};

export default Sidebar;
