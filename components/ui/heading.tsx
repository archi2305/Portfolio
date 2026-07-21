import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-heading tracking-tight text-primary-text",
  {
    variants: {
      size: {
        h1: "text-4xl font-extrabold sm:text-5xl lg:text-6xl",
        h2: "text-3xl font-bold sm:text-4xl",
        h3: "text-2xl font-bold sm:text-3xl",
        h4: "text-xl font-semibold sm:text-2xl",
        h5: "text-lg font-semibold sm:text-xl",
        h6: "text-base font-medium sm:text-lg",
      },
    },
    defaultVariants: {
      size: "h2",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading({
  className,
  size,
  as,
  ...props
}: HeadingProps) {
  const Component = as || (size as "h1" | "h2" | "h3" | "h4" | "h5" | "h6") || "h2"
  const resolvedSize = size || (as as VariantProps<typeof headingVariants>["size"])
  return (
    <Component
      className={cn(headingVariants({ size: resolvedSize, className }))}
      {...props}
    />
  )
}
