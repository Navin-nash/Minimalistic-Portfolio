"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Globe } from "@/components/ui/cobe-globe";
import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from "@/components/ui/reveal-on-hover";
import { CloudOrbit, OrbitingImage } from "@/components/cloud-orbit";
import { ArrowRight, Users, Briefcase, GitBranch } from "lucide-react";

// ── Tech stack SVGs ──────────────────────────────────────────────────────────
import { svg as reactSvg }         from "thesvg/react";
import { svg as typescriptSvg }    from "thesvg/typescript";
import { svg as pythonSvg }        from "thesvg/python";
import { svg as fastapiSvg }       from "thesvg/fastapi";
import { svg as postgresqlSvg }    from "thesvg/postgresql";
import { svg as langchainSvg }     from "thesvg/langchain";
import { svg as langgraphSvg }     from "thesvg/langgraph";
import { svg as dockerSvg }        from "thesvg/docker";
import { svg as stripeSvg }        from "thesvg/stripe";
import { svg as githubActionsSvg } from "thesvg/github-actions";
import { svg as hetznerSvg }       from "thesvg/hetzner";

// ── Uses card SVGs ───────────────────────────────────────────────────────────
import { svg as claudeSvg }     from "thesvg/claude";
import { svg as vsCodeSvg }     from "thesvg/visual-studio-code";
import { svg as figmaSvg }      from "thesvg/figma";
import { svg as claudeCodeSvg } from "thesvg/claude-code";
import { svg as discordSvg }    from "thesvg/discord";
import { svg as firefoxSvg }    from "thesvg/firefox";

// ── Globe constants ──────────────────────────────────────────────────────────
const CHENNAI:     [number, number] = [13.0827,  80.2707];
const SEOUL:       [number, number] = [37.5665, 126.9780];
const LONDON:      [number, number] = [51.5074,  -0.1278];
const NEW_YORK:    [number, number] = [40.7128, -74.0060];
const LAS_VEGAS:   [number, number] = [36.1699,-115.1398];
const LOS_ANGELES: [number, number] = [34.0522,-118.2437];

const GLOBE_MARKERS = [
  { id: "chennai",     location: CHENNAI,     label: "Chennai"     },
  { id: "seoul",       location: SEOUL,       label: "Seoul"       },
  { id: "london",      location: LONDON,      label: "London"      },
  { id: "new-york",    location: NEW_YORK,    label: "New York"    },
  { id: "las-vegas",   location: LAS_VEGAS,   label: "Las Vegas"   },
  { id: "los-angeles", location: LOS_ANGELES, label: "Los Angeles" },
];

const GLOBE_ARCS = [
  { id: "arc-chennai-seoul",    from: CHENNAI, to: SEOUL       },
  { id: "arc-chennai-london",   from: CHENNAI, to: LONDON      },
  { id: "arc-chennai-newyork",  from: CHENNAI, to: NEW_YORK    },
  { id: "arc-chennai-lasvegas", from: CHENNAI, to: LAS_VEGAS   },
  { id: "arc-chennai-la",       from: CHENNAI, to: LOS_ANGELES },
  { id: "arc-seoul-newyork",    from: SEOUL,   to: NEW_YORK    },
];

// ── Uses icons ───────────────────────────────────────────────────────────────
const USES_ICONS = [
  { id: "discord",     svg: discordSvg    },
  { id: "firefox",     svg: firefoxSvg    },
  { id: "vscode",      svg: vsCodeSvg     },
  { id: "claude",      svg: claudeSvg     },
  { id: "docker",      svg: dockerSvg     },
  { id: "claude-code", svg: claudeCodeSvg },
  { id: "figma",       svg: figmaSvg      },
];

