import * as React from "react"
import { cn } from "@/lib/utils"

export interface GradientBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
}

export function GradientBlur({ className, color = "bg-primary/20", ...props }: GradientBlurProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full filter blur-[80px] md:blur-[120px] opacity-55 animate-pulse [animation-duration:8s]",
        color,
        className
      )}
      {...props}
    />
  )
}

export interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string
}

export function GridPattern({
  className,
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray,
  ...props
}: GridPatternProps) {
  const id = React.useId()

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none opacity-[0.03] dark:opacity-[0.05]",
        className
      )}
      {...props}
    >
      <svg className="h-full w-full stroke-current" aria-hidden="true">
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
    </div>
  )
}

export function NoiseOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03] bg-repeat",
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
      {...props}
    />
  )
}

export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

export function Glow({ className, size = 300, ...props }: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[60px] dark:opacity-20",
        "bg-radial from-primary to-transparent",
        className
      )}
      style={{
        width: size,
        height: size,
      }}
      {...props}
    />
  )
}
