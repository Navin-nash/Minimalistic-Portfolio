import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills, frameworks, cloud infrastructure, and languages Navin Raj designs and builds with.",
};

export default function SkillsPage() {
  return (
    <main className="w-full min-h-screen" style={{ background: "var(--inner-page-gradient)" }}>
      <Skills />
    </main>
  );
}
