import type { Metadata } from "next";
import { WorksShowcase } from "@/components/sections/WorksShowcase";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://navinraj.dev";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Explore the production SaaS platforms, intelligent multi-agent architectures, and infrastructure projects engineered by Navin Raj Govindan — including StageX, Fundscout, GenDoc, and CROSS-E.",
  openGraph: {
    title: "Works — Navin Raj Govindan",
    description:
      "Production SaaS platforms, AI multi-agent systems, and infrastructure projects by Navin Raj Govindan — StageX, Fundscout, GenDoc, CROSS-E.",
    url: `${siteUrl}/works`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Works by Navin Raj Govindan",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Works — Navin Raj Govindan",
    description:
      "Production AI SaaS platforms and infrastructure projects by Navin Raj Govindan.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/works`,
  },
};

export default function WorksPage() {
  return (
    <main className="w-full" style={{ background: "var(--inner-page-gradient)" }}>
      <WorksShowcase />
    </main>
  );
}
