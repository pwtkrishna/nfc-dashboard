export type UserProfile = {
  id: number;
  name: string[]; // updated
  username: string[]; // updated
  email: string[]; // updated
  email_verified_at: string[] | null; // updated
  phone: string[]; // updated
  whatsapp_number: string[] | null; // updated
  avatar: string[]; // updated
  avatar_base64: string[]; // updated
  avatar_original_base64: string[]; // updated
  avatar_original: string[] | null; // updated
  user_type: string[] | null; // updated
  about: string[]; // updated
  status: boolean[]; // updated
  state: string[]; // updated
  country: string[]; // updated
  city: string[]; // updated
  area: string[]; // updated
  website_url: string[]; // updated
  headline: string[]; // updated
  bio: string[]; // updated
  company_name: string[]; // updated
  job_title: string[]; // updated
  industry: string[]; // updated
  skills: string[]; // already array
  services: string[]; // already array
  linkedin_url: string[]; // updated
  instagram_url: string[]; // updated
  facebook_url: string[]; // updated
  twitter_url: string[]; // updated
  youtube_url: string[]; // updated
  tiktok_url: string[]; // updated
  snapchat_url: string[]; // updated
  github_url: string[]; // updated
  behance_url: string[]; // updated
  dribbble_url: string[]; // updated
  pinterest_url: string[]; // updated
  threads_url: string[]; // updated
  custom_links: { label: string; url: string; icon: string }[] | null;
  vcard_url: string[]; // updated
  pdf_resume_url: string[]; // updated
  gallery: string[]; // already array
  slug?: string[]; // updated (if required by backend)
  profile_type: string[]; // updated
  is_public: boolean[]; // updated
  allow_contact_form: boolean[]; // updated
  dark_mode_enabled: boolean[]; // updated
  custom_theme_color: string[]; // updated
  qr_code_url: string[]; // updated
  seo_title: string[]; // updated
  seo_description: string[]; // updated
  nfc_card_id: string[]; // updated
  views_count: number[]; // updated
  last_tapped_at: string[] | null; // updated
  created_at: string[]; // updated
  updated_at: string[]; // updated
};
