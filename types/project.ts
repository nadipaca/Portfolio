export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  year: number;
  status: "completed" | "in-progress" | "archived";
  thumbnail: string | null;
  demoVideo: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
  techStack: string[];
  overview: string;
  useCases: string[];
  architecture: {
    summary: string;
    diagram: string | null;
    keyDecisions: string[];
  };
  metrics: {
    uptime?: string;
    users?: string;
    latency?: string;
    [key: string]: string | undefined;
  };
  challenges: string[];
  solutions: string[];
  results: string[];
  learnings: string[];
}

export interface ProjectsData {
  projects: Project[];
}

