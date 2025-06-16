import { UserProfile } from "@/types/userProfile-type";
import { Tab } from "../TabButton";
import PersonalInfo from "./PersonalInfo";
import { Dispatch, SetStateAction } from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileCoverPhoto from "./ProfileCoverPhoto";
import SocialLinks from "./SocialLinks";
import { socialTypes } from "./SocialLinksItem";
import OtherDetails from "./OtherDetails";

type ProfileEditSectionType = {
  selectedTab: Tab;
  activeProfile: UserProfile | null;
  profile: UserProfile | null;
  userLinks: socialTypes[];
  showLinkForm: boolean;
  selectedSocial: socialTypes | null;
  setProfile: Dispatch<SetStateAction<UserProfile | null>>;
  onAvatarChange: (file: File) => void;
  setCoverPhoto?: Dispatch<SetStateAction<UserProfile | null>>;
  onCoverPhotoChange: (file: File) => void;
  handleShowLinkForm: (social: socialTypes) => void;
  handleCloseLinkForm: () => void;
  handleSaveLink: (url: string) => void;
};

const ProfileEditSection = ({
  selectedTab,
  activeProfile,
  profile,
  userLinks,
  showLinkForm,
  selectedSocial,
  setProfile,
  onAvatarChange,
  onCoverPhotoChange,

  handleShowLinkForm,
  handleCloseLinkForm,
  handleSaveLink,
}: ProfileEditSectionType) => {
  switch (selectedTab) {
    case "profile":
      return (
        <PersonalInfo
          profile={profile}
          setProfile={setProfile}
          activeProfile={activeProfile}
        >
          <div className="flex mt-4 mb-6 gap-8 max-md:flex-col">
            <ProfileAvatar profile={profile} onAvatarChange={onAvatarChange} />
            <ProfileCoverPhoto
              profile={profile}
              onCoverPhotoChange={onCoverPhotoChange}
            />
            <div className="w-[130px] h-[130px]"></div>
          </div>
        </PersonalInfo>
      );
    case "links":
      return (
        <SocialLinks
          profile={profile}
          userLinks={userLinks}
          showLinkForm={showLinkForm}
          selectedSocial={selectedSocial}
          handleShowLinkForm={handleShowLinkForm}
          handleCloseLinkForm={handleCloseLinkForm}
          handleSaveLink={handleSaveLink}
        />
      );
    case "other":
      return (
        <OtherDetails
          profile={profile}
          setProfile={setProfile}
          activeProfile={activeProfile}
        />
      );
    default:
      return null;
  }
};

export default ProfileEditSection;
