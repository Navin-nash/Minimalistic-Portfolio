import type { Metadata } from "next";
import About from "@/components/sections/About";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://navinraj.dev";

export const metadata: Metadata = {
  title: "About",
  description:
    "Global Technical Lead at WeCommit building AI-native SaaS products. Based in Chennai, India — working remotely across Seoul and global markets. Full-stack engineer: TypeScript, Python, LangGraph, FastAPI, AWS.",
  openGraph: {
    title: "About — Navin Raj Govindan",
    description:
      "Global Technical Lead at WeCommit building AI-native SaaS products. Based in Chennai, India — working remotely across Seoul and global markets.",
    url: `${siteUrl}/about`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Navin Raj Govindan — Technical Lead & Full Stack Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Navin Raj Govindan",
    description:
      "Global Technical Lead at WeCommit building AI-native SaaS products. Chennai, India.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}
