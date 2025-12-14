/**
 * Data Validation Script
 * Run this to validate all data files before proceeding to Phase 2
 * 
 * Usage: npx tsx scripts/validate-data.ts
 */

import { getProfile, validateProfile } from "@/lib/data/profile";
import { getAllProjects, validateAllProjects } from "@/lib/data/projects";
import { getAllSkillCategories, validateSkillsData } from "@/lib/data/skills";

console.log("🔍 Validating Portfolio Data Files...\n");

// Validate Profile
console.log("📋 Validating profile.json...");
const profile = getProfile();
if (validateProfile(profile)) {
  console.log("✅ Profile data is valid");
  console.log(`   - Name: ${profile.name}`);
  console.log(`   - Title: ${profile.title}`);
  console.log(`   - Experience: ${profile.yearsExperience} years\n`);
} else {
  console.error("❌ Profile data is invalid\n");
  process.exit(1);
}

// Validate Projects
console.log("📁 Validating projects.json...");
const projectsValidation = validateAllProjects();
if (projectsValidation.valid) {
  const projects = getAllProjects();
  console.log(`✅ All ${projects.length} projects are valid`);
  projects.forEach((project) => {
    console.log(`   - ${project.id}: ${project.title}`);
    if (!project.demoVideo) {
      console.log(`     ⚠️  Demo video missing (expected)`);
    }
  });
  console.log();
} else {
  console.error("❌ Projects validation failed:");
  projectsValidation.errors.forEach((error) => console.error(`   - ${error}`));
  console.log();
  process.exit(1);
}

// Validate Skills
console.log("🛠️  Validating skills.json...");
if (validateSkillsData()) {
  const categories = getAllSkillCategories();
  console.log(`✅ All ${categories.length} skill categories are valid`);
  categories.forEach((category) => {
    console.log(`   - ${category.name}: ${category.skills.length} skills`);
  });
  console.log();
} else {
  console.error("❌ Skills data is invalid\n");
  process.exit(1);
}

console.log("🎉 All data files are valid! Ready for Phase 2.\n");

// Summary
const projects = getAllProjects();
const categories = getAllSkillCategories();
const totalSkills = categories.reduce((sum, cat) => sum + cat.skills.length, 0);

console.log("📊 Data Summary:");
console.log(`   - Profile: 1`);
console.log(`   - Projects: ${projects.length}`);
console.log(`   - Skill Categories: ${categories.length}`);
console.log(`   - Total Skills: ${totalSkills}`);
console.log(`   - Projects with demo videos: ${projects.filter((p) => p.demoVideo).length}/${projects.length}`);

