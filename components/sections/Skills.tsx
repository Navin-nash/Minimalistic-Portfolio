import React from "react";
import Link from "next/link";
import { Terminal, Database, Globe, ArrowLeft } from "lucide-react";
import { skills } from "@/data";

// ── thesvg Imports ──────────────────────────────────────────────────────────
import { svg as reactSvg } from "thesvg/react";
import { svg as typescriptSvg } from "thesvg/typescript";
import { svg as fastapiSvg } from "thesvg/fastapi";
import { svg as postgresqlSvg } from "thesvg/postgresql";
import { svg as langchainSvg } from "thesvg/langchain";
import { svg as langgraphSvg } from "thesvg/langgraph";
import { svg as dockerSvg } from "thesvg/docker";
import { svg as githubactionsSvg } from "thesvg/github-actions";
import { svg as hetznerSvg } from "thesvg/hetzner";
import { svg as vercelSvg } from "thesvg/vercel";
import { svg as openaiSvg } from "thesvg/openai";
import { svg as geminiSvg } from "thesvg/google-gemini";
import { svg as nextjsSvg } from "thesvg/nextdotjs";
import { svg as viteSvg } from "thesvg/vite";
import { svg as tailwindSvg } from "thesvg/tailwind-css";
import { svg as nodejsSvg } from "thesvg/nodedotjs";
import { svg as expressSvg } from "thesvg/express";
import { svg as mysqlSvg } from "thesvg/mysql";
import { svg as mongodbSvg } from "thesvg/mongodb";
import { svg as prismaSvg } from "thesvg/prisma";
import { svg as awsSvg } from "thesvg/amazon-web-services";
import { svg as flyioSvg } from "thesvg/fly-io";
import { svg as kubernetesSvg } from "thesvg/kubernetes";
import { svg as javascriptSvg } from "thesvg/javascript";
import { svg as cppSvg } from "thesvg/cplusplus";
import { svg as javaSvg } from "thesvg/java";
import { svg as langsmithSvg } from "thesvg/langsmith-langchain";
import { svg as drizzleSvg } from "thesvg/drizzle-orm";
import { svg as sqlalchemySvg } from "thesvg/sqlalchemy";
import { svg as openapiSvg } from "thesvg/openapi";
import { svg as sqliteSvg } from "thesvg/sqlite";
import { svg as rustSvg } from "thesvg/rust";

// ── Custom SVGs for missing assets ──────────────────────────────────────────
const webhookSvg = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-(--ds-text-secondary)">
  <path d="M4 17a6 6 0 0 1-2-4.5c0-4.5 4-8.5 8.5-8.5S19 8 19 12.5a6 6 0 0 1-2 4.5" />
  <path d="M12 14v7" />
  <path d="m9 18 3 3 3-3" />
