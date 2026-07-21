import * as React from "react"
import { Display, H3, Body, Caption } from "@/components/ui/typography"
import { Stack } from "@/components/layout/stack"
import { SocialButton } from "@/components/ui/social-buttons"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { profileConfig } from "@/data/config"
import { cn } from "@/lib/utils"

export interface SidebarProps {
  activeSection: string
  navItems: { label: string; id: string }[]
  socialLinks: { platform: "github" | "linkedin" | "twitter" | "email" | "resume"; href: string }[]
}

export function Sidebar({ activeSection, navItems, socialLinks }: SidebarProps) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:w-1/3 lg:h-screen lg:sticky lg:top-0 lg:py-24">
      <Stack gap={10} className="w-full">
        {/* Header info */}
        <Stack gap={3}>
          <Display className="text-3xl sm:text-4xl font-extrabold text-primary-text whitespace-nowrap">
            {profileConfig.name}
          </Display>
          <H3 className="text-xl font-medium text-primary-text/90">
            {profileConfig.title}
          </H3>
          <Body className="text-secondary-text max-w-sm mt-2 text-sm whitespace-pre-line leading-relaxed">
            {profileConfig.sidebarIntro}
          </Body>
        </Stack>

        {/* Desktop Navigation Links */}
        <nav aria-label="Desktop navigation menu" className="flex flex-col gap-1 w-fit">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <span
                  className={cn(
                    "mr-4 h-px w-8 bg-secondary-text/50 transition-all group-hover:w-16 group-hover:bg-primary-text",
                    isActive && "w-16 bg-primary-text"
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest text-secondary-text transition-colors group-hover:text-primary-text",
                    isActive && "text-primary-text"
                  )}
                >
                  {item.label}
                </span>
              </a>
            )
          })}
        </nav>
      </Stack>

      {/* Socials & Theme Toggle at bottom */}
      <Stack gap={4} className="mt-auto">
        <div role="group" aria-label="Social links" className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <SocialButton
              key={link.platform}
              platform={link.platform}
              href={link.href}
            />
          ))}
        </div>
        <div className="flex items-center justify-between w-full max-w-[240px] pt-4 border-t border-border">
          <Caption className="text-muted-foreground text-xs">Switch Theme</Caption>
          <ThemeToggle />
        </div>
      </Stack>
    </aside>
  )
}
