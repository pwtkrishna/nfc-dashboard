"use client";
import useSWR from "swr";
import { getUserProfiles } from "@/lib/profile";
import Button from "../ui/Buttons";
import ProfileListCard from "./ProfileListCard";
import { UserProfile } from "@/types/userProfile-type";
import Loader from "../ui/Loader";

const fetcher = () => getUserProfiles();

const ProfileList = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/api/profile",
    fetcher
  );

  const profiles = data?.data?.user_profiles || [];

  const handleReload = () => {
    mutate();
  };

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <>
      <div className="flex justify-end p-4">
        <Button
          variant="reload"
          onClick={handleReload}
          loading={isLoading}
          toolTip="Refresh"
        ></Button>
      </div>

      <div className="flex flex-wrap pb-4">
        {profiles.map((profile: UserProfile) => {
          return (
            <ProfileListCard
              profile={profile}
              key={profile.id}
              mutate={mutate}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProfileList;
