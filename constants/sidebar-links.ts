import DashboardSvgIcon from "@/components/ui/svgs/DashboardSvgIcon";
import MyProfilesSvgIcon from "@/components/ui/svgs/MyProfilesSvgIcon";
import ProfileSettingSvgIcon from "@/components/ui/svgs/ProfileSettingSvgIcon";
import { SideBarLinkTypes } from "@/types/sidebar-links";

export const sideBarLinks: SideBarLinkTypes = [
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
