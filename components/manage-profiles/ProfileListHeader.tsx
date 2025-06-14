"use client";

import { useProfileStore } from "@/store/profile.store";
import PageHeader from "../PageHeader";
import Button from "../ui/Buttons";
import { useRouter } from "next/navigation";
import { UserProfile } from "@/types/userProfile-type";

const emptyProfile: UserProfile = {
  name: [""],
  username: [""],
  email: [""],
  company_name: [""],
  job_title: [""],
  about: [""],
  avatar: [""],
  avatar_original: [""],
  status: [true],
  id: 0,
  email_verified_at: ["null"],
  phone: [""],
  whatsapp_number: ["null"],
  avatar_base64: [""],
  avatar_original_base64: [""],
  user_type: ["null"],
  state: [""],
  country: [""],
  city: [""],
  area: [""],
  website_url: [""],
  headline: [""],
  bio: [""],
  industry: [""],
  skills: [],
  services: [],
  linkedin_url: [""],
  instagram_url: [""],
  facebook_url: [""],
  twitter_url: [""],
  youtube_url: [""],
  tiktok_url: [""],
  snapchat_url: [""],
  github_url: [""],
  behance_url: [""],
  dribbble_url: [""],
  pinterest_url: [""],
  threads_url: [""],
  custom_links: null,
  vcard_url: [""],
  pdf_resume_url: [""],
  gallery: [],
  profile_type: [""],
  is_public: [false],
  allow_contact_form: [false],
  dark_mode_enabled: [false],
  custom_theme_color: [""],
  qr_code_url: [""],
  seo_title: [""],
  seo_description: [""],
  nfc_card_id: [""],
  views_count: [0],
  last_tapped_at: ["null"],
  created_at: [""],
  updated_at: [""],
};

const ProfileListHeader = () => {
  const router = useRouter();
  return (
    <header>
      <div className="flex items-center justify-end">
        {/* <PageHeader /> */}
        <div>
          <Button
            variant="filled"
            onClick={() => {
              useProfileStore.getState().setActiveProfile(emptyProfile);
              router.push("/profile");
            }}
          >
            <span className="text-lg mr-2 -ml-0.5 text-white">
              <svg
                className="text-lg w-4 text-white"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AddIcon"
                fill="#fff"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
              </svg>
            </span>
            Add New
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ProfileListHeader;
