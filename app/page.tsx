import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import { AboutBento } from "@/components/sections/AboutBento";
import WorkGrid from "@/components/sections/WorkGrid";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { LetsWorkTogether } from "@/components/lets-work-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://navinraj.dev";

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
  },
};

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

