import * as React from "react"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { IconButton } from "@/components/ui/icon-button"
import { profileConfig } from "@/data/config"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface MobileHeaderProps {
  activeSection: string
  navItems: { label: string; id: string }[]
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export function MobileHeader({
  activeSection,
  navItems,
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md lg:hidden">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-primary-text">
            {profileConfig.name}
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <IconButton
              variant="ghost"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </IconButton>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-nav-panel"
        aria-hidden={!mobileMenuOpen}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-background",
          mobileMenuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <Container>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "text-primary-text font-semibold bg-muted"
                      : "text-secondary-text hover:text-primary-text hover:bg-muted/40"
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </Container>
      </div>
    </header>
  )
}
