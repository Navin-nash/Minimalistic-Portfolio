import React from "react";
import { GitHubContributions } from "@/components/github-contributions";
import { profile } from "@/data";

export function GitHubSection() {
  return (
    <section id="github" className="w-full py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="rounded-xl p-6 transition-colors">
          <GitHubContributions
            username="Navin-nash"
            githubProfileUrl={profile.github}
          />
        </div>
      </div>
    </section>
  );
}
