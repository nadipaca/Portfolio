import { SkillCategory, SkillsData } from "@/types/skills";
import skillsData from "@/data/skills.json";

export function getAllSkillCategories(): SkillCategory[] {
  return (skillsData as unknown as SkillsData).categories;
}

export function getSkillCategoryById(id: string): SkillCategory | undefined {
  return getAllSkillCategories().find((category) => category.id === id);
}

export function getAllSkills(): { name: string; level: string; years: number; category: string }[] {
  const categories = getAllSkillCategories();
  return categories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.name,
    }))
  );
}

export function validateSkillsData(): boolean {
  const skills = skillsData as unknown as SkillsData;
  if (!skills.categories || skills.categories.length === 0) {
    return false;
  }

  return skills.categories.every(
    (category) =>
      !!category.id &&
      !!category.name &&
      !!category.skills &&
      category.skills.length > 0 &&
      category.skills.every(
        (skill) =>
          !!skill.name &&
          ["beginner", "intermediate", "advanced", "expert"].includes(skill.level) &&
          skill.years >= 0
      )
  );
}

export function validateSkills(skills: SkillsData): boolean {
  if (!skills.categories || skills.categories.length === 0) {
    return false;
  }

  return skills.categories.every(
    (category) =>
      !!category.id &&
      !!category.name &&
      !!category.skills &&
      category.skills.length > 0 &&
      category.skills.every(
        (skill) =>
          !!skill.name &&
          ["beginner", "intermediate", "advanced", "expert"].includes(skill.level) &&
          skill.years >= 0
      )
  );
}

