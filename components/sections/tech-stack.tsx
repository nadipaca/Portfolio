import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    category: "Backend",
    technologies: ["Java", "Spring Boot", "Node.js", "FastAPI", "Python", "REST APIs"],
  },
  {
    category: "Frontend",
    technologies: ["React", "React Native", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "GKE", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "AI/ML",
    technologies: ["OpenAI", "Gemini", "Vertex AI", "LLM Integration", "Multi-Agent Systems"],
  },
  {
    category: "Messaging & Events",
    technologies: ["Kafka", "Event Sourcing", "RabbitMQ"],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

