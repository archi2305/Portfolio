"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Stack } from "@/components/layout/stack"
import { Grid } from "@/components/layout/grid"
import { RevealOnScroll } from "@/components/shared/animations"
import { useActiveSection } from "@/hooks/use-active-section"
import { ProjectCard } from "@/components/ui/project-card"
import { Timeline } from "@/components/ui/timeline"
import { projects } from "@/data/projects"
import { experiencesData } from "@/data/experienceData"
import { profileConfig } from "@/data/config"
import { MobileHeader } from "@/components/layout/mobile-header"
import { Sidebar } from "@/components/layout/sidebar"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const sectionIds = ["about", "experience", "projects", "skills", "contact"]
  const activeSection = useActiveSection(sectionIds, 200)

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

  const socialLinks = [
    { platform: "github" as const, href: profileConfig.socials.github },
    { platform: "linkedin" as const, href: profileConfig.socials.linkedin },
    { platform: "leetcode" as const, href: profileConfig.socials.leetcode },
    { platform: "email" as const, href: profileConfig.emailMailto },
    { platform: "resume" as const, href: profileConfig.resumeUrl },
  ]

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-200 selection:bg-accent selection:text-accent-foreground">
      {/* Mobile Sticky Navigation Header */}
      <MobileHeader
        activeSection={activeSection}
        navItems={navItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Split Layout Container */}
      <Container className="relative flex flex-col lg:flex-row lg:gap-12 min-h-screen">
        
        {/* Left Fixed Sidebar (Desktop only) */}
        <Sidebar
          activeSection={activeSection}
          navItems={navItems}
          socialLinks={socialLinks}
        />

        {/* Right Scrollable Area */}
        <main className="flex-1 lg:w-2/3 lg:pl-12 lg:py-24 py-12 flex flex-col gap-24 lg:gap-36">
          
          {/* About Section */}
          <About />

          {/* Experience Section */}
          <Section id="experience" className="scroll-mt-24 min-h-[50vh]">
            <RevealOnScroll>
              <Stack gap={6}>
                <Heading as="h2" size="h2" className="border-b pb-2 border-border">
                  Experience
                </Heading>
                <Timeline items={experiencesData} />
              </Stack>
            </RevealOnScroll>
          </Section>

          {/* Projects Section */}
          <Section id="projects" className="scroll-mt-24 min-h-[50vh]">
            <RevealOnScroll>
              <Stack gap={6}>
                <Heading as="h2" size="h2" className="border-b pb-2 border-border">
                  Projects
                </Heading>
                <Grid cols={1} colsSm={2} gap={6}>
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
                </Grid>
              </Stack>
            </RevealOnScroll>
          </Section>

          {/* Skills Section */}
          <Skills />

          {/* Contact Section */}
          <Contact />
        </main>
      </Container>
    </div>
  )
}
