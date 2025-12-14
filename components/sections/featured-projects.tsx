import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PlayGround App",
    problem: "Need for a real-time collaborative mobile platform with seamless user experience.",
    solution: "Built a React Native mobile app with Firebase real-time synchronization and offline-first architecture.",
    tech: ["React Native", "Firebase", "Real-time Systems", "Offline Sync"],
    highlights: [
      "Real-time data synchronization across multiple devices with conflict resolution",
      "Offline-first architecture with local caching and background sync",
      "Optimized bundle size and performance for mobile networks"
    ],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Code Review Agent",
    problem: "Manual code reviews are time-consuming and inconsistent across teams.",
    solution: "AI-powered code review system using FastAPI and OpenAI to automate and standardize review processes.",
    tech: ["FastAPI", "OpenAI", "GitHub Actions", "Python"],
    highlights: [
      "Automated PR reviews with context-aware suggestions and security scanning",
      "Integrated with GitHub Actions for seamless CI/CD workflow",
      "Reduced code review time by 60% while maintaining quality standards"
    ],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Healthcare Multi-Agent AI System",
    problem: "Complex healthcare workflows require intelligent orchestration with strict security and compliance.",
    solution: "Multi-agent AI system using Gemini and Vertex AI on GKE with enterprise-grade security.",
    tech: ["Gemini", "GKE", "Vertex AI", "JWT", "PII Handling", "Kubernetes"],
    highlights: [
      "Multi-agent orchestration with role-based access control and JWT authentication",
      "HIPAA-compliant PII handling with encryption at rest and in transit",
      "Scalable Kubernetes deployment with auto-scaling and health monitoring"
    ],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "NovaMart Event-Driven Ecommerce Platform",
    problem: "Traditional monolithic ecommerce systems struggle with scale and real-time inventory management.",
    solution: "Event-driven microservices architecture on AWS EKS with Terraform infrastructure-as-code.",
    tech: ["AWS", "EKS", "Terraform", "Spring Boot", "Event Sourcing", "Kafka"],
    highlights: [
      "Event-driven architecture with Kafka for real-time inventory and order processing",
      "Infrastructure-as-code with Terraform enabling reproducible deployments",
      "Microservices with API gateway, service mesh, and distributed tracing"
    ],
    github: "https://github.com",
    demo: null,
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Production systems demonstrating architecture, scalability, and technical depth
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  <span className="font-semibold">Problem: </span>{project.problem}
                </CardDescription>
                <CardDescription className="text-sm">
                  <span className="font-semibold">Solution: </span>{project.solution}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2 text-sm">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

