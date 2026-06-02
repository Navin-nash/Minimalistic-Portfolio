import type { Metadata } from "next";
import { WorksShowcase } from "@/components/sections/WorksShowcase";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Explore the professional works, SaaS platform integrations, intelligent multi-agent architectures, and infrastructure projects engineered by Navin Raj Govindan.",
};

export default function WorksPage() {
  return (
    <main className="w-full" style={{ background: "var(--inner-page-gradient)" }}>
      <WorksShowcase />
    </main>
  );
}
