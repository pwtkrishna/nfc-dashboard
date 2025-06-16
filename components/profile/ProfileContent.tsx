"use client";

import { useEffect, useState } from "react";
import { useProfileStore } from "@/store/profile.store";
import ProfileContentHeader from "./ProfileContentHeader";
import ProfileEditSection from "./ProfileEditSection";
import { createProfile, updateProfile } from "@/lib/profile";
import Button from "../ui/Buttons";
import { useRouter } from "next/navigation";
import { toArray } from "@/utils/toArray";
import { socialTypes } from "./SocialLinksItem";
import SocialLinkAddForm from "./SocialLinkAddForm";
import { tabs } from "@/data/tabs";

const ProfileContent = () => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState<"profile" | "links" | "other">(
    "profile"
  );
  const activeProfile = useProfileStore((state) => state.activeProfile);
  const hydrated = useProfileStore((state) => state.hydrated);

  const [profile, setProfile] = useState(activeProfile);
  const [avatarChanged, setAvatarChanged] = useState(false);
  const [coverPhotoChanged, setCoverPhotoChanged] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [saving, setSaving] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  const [showLinkForm, setShowLinkForm] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState<null | socialTypes>(
    null
  );
  const [userLinks, setUserLinks] = useState<socialTypes[]>([]);

  const currentTabIndex = tabs.findIndex((tab) => tab.key === selectedTab);

  function handleNext() {
    if (currentTabIndex < tabs.length - 1) {
      setSelectedTab(tabs[currentTabIndex + 1].key as typeof selectedTab);
    }
  }

  function handlePrevious() {
    if (currentTabIndex > 0) {
      setSelectedTab(tabs[currentTabIndex - 1].key as typeof selectedTab);
    }
  }

  function handleShowLinkForm(social: socialTypes) {
    setSelectedSocial(social);
    setShowLinkForm(true);
  }

  function handleCloseLinkForm() {
    setShowLinkForm(false);
  }

  function handleSaveLink(url: string) {
    if (selectedSocial) {
      setUserLinks((prev) => [
        ...prev.filter((link) => link.name !== selectedSocial.name),
        { ...selectedSocial, url: [url] },
      ]);
      setShowLinkForm(false);
      setSelectedSocial(null);
    }
  }

  const isEditMode = Boolean(profile?.id);

  const socialFieldMap = {
    LinkedIn: "linkedin_url",
    Instagram: "instagram_url",
    Facebook: "facebook_url",
    Twitter: "twitter_url",
    YouTube: "youtube_url",
    Snapchat: "snapchat_url",
    "Tik Tok": "tiktok_url",
    Behance: "behance_url",
    Dribble: "dribbble_url",
    Pinterest: "pinterest_url",
    Threads: "threads_url",
    // ...add others as needed
  } as const;

  type SocialName = keyof typeof socialFieldMap;

  const socialUpdates: Record<string, string[]> = {};
  userLinks.forEach((link) => {
    const field = socialFieldMap[link.name as SocialName];
    if (field) {
      socialUpdates[field] = link.url && link.url[0] ? [link.url[0]] : [""];
    }
  });

  useEffect(() => {
    if (hydrated) {
      setProfile(activeProfile);
    }
  }, [hydrated, activeProfile]);

  const handleAvatarChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setProfile((prev) => (prev ? { ...prev, avatar: [dataUrl] } : prev));
      setAvatarChanged(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCoverPhotoChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setProfile((prev) =>
        prev ? { ...prev, avatar_original: [dataUrl] } : prev
      );
      setCoverPhotoChanged(true);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    setSaving(true);
    setError(null);
    try {
      const { avatar, avatar_original, ...rest } = profile;

      const payload = {
        ...rest,
        name: toArray(profile.name),
        username: toArray(profile.username),
        email: toArray(profile.email),
        about: toArray(profile.about),
        avatar: avatarChanged ? toArray(avatar) : [],
        avatar_original: coverPhotoChanged ? toArray(avatar_original) : [],
        status: toArray(profile.status),
        company_name: toArray(profile.company_name),
        job_title: toArray(profile.job_title),
        // is_public: toArray(profile.is_public),
        // allow_contact_form: toArray(profile.allow_contact_form),
        // dark_mode_enabled: toArray(profile.dark_mode_enabled),
        // views_count: toArray(profile.views_count),
        email_verified_at: [
          !profile.email_verified_at?.[0] ||
          profile.email_verified_at?.[0] === "null"
            ? ""
            : profile.email_verified_at[0],
        ],
        user_type: [
          !profile.user_type?.[0] || profile.user_type?.[0] === "null"
            ? ""
            : profile.user_type[0],
        ],
        last_tapped_at: [
          !profile.last_tapped_at?.[0] || profile.last_tapped_at?.[0] === "null"
            ? ""
            : profile.last_tapped_at[0],
        ],
        whatsapp_number: [
          !profile.whatsapp_number?.[0] ||
          profile.whatsapp_number?.[0] === "null"
            ? ""
            : profile.whatsapp_number[0],
        ],
        ...socialUpdates,
      };

      let updated;
      if (isEditMode) {
        updated = await updateProfile(payload);
        router.push("/my-profiles");
      } else {
        updated = await createProfile(payload);
        router.push("/my-profiles"); // or wherever you want to go after creation
      }
      useProfileStore.getState().setActiveProfile(updated);
      setAvatarChanged(false);
      setCoverPhotoChanged(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <>
      <div>
        <ProfileContentHeader
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div
          className="flex bg-white shadow-[0_16px_40px_rgba(0,0,0,0.2)]
        "
          style={{
            height: "calc(-128px + 100vh) ",
            minHeight: "calc(-128px + 90vh)",
            borderRadius: "0px 12px 12px",
          }}
        >
          <div className="flex-[1] h-full overflow-y-auto">
            {activeProfile && (
              <form action="" onSubmit={handleSave}>
                <ProfileEditSection
                  selectedTab={selectedTab}
                  activeProfile={activeProfile}
                  profile={profile}
                  setProfile={setProfile}
                  onAvatarChange={handleAvatarChange}
                  onCoverPhotoChange={handleCoverPhotoChange}
                  userLinks={userLinks}
                  showLinkForm={showLinkForm}
                  selectedSocial={selectedSocial}
                  handleShowLinkForm={handleShowLinkForm}
                  handleCloseLinkForm={handleCloseLinkForm}
                  handleSaveLink={handleSaveLink}
                />
                <div className="flex justify-between mt-8 p-4">
                  <Button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentTabIndex === 0}
                    className="mr-2 cursor-pointer"
                  >
                    Previous
                  </Button>
                  {currentTabIndex < tabs.length - 1 ? (
                    <Button
                      type="button"
                      className=" cursor-pointer"
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className=" cursor-pointer"
                      disabled={saving}
                    >
                      Save
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>

          <div
            className="block border border-[#0000001f] max-lg:hidden"
            style={{ borderRightWidth: "thin" }}
          ></div>
          <div className="max-lg:hidden">
            <div className="w-[256px] rounded-2xl shadow-[0_0_2px_rgb(220,220,220)] aspect-[7 / 16] overflow-hidden m-8"></div>
          </div>
        </div>
      </div>
      <SocialLinkAddForm
        showLinkForm={showLinkForm}
        handleCloseLinkForm={handleCloseLinkForm}
        social={selectedSocial}
        onSave={handleSaveLink}
      />
    </>
  );
};

export default ProfileContent;
