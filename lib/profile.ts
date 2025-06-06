import { UserProfile } from "@/types/userProfile-type";

export async function getUserProfiles() {
  const res = await fetch("/api/profile", {
    method: "GET",
  });
  if (!res.ok) throw new Error("Failed to fetch user profiles");
  return res.json();
}

export async function createProfile(profileData: UserProfile) {
  const res = await fetch("/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData),
  });
  if (!res.ok) throw new Error("Failed to create user profile");
  return res.json();
}

export async function deleteProfile(id: number) {
  const res = await fetch("/api/profile", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  });

  return res.json();
}
