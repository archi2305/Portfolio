import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  badge?: string
  align?: "left" | "center"
}

export function SectionHeader({
  className,
  title,
  subtitle,
  badge,
  align = "center",
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-8 md:mb-12",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <Badge variant="secondary" className="mb-3 px-3 py-1 font-medium tracking-wide uppercase">
          {badge}
        </Badge>
      )}
      <Heading
        as="h2"
        size="h2"
        className="text-3xl font-extrabold sm:text-4xl md:text-5xl text-primary-text tracking-tight"
      >
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base md:text-lg text-secondary-text leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
