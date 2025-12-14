import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ProofOfImpact } from "@/components/sections/proof-of-impact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Architecture } from "@/components/sections/architecture";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { TechStack } from "@/components/sections/tech-stack";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProofOfImpact />
      <FeaturedProjects />
      <Architecture />
      <Experience />
      <Education />
      <TechStack />
      <Footer />
    </main>
  );
}

