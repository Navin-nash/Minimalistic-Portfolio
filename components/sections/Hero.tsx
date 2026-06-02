"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const CustomArrowIcon = (props: React.ComponentProps<typeof ArrowUpRight>) => (
  <ArrowUpRight className="size-4 shrink-0" {...props} />
);

export default function Hero() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center overflow-x-hidden"
      style={{ background: "var(--page-gradient)" }}
    >
      <section className="mx-auto w-full max-w-5xl px-5 md:px-10 flex flex-col justify-center">
        {/* Top Shades */}
        <div
          aria-hidden="true"
          className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
        >
          <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,--theme(--color-foreground/.08),transparent)] contain-strict" />
        </div>

        {/* X Bold Faded Borders */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block pointer-events-none"
        >
          <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
          <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
        </div>

        {/* main content */}
        <div className="relative flex flex-col items-center justify-center gap-7 pt-32 pb-24">
          {/* X Content Faded Borders */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full overflow-hidden pointer-events-none"
          >
            <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
            <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
            <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
            <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
          </div>

          {/* Top Capsule Tag: WeCommit | Featured work */}
          <Link
            className={cn(
              "group mx-auto flex w-fit items-center gap-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 px-3.5 py-1 shadow-sm backdrop-blur-sm transition-all duration-200",
              "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-500 duration-500 ease-out"
            )}
            href="/works"
          >
            <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">Portfolio</span>
            <span className="block h-3 border-l border-neutral-300 dark:border-neutral-700" />
            <span className="text-xs text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 flex items-center gap-1 transition-colors duration-150">
              Selected Works
              <ArrowRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>

          {/* Main Tagline Title */}
          <h1
            className={cn(
              "fade-in slide-in-from-bottom-10 animate-in text-balance text-center text-4xl font-semibold tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-7xl",
              "text-neutral-900 dark:text-white"
            )}
            style={{
              fontFamily: "var(--font-elms)",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
            }}
          >
            Engineering products, <br className="hidden md:block" /> leading teams, and orchestrating devops
          </h1>

          {/* Bio Description Paragraph */}
          <p
            className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-400 tracking-wide delay-200 duration-500 ease-out leading-relaxed"
            style={{ fontFamily: "var(--font-elms)", fontWeight: 300 }}
          >
            I am a Technical Lead and Full Stack Engineer specializing in building robust web applications, mentoring cross-functional engineering teams, and managing scalable cloud infrastructures from commit to production deploy.
          </p>

          {/* Main Avatar-based CTA Button */}
          <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-3 fill-mode-backwards pt-4 delay-300 duration-500 ease-out pointer-events-auto">
            <EnhancedButton
              asChild
              variant="shine"
              Icon={CustomArrowIcon}
              iconPlacement="right"
              className="rounded-full group relative py-1.5 px-4 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm flex items-center gap-3 cursor-pointer text-neutral-800 hover:text-neutral-900 dark:text-neutral-200 transition-all duration-300"
            >
              <Link href="/about">
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden shrink-0 transition-colors duration-300 group-hover:border-primary-foreground/30 group-hover:bg-primary-foreground/10">
                  <img
                    src="/navin.jpg"
                    alt="Navin Raj"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <span
                  className="text-xs sm:text-sm font-medium tracking-wide"
                  style={{ fontFamily: "var(--font-elms)" }}
                >
                  About Navin
                </span>
              </Link>
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
}
