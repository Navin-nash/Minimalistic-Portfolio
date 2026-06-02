"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Calendar, Briefcase } from "lucide-react";

import { projects } from "@/data";

/* ─── Detailed Project Data sorted chronologically (latest first) ───── */
const PROJECT_DETAILS = [...projects].sort((a, b) => a.chronologicalOrder - b.chronologicalOrder);

type ProjectItem = typeof projects[number];

/* ─── Encapsulated Project Card Component ───────────────────────────── */
function ProjectCard({ project, isActive }: { project: ProjectItem; isActive: boolean }) {
  return (
    <article
      className="w-full max-w-xl transition-all duration-500"
    >
      <div
        className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl  transition-all duration-500"
      >
        {/* Title & Category Area */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] tracking-[0.2em] uppercase text-(--ds-text-tertiary) font-light"
              style={{ fontFamily: "var(--font-elms)" }}
            >
              {project.category}
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-normal text-(--ds-text-primary) leading-snug"
            style={{ fontFamily: "var(--font-elms)" }}
          >
            {project.title}
          </h2>
        </div>

        {/* Metadata Badges Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 px-4 border rounded-xl bg-(--ds-bg-base) text-[12px] leading-relaxed text-(--ds-text-secondary) font-light"
          style={{ borderColor: "var(--ds-border)", fontFamily: "var(--font-elms)" }}
        >
          <div className="flex items-center gap-2">
            <Briefcase size={13} className="text-[#7EDCEE] shrink-0" />
            <span><strong>Role:</strong> {project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={13} className="text-[#7EDCEE] shrink-0" />
            <span><strong>Timeline:</strong> {project.timeline}</span>
          </div>
        </div>

        {/* Dynamic Image Container */}
        <div
          className="w-full relative overflow-hidden rounded-xl border bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 aspect-16/10 flex items-center justify-center p-4 md:p-6"
          style={{ borderColor: "var(--ds-border)" }}
        >
          <div className="absolute inset-0 opacity-15 dark:opacity-5 bg-[radial-gradient(circle_at_center,#C7F6FE_0%,transparent_65%)] pointer-events-none" />
          <img
            src={project.thumbnail}
            alt={`${project.title} Preview`}
            className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-102"
            draggable={false}
          />
        </div>

        {/* Description Text */}
        <p
          className="text-[13px] sm:text-sm text-(--ds-text-secondary) leading-relaxed font-light"
          style={{ fontFamily: "var(--font-elms)" }}
        >
          {project.extendedDescription}
        </p>

        {/* Key Contributions & Technical Impact */}
        <div className="flex flex-col gap-2.5">
          <h4
            className="text-[10px] uppercase tracking-[0.18em] text-(--ds-text-primary) font-semibold mb-1"
            style={{ fontFamily: "var(--font-elms)" }}
          >
            Key Contributions & Technical Impact
          </h4>
          <ul className="flex flex-col gap-2 text-[12.5px] leading-relaxed text-(--ds-text-secondary) font-light">
            {project.details.map((detail, dIdx) => (
              <li key={dIdx} className="flex gap-2.5 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7EDCEE] shrink-0" />
                <span style={{ fontFamily: "var(--font-elms)" }}>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack Tags Grid */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded px-2.5 py-0.5 text-[11px] font-light leading-normal transition-colors"
              style={{
                backgroundColor: "var(--ds-accent-subtle)",
                border: "1px solid rgba(199,246,254,0.35)",
                color: "var(--ds-text-secondary)",
                fontFamily: "var(--font-elms)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─── Main Timeline Showcase Component ─────────────────────────────── */
export function WorksShowcase() {
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
    <div className="w-full min-h-screen py-24 select-none">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-10 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-(--ds-text-primary) tracking-tight leading-[1.05]"
            style={{ fontFamily: "var(--font-elms)" }}
          >
            Projects{" "}
          </h1>
          <div className="h-px w-full bg-(--ds-border) mt-2" />
          <p
            className="text-sm md:text-base text-(--ds-text-secondary) max-w-2xl leading-relaxed font-light mt-2"
            style={{ fontFamily: "var(--font-elms)" }}
          >
            A journey through the products, platforms, and intelligent systems I've designed, engineered, and brought to production.
          </p>
        </motion.div>
      </div>

      {/* Timeline Section Container */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-10 relative">
        
        {/* Central Vertical timeline line - Centered on lg: and aligned to left on mobile */}
        <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-4 bottom-4 w-px bg-neutral-200 dark:bg-neutral-800 pointer-events-none" />

        <div className="flex flex-col gap-20 lg:gap-32">
          {PROJECT_DETAILS.map((project, index) => {
            const isActive = index === activeIndex;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="relative flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-0"
              >
                {/* Invisible sentinel for scroll proximity detection */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-32 left-0 h-16 w-16 opacity-0 pointer-events-none"
                />

                {/* Central Axis Node (glowing dot) */}
                <div className="absolute left-6.75 lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-1/2 lg:-translate-y-1/2 z-10 shrink-0">
                  <div
                    className={`h-2.5 w-2.5 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-(--ds-bg-base) border-[#7EDCEE] scale-125 shadow-[0_0_8px_rgba(126,220,238,0.8)]"
                        : "bg-neutral-300 dark:bg-neutral-700 border-transparent"
                    }`}
                  />
                </div>

                {/* Left Panel */}
                <div className={`w-full lg:w-[calc(50%-2.5rem)] pl-14 pr-4 lg:px-0 flex ${
                  isEven 
                    ? "justify-start lg:justify-end order-2 lg:order-1" 
                    : "justify-start lg:justify-end order-1 lg:order-1"
                }`}>
                  {isEven ? (
                    /* Project Card on the Left (for Even rows on desktop) */
                    <ProjectCard project={project} isActive={isActive} />
                  ) : (
                    /* Date/Meta on the Left (for Odd rows on desktop) */
                    <div className="flex flex-col items-start lg:items-end text-left lg:text-right gap-0.5 sticky lg:relative top-24 lg:top-auto z-20">
                      <span
                        className={`text-xs md:text-sm font-semibold transition-colors duration-300 tracking-wider ${
                          isActive ? "text-(--ds-text-primary)" : "text-(--ds-text-tertiary)"
                        }`}
                        style={{ fontFamily: "var(--font-elms)" }}
                      >
                        {project.year}
                      </span>
                      <span
                        className={`text-[9px] md:text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 font-light ${
                          isActive ? "text-[#7EDCEE]" : "text-(--ds-text-tertiary)/70"
                        }`}
                        style={{ fontFamily: "var(--font-elms)" }}
                      >
                        {project.category.split("·")[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Panel */}
                <div className={`w-full lg:w-[calc(50%-2.5rem)] pl-14 pr-4 lg:px-0 flex ${
                  isEven 
                    ? "justify-start order-1 lg:order-2" 
                    : "justify-start order-2 lg:order-2"
                }`}>
                  {isEven ? (
                    /* Date/Meta on the Right (for Even rows on desktop) */
                    <div className="flex flex-col items-start text-left gap-0.5 sticky lg:relative top-24 lg:top-auto z-20">
                      <span
                        className={`text-xs md:text-sm font-semibold transition-colors duration-300 tracking-wider ${
                          isActive ? "text-(--ds-text-primary)" : "text-(--ds-text-tertiary)"
                        }`}
                        style={{ fontFamily: "var(--font-elms)" }}
                      >
                        {project.year}
                      </span>
                      <span
                        className={`text-[9px] md:text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 font-light ${
                          isActive ? "text-[#7EDCEE]" : "text-(--ds-text-tertiary)/70"
                        }`}
                        style={{ fontFamily: "var(--font-elms)" }}
                      >
                        {project.category.split("·")[0]}
                      </span>
                    </div>
                  ) : (
                    /* Project Card on the Right (for Odd rows on desktop) */
                    <ProjectCard project={project} isActive={isActive} />
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
