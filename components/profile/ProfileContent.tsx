"use client";

import { useState } from "react";
import { useProfileStore } from "@/store/profile.store";
import ProfileContentHeader from "./ProfileContentHeader";
import ProfileEditSection from "./ProfileEditSection";
import { createProfile } from "@/lib/profile";

const ProfileContent = () => {
  const [selectedTab, setSelectedTab] = useState<"profile" | "links" | "other">(
    "profile"
  );
  const activeProfile = useProfileStore((state) => state.activeProfile);
  const storeProfile = useProfileStore((state) => state.activeProfile);

  const [profile, setProfile] = useState(storeProfile);
  const [coverPhoto, setCoverPhoto] = useState(storeProfile);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAvatarChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfile((prev) =>
        prev ? { ...prev, avatar: e.target?.result as string } : prev
      );
    };
    reader.readAsDataURL(file);
  };

  const handleCoverPhotoChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCoverPhoto((prev) =>
        prev ? { ...prev, coverPhoto: e.target?.result as string } : prev
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
      await createProfile(profile);
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
          <div className="flex-[1] h-full overflow-y-auto ">
            <form action="">
              <ProfileEditSection
                activeProfile={profile}
                selectedTab={selectedTab}
                setProfile={setProfile}
                onAvatarChange={handleAvatarChange}
                onCoverPhotoChange={handleCoverPhotoChange}
              />
            </form>
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
