import type { Metadata } from "next";
import { Uses } from "@/components/sections/Uses";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://navinraj.dev";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The hardware, software, and tools Navin Raj Govindan uses daily as a Technical Lead — MacBook, Claude Code, Cursor, Docker, Figma, and the full dev setup.",
  openGraph: {
    title: "Uses — Navin Raj Govindan",
    description:
      "Hardware, software, and daily tools used by Navin Raj Govindan — Claude Code, Cursor, Docker, Figma, and more.",
    url: `${siteUrl}/uses`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tools used by Navin Raj Govindan",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses — Navin Raj Govindan",
    description:
      "Hardware, software, and daily tools used by Navin Raj Govindan.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/uses`,
  },
};

export default function UsesPage() {
  return (
    <main className="w-full" style={{ background: "var(--inner-page-gradient)" }}>
      <Uses />
    </main>
  );
}



