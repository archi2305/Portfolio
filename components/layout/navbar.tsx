"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { IconButton } from "@/components/ui/icon-button"
import { cn } from "@/lib/utils"

export interface NavItem {
  label: string
  href: string
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[]
  logoText?: string
}

export function Navbar({
  className,
  items,
  logoText = "Portfolio",
  ...props
}: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeHash, setActiveHash] = React.useState("")

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("hashchange", handleHashChange)
    // Run initially
    handleScroll()
    handleHashChange()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        className
      )}
      {...props}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-primary-text hover:opacity-85 transition-opacity"
          >
            {logoText}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {items.map((item) => {
              const isActive = activeHash === item.href
              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isActive={isActive}
                >
                  {item.label}
                </NavLink>
              )
            })}
            <ThemeToggle />
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <IconButton
              variant="ghost"
              aria-label="Toggle mobile menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </IconButton>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border bg-background",
          isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <Container>
          <nav className="flex flex-col gap-4">
            {items.map((item) => {
              const isActive = activeHash === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors px-2 py-1 rounded-md hover:bg-muted",
                    isActive
                      ? "text-primary-text font-semibold bg-muted"
                      : "text-secondary-text hover:text-primary-text"
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

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

export function NavLink({
  children,
  className,
  isActive,
  href,
  ...props
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative text-sm font-medium transition-colors py-1 hover:text-primary-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
        isActive ? "text-primary-text" : "text-secondary-text",
        className
      )}
      {...props}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary-text rounded-full" />
      )}
    </a>
  )
}
