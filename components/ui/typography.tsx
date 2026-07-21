import * as React from "react"
import { cn } from "@/lib/utils"

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
}

export function Display({ className, as: Component = "h1", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-primary-text",
        className
      )}
      {...props}
    />
  )
}

export function H1({ className, as: Component = "h1", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-primary-text",
        className
      )}
      {...props}
    />
  )
}

export function H2({ className, as: Component = "h2", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-3xl font-bold tracking-tight sm:text-4xl text-primary-text",
        className
      )}
      {...props}
    />
  )
}

export function H3({ className, as: Component = "h3", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-2xl font-bold tracking-tight sm:text-3xl text-primary-text",
        className
      )}
      {...props}
    />
  )
}

export function Body({ className, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-base md:text-lg text-secondary-text leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export function Caption({ className, as: Component = "span", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-xs md:text-sm font-medium tracking-wide text-secondary-text/80",
        className
      )}
      {...props}
    />
  )
}
