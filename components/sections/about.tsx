import * as React from "react"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Stack } from "@/components/layout/stack"
import { RevealOnScroll } from "@/components/shared/animations"
import { Body } from "@/components/ui/typography"
import { profileConfig } from "@/data/config"

export function About() {
  return (
    <Section id="about" className="scroll-mt-24 min-h-[40vh]">
      <RevealOnScroll>
        <Stack gap={6}>
          <Heading as="h2" size="h2" className="border-b pb-2 border-border lg:hidden">
            About
          </Heading>
          <Stack gap={4} className="max-w-2xl text-secondary-text">
            {profileConfig.aboutParagraphs.map((paragraph, index) => (
              <Body key={index} className="text-base leading-relaxed">
                {paragraph}
              </Body>
            ))}
          </Stack>
        </Stack>
      </RevealOnScroll>
    </Section>
  )
}
