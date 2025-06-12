"use client";

import { useEffect, useState } from "react";
import { useProfileStore } from "@/store/profile.store";
import ProfileContentHeader from "./ProfileContentHeader";
import ProfileEditSection from "./ProfileEditSection";
import { updateProfile } from "@/lib/profile";
import Button from "../ui/Buttons";

const ProfileContent = () => {
  const [selectedTab, setSelectedTab] = useState<"profile" | "links" | "other">(
    "profile"
  );
  const activeProfile = useProfileStore((state) => state.activeProfile);
  const storeProfile = useProfileStore((state) => state.activeProfile);
  const hydrated = useProfileStore((state) => state.hydrated);

  const [profile, setProfile] = useState(activeProfile);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (hydrated) {
      setProfile(activeProfile);
    }
  }, [hydrated, activeProfile]);

  const handleAvatarChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setProfile((prev) => (prev ? { ...prev, avatar: dataUrl } : prev));
    };

    reader.readAsDataURL(file);
  };

  const handleCoverPhotoChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setProfile((prev) =>
        prev ? { ...prev, avatar_original: dataUrl } : prev
      );
    };

    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    setSaving(true);
    setError(null);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { slug, avatar, avatar_original, ...rest } = profile;
      const payload = {
        ...rest,
        avatar: profile.avatar_base64,
        avatar_original: profile.avatar_original_base64,
        status: Boolean(profile.status), // ensure boolean
      };
      const updated = await updateProfile(payload);
      useProfileStore.getState().setActiveProfile(updated);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  console.log(profile);

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
