"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { IconButton } from "@/components/ui/icon-button"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <IconButton aria-label="Toggle theme" variant="ghost" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem] opacity-0" />
      </IconButton>
    )
  }

  // Use resolvedTheme to accurately reflect the active theme (e.g. system mode resolving to dark)
  const isDark = resolvedTheme === "dark"

  return (
    <IconButton
      aria-label="Toggle theme"
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-primary-text" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-primary-text" />
      )}
    </IconButton>
  )
}
