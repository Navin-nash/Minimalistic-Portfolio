"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { svg as vsCodeSvg }    from "thesvg/visual-studio-code";
import { svg as claudeSvg }    from "thesvg/claude";
import { svg as firefoxSvg }   from "thesvg/firefox";
import { svg as dockerSvg }    from "thesvg/docker";
import { svg as postmanSvg }   from "thesvg/postman";
import { svg as linearSvg }    from "thesvg/linear";
import { svg as figmaSvg }     from "thesvg/figma";
import copilotIcon             from "thesvg/github-copilot";
import githubIcon              from "thesvg/github";
import { svg as slackSvg }     from "thesvg/slack";
import { svg as notionSvg }    from "thesvg/notion";
import { svg as spotifySvg }   from "thesvg/spotify";
import { svg as discordSvg }   from "thesvg/discord";
import {svg as antigravitySvg} from "thesvg/google-antigravity";
import {svg as codexSvg}       from "thesvg/codex-openai";
import {svg as opencodeSvg}    from "thesvg/opencode";
import vercelIcon              from "thesvg/vercel";
import zedIcon                 from "thesvg/zed";

type AppItem = {
  name: string;
  svg: string | null;       // light-mode SVG
  svgDark?: string;         // dark-mode SVG (when icons have themed variants)
  img?: string;
  fallback?: { abbrev: string; bg: string; fg: string };
};


const CRAFT_APPS: AppItem[] = [
  { name: "VS Code",     svg: vsCodeSvg },
  { name: "Antigravity", svg: antigravitySvg },
  { name: "Claude",      svg: claudeSvg },
  { name: "Firefox",     svg: firefoxSvg },
  { name: "Docker",      svg: dockerSvg },
  { name: "Postman",     svg: postmanSvg },
  { name: "Linear",      svg: linearSvg },
  { name: "Figma",       svg: figmaSvg },
  { name: "Copilot",     svg: copilotIcon.variants.light, svgDark: copilotIcon.variants.dark },
  { name: "GitHub",      svg: githubIcon.variants.light,  svgDark: githubIcon.variants.dark  },
  { name: "Vercel",      svg: vercelIcon.variants.light,  svgDark: vercelIcon.variants.dark  },
  { name: "Zed",         svg: zedIcon.variants.light,     svgDark: zedIcon.variants.dark     },
  { name: "OpenCode",    svg: opencodeSvg },
  { name: "Codex",       svg: codexSvg },
];

const DAILY_APPS: AppItem[] = [
  { name: "Slack",    svg: slackSvg },
  { name: "Notion",   svg: notionSvg },
  { name: "Spotify",  svg: spotifySvg },
  { name: "Cap.so",   svg: null, img: "/cap.png" },
  { name: "Discord",  svg: discordSvg },
];

function HardwareShowcase() {
  return (
    <div
      className="rounded-xl border overflow-hidden bg-(--ds-surface)"
      style={{ borderColor: "var(--ds-border)" }}
    >
      {/* Product image */}
      <div className="bg-white flex items-center justify-center px-8 py-10">
        <img
          src="/asus.webp"
          alt="Asus TUF Gaming A16"
          className="w-full max-w-sm object-contain"
          draggable={false}
        />
      </div>

      {/* Info strip */}
      <div
        className="px-5 py-4 border-t flex items-center justify-between gap-4"
        style={{ borderColor: "var(--ds-border)" }}
      >
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[9px] tracking-[0.2em] uppercase text-(--ds-text-tertiary)"
            style={{ fontFamily: "ui-monospace, monospace" }}
          >
            PRIMARY MACHINE
          </span>
          <h4
            className="text-[13px] font-semibold text-(--ds-text-primary)"
            style={{ fontFamily: "var(--font-elms)" }}
          >
            Asus TUF Gaming A16
          </h4>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span
            className="text-[9px] tracking-[0.15em] uppercase text-(--ds-text-tertiary)"
            style={{ fontFamily: "ui-monospace, monospace" }}
          >
            COLORWAY
          </span>
          <span
            className="text-[9px] tracking-[0.12em] uppercase font-medium text-(--ds-text-secondary)"
            style={{ fontFamily: "ui-monospace, monospace" }}
          >
            MECHA GRAY
          </span>
        </div>
      </div>
    </div>
  );
}

