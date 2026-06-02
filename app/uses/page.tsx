import type { Metadata } from "next";
import { Uses } from "@/components/sections/Uses";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The hardware, software, and tools Navin Raj uses daily — from MacBook to Claude Code, Cursor, Docker, and Figma.",
};

export default function UsesPage() {
  return (
    <main className="w-full" style={{ background: "var(--inner-page-gradient)" }}>
      <Uses />
    </main>
  );
}



