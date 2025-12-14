import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const metrics = [
  {
    icon: TrendingUp,
    value: "5+",
    label: "Years Production Experience",
    description: "Building and maintaining enterprise systems",
  },
  {
    icon: Shield,
    value: "99.99%",
    label: "System Uptime",
    description: "High-availability production deployments",
  },
  {
    icon: Zap,
    value: "40%",
    label: "Deployment Speed",
    description: "Faster CI/CD pipeline improvements",
  },
  {
    icon: TrendingUp,
    value: "35%",
    label: "Backend Latency Reduction",
    description: "Performance optimization achievements",
  },
  {
    icon: Users,
    value: "2,000+",
    label: "Weekly Active Users",
    description: "Systems supporting production traffic",
  },
];

export function ProofOfImpact() {
  return (
    <section id="impact" className="py-20 px-4 bg-muted/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Proof of Impact
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">{metric.value}</div>
                  <div className="text-sm font-semibold mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {metric.description}
                  </div>
                </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

