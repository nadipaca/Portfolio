"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { AnimatedBubbles } from "@/components/animated-bubbles";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Animated Bubbles Background */}
      <AnimatedBubbles />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight relative z-10">
            Charishma Nadipalli
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Full Stack Software Developer
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Full Stack Engineer building scalable backend systems and AI-powered products used in production.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <Badge variant="outline" className="text-sm px-4 py-1.5">
            Java
          </Badge>
          <Badge variant="outline" className="text-sm px-4 py-1.5">
            Spring Boot
          </Badge>
          <Badge variant="outline" className="text-sm px-4 py-1.5">
            React
          </Badge>
          <Badge variant="outline" className="text-sm px-4 py-1.5">
            AWS
          </Badge>
          <Badge variant="outline" className="text-sm px-4 py-1.5">
            Microservices
          </Badge>
          <Badge variant="outline" className="text-sm px-4 py-1.5">
            AI/LLMs
          </Badge>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button size="lg" asChild>
            <a href="#projects">
              View Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

