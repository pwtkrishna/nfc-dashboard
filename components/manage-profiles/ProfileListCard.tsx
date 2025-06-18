"use client";

import type { UserProfile } from "@/types/userProfile-type";
import Image from "next/image";
import Button from "../ui/Buttons";
import Link from "next/link";
import { deleteProfile } from "@/lib/profile";
import NextLink from "../ui/NextLink";
import { useProfileStore } from "@/store/profile.store";
import { getAvatarSrc } from "@/utils/getAvatarSrc";

type Props = {
  profile: UserProfile;
  mutate?: () => void;
};

const ProfileListCard = ({ profile, mutate }: Props) => {
  const { id, name, username, company_name, job_title } = profile;
  const activeProfile = useProfileStore((state) => state.activeProfile);
  const setActiveProfile = useProfileStore((state) => state.setActiveProfile);

  const avatarSrc = getAvatarSrc(profile?.avatar);
  const coverPhotoSrc = getAvatarSrc(profile?.avatar_original);
  const imageAlt =
    profile?.username && profile.username.length > 0
      ? profile.username[0]
      : "Profile";

  const isActive = activeProfile?.id === profile.id;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      try {
        await deleteProfile(id);
        mutate?.();
      } catch (error) {
        console.error("Failed to delete profile:", error);
        alert("Failed to delete profile. Please try again.");
      }
    }
  };

  const handleProfileSelect = (profile: UserProfile) => {
    setActiveProfile(profile);
  };

  return (
    <div
      className="profile-card-full-w pl-6 pt-6 basis-[25%] grow-0 max-w-1/4 max-lg:basis-[33.3333%] max-lg:max-w-1/3 max-sm:basis-[50%] max-sm:max-w-1/2"
      onClick={() => handleProfileSelect(profile)}
    >
      <div
        className={`flex flex-col gap-4 pt-4 px-4 pb-3 rounded-[0.5rem] overflow-hidden cursor-pointer [box-shadow:0_0_5px_rgb(196,196,196)] hover:[box-shadow:0_0_5px_rgb(0,168,204)] ${
          isActive ? "bg-[#191724]" : "bg-white"
        }`}
      >
        <div className="relative w-full h-[116px]">
          <Image
            src={coverPhotoSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover rounded-[0.5rem]"
            priority
          />
        </div>
        <div className="flex items-center gap-4 w-full h-[70px]">
          <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-[#e0e0e0] overflow-hidden">
            <Image
              src={avatarSrc}
              alt={imageAlt}
              fill
              sizes="48px"
              className="object-cover rounded-full"
              style={{ objectPosition: "center" }}
            />
          </div>
          <div>
            <h6
              className={`user-profile-name text-base leading-[1.6] font-semibold ${
                isActive ? "text-[#00a8cc]" : "text-[#191724]"
              }`}
            >
              {name}
            </h6>
            <p
              className={`profile-card__job-title font-normal text-[0.875rem] leading-[1.43] ${
                isActive ? "text-white" : "text-[rgb(107,114,128)]"
              } `}
            >
              {job_title} at {company_name}
            </p>
          </div>
        </div>
        <hr
          className="border-[#0000001f]"
          style={{ borderBottomWidth: "thin" }}
        />
        <div className="flex justify-between">
          <Link href={`https://nfc-ecru.vercel.app/profile/${username}`}>
            <Button
              variant="none"
              className="text-[rgb(0,168,204)] hover:bg-[rgba(0,168,204,0.04)] p-2 rounded-[50%]"
              toolTip="Preview Profile"
            >
              <svg
                className={`w-6 h-6 transition-[fill] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${
                  isActive ? "hover:text-white" : "hover:text-black"
                } `}
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="VisibilityIcon"
                fill="currentcolor"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"></path>
              </svg>
            </Button>
          </Link>

          <NextLink
            href={`/profile`}
            variant="none"
            className="text-[rgb(0,168,204)] hover:bg-[rgba(0,168,204,0.04)] p-2 rounded-[50%]"
            toolTip="Edit Profile"
          >
            <svg
              className={`w-6 h-6 transition-[fill] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer hover:text-black ${
                isActive ? "hover:text-white" : "hover:text-black"
              }`}
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="EditIcon"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
            </svg>
          </NextLink>

          <Button
            variant="none"
            className="text-[rgb(0,168,204)] hover:bg-[rgba(0,168,204,0.04)] p-2 rounded-[50%]"
            toolTip="Edit Profile Links"
          >
            <svg
              className={`w-6 h-6 transition-[fill] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer hover:text-black ${
                isActive ? "hover:text-white" : "hover:text-black"
              }`}
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LinkIcon"
            >
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"></path>
            </svg>
          </Button>
          {!isActive && (
            <Button
              variant="none"
              className="text-[rgb(0,168,204)] hover:bg-[rgba(0,168,204,0.04)] p-2 rounded-[50%]"
              toolTip="Delete Profile"
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 transition-[fill] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer hover:text-black"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M15.75 3H13.425C13.2509 2.15356 12.7904 1.39301 12.1209 0.846539C11.4515 0.300068 10.6142 0.00109089 9.75 0L8.25 0C7.38585 0.00109089 6.54849 0.300068 5.87906 0.846539C5.20964 1.39301 4.74907 2.15356 4.575 3H2.25C2.05109 3 1.86032 3.07902 1.71967 3.21967C1.57902 3.36032 1.5 3.55109 1.5 3.75C1.5 3.94891 1.57902 4.13968 1.71967 4.28033C1.86032 4.42098 2.05109 4.5 2.25 4.5H3V14.25C3.00119 15.2442 3.39666 16.1973 4.09966 16.9003C4.80267 17.6033 5.7558 17.9988 6.75 18H11.25C12.2442 17.9988 13.1973 17.6033 13.9003 16.9003C14.6033 16.1973 14.9988 15.2442 15 14.25V4.5H15.75C15.9489 4.5 16.1397 4.42098 16.2803 4.28033C16.421 4.13968 16.5 3.94891 16.5 3.75C16.5 3.55109 16.421 3.36032 16.2803 3.21967C16.1397 3.07902 15.9489 3 15.75 3ZM8.25 1.5H9.75C10.2152 1.50057 10.6688 1.64503 11.0487 1.91358C11.4286 2.18213 11.7161 2.56162 11.8717 3H6.12825C6.28394 2.56162 6.57143 2.18213 6.95129 1.91358C7.33115 1.64503 7.78479 1.50057 8.25 1.5ZM13.5 14.25C13.5 14.8467 13.2629 15.419 12.841 15.841C12.419 16.2629 11.8467 16.5 11.25 16.5H6.75C6.15326 16.5 5.58097 16.2629 5.15901 15.841C4.73705 15.419 4.5 14.8467 4.5 14.25V4.5H13.5V14.25Z"
                  fill="#C80D0D"
                />
                <path
                  d="M7.5 13.5001C7.69891 13.5001 7.88968 13.421 8.03033 13.2804C8.17098 13.1397 8.25 12.949 8.25 12.7501V8.25006C8.25 8.05115 8.17098 7.86038 8.03033 7.71973C7.88968 7.57908 7.69891 7.50006 7.5 7.50006C7.30109 7.50006 7.11032 7.57908 6.96967 7.71973C6.82902 7.86038 6.75 8.05115 6.75 8.25006V12.7501C6.75 12.949 6.82902 13.1397 6.96967 13.2804C7.11032 13.421 7.30109 13.5001 7.5 13.5001Z"
                  fill="#C80D0D"
                />
                <path
                  d="M10.5 13.5001C10.6989 13.5001 10.8897 13.421 11.0303 13.2804C11.171 13.1397 11.25 12.949 11.25 12.7501V8.25006C11.25 8.05115 11.171 7.86038 11.0303 7.71973C10.8897 7.57908 10.6989 7.50006 10.5 7.50006C10.3011 7.50006 10.1103 7.57908 9.96967 7.71973C9.82902 7.86038 9.75 8.05115 9.75 8.25006V12.7501C9.75 12.949 9.82902 13.1397 9.96967 13.2804C10.1103 13.421 10.3011 13.5001 10.5 13.5001Z"
                  fill="#C80D0D"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileListCard;
