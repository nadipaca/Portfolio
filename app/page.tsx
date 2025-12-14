import { Hero } from "@/components/sections/hero";
import { ProofOfImpact } from "@/components/sections/proof-of-impact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Architecture } from "@/components/sections/architecture";
import { Experience } from "@/components/sections/experience";
import { TechStack } from "@/components/sections/tech-stack";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProofOfImpact />
      <FeaturedProjects />
      <Architecture />
      <Experience />
      <TechStack />
      <Footer />
    </main>
  );
}