</svg>
`;

const pythonSvg = `
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
<defs>
<linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
<stop stop-color="#327EBD"/>
<stop offset="1" stop-color="#1565A7"/>
</linearGradient>
<linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDA4B"/>
<stop offset="1" stop-color="#F9C600"/>
</linearGradient>
</defs>
</svg>
`;

const cSvg = `
<svg viewBox="0 0 306 345" xmlns="http://www.w3.org/2000/svg" fill="none"><g clip-path="url(#a)"><path fill="#00599C" d="M302.107 258.262c2.401-4.159 3.893-8.845 3.893-13.053V99.139c0-4.207-1.49-8.892-3.892-13.051L153 172.175l149.107 86.087Z"/><path fill="#004482" d="m166.25 341.193 126.5-73.034c3.644-2.104 6.956-5.737 9.357-9.897L153 172.175 3.893 258.263c2.4 4.159 5.714 7.793 9.357 9.896l126.5 73.034c7.287 4.208 19.213 4.208 26.5 0Z"/><path fill="#659AD2" d="M302.108 86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25 3.156c-7.287-4.208-19.213-4.208-26.5 0L13.25 76.19C5.962 80.397 0 90.725 0 99.14v146.069c0 4.208 1.491 8.894 3.893 13.053L153 172.175l149.108-86.088Z"/><path fill="#fff" d="M153 274.175c-56.243 0-102-45.757-102-102s45.757-102 102-102c36.292 0 70.139 19.53 88.331 50.968l-44.143 25.544c-9.105-15.736-26.038-25.512-44.188-25.512-28.122 0-51 22.878-51 51 0 28.121 22.878 51 51 51 18.152 0 35.085-9.776 44.191-25.515l44.143 25.543c-18.192 31.441-52.04 50.972-88.334 50.972Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h306v344.35H0z"/></clipPath></defs></svg>
`;

// ── SVG Sanitizer to prevent ID/ClipPath collisions ──────────────────────────
export const sanitizeSvg = (svgContent: string, key: string) => {
  if (!svgContent) return "";
  const prefix = key.replace(/[^a-zA-Z0-9]/g, "-");
  let sanitized = svgContent
    .replace(/id="([^"]+)"/g, `id="${prefix}-$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${prefix}-$1)`);

  // Theme-sensitive icons: make white paths inherit text color (currentColor)
  const themeSensitive = ["Vercel", "Vercel AI SDK", "OpenAI", "Prisma", "MySQL", "Rust"];
  if (themeSensitive.includes(key)) {
    sanitized = sanitized
      .replace(/fill=["']#[fF]{3,6}["']/g, 'fill="currentColor"')
      .replace(/stroke=["']#[fF]{3,6}["']/g, 'stroke="currentColor"');
  }
  return sanitized;
};

// ── Constants & Helpers ─────────────────────────────────────────────────────
const svgIcons: Record<string, string> = {
  "LangGraph": langgraphSvg,
  "LangChain": langchainSvg,
  "Vercel AI SDK": vercelSvg,
  "OpenAI": openaiSvg,
  "Gemini": geminiSvg,
  "LangSmith": langsmithSvg,
  "Next.js": nextjsSvg,
  "React": reactSvg,
  "TypeScript": typescriptSvg,
  "Vite": viteSvg,
  "Tailwind CSS": tailwindSvg,
  "FastAPI": fastapiSvg,
  "Node.js": nodejsSvg,
  "Express.js": expressSvg,
  "REST APIs": openapiSvg,
  "Webhooks": webhookSvg,
  "PostgreSQL": postgresqlSvg,
  "MySQL": mysqlSvg,
  "MongoDB": mongodbSvg,
  "pgvector": postgresqlSvg,
  "Prisma": prismaSvg,
  "Drizzle ORM": drizzleSvg,
  "Tortoise ORM": sqlalchemySvg,
  "AWS": awsSvg,
  "Hetzner": hetznerSvg,
  "Fly.io": flyioSvg,
  "Vercel": vercelSvg,
  "GitHub Actions": githubactionsSvg,
  "Docker": dockerSvg,
  "Kubernetes": kubernetesSvg,
  "Python": pythonSvg,
  "JavaScript": javascriptSvg,
  "SQL": sqliteSvg,
  "C++": cppSvg,
  "Java": javaSvg,
  "C": cSvg,
  "Rust": rustSvg,
};

const getFallbackIcon = (skill: string) => {
  if (skill === "SQL" || skill === "pgvector") {
    return <Database size={18} className="text-(--ds-text-secondary) opacity-80" />;
  }
  if (skill === "REST APIs" || skill === "Webhooks") {
    return <Globe size={18} className="text-(--ds-text-secondary) opacity-80" />;
  }
  return <Terminal size={18} className="text-(--ds-text-secondary) opacity-80" />;
};

const CATEGORY_META: Record<string, { desc: string; num: string }> = {
  "AI / Agents": {
    desc: "Autonomous LLM systems, cognitive multi-agent orchestration pipelines, and structured generation engines.",
    num: "01",
  },
  "Frontend": {
    desc: "Modern user interfaces, client-side application architecture, static page generation, and aesthetic web design.",
    num: "02",
  },
  "Backend": {
    desc: "Performant API servers, asynchronous request routing systems, webhooks, and scalable application logic.",
    num: "03",
  },
  "Databases": {
    desc: "Relational, document, and vector storage engines, indexing strategies, database drivers, and ORMs.",
    num: "04",
  },
  "Cloud / DevOps": {
    desc: "CI/CD automation workflows, virtualization containers, edge hosting networks, and cloud computing clusters.",
    num: "05",
  },
  "Languages": {
    desc: "Type-safe, interpreted, scripting, and system programming languages compiled and executed on target platforms.",
    num: "06",
  },
};

function SectionRow({
  num,
  title,
  desc,
  children,
}: {
  num: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-12 md:py-16 border-b border-(--ds-border) flex flex-col md:flex-row gap-8 md:gap-12">
      <div className="md:w-56 shrink-0 flex flex-col gap-3">
        <h2
          className="text-2xl md:text-[1.65rem] font-light text-(--ds-text-primary) leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-elms)" }}
        >
          {title}
        </h2>
        <p
          className="text-[11.5px] text-(--ds-text-secondary) leading-relaxed font-light"
          style={{ fontFamily: "var(--font-elms)" }}
        >
          {desc}
        </p>
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}

// ── Skills Component ────────────────────────────────────────────────────────
export function Skills() {
  return (
    <div className="select-none max-w-4xl mx-auto w-full px-[4vw] pt-24 pb-20">
      

      {/* Page Header */}
      <div className="pb-10 border-b border-(--ds-border)">
        <h1
          className="mb-4 leading-[0.88] tracking-tight text-[clamp(2.5rem,8vw,5.5rem)]"
          style={{ fontFamily: "var(--font-elms)", color: "var(--ds-text-primary)" }}
        >
          Skills
        </h1>
        <p
          className="text-base font-light text-(--ds-text-secondary) tracking-wide leading-relaxed"
          style={{ fontFamily: "var(--font-elms)" }}
        >
          Technologies, frameworks, infrastructure platforms, and languages I use to build robust full-stack AI-native systems.
        </p>
      </div>

      {/* Content Rows */}
      <div className="flex flex-col">
        {Object.entries(skills).map(([category, tags]) => {
          const meta = CATEGORY_META[category] || { desc: "Core technical tools and methodologies.", num: "00" };
          return (
            <SectionRow key={category} num={meta.num} title={category} desc={meta.desc}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tags.map((t) => {
                  const svg = svgIcons[t];
                  return (
                    <div
                      key={t}
                      className="group flex items-center gap-3 p-3 rounded-xl border bg-(--ds-surface) hover:bg-(--ds-elevated) transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs cursor-default border-(--ds-border)"
                      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                    >
                      <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                        {svg ? (
                          <div
                            className="w-5 h-5 text-(--ds-text-primary) [&>svg]:w-5 [&>svg]:h-5 [&>svg]:block transition-transform duration-200 group-hover:scale-105"
                            dangerouslySetInnerHTML={{ __html: sanitizeSvg(svg, t) }}
                          />
                        ) : (
                          getFallbackIcon(t)
                        )}
                      </div>
                      <span
                        className="text-[12px] text-(--ds-text-secondary) group-hover:text-(--ds-text-primary) transition-colors duration-150 font-medium"
                        style={{ fontFamily: "var(--font-elms)" }}
                      >
                        {t}
                      </span>
                    </div>
                  );
                })}
              </div>
            </SectionRow>
          );
        })}
      </div>
    </div>
  );
}
