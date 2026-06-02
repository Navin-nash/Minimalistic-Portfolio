"use client";

import { Zap, Package } from "lucide-react";
import TimeLine_01, { type TimeLine_01Entry } from "@/components/release-time-line";

const EXPERIENCE: TimeLine_01Entry[] = [
  {
    icon: Zap,
    company: "WeCommit Co., Ltd. (위커밋)",
    companyLink: "https://wecommit.ai",
    previewImage: "/wecommit.png",
    designation: "Global Lead · Full Stack Engineer",
    period: "Nov 2024 – Present",
    description:
      "Global Technical lead across the full product lifecycle — frontend, backend, agent architecture, DevOps, and deployment across multiple simultaneous production SaaS products targeting global and Korean markets.",
    responsibilities: [
      {
        title: "AI Agent Architecture",
        detail:
          "Architect standalone AI agent systems using LangGraph, LangChain, and Vercel AI SDK; design multi-step orchestration pipelines for document intelligence and business process automation.",
      },
      {
        title: "Cloud Infrastructure",
        detail:
          "Own infrastructure across AWS, Hetzner, Fly.io, and Vercel with CI/CD pipelines built on GitHub Actions; responsible for all production deployments and environment management.",
      },
      {
        title: "Full Stack Engineering",
        detail:
          "Build Next.js, React, Vite, and TypeScript frontends; Python and FastAPI backends against MySQL and PostgreSQL databases.",
      },
      {
        title: "Payment Integration",
        detail:
          "Integrate production payment infrastructure using Paddle and Stripe — subscription billing, webhook event processing, and payment lifecycle management for live SaaS products.",
      },
      {
        title: "Team Leadership",
        detail:
          "Lead and mentor a multicultural, multilingual engineering team across multiple timezones.",
      },
    ],
    technologies: [
      "LangGraph",
      "LangChain",
      "Vercel AI SDK",
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "MySQL",
      "AWS",
      "Hetzner",
      "Fly.io",
      "Vercel",
      "GitHub Actions",
      "Stripe",
      "Paddle",
    ],
  },
  {
    icon: Package,
    company: "Mitsogo Technologies",
    companyLink: "https://www.mitsogo.com",
    previewImage: "/mitsogo.png",
    designation: "Product Support Analyst",
    period: "Mar 2024 – Jul 2024",
    description:
      "Provided expert technical support for the Hexnode Unified Endpoint Management solution, troubleshooting complex issues across Android, iOS, macOS, and Windows platforms.",
    responsibilities: [
      {
        title: "Customer Success",
        detail:
          "Achieved high customer satisfaction by delivering clear, effective solutions via chat and email, leveraging in-depth knowledge of backend configurations and device communication protocols.",
      },
      {
        title: "Endpoint Security",
        detail:
          "Functioned as a key point of contact for endpoint security and device management — resolving issues related to device enrollment, configuration, and security policy enforcement.",
      },
      {
        title: "Product Collaboration",
        detail:
          "Collaborated with the development team by escalating and providing detailed analysis for complex technical issues, aiding in product improvement and bug resolution.",
      },
    ],
    technologies: [
      "Hexnode UEM",
      "Android",
      "iOS",
      "macOS",
      "Windows",
      "MDM",
      "Endpoint Security",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="work-experience">
      <TimeLine_01 entries={EXPERIENCE} />
    </section>
  );
}
