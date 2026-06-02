"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { CircleUserRound, BriefcaseBusiness, Layers, Cpu } from "lucide-react";
import { useScroll, useMotionValueEvent } from "motion/react";
import {
  Navbar as UiNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { HomeIcon } from "@/components/ui/home";
import { ThemeToggleButton2 } from "@/components/theme-toggle-buttons";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Listen to scroll to sync with resizable-navbar's threshold (latest > 100)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  // Only pass About and Work links into the centered absolute NavItems component
  const DESKTOP_NAV_ITEMS = [
    {
      name: (
        <span className="flex items-center gap-2">
          <CircleUserRound size={16} strokeWidth={2} className="opacity-80" />
          <span>About</span>
        </span>
      ) as any,
      link: "/about",
    },
    {
      name: (
        <span className="flex items-center gap-2">
          <BriefcaseBusiness size={16} strokeWidth={2} className="opacity-80" />
          <span>Work</span>
        </span>
      ) as any,
      link: "/works",
    },
    {
      name: (
        <span className="flex items-center gap-2">
          <Layers size={16} strokeWidth={2} className="opacity-80" />
          <span>Uses</span>
        </span>
      ) as any,
      link: "/uses",
    },
    {
      name: (
        <span className="flex items-center gap-2">
          <Cpu size={16} strokeWidth={2} className="opacity-80" />
          <span>Skills</span>
        </span>
      ) as any,
      link: "/skills",
    },
  ];

  return (
    <UiNavbar className="fixed inset-x-0 top-0 z-50 px-5 md:px-10 flex justify-center pointer-events-none">
      {/* Desktop Navigation - No width classes in className so the native width: 100% -> 40% scroll animation runs untouched */}
      <NavBody className="hidden lg:flex gap-2 relative pointer-events-auto items-center justify-between">
        {/* Left Aligned: Home Icon Button & Vertical Separator */}
        <div className="relative z-50 flex items-center gap-3 pl-2 pointer-events-auto shrink-0">
          <Link
            href="/"
            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Go to landing page"
          >
            <HomeIcon size={18} className="size-4.5" />
          </Link>
          <div
            className={`h-4 w-px bg-neutral-200 dark:bg-neutral-800 transition-all duration-300 origin-center ${
              scrolled ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            }`}
          />
        </div>

        {/* Centered nav links */}
        <NavItems items={DESKTOP_NAV_ITEMS} />

        {/* Right Aligned: Vertical Separator & Theme Toggle */}
        <div className="relative z-50 flex items-center gap-3 pr-2 pointer-events-auto ml-auto shrink-0">
          <div
            className={`h-4 w-px bg-neutral-200 dark:bg-neutral-800 transition-all duration-300 origin-center ${
              scrolled ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            }`}
          />
          {mounted ? (
            <ThemeToggleButton2
              isDark={isDark}
              onClick={toggleTheme}
              className="size-7 p-1.5 transition-colors duration-150 hover:bg-(--nav-hover-bg) rounded-full"
            />
          ) : (
            <div className="h-7 w-7 rounded-full" />
          )}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="pointer-events-auto">
        <MobileNavHeader>
          {/* Theme Toggle on the left, Menu Toggle on the right */}
          <div className="relative z-50 flex items-center pointer-events-auto">
            {mounted ? (
              <ThemeToggleButton2
                isDark={isDark}
                onClick={toggleTheme}
                className="size-7 p-1.5 transition-colors duration-150 hover:bg-(--nav-hover-bg) rounded-full"
              />
            ) : (
              <div className="h-7 w-7 rounded-full" />
            )}
          </div>
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          className="flex flex-col gap-1"
        >
          {/* Home Link (Icon Only, Centered) */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-xl px-3 py-2.5 flex items-center justify-center transition-colors duration-100 hover:bg-(--nav-hover-bg)"
            aria-label="Home"
          >
            <HomeIcon size={20} className="size-5 text-neutral-500 dark:text-neutral-400" />
          </Link>

          {/* Mobile separator line */}
          <div className="h-px w-full bg-neutral-100 dark:bg-neutral-900 my-1" />

          {/* About Link (Icon + Name) */}
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-xl px-3 py-2.5 text-sm flex items-center gap-2.5 transition-colors duration-100 hover:bg-(--nav-hover-bg)"
            style={{
              color: "var(--ds-text-secondary)",
              fontFamily: "var(--font-elms)",
            }}
          >
            <CircleUserRound size={16} className="text-neutral-500 dark:text-neutral-400" />
            <span>About</span>
          </Link>

          {/* Work Link (Icon + Name) */}
          <Link
            href="/works"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-xl px-3 py-2.5 text-sm flex items-center gap-2.5 transition-colors duration-100 hover:bg-(--nav-hover-bg)"
            style={{
              color: "var(--ds-text-secondary)",
              fontFamily: "var(--font-elms)",
            }}
          >
            <BriefcaseBusiness size={16} className="text-neutral-500 dark:text-neutral-400" />
            <span>Work</span>
          </Link>

          {/* Uses Link (Icon + Name) */}
          <Link
            href="/uses"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-xl px-3 py-2.5 text-sm flex items-center gap-2.5 transition-colors duration-100 hover:bg-(--nav-hover-bg)"
            style={{
              color: "var(--ds-text-secondary)",
              fontFamily: "var(--font-elms)",
            }}
          >
            <Layers size={16} className="text-neutral-500 dark:text-neutral-400" />
            <span>Uses</span>
          </Link>

          {/* Skills Link (Icon + Name) */}
          <Link
            href="/skills"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-xl px-3 py-2.5 text-sm flex items-center gap-2.5 transition-colors duration-100 hover:bg-(--nav-hover-bg)"
            style={{
              color: "var(--ds-text-secondary)",
              fontFamily: "var(--font-elms)",
            }}
          >
            <Cpu size={16} className="text-neutral-500 dark:text-neutral-400" />
            <span>Skills</span>
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </UiNavbar>
  );
}
