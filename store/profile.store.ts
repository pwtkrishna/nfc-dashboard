import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProfile } from "@/types/userProfile-type";

type ProfileStore = {
  activeProfile: UserProfile | null;
  setActiveProfile: (profile: UserProfile) => void;
  clearActiveProfile: () => void;
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      activeProfile: null,
      setActiveProfile: (profile) => set({ activeProfile: profile }),
      clearActiveProfile: () => set({ activeProfile: null }),
    }),
    {
      name: "active-profile", // key in localStorage
      // Optionally, use sessionStorage:
      // storage: () => sessionStorage,
    }
  )
);
