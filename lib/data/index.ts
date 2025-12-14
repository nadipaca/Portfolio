// Centralized data access exports
export { getProfile, validateProfile } from "./profile";
export {
  getAllProjects,
  getProjectById,
  getProjectsByCategory,
  validateProject,
  validateAllProjects,
} from "./projects";
export {
  getAllSkillCategories,
  getSkillCategoryById,
  getAllSkills,
  validateSkills,
} from "./skills";

// Re-export types for convenience
export type { Profile } from "@/types/profile";
export type { Project, ProjectsData } from "@/types/project";
export type { SkillCategory, SkillsData, Skill } from "@/types/skills";

