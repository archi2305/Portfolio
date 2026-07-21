import * as React from "react"
import { Experience } from "@/types/experience"
import { Badge } from "@/components/ui/badge"
import { H3, Body, Caption } from "@/components/ui/typography"
import { Stack } from "@/components/layout/stack"
import { Calendar, MapPin, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Experience[]
}

export function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <div className={cn("relative pl-8 sm:pl-10", className)} {...props}>
      {/* Vertical Line Track */}
      <div className="absolute left-[11px] top-2 h-[calc(100%-16px)] w-[2px] bg-border/60" />

      <Stack gap={10} className="w-full">
        {items.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </Stack>
    </div>
  )
}

interface TimelineItemProps {
  item: Experience
}

function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className="group relative w-full">
      
      {/* Node Dot Indicator */}
      <div className="absolute -left-[35px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-border group-hover:bg-primary-text group-hover:border-primary-text transition-colors duration-300 z-10" />

      <Stack gap={4} className="w-full">
        
        {/* Role, Company and Meta Details */}
        <Stack gap={1} className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <H3 className="text-lg font-bold text-primary-text group-hover:text-primary-text/95 transition-colors">
              {item.role}
            </H3>
            <div className="flex items-center gap-1 text-muted-foreground text-xs font-mono font-medium shrink-0">
              <Calendar className="h-3.5 w-3.5" />
              <span>{item.duration}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-secondary-text">
            <span className="font-semibold text-primary-text">{item.company}</span>
            <span className="text-border/80 hidden sm:inline">•</span>
            <div className="flex items-center gap-1 text-secondary-text/80 text-xs">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span>{item.location}</span>
            </div>
          </div>
        </Stack>

        {/* Job Description */}
        <Body className="text-sm md:text-base leading-relaxed text-secondary-text max-w-2xl">
          {item.description}
        </Body>

        {/* Achievements Bullet List */}
        {item.achievements.length > 0 && (
          <div className="space-y-2 max-w-2xl">
            <Caption className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5" />
              Achievements
            </Caption>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-secondary-text/90">
              {item.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Badge Pack */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0">
              {tech}
            </Badge>
          ))}
        </div>

      </Stack>
    </div>
  )
}
