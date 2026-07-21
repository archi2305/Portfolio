import * as React from "react"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Stack } from "@/components/layout/stack"
import { Grid } from "@/components/layout/grid"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RevealOnScroll } from "@/components/shared/animations"
import { Body } from "@/components/ui/typography"
import { profileConfig } from "@/data/config"

export function Skills() {
  return (
    <Section id="skills" className="scroll-mt-24 min-h-[50vh]">
      <RevealOnScroll>
        <Stack gap={6}>
          <Heading as="h2" size="h2" className="border-b pb-2 border-border">
            Skills
          </Heading>
          
          <Body className="max-w-2xl text-secondary-text leading-relaxed">
            {profileConfig.skillsIntro}
          </Body>

          <Grid cols={1} colsSm={2} gap={6} className="mt-4">
            {profileConfig.skillsCategories.map((category) => (
              <Card key={category.title} className="h-full flex flex-col bg-card border border-border">
                <CardHeader className="pb-3 pt-5 px-6">
                  <CardTitle className="text-base font-bold text-primary-text uppercase tracking-wide">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-1.5 pb-5 px-6 mt-auto">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-[11px] px-2.5 py-0.5 font-medium transition-all hover:bg-secondary/80 hover:text-primary-text hover:border-primary-text/20 border border-transparent font-mono"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </Stack>
      </RevealOnScroll>
    </Section>
  )
}
