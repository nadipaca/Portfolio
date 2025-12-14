"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, FileText, ExternalLink, ArrowDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 py-20 pt-32 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <ScrollReveal>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-fade-in">
              Charishma Nadipalli
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-slide-up">
              Senior Java Software Engineer (5+ yrs)
            </p>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-slide-up">
              Full Stack Engineer building scalable backend systems and AI-powered products used in production.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Badge variant="outline" className="text-sm px-4 py-1.5 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default">
              Java
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default">
              Spring Boot
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default">
              React
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default">
              AWS
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default">
              Microservices
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default">
              AI/LLMs
            </Badge>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button size="lg" asChild className="hover:scale-105 transition-transform">
              <a href="#projects">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform">
              <a href="https://github.com/nadipaca" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform">
              <a href="https://linkedin.com/in/charishma-nadipalli" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

