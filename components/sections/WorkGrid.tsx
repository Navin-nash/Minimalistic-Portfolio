"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { projects } from "@/data";

/* ─── Card grid spans (latest first, alternating 2+1 rhythm) ────────────── */
const THUMBNAILS: Record<number, string> = {
  1: "/stagex.png",
  2: "/fundscout.png",
  3: "/cross.png",
  4: "/inventory.png",
  5: "/rasp.png",
  6: "/gendoc.png",
};

const SPANS: Record<number, string> = {
  1: "md:col-span-2 h-[300px]",  // StageX     — featured wide
  2: "col-span-1 h-[300px]",     // Fundscout  — tall
  3: "col-span-1 h-[300px]",     // CROSS-E    — tall
  4: "md:col-span-2 h-[300px]",  // Inventory  — wide
  6: "md:col-span-2 h-[300px]",  // GenDoc     — featured wide
  5: "col-span-1 h-[300px]",     // Rasp Pi    — tall
};

/* ─── Expanded card content ──────────────────────────────────────────────── */
function CardContent({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="p-2">
      <p
        className="mb-1 text-[10px] tracking-[0.22em] uppercase opacity-70"
        style={{ fontFamily: "var(--font-julius)", color: "#fff" }}
      >
        {project.category}
      </p>
      <h3
        className="mb-3 text-2xl md:text-3xl leading-tight"
        style={{ fontFamily: "var(--font-julius)", color: "#fff" }}
      >
        {project.title}
      </h3>
      <p
        className="mb-4 max-w-md text-sm leading-relaxed opacity-80"
        style={{ color: "#fff", fontFamily: "var(--font-elms)", fontWeight: 300 }}
      >
        {project.description}
      </p>
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded px-2 py-0.5 text-[11px]"
            style={{
              backgroundColor: "rgba(199,246,254,0.12)",
              border: "1px solid rgba(199,246,254,0.25)",
              color: "#C7F6FE",
              fontFamily: "var(--font-elms)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Featured projects slice (IDs 1–6) ─────────────────────────────────── */
const FEATURED_IDS = [1, 2, 3, 4, 6, 5];

const cards = projects
  .filter((p) => FEATURED_IDS.includes(p.id))
  .map((p) => ({
    id:        p.id,
    title:     p.title,
    content:   <CardContent project={p} />,
    className: SPANS[p.id] ?? "col-span-1",
    thumbnail: THUMBNAILS[p.id],
  }));

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function WorkGrid() {
  return (
    <section id="work" className="w-full py-10" style={{ backgroundColor: "var(--ds-bg)" }}>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <LayoutGrid cards={cards} />
      </motion.div>
    </section>
  );
}
