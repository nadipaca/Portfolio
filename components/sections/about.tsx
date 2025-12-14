import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Brain, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const skills = [
  { icon: Code, label: "Backend Development", description: "Java, Spring Boot, Node.js, FastAPI" },
  { icon: Cloud, label: "Cloud & DevOps", description: "AWS, Kubernetes, Docker, Terraform" },
  { icon: Database, label: "Databases", description: "PostgreSQL, MongoDB, Redis, DynamoDB" },
  { icon: Brain, label: "AI/ML Integration", description: "OpenAI, Gemini, Vertex AI, LLMs" },
  { icon: Zap, label: "Full Stack", description: "React, TypeScript, React Native, REST/GraphQL" },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate full-stack engineer with 5+ years building scalable systems and AI-powered products. 
              Currently delivering enterprise solutions at UC IT Solution Center while pursuing Master's in IT.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card 
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10 group"
                >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{skill.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={300}>
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">What I Do</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Design and deploy microservices architectures on cloud platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Build AI-powered applications with LLM integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Optimize systems for performance, scalability, and reliability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Implement CI/CD pipelines and infrastructure-as-code</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Current Focus</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Enterprise Java</Badge>
                  <Badge variant="secondary">AI/LLM Systems</Badge>
                  <Badge variant="secondary">Cloud Architecture</Badge>
                  <Badge variant="secondary">Microservices</Badge>
                  <Badge variant="secondary">Full Stack Development</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Always learning and building. Currently exploring advanced AI agent systems, 
                  cloud-native architectures, and performance optimization techniques.
                </p>
              </div>
            </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}

