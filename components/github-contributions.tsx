"use client"

import { use } from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Activity } from "@/components/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/contribution-graph"

export function GitHubContributions({
  contributions,
  githubProfileUrl,
  className,
}: {
  contributions: Promise<Activity[]>
  githubProfileUrl: string
  className?: string
}) {
  const data = use(contributions)

  return (
    <ContributionGraph
      className={cn("mx-auto py-2", className)}
      style={{ color: "var(--ds-text-secondary)", fontFamily: "var(--font-elms)" }}
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={2}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>
            <TooltipContent style={{ fontFamily: "var(--font-elms)", backgroundColor: "var(--ds-elevated)", color: "var(--ds-text-primary)", borderColor: "var(--ds-border)" }}>
              <p>
                {activity.count} contribution{activity.count !== 1 ? "s" : ""}{" "}
                on {format(new Date(activity.date), "dd.MM.yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div style={{ color: "var(--ds-text-secondary)", fontFamily: "var(--font-elms)", fontSize: "13px" }}>
              {totalCount.toLocaleString("en")} contributions in {year} on{" "}
              <a
                className="link-underline transition-opacity hover:opacity-75"
                style={{ color: "var(--ds-text-primary)", fontFamily: "var(--font-elms)", fontWeight: 500 }}
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend className="text-[var(--ds-text-secondary)] font-[var(--font-elms)] text-[12px]" />
      </ContributionGraphFooter>
    </ContributionGraph>
  )
}

export function GitHubContributionsFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <Spinner className="text-[var(--ds-text-secondary)]" />
    </div>
  )
}

