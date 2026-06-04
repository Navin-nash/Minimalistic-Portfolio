"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile, skills, education } from "@/data";
import ExperienceTimeline from "./ExperienceTimeline";
import { HoverLinkPreview } from "@/components/hover-link-preview";

/* ─── Constants ─────────────────────────────────────────────────────────── */

const TOC = [
  { id: "introduction",     label: "Introduction"     },
  { id: "work-experience",  label: "Work Experience"  },
  { id: "studies",          label: "Studies"          },
];

const SOCIAL = [
  { Icon: FaGithub,        href: profile.github,            tip: "View GitHub"           },
  { Icon: FaLinkedinIn,    href: profile.linkedin,          tip: "Connect on LinkedIn"   },
  { Icon: FaInstagram,     href: profile.instagram,         tip: "Follow on Instagram"   },
  { Icon: MdOutlineEmail,  href: `mailto:${profile.email}`, tip: "Send an email"         },
];


function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded px-2.5 py-1 text-[12px] leading-none"
      style={{
        backgroundColor: "var(--ds-accent-subtle)",
        border: "1px solid rgba(199,246,254,0.35)",
        color: "var(--ds-text-secondary)",
        fontFamily: "var(--font-elms)",
      }}
    >
      {label}
    </span>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function About() {
  const [activeSection, setActiveSection] = useState("introduction");

  /* Scroll-spy: TOC */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--inner-page-gradient)" }}>

      {/* ── Name hero ───────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 md:px-10 pt-28 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Large name + profile image — first thing the eye lands on */}
          <div className="flex flex-row items-center justify-between gap-6 mb-6">
            <h1
              className="leading-[0.88] tracking-tight"
              style={{
                fontFamily: "var(--font-elms)",
                fontSize: "clamp(3.2rem, 11vw, 8.5rem)",
                color: "var(--ds-text-primary)",
              }}
            >
              Navin Raj Govindan
            </h1>
            <div 
              className="relative shrink-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border transition-all duration-300 shadow-sm"
              style={{ borderColor: "var(--ds-border)", backgroundColor: "var(--ds-surface)" }}
            >
              <img
                src="/navin.jpg"
                alt="Navin Raj Govindan"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Designation row */}
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <span
              className="text-base md:text-lg"
              style={{
                fontFamily: "var(--font-julius)",
                color: "var(--ds-text-secondary)",
                letterSpacing: "0.06em",
              }}
            >
              Full Stack Engineer
            </span>
            <span style={{ color: "var(--ds-border)" }}>·</span>
            <span
              className="flex items-center gap-1.5 text-sm"
              style={{ color: "var(--ds-text-tertiary)", fontFamily: "var(--font-elms)" }}
            >
              <MapPin size={12} strokeWidth={1.5} />
              Chennai, India
            </span>
          </div>

          {/* Social links with tooltips */}
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ Icon, href, tip }) => (
              <Tooltip key={tip}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={tip}
                    className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-150"
                    style={{
                      backgroundColor: "var(--ds-surface)",
                      border: "1px solid var(--ds-border)",
                      color: "var(--ds-text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--ds-accent)";
                      el.style.backgroundColor = "var(--ds-accent-subtle)";
                      el.style.color = "var(--ds-text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--ds-border)";
                      el.style.backgroundColor = "var(--ds-surface)";
                      el.style.color = "var(--ds-text-secondary)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">{tip}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Two-column layout ───────────────────────────────── */}
      <div className="mx-auto w-full max-w-360 px-5 md:px-10 lg:px-16 pb-28">
        <div className="flex gap-10 lg:gap-16 w-full">

          {/* Sticky TOC — desktop only */}
          <aside className="hidden lg:block w-48 shrink-0">
            <div
              className="sticky top-28 rounded-2xl p-5"
              style={{
                backgroundColor: "var(--ds-surface)",
                border: "1px solid var(--ds-border)",
              }}
            >
              <p
                className="mb-5 text-[10px] tracking-[0.24em]"
                style={{ fontFamily: "var(--font-julius)", color: "var(--ds-text-tertiary)" }}
              >
                CONTENTS
              </p>
              <nav className="flex flex-col gap-4">
                {TOC.map(({ id, label }) => {
                  const active = activeSection === id;
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="flex items-center gap-3 text-sm transition-all duration-200"
                      style={{
                        color: active ? "var(--ds-text-primary)" : "var(--ds-text-tertiary)",
                        fontFamily: "var(--font-elms)",
                        fontWeight: active ? 400 : 300,
                        textDecoration: "none",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      <span
                        className="shrink-0 transition-all duration-200"
                        style={{
                          display: "inline-block",
                          width: active ? "18px" : "12px",
                          height: "1px",
                          backgroundColor: active ? "var(--ds-text-primary)" : "var(--ds-text-tertiary)",
                        }}
                      />
                      {label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ── Content ─────────────────────────────────────── */}
          <div className="grow min-w-0 max-w-3xl flex flex-col gap-20 mx-auto">

            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-28 flex flex-col gap-6">
              <p
                className="text-[1.05rem] leading-relaxed"
                style={{ color: "var(--ds-text-secondary)", fontFamily: "var(--font-elms)", fontWeight: 300 }}
              >
                I design and build production AI systems — LangGraph multi-agent pipelines, real-time collaboration infrastructure, and the full-stack SaaS that ties them together.
              </p>
              <p
                className="text-[1.05rem] leading-relaxed"
                style={{ color: "var(--ds-text-secondary)", fontFamily: "var(--font-elms)", fontWeight: 300 }}
              >
                As Technical Lead at WeCommit, I own the full product lifecycle across multiple live platforms — architecture decisions, engineering execution, and the team that ships it all, across Chennai and Seoul.
              </p>
            </section>

            <div style={{ height: "1px", backgroundColor: "var(--ds-border)" }} />

            {/* 2. Work Experience */}
            <section id="work-experience" className="scroll-mt-28">
              <ExperienceTimeline/>
            </section>

            <div style={{ height: "1px", backgroundColor: "var(--ds-border)" }} />

            {/* 3. Studies */}
            <section id="studies" className="scroll-mt-28">
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "var(--ds-surface)",
                  border: "1px solid var(--ds-border)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3
                      className="mb-1 text-base leading-snug"
                      style={{ fontFamily: "var(--font-julius)", color: "var(--ds-text-primary)" }}
                    >
                      {education.degree}
                    </h3>
                    <div className="text-sm" style={{ color: "var(--ds-text-secondary)", fontFamily: "var(--font-elms)" }}>
                      <HoverLinkPreview
                        href="https://www.saec.ac.in"
                        previewImage="/saec.png"
                        imageAlt="S.A. Engineering College website preview"
                        className="relative inline-block cursor-pointer transition-colors duration-150 text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)]"
                        style={{ textDecoration: "none", fontFamily: "var(--font-elms)" }}
                      >
                        {education.institution}
                      </HoverLinkPreview>
                    </div>
                    <p className="mt-0.5 text-xs" style={{ color: "var(--ds-text-tertiary)", fontFamily: "var(--font-elms)" }}>
                      {education.affiliation}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-[11px] tabular-nums" style={{ fontFamily: "ui-monospace, monospace", color: "var(--ds-text-tertiary)" }}>
                      Graduated {education.graduated}
                    </p>
                    <p className="mt-1 text-sm font-medium" style={{ color: "var(--ds-text-primary)", fontFamily: "var(--font-elms)" }}>
                      GPA {education.gpa}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "CROSS-E — AI-powered image generation platform (DALL-E, React, Node.js, AWS S3)",
                    "Raspberry Pi personal cloud storage with multi-layer encryption (Veracrypt, OpenSSL)",
                    "Full-stack inventory management system on IBM Cloud with Docker & Kubernetes",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm"
                      style={{ color: "var(--ds-text-secondary)", fontFamily: "var(--font-elms)", fontWeight: 300 }}
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "var(--ds-text-tertiary)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>



          </div>
        </div>
      </div>
    </div>
  );
}
