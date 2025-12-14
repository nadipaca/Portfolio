import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Interested in scalable systems, AI platforms, or backend-heavy roles.
          </h2>
          <p className="text-muted-foreground">
            Let's connect and discuss how I can contribute to your team.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
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
            <a href="mailto:charishma@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </div>
        <div className="pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Charishma Nadipalli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

