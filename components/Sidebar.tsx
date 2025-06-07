import Link from "next/link";
import { SideBarLinkTypes } from "@/types/sidebar-links";
import DashboardSvgIcon from "./ui/svgs/DashboardSvgIcon";
import Logo from "./ui/Logo";
import MyProfilesSvgIcon from "./ui/svgs/MyProfilesSvgIcon";
import ProfileSettingSvgIcon from "./ui/svgs/ProfileSettingSvgIcon";

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
  return (
    <div className="w-[250px] bg-[#1a1825] p-4 text-white">
      <div className="flex m-6 items-center justify-center">
        <Logo />
      </div>
      <div>
        <ul>
          {sideBarLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <div className="flex items-center gap-2 px-4 py-2">
                  <div className="min-w-14 text-white shrink-0 inline-flex">
                    {typeof item.icon === "string" ? (
                      <span>{item.icon}</span>
                    ) : (
                      // Render as a component, pass width/height if needed
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
    </div>
  );
};

export default Sidebar;
