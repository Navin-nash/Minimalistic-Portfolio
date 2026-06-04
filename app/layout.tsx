import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { PostHogProvider } from "./posthog-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://navinraj.dev";

const ogImage = {
  url: `${siteUrl}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Navin Raj Govindan — Technical Lead & Full Stack Engineer",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navin Raj Govindan — Technical Lead & Full Stack Engineer",
    template: "%s | Navin Raj Govindan",
  },
  description:
    "Global Technical Lead at WeCommit. I architect and ship production AI SaaS products — LangGraph multi-agent systems, real-time collaboration platforms, and cloud infrastructure across AWS, Fly.io, and Vercel.",
  authors: [{ name: "Navin Raj Govindan", url: siteUrl }],
  creator: "Navin Raj Govindan",
  publisher: "Navin Raj Govindan",
  keywords: [
    "Navin Raj Govindan",
    "Navin Raj",
    "Technical Lead",
    "Full Stack Engineer",
    "AI Engineer",
    "LangGraph",
    "LangChain",
    "Vercel AI SDK",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "WeCommit",
    "Chennai",
    "India",
    "Remote Engineer",
    "AI SaaS",
    "Multi-agent systems",
    "Cloud infrastructure",
    "AWS",
    "Fly.io",
    "PostgreSQL",
    "Prisma",
    "Drizzle ORM",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Navin Raj Govindan",
    title: "Navin Raj Govindan — Technical Lead & Full Stack Engineer",
    description:
      "Global Technical Lead at WeCommit. I architect and ship production AI SaaS products — LangGraph multi-agent systems, real-time collaboration platforms, and cloud infrastructure.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navin Raj Govindan — Technical Lead & Full Stack Engineer",
    description:
      "Global Technical Lead at WeCommit. Architecting production AI SaaS products — LangGraph agents, real-time platforms, cloud infra.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@naviin.__",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  // iOS/Safari PWA
  appleWebApp: {
    capable: true,
    title: "Navin Raj",
    statusBarStyle: "default",
  },
};

// Separate viewport export — required in Next.js 14+ for themeColor
// Discord reads this for embed accent; Chrome/Safari use it for the browser chrome color
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Navin Raj Govindan",
      alternateName: "Navin Raj",
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
      jobTitle: "Technical Lead · Full Stack Engineer",
      worksFor: {
        "@type": "Organization",
        name: "WeCommit Co., Ltd.",
        url: "https://wecommit.kr",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "IN",
      },
      email: "govindannavinraj@gmail.com",
      sameAs: [
        "https://github.com/Navin-nash",
        "https://www.linkedin.com/in/navin-raj-govindan-345b49216/",
        "https://www.instagram.com/naviin.__/",
      ],
      knowsAbout: [
        "LangGraph",
        "LangChain",
        "Vercel AI SDK",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes",
        "AI Agent Systems",
        "Multi-agent Orchestration",
        "Full Stack Engineering",
        "Cloud Infrastructure",
      ],
      description:
        "Global Technical Lead at WeCommit architecting production AI SaaS products — LangGraph multi-agent systems, real-time collaboration platforms, and cloud infrastructure across AWS, Fly.io, and Vercel.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Navin Raj Govindan",
      description:
        "Portfolio and professional profile of Navin Raj Govindan — Technical Lead & Full Stack Engineer specializing in AI SaaS.",
      author: { "@id": `${siteUrl}/#person` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Navin Raj Govindan — Technical Lead & Full Stack Engineer",
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Babylonica&family=Diphylleia&family=Elms+Sans:ital,wght@0,100..900;1,100..900&family=Julius+Sans+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily: "var(--font-elms)",
          backgroundColor: "var(--ds-bg)",
          color: "var(--ds-text-primary)",
        }}
      >
        <PostHogProvider>
          <TooltipProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
              disableTransitionOnChange={false}
            >
              <Navbar />
              <Analytics />
              {children}
              <Footer />
            </ThemeProvider>
          </TooltipProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
