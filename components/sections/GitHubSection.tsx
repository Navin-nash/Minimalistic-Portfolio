import React, { Suspense } from "react";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import { GitHubContributions, GitHubContributionsFallback } from "@/components/github-contributions";
import { profile } from "@/data";

export function GitHubSection() {
  // Fetch contribution data (returns a promise resolved in the client via use())
  const contributionsPromise = getCachedContributions("Navin-nash");

  return (
    <section id="github" className="w-full py-16">

      {/* Graph Area */}
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="rounded-xl p-6 transition-colors">
          <Suspense fallback={<GitHubContributionsFallback />}>
            <GitHubContributions
              contributions={contributionsPromise}
              githubProfileUrl={profile.github}
            />
          </Suspense>
        </div>
      </div>

    </section>
  );
}
