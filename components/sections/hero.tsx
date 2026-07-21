import * as React from "react"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Stack } from "@/components/layout/stack"
import { SlideUp } from "@/components/shared/animations"
import { H1, H2, Body } from "@/components/ui/typography"
import { buttonVariants } from "@/components/ui/button"
import { profileConfig } from "@/data/config"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <Section id="hero" className="py-0">
      <SlideUp duration={0.6}>
        <Stack gap={6} className="max-w-2xl">
          <Badge variant="secondary" className="w-fit px-3 py-1 font-semibold uppercase tracking-wider text-xs">
            Welcome to my portfolio
          </Badge>
          <div className="space-y-3">
            <span className="text-base text-secondary-text font-medium block">Hi, my name is</span>
            <H1 className="text-4xl sm:text-6xl font-black text-primary-text leading-none tracking-tight">
              {profileConfig.name}.
            </H1>
            <H2 className="text-3xl sm:text-5xl font-extrabold text-secondary-text leading-tight tracking-tight">
              {profileConfig.tagline}
            </H2>
          </div>
          <Body className="text-secondary-text">
            {profileConfig.intro}
          </Body>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              View Projects
            </a>
            <a
              href={profileConfig.resumeUrl}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Download Resume
            </a>
          </div>
        </Stack>
      </SlideUp>
    </Section>
  )
}
