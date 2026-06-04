import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://navinraj.dev";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and expertise of Navin Raj Govindan — AI/LangGraph agents, Next.js, React, TypeScript, Python, FastAPI, PostgreSQL, AWS, Docker, Kubernetes, and more.",
  openGraph: {
    title: "Skills — Navin Raj Govindan",
    description:
      "AI agents, Next.js, TypeScript, Python, FastAPI, PostgreSQL, AWS, Docker — the full technical stack of Navin Raj Govindan.",
    url: `${siteUrl}/skills`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Skills of Navin Raj Govindan",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills — Navin Raj Govindan",
    description:
      "AI agents, Next.js, TypeScript, Python, FastAPI, PostgreSQL, AWS, Docker.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/skills`,
  },
};

export default function SkillsPage() {
  return (
    <main className="w-full min-h-screen" style={{ background: "var(--inner-page-gradient)" }}>
      <Skills />
    </main>
  );
}