// ── CloudOrbit image data ────────────────────────────────────────────────────
const toUri = (s: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;

const CENTER_IMGS = [
  { url: toUri(reactSvg),      name: "React"      },
  { url: toUri(typescriptSvg), name: "TypeScript" },
  { url: toUri(pythonSvg),     name: "Python"     },
];
const ORBIT_A = [
  { url: toUri(fastapiSvg),    name: "FastAPI"    },
  { url: toUri(langchainSvg),  name: "LangChain"  },
];
const ORBIT_B = [
  { url: toUri(postgresqlSvg), name: "PostgreSQL" },
  { url: toUri(langgraphSvg),  name: "LangGraph"  },
];
const ORBIT_C = [
  { url: toUri(dockerSvg),     name: "Docker"     },
  { url: toUri(stripeSvg),     name: "Stripe"     },
];
const ORBIT_D = [
  { url: toUri(githubActionsSvg), name: "GitHub Actions" },
  { url: toUri(hetznerSvg),       name: "Hetzner"        },
];

// ── Sub-components ───────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  { step: "01", label: "Scope & align",       detail: "< 1 day"          },
  { step: "02", label: "Build & iterate",     detail: "daily PRs"        },
  { step: "03", label: "Review & polish",     detail: "rapid feedback"   },
  { step: "04", label: "Deploy & document",   detail: "zero surprises"   },
];

const LEADERSHIP_ITEMS = [
  {
    icon: <Users size={13} />,
    title: "Global team leadership",
    detail: "Distributed, cross-timezone",
  },
  {
    icon: <Briefcase size={13} />,
    title: "Executive alignment",
    detail: "C-suite & business stakeholders",
  },
  {
    icon: <GitBranch size={13} />,
    title: "Cross-functional decisions",
    detail: "Product, engineering, business",
  },
];