function AppIconCard({ item }: { item: AppItem }) {
  const { resolvedTheme } = useTheme();
  const activeSvg = resolvedTheme === "dark" && item.svgDark ? item.svgDark : item.svg;

  return (
    <div
      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border bg-(--ds-surface) transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
      style={{ borderColor: "var(--ds-border)", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="w-10 h-10 shrink-0 flex items-center justify-center">
        {activeSvg ? (
          <div
            className="w-10 h-10 [&>svg]:w-10 [&>svg]:h-10 [&>svg]:block"
            dangerouslySetInnerHTML={{ __html: activeSvg }}
          />
        ) : item.img ? (
          <img src={item.img} alt={item.name} className="w-10 h-10 object-contain rounded-xl" />
        ) : (
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-bold select-none"
            style={{ backgroundColor: item.fallback?.bg, color: item.fallback?.fg }}
          >
            {item.fallback?.abbrev}
          </div>
        )}
      </div>
      <span
        className="text-[11px] text-(--ds-text-secondary) font-medium text-center leading-tight"
        style={{ fontFamily: "var(--font-elms)" }}
      >
        {item.name}
      </span>
    </div>
  );
}

function SectionRow({
  index,
  label,
  title,
  description,
  children,
  last,
}: {
  index: string;
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`py-14 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12 ${last ? "" : "border-b border-(--ds-border)"}`}
    >
      <div className="md:w-56 shrink-0 flex flex-col gap-3">
        <span
          className="text-[9px] tracking-[0.22em] uppercase text-(--ds-text-tertiary)"
          style={{ fontFamily: "ui-monospace, monospace" }}
        >
          {label}
        </span>
        <h2
          className="text-2xl md:text-[1.75rem] font-light text-(--ds-text-primary) leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-elms)" }}
        >
          {title}
        </h2>
        <p
          className="text-[11.5px] text-(--ds-text-secondary) leading-relaxed font-light"
          style={{ fontFamily: "var(--font-elms)" }}
        >
          {description}
        </p>
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}

export function Uses() {
  return (
    <div className="select-none">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto w-full px-[4vw] pt-16 pb-10 border-b border-(--ds-border)">
        <h1
          className="text-4xl md:text-5xl font-normal text-(--ds-text-primary) tracking-tight leading-[1.08] mb-3"
          style={{ fontFamily: "var(--font-julius)" }}
        >
          What Powers{" "}
          <span
            className="text-(--ds-text-secondary) font-normal"
            style={{ fontFamily: "Babylonica, cursive", fontSize: "1.05em" }}
          >
            My Work
          </span>
        </h1>
        <p
          className="text-xs text-(--ds-text-secondary) max-w-md leading-relaxed font-light"
          style={{ fontFamily: "var(--font-elms)" }}
        >
          The hardware, software, and tools I rely on to build production systems — from first commit to cloud deployment.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto w-full px-[4vw] pb-24">
        <SectionRow
          index="01"
          label="HARDWARE"
          title="The Setup."
          description="Tuned for gaming, development, and everything in between — from local builds to long sessions."
        >
          <HardwareShowcase />
        </SectionRow>

        <SectionRow
          index="02"
          label="THE CRAFT"
          title="Dev Stack."
          description="Code editors, runtimes, containers, browsers, and AI tools that drive every project from local dev to production."
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {CRAFT_APPS.map((item) => (
              <AppIconCard key={item.name} item={item} />
            ))}
          </div>
        </SectionRow>

        <SectionRow
          index="03"
          label="DAILY FLOW"
          title="Everyday Apps."
          description="Communication, focus, and creative tools running in the background every day."
          last
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {DAILY_APPS.map((item) => (
              <AppIconCard key={item.name} item={item} />
            ))}
          </div>
        </SectionRow>
      </div>
    </div>
  );
}
