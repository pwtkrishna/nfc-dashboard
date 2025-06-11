import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProfile } from "@/types/userProfile-type";

type ProfileStore = {
  activeProfile: UserProfile | null;
  setActiveProfile: (profile: UserProfile) => void;
  clearActiveProfile: () => void;
  hydrated: boolean;
  setHydrated: () => void;
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      hydrated: false,
      activeProfile: null,
      setActiveProfile: (profile) => set({ activeProfile: profile }),
      clearActiveProfile: () => set({ activeProfile: null }),
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "active-profile",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);
