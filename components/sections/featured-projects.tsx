"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play, Image as ImageIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const projects = [
  {
    title: "Healthcare Q&A Agent System",
    shortDescription: "Multi-agent AI system for healthcare workflows with enterprise security",
    tech: ["Gemini 2.5 Flash", "Google ADK", "FastAPI", "Vertex AI", "GKE", "JWT"],
    highlights: [
      "4+ specialized agents for triage, scheduling, and insurance",
      "HIPAA-compliant PII redaction with audit logs",
      "Vector database semantic matching"
    ],
    github: "https://github.com/nadipaca",
    demo: null,
    image: "/projects/healthcare-ai.jpg", // You'll add these images
    video: "/projects/healthcare-ai.mp4", // You'll add these videos
    hasMedia: true,
  },
  {
    title: "PlayGround App",
    shortDescription: "Real-time social mobile app with 2,000+ weekly active users",
    tech: ["React Native", "Firebase", "Firestore", "OAuth", "Real-time Systems"],
    highlights: [
      "30% faster UI rendering, sub-200ms image uploads",
      "Real-time chat, push notifications, location-sharing",
      "2,000+ weekly active users"
    ],
    github: "https://github.com/nadipaca",
    demo: null,
    image: "/projects/playground-app.jpg",
    video: "/projects/playground-app.mp4",
    hasMedia: true,
  },
  {
    title: "Code Review Agent",
    shortDescription: "AI-powered automated code review tool reducing PR time by 40%",
    tech: ["FastAPI", "OpenAI", "React", "GitHub Actions", "Python"],
    highlights: [
      "Context-aware comment generation",
      "GitHub Actions CI/CD integration",
      "40% reduction in review turnaround time"
    ],
    github: "https://github.com/nadipaca",
    demo: null,
    image: "/projects/code-review.jpg",
    video: "/projects/code-review.mp4",
    hasMedia: true,
  },
  {
    title: "NovaMart - Event-Driven Commerce",
    shortDescription: "Walmart/Amazon-style ecommerce platform on AWS EKS",
    tech: ["AWS", "EKS", "Terraform", "Spring Boot", "DynamoDB", "RDS", "S3"],
    highlights: [
      "Event-driven microservices architecture",
      "Terraform IaC for reproducible deployments",
      "Comprehensive unit testing for reliability"
    ],
    github: "https://github.com/nadipaca",
    demo: null,
    image: "/projects/novamart.jpg",
    video: "/projects/novamart.mp4",
    hasMedia: true,
  },
];

export function FeaturedProjects() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production systems demonstrating architecture, scalability, and technical depth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30"
            >
              {/* Media Section */}
              {project.hasMedia && (
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  {playingVideo === index ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      onEnded={() => setPlayingVideo(null)}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      {project.image ? (
                        <div className="relative w-full h-full">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                          <div className="text-center">
                            <ImageIcon className="h-16 w-16 text-primary/30 mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground">Add image/video</p>
                          </div>
                        </div>
                      )}
                      <button
                        onClick={() => project.video && setPlayingVideo(index)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                        aria-label="Play video"
                      >
                        {project.video && (
                          <div className="p-4 rounded-full bg-primary/90 hover:bg-primary transition-colors">
                            <Play className="h-8 w-8 text-white ml-1" fill="white" />
                          </div>
                        )}
                      </button>
                    </>
                  )}
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2 text-sm">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Instructions for adding media */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-dashed border-primary/30">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> To add project images/videos, create a <code className="px-1 py-0.5 bg-background rounded">public/projects/</code> folder 
            and add your media files (e.g., <code className="px-1 py-0.5 bg-background rounded">healthcare-ai.jpg</code>, <code className="px-1 py-0.5 bg-background rounded">playground-app.mp4</code>)
          </p>
        </div>
      </div>
    </section>
  );
}
