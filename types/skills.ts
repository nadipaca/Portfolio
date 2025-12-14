export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  years: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

