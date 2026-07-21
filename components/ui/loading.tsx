import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
  size?: "sm" | "md" | "lg"
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 stroke-[2.5]",
    md: "h-6 w-6 stroke-2",
    lg: "h-8 w-8 stroke-[1.5]",
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin text-current", sizeClasses[size], className)}
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted/65", className)}
      {...props}
    />
  )
}

export interface LoadingDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export function LoadingDots({ className, size = "md", ...props }: LoadingDotsProps) {
  const sizeClasses = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-3 w-3",
  }

  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      <div className={cn("rounded-full bg-current animate-bounce [animation-delay:-0.3s]", sizeClasses[size])} />
      <div className={cn("rounded-full bg-current animate-bounce [animation-delay:-0.15s]", sizeClasses[size])} />
      <div className={cn("rounded-full bg-current animate-bounce", sizeClasses[size])} />
    </div>
  )
}