export function AboutBento() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">

        {/* ── Card 1: Process ── */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-6 flex flex-col gap-4 max-h-72">
          <div>
            <p
              className="text-[10px] tracking-[0.14em] uppercase text-neutral-400 dark:text-neutral-600 mb-1.5"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              How I work
            </p>
            <h3
              className="text-base font-semibold text-neutral-900 dark:text-white leading-snug"
              style={{ fontFamily: "var(--font-elms)" }}
            >
              Scoped to shipped — fast.
            </h3>
          </div>
          <div className="flex-1 flex items-center overflow-hidden">
            <div className="flex flex-col w-full">
              {PROCESS_STEPS.map((item, i) => (
                <div key={item.step} className="flex items-stretch gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3.5 h-3.5 rounded-full border-2 shrink-0 mt-0.5"
                      style={{
                        borderColor: i === PROCESS_STEPS.length - 1
                          ? "rgb(115,115,115)"
                          : isDark ? "rgb(64,64,64)" : "rgb(212,212,212)",
                        backgroundColor: i === PROCESS_STEPS.length - 1
                          ? "rgb(115,115,115)"
                          : "transparent",
                      }}
                    />
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-800 my-1" />
                    )}
                  </div>
                  <div className="pb-3 flex items-center justify-between w-full min-w-0">
                    <span
                      className="text-xs text-neutral-700 dark:text-neutral-300 font-medium truncate"
                      style={{ fontFamily: "var(--font-elms)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[10px] text-neutral-400 dark:text-neutral-600 ml-3 shrink-0"
                      style={{ fontFamily: "ui-monospace, monospace" }}
                    >
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Card 2: Tech Stack ── */}
        <div className="md:col-span-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-6 flex flex-col gap-2 overflow-hidden max-h-72">
          <div className="shrink-0">
            <p
              className="text-[10px] tracking-[0.14em] uppercase text-neutral-400 dark:text-neutral-600 mb-1"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              Tech Stack
            </p>
            <h3
              className="text-base font-semibold text-neutral-900 dark:text-white"
              style={{ fontFamily: "var(--font-elms)" }}
            >
              The stack behind everything I ship
            </h3>
          </div>
          <div className="flex-1 relative min-h-0">
            <CloudOrbit images={CENTER_IMGS} size={60} duration={2.5}>
              <OrbitingImage images={ORBIT_A} radius={80} size={38} speed={22} startAt={0}    duration={2.5} />
              <OrbitingImage images={ORBIT_B} radius={80} size={38} speed={22} startAt={0.25} duration={2.5} />
              <OrbitingImage images={ORBIT_C} radius={80} size={38} speed={22} startAt={0.5}  duration={2.5} />
              <OrbitingImage images={ORBIT_D} radius={80} size={38} speed={22} startAt={0.75} duration={2.5} />
            </CloudOrbit>
          </div>
        </div>

        {/* ── Card 3: Leadership ── */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-6 flex flex-col gap-4 max-h-72">
          <div>
            <p
              className="text-[10px] tracking-[0.14em] uppercase text-neutral-400 dark:text-neutral-600 mb-1.5"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              Leadership
            </p>
            <h3
              className="text-base font-semibold text-neutral-900 dark:text-white leading-snug"
              style={{ fontFamily: "var(--font-elms)" }}
            >
              Led teams. Aligned stakeholders. Shipped at scale.
            </h3>
          </div>
          <div className="flex-1 flex flex-col gap-2 justify-end">
            {LEADERSHIP_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800"
              >
                <div className="text-neutral-500 dark:text-neutral-400 shrink-0">
                  {item.icon}
                </div>
                <span
                  className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  style={{ fontFamily: "var(--font-elms)" }}
                >
                  {item.title}
                </span>
                <span
                  className="text-[10px] text-neutral-400 dark:text-neutral-600 ml-auto text-right hidden sm:block shrink-0"
                  style={{ fontFamily: "var(--font-elms)", fontWeight: 300 }}
                >
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Card 4: Timezones ── */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-5 pb-0 flex flex-col overflow-hidden max-h-72">
          <div className="shrink-0 pb-3">
            <p
              className="text-[10px] tracking-[0.14em] uppercase text-neutral-400 dark:text-neutral-500 mb-1.5"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              Flexible with timezones
            </p>
            <h3
              className="text-base font-semibold text-neutral-900 dark:text-white leading-snug"
              style={{ fontFamily: "var(--font-elms)" }}
            >
              Based in India, available globally
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <Globe
              className="absolute top-0 left-0 w-full"
              markers={GLOBE_MARKERS}
              arcs={GLOBE_ARCS}
              dark={isDark ? 1 : 0}
              baseColor={isDark ? [0.07, 0.07, 0.09] : [0.92, 0.92, 0.93]}
              markerColor={isDark ? [0.5, 0.72, 1.0] : [0.15, 0.5, 0.85]}
              arcColor={isDark ? [0.5, 0.72, 1.0] : [0.15, 0.5, 0.85]}
              glowColor={isDark ? [0.1, 0.14, 0.22] : [0.88, 0.90, 0.94]}
              mapBrightness={isDark ? 7 : 1.6}
              diffuse={isDark ? 1.4 : 1.0}
              theta={0.28}
              mapSamples={16000}
              arcWidth={0.4}
              arcHeight={0.35}
            />
          </div>
        </div>

        {/* ── Card 5: Uses ── */}
        <Link href="/uses">
          <CardHoverReveal className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 min-h-72 flex flex-col justify-between overflow-hidden">
            <CardHoverRevealMain hoverScale={1.01}>
              <div className="flex flex-col h-full">
                <div className="w-full overflow-hidden pt-8">
                  <div className="flex gap-3 justify-center">
                    {USES_ICONS.map((icon) => (
                      <div
                        key={icon.id}
                        className="shrink-0 w-18 h-18 rounded-[18px] bg-neutral-900 border border-neutral-800 flex items-center justify-center"
                      >
                        <div
                          className="w-10 h-10 [&>svg]:w-10 [&>svg]:h-10 [&>svg]:block"
                          dangerouslySetInnerHTML={{ __html: icon.svg }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center pt-12 ">
                  <p
                    className="text-[10px] tracking-[0.14em] uppercase text-neutral-500 mb-2"
                    style={{ fontFamily: "ui-monospace, monospace" }}
                  >
                    Uses
                  </p>
                  <h3
                    className="text-base font-semibold dark:text-white leading-snug text-center"
                    style={{ fontFamily: "var(--font-elms)" }}
                  >
                    Check out my favorite tools
                  </h3>
                </div>
              </div>
            </CardHoverRevealMain>
            <CardHoverRevealContent className="flex items-center justify-end bg-transparent backdrop-blur-none p-0 pr-1 pb-1">
              <div className="w-9 h-9 rounded-full dark:bg-neutral-50 bg-neutral-950 border border-neutral-200 flex items-center justify-center text-white dark:text-black">
                <ArrowRight size={15} />
              </div>
            </CardHoverRevealContent>
          </CardHoverReveal>
        </Link>

      </div>
    </section>
  );
}
