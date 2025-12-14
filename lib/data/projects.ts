import { Project, ProjectsData } from "@/types/project";
import projectsData from "@/data/projects.json";

export function getAllProjects(): Project[] {
  return (projectsData as unknown as ProjectsData).projects;
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter((project) => project.category === category);
}

export function validateProject(project: Project): boolean {
  return (
    !!project.id &&
    !!project.title &&
    !!project.shortDescription &&
    !!project.category &&
    project.year > 0 &&
    !!project.techStack &&
    project.techStack.length > 0 &&
    !!project.overview &&
    !!project.useCases &&
    project.useCases.length > 0
  );
}

export function validateAllProjects(): { valid: boolean; errors: string[] } {
  const projects = getAllProjects();
  const errors: string[] = [];

  projects.forEach((project, index) => {
    if (!validateProject(project)) {
      errors.push(`Project at index ${index} (${project.id || "unknown"}) is invalid`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

