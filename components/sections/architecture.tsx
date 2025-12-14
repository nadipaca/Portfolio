import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Microservices with clear ownership and API contracts",
  "OAuth2/JWT-based security and RBAC",
  "CI/CD with Docker + GitHub Actions",
  "Observability with logs, metrics, and alerts",
  "Performance tuning at DB and API layers",
  "Event-driven architecture for scalability",
  "Infrastructure-as-code with Terraform",
  "Container orchestration with Kubernetes",
];

export function Architecture() {
  return (
    <section id="architecture" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How I Build Production Systems
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Architecture principles and practices for scalable, reliable systems
        </p>
        <Card className="border-primary/10 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Core Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{principle}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

