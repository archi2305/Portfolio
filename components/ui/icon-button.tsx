import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface IconButtonProps
  extends React.ComponentProps<typeof Button> {
  "aria-label": string
}

export function IconButton({
  children,
  className,
  size = "icon",
  variant = "ghost",
  "aria-label": ariaLabel,
  ...props
}: IconButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("cursor-pointer", className)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Button>
  )
}
