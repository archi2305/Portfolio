import * as React from "react"
import Link from "next/link"
import { ExperienceData } from "@/data/experienceData"
import { Badge } from "@/components/ui/badge"
import { H3, Body } from "@/components/ui/typography"
import { Stack } from "@/components/layout/stack"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ExperienceData[]
}

export function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  )
}

interface TimelineItemProps {
  item: ExperienceData
}

function TimelineItem({ item }: TimelineItemProps) {
  return (
    <Link
      href={`/experience/${item.slug}`}
      className="group block w-full p-6 rounded-lg border border-transparent bg-transparent hover:bg-card/30 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`View detailed case study for ${item.role} at ${item.company}`}
    >
      <div className="flex flex-col md:flex-row md:gap-8 gap-4 w-full">
        {/* Left Column - Duration */}
        <div className="md:w-1/4 w-full shrink-0">
          <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase">
            {item.duration}
          </span>
        </div>

        {/* Right Column - Content */}
        <div className="flex-1">
          <Stack gap={3}>
            {/* Header: Role & Company */}
            <div className="flex items-start justify-between gap-2">
              <H3 className="text-base sm:text-lg font-bold text-primary-text group-hover:text-accent-foreground transition-colors flex items-center gap-1">
                <span>{item.role}</span>
                <span className="text-muted-foreground/60 font-normal">@</span>
                <span>{item.company}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary-text duration-300" />
              </H3>
            </div>

            {/* Location (optional metadata block) */}
            <span className="text-xs font-mono text-muted-foreground font-medium uppercase tracking-wider -mt-1 block">
              {item.location}
            </span>

            {/* Concise Description */}
            <Body className="text-sm leading-relaxed text-secondary-text max-w-2xl">
              {item.summary}
            </Body>

            {/* Wrap-friendly Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-[10px] px-2.5 py-0.5 font-medium transition-all group-hover:bg-secondary group-hover:text-primary-text group-hover:border-primary-text/25 border border-transparent font-mono"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Stack>
        </div>
      </div>
    </Link>
  )
}
