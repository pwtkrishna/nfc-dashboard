import { UserProfile } from "@/types/userProfile-type";
import { Tab } from "../TabButton";
import PersonalInfo from "./PersonalInfo";
import { Dispatch, SetStateAction } from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileCoverPhoto from "./ProfileCoverPhoto";
import SocialLinks from "./SocialLinks";

type ProfileEditSectionType = {
  selectedTab: Tab;
  activeProfile: UserProfile | null;
  setProfile?: Dispatch<SetStateAction<UserProfile | null>>;
  setCoverPhoto?: Dispatch<SetStateAction<UserProfile | null>>;
  onAvatarChange: (file: File) => void;
  onCoverPhotoChange: (file: File) => void;
};

const ProfileEditSection = ({
  selectedTab,
  activeProfile,
  onAvatarChange,
  onCoverPhotoChange,
}: ProfileEditSectionType) => {
  switch (selectedTab) {
    case "profile":
      return (
        <PersonalInfo activeProfile={activeProfile}>
          <div className="flex mt-4 mb-6 gap-8 max-md:flex-col">
            <ProfileAvatar
              activeProfile={activeProfile}
              onAvatarChange={onAvatarChange}
            />
            <ProfileCoverPhoto
              activeProfile={activeProfile}
              onCoverPhotoChange={onCoverPhotoChange}
            />
            <div className="w-[130px] h-[130px]"></div>
          </div>
        </PersonalInfo>
      );
    case "links":
      return <SocialLinks />;
    case "other":
    //   return <EditOtherForm />;
    default:
      return null;
  }
};

export default ProfileEditSection;
