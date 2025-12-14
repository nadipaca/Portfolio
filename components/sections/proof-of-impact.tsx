import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "4+",
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
    <section id="impact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proof of Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm font-semibold mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

