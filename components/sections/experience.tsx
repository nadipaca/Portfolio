import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const experiences = [
  {
    company: "MCESC & Macy's Projects — UC Information Technology Solution Center",
    role: "Full Stack Developer",
    period: "May 2025 - Present",
    bullets: [
      "Applied object-oriented design and deployed enterprise Java Spring Boot microservices and Node.js services on AWS EC2 with Docker, improving deployment speed by 40% and supporting 99.99% uptime",
      "Built responsive React, TypeScript dashboards with offline-capable ShadCN forms, improving UX delivery speed",
      "Automated CI/CD pipelines (GitHub Actions) with Redis caching, improving reliability throughput by 40%",
      "Secured access and vulnerabilities via OAuth2/JWT and API Gateway, strengthening RBAC and compliance",
      "Tuned PostgreSQL queries using ORM optimizations and stored procedures to reduce latency by 35%"
    ],
  },
  {
    company: "US Bank Fidelity — Cognizant Technology Solutions",
    role: "Full Stack Developer",
    period: "Jul 2019 - Jul 2024",
    bullets: [
      "Built and deployed full-stack joint owner features (React + Spring Boot), reducing processing delays by 30% through robust API design and adherence to SDLC best practices",
      "Optimized multithreading, SQL queries, and high-volume ingestion pipelines, boosting throughput by 35%",
      "Built secure OAuth2/JWT APIs and centralized observability with Splunk, reducing incident MTTR by 45%",
      "Integrated GraphQL+React query services, cutting API over-fetching and improving response times by 40%",
      "Automated deployments (Docker, GitHub Actions) enhancing team delivery in Agile PI planning ceremonies"
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience Snapshot
          </h2>
        </ScrollReveal>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">{exp.role}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

