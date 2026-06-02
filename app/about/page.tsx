import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Global Technical Lead at WeCommit building AI-native SaaS products. Based in Chennai, India — working remotely across Seoul and global markets. Full-stack engineer: TypeScript, Python, LangGraph, FastAPI, AWS.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}
