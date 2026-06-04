"use client";

import React from "react";
import { motion } from "motion/react";
import {
  CardHoverReveal,
  CardHoverRevealMain,
  CardHoverRevealContent,
} from "@/components/ui/reveal-on-hover";
import { projects } from "@/data";

const FEATURED_IDS = [1, 2, 3, 6];

const THUMBNAILS: Record<number, string> = {
  1: "/stagex.png",
  2: "/fundscout.png",
  3: "/cross.png",
  6: "/gendoc.png",
};

// 2+1 / 1+2 alternating rhythm
const SPANS: Record<number, string> = {
  1: "md:col-span-2",
  2: "col-span-1",
  3: "col-span-1",
  6: "md:col-span-2",
};

const featured = projects
  .filter((p) => FEATURED_IDS.includes(p.id))
  .sort((a, b) => FEATURED_IDS.indexOf(a.id) - FEATURED_IDS.indexOf(b.id));

export default function WorkGrid() {
  return (
    <section
      id="work"
      className="w-full py-10 px-4 md:px-10"
      style={{ backgroundColor: "var(--ds-bg)" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        {featured.map((project) => (
          <div key={project.id} className={SPANS[project.id] ?? "col-span-1"}>
            <CardHoverReveal className="rounded-xl overflow-hidden h-[300px] relative cursor-pointer">
              {/* Thumbnail — scales gently on hover */}
              <CardHoverRevealMain hoverScale={1.03} className="absolute inset-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${THUMBNAILS[project.id]})` }}
                />
              </CardHoverRevealMain>

              {/* Floating bottom-sheet panel — slides up on hover */}
              <CardHoverRevealContent
                className="rounded-2xl"
                style={{
                  backgroundColor: "rgba(18,18,22,0.88)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Category */}
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-3"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "var(--font-julius)",
                  }}
                >
                  {project.category.split("·")[0].trim()}
                </p>

                {/* Stack chips */}
                <p
                  className="text-[10px] tracking-[0.18em] uppercase mb-2"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-julius)",
                  }}
                >
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-0.5 text-[11px]"
                      style={{
                        backgroundColor: "rgba(199,246,254,0.10)",
                        border: "1px solid rgba(199,246,254,0.18)",
                        color: "#C7F6FE",
                        fontFamily: "var(--font-elms)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="text-[10px] tracking-[0.18em] uppercase mb-1.5"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-julius)",
                  }}
                >
                  About
                </p>
                <p
                  className="text-[12.5px] leading-relaxed line-clamp-2"
                  style={{
                    color: "rgba(255,255,255,0.60)",
                    fontFamily: "var(--font-elms)",
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>
              </CardHoverRevealContent>
            </CardHoverReveal>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
