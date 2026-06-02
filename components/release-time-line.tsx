"use client";

import React, { useEffect, useRef, useState } from "react";
import { HoverLinkPreview } from "./hover-link-preview";

export type Responsibility = {
  title: string;
  detail: string;
};

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  company: string;
  companyLink?: string;
  previewImage?: string;
  designation: string;
  period: string;
  description: string;
  responsibilities?: Responsibility[];
  technologies?: string[];
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
  {
    icon: () => null,
    company: "WeCommit Co., Ltd. (위커밋)",
    designation: "Global Lead · Full Stack Engineer",
    period: "Nov 2024 – Present",
    description:
      "Global Technical lead across the full product lifecycle — frontend, backend, agent architecture, DevOps, and deployment across multiple simultaneous production SaaS products.",
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
      "Vercel",
      "GitHub Actions",
      "Stripe",
      "Paddle",
    ],
  },
  {
    icon: () => null,
    company: "Mitsogo Technologies",
    designation: "Product Support Analyst",
    period: "Mar 2024 – Jul 2024",
    description:
      "Provided expert technical support for the Hexnode Unified Endpoint Management solution, troubleshooting complex issues across multiple platforms.",
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
    ],
  },
];

const formatCompanyName = (company: string) => {
  const koreanRegex = /([\uac00-\ud7a3\u3130-\u318f]+)/g;
  const parts = company.split(koreanRegex);
  return (
    <>
      {parts.map((part, index) => {
        if (/[\uac00-\ud7a3\u3130-\u318f]/.test(part)) {
          return (
            <span
              key={index}
              style={{ fontFamily: "var(--font-diphylleia)" }}
            >
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

export default function TimeLine_01({
  title = "",
  description = "",
  entries = defaultEntries,
  className = "",
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    let frame = 0;
    let last = activeIndex;

    const tick = () => {
      frame = requestAnimationFrame(tick);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== last) {
        last = bestIndex;
        setActiveIndex(bestIndex);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={"py-16 " + className}>
      <div className="container px-0">
        {(title || description) && (
          <div className="mx-auto max-w-3xl mb-8">
            {title && (
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="mx-auto max-w-3xl space-y-16 md:space-y-20">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
              >
                {/* Invisible sentinel for scroll proximity detection */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0 pointer-events-none"
                />

                {/* Sticky meta column */}
                <div className="top-20 flex h-min w-56 shrink-0 flex-col gap-1 md:sticky">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`h-1.5 w-1.5 rounded-full flex-shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-neutral-900 dark:bg-white"
                          : "bg-neutral-300 dark:bg-neutral-600"
                      }`}
                    />
                    {entry.companyLink && entry.previewImage ? (
                      <HoverLinkPreview
                        href={entry.companyLink}
                        previewImage={entry.previewImage}
                        imageAlt={`${entry.company} website preview`}
                        className={`text-xs font-medium transition-colors duration-300 leading-snug ${
                          isActive
                            ? "text-neutral-800 dark:text-neutral-200"
                            : "text-neutral-400 dark:text-neutral-500"
                        }`}
                        style={{ fontFamily: "var(--font-elms)", textDecoration: "none" }}
                      >
                        {formatCompanyName(entry.company)}
                      </HoverLinkPreview>
                    ) : (
                      <span
                        className={`text-xs font-medium transition-colors duration-300 leading-snug ${
                          isActive
                            ? "text-neutral-800 dark:text-neutral-200"
                            : "text-neutral-400 dark:text-neutral-500"
                        }`}
                        style={{ fontFamily: "var(--font-elms)" }}
                      >
                        {formatCompanyName(entry.company)}
                      </span>
                    )}
                  </div>
                  <span
                    className={`pl-4 text-xs transition-colors duration-300 ${
                      isActive
                        ? "text-neutral-400 dark:text-neutral-500"
                        : "text-neutral-300 dark:text-neutral-700"
                    }`}
                    style={{ fontFamily: "ui-monospace, monospace", fontSize: "11px" }}
                  >
                    {entry.period}
                  </span>
                </div>

                {/* Content column */}
                <article className="flex flex-col flex-1 gap-5 md:sticky top-20">
                  {/* Designation */}
                  <h2
                    className={`text-lg font-semibold leading-tight tracking-tight md:text-xl transition-colors duration-300 ${
                      isActive
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-400 dark:text-neutral-500"
                    }`}
                    style={{ fontFamily: "var(--font-elms)" }}
                  >
                    {entry.designation}
                  </h2>

                  {/* Description — always visible, dims when inactive */}
                  <p
                    className={`text-sm leading-relaxed transition-all duration-300 ${
                      isActive
                        ? "text-neutral-600 dark:text-neutral-400"
                        : "text-neutral-400/70 dark:text-neutral-600/70 line-clamp-2"
                    }`}
                    style={{ fontFamily: "var(--font-elms)", fontWeight: 300 }}
                  >
                    {entry.description}
                  </p>

                  {/* Expandable responsibilities + tech */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-6 pt-1">
                        {/* Responsibilities */}
                        {entry.responsibilities && entry.responsibilities.length > 0 && (
                          <ul className="space-y-3.5 pl-4 border-l border-neutral-200 dark:border-neutral-800">
                            {entry.responsibilities.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5"
                              >
                                <div className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 flex-shrink-0" />
                                <p
                                  className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                                  style={{ fontFamily: "var(--font-elms)", fontWeight: 300 }}
                                >
                                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                                    {item.title}:
                                  </span>{" "}
                                  {item.detail}
                                </p>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Technology chips */}
                        {entry.technologies && entry.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {entry.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center px-2.5 py-1 rounded text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 bg-transparent hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-150"
                                style={{
                                  fontFamily: "ui-monospace, monospace",
                                  fontSize: "10px",
                                  letterSpacing: "0.06em",
                                  textTransform: "uppercase",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
