"use client";

import { useEffect, useState } from "react";
import { useProfileStore } from "@/store/profile.store";
import ProfileContentHeader from "./ProfileContentHeader";
import ProfileEditSection from "./ProfileEditSection";
import { createProfile, updateProfile } from "@/lib/profile";
import Button from "../ui/Buttons";
import { useRouter } from "next/navigation";
import { toArray } from "@/utils/toArray";

const ProfileContent = () => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState<"profile" | "links" | "other">(
    "profile"
  );
  const activeProfile = useProfileStore((state) => state.activeProfile);
  const storeProfile = useProfileStore((state) => state.activeProfile);
  const hydrated = useProfileStore((state) => state.hydrated);

  const [profile, setProfile] = useState(activeProfile);
  const [avatarChanged, setAvatarChanged] = useState(false);
  const [coverPhotoChanged, setCoverPhotoChanged] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEditMode = Boolean(profile?.id);

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
        is_public: toArray(profile.is_public),
        allow_contact_form: toArray(profile.allow_contact_form),
        dark_mode_enabled: toArray(profile.dark_mode_enabled),
        views_count: toArray(profile.views_count),
        // ...add other fields as needed
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
          <div className="flex-[1] h-full overflow-y-auto ">
            {activeProfile && (
              <form action="" onSubmit={handleSave}>
                <ProfileEditSection
                  activeProfile={activeProfile}
                  profile={profile}
                  selectedTab={selectedTab}
                  setProfile={setProfile}
                  onAvatarChange={handleAvatarChange}
                  onCoverPhotoChange={handleCoverPhotoChange}
                />
                <Button>Save</Button>
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
    </>
  );
};

export default ProfileContent;
