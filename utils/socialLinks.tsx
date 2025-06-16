import { UserProfile } from "@/types/userProfile-type";
import { JSX } from "react";

export type SocialLink = {
  name: string;
  url?: string[];
  icon?: JSX.Element;
  image?: string;
};

export const getSocialLinks = (profile: UserProfile | null): SocialLink[] =>
  [
    {
      name: "Email",
      url: profile?.email,
      // icon: <LinkedInIcon />,
      image: "/sociallinks/email.png",
    },
    {
      name: "Whatsapp",
      url: profile?.whatsapp_number,
      // icon: <LinkedInIcon />,
      image: "/sociallinks/whatsapp.png",
    },
    {
      name: "Phone",
      url: profile?.phone,
      // icon: <LinkedInIcon />,
      image: "/sociallinks/phone.png",
    },
    {
      name: "LinkedIn",
      url: profile?.linkedin_url,
      // icon: <LinkedInIcon />,
      image: "/sociallinks/linkedin.png",
    },
    {
      name: "Instagram",
      url: profile?.instagram_url,
      // icon: <InstagramIcon />,
      image: "/sociallinks/instagram.png",
    },
    {
      name: "Threads",
      url: profile?.threads_url,
      // icon: <ThreadsIcon />,
      image: "/sociallinks/threads.png",
    },
    {
      name: "Facebook",
      url: profile?.facebook_url,
      // icon: <FacebookIcon />,
      image: "/sociallinks/fb.png",
    },
    {
      name: "Twitter",
      url: profile?.twitter_url,
      // icon: <TwitterIcon />,
      image: "/sociallinks/x.png",
    },
    {
      name: "YouTube",
      url: profile?.youtube_url,
      // icon: <YoutubeIcon />,
      image: "/sociallinks/yt.png",
    },
    {
      name: "Snapchat",
      url: profile?.snapchat_url,
      // icon: <SnapchatIcon />,
      image: "/sociallinks/snapchat.png",
    },
    {
      name: "Tik Tok",
      url: profile?.tiktok_url,
      // icon: <TiktokIcon />,
      image: "/sociallinks/tiktok.png",
    },
    {
      name: "Behance",
      url: profile?.behance_url,
      // icon: <BehanceIcon />,
      image: "/sociallinks/behance.png",
    },
    {
      name: "Dribble",
      url: profile?.dribbble_url,
      // icon: <DribbleIcon />,
      image: "/sociallinks/dribble.png",
    },
    {
      name: "Pinterest",
      url: profile?.pinterest_url,
      // icon: <PinterestIcon />,
      image: "/sociallinks/pinterest.png",
    },
  ].filter((link) => link.url);
