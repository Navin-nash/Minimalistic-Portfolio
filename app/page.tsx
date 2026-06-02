import Hero from "@/components/sections/Hero";
import { AboutBento } from "@/components/sections/AboutBento";
import WorkGrid from "@/components/sections/WorkGrid";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { LetsWorkTogether } from "@/components/lets-work-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutBento />
      <WorkGrid />
      <LetsWorkTogether />
      <GitHubSection />
    </main>
  );
}

