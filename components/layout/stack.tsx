import * as React from "react"
import { cn } from "@/lib/utils"

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col"
  directionSm?: "row" | "col"
  directionMd?: "row" | "col"
  align?: "start" | "center" | "end" | "stretch" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  gap?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12
}

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
}

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

const gapMap = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
}

export function Stack({
  className,
  direction = "col",
  directionSm,
  directionMd,
  align,
  justify,
  gap = 4,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "col" ? "flex-col" : "flex-row",
        directionSm && (directionSm === "col" ? "sm:flex-col" : "sm:flex-row"),
        directionMd && (directionMd === "col" ? "md:flex-col" : "md:flex-row"),
        align && alignMap[align],
        justify && justifyMap[justify],
        gapMap[gap],
        className
      )}
      {...props}
    />
  )
}
