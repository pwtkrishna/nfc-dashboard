"use client";
import useSWR from "swr";
import { getUserProfiles } from "@/lib/profile";
import Button from "../ui/Buttons";
import ProfileListCard from "./ProfileListCard";
import { UserProfile } from "@/types/userProfile-type";

const fetcher = () => getUserProfiles();

const ProfileList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/profile", fetcher);

  const profiles = data?.data?.user_profiles || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <>
      <div className="flex justify-end p-4">
        <Button
          variant="reload"
          onClick={() => mutate()}
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
