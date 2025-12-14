import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    company: "US Bank Fidelity (Cognizant)",
    role: "Full Stack Software Developer",
    bullets: [
      "Architected and deployed microservices on AWS EKS, reducing backend latency by 35% through database query optimization and caching strategies",
      "Implemented event-driven architecture with Kafka, processing 10K+ events/second for real-time inventory and order management",
      "Led infrastructure-as-code migration using Terraform, reducing deployment time by 40% and enabling zero-downtime deployments"
    ],
  },
  {
    company: "UC IT / Macy's Projects",
    role: "Full Stack Developer",
    bullets: [
      "Built React Native mobile applications with Firebase real-time synchronization, supporting 2,000+ weekly active users",
      "Developed RESTful APIs using Spring Boot and Node.js, maintaining 99.99% uptime for critical business operations",
      "Implemented OAuth2/JWT authentication and RBAC, ensuring secure access control across multi-tenant systems"
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience Snapshot
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{exp.role}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

