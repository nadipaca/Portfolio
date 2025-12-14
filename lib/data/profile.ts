import { Profile } from "@/types/profile";
import profileData from "@/data/profile.json";

export function getProfile(): Profile {
  return profileData as unknown as Profile;
}

export function validateProfile(profile: Profile): boolean {
  return (
    !!profile.id &&
    !!profile.name &&
    !!profile.title &&
    profile.yearsExperience > 0 &&
    !!profile.email &&
    !!profile.bio.short &&
    !!profile.education.degree
  );
}

