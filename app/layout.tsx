import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Navin Raj's Portfolio",
    template: "%s — Navin Raj",
  },
  description:
    "Global Technical Lead at WeCommit. Architecting and shipping production AI SaaS products — from LangGraph agent systems to cloud infrastructure.",
  authors: [{ name: "Navin Raj Govindan" }],
  keywords: [
    "Technical Lead",
    "Full Stack Engineer",
    "LangGraph",
    "AI",
    "Next.js",
    "TypeScript",
    "WeCommit",
    "Chennai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
