"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Stack } from "@/components/layout/stack"
import { Grid } from "@/components/layout/grid"
import { RevealOnScroll } from "@/components/shared/animations"
import { Body } from "@/components/ui/typography"
import { useActiveSection } from "@/hooks/use-active-section"
import { ProjectCard } from "@/components/ui/project-card"
import { ProjectModal } from "@/components/ui/project-modal"
import { Timeline } from "@/components/ui/timeline"
import { projects } from "@/data/projects"
import { experiences } from "@/data/experience"
import { profileConfig } from "@/data/config"
import { Project } from "@/types/project"
import { MobileHeader } from "@/components/layout/mobile-header"
import { Sidebar } from "@/components/layout/sidebar"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

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
    { platform: "twitter" as const, href: profileConfig.socials.twitter },
    { platform: "email" as const, href: profileConfig.email },
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
          
          {/* Hero Section */}
          <Hero />

          {/* About Section Placeholder */}
          <Section id="about" className="scroll-mt-24 min-h-[50vh]">
            <RevealOnScroll>
              <Stack gap={4}>
                <Heading as="h2" size="h2" className="border-b pb-2 border-border">
                  About
                </Heading>
                <Body className="max-w-2xl text-secondary-text">
                  [About Section Content Placeholder] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </Body>
              </Stack>
            </RevealOnScroll>
          </Section>

          {/* Experience Section */}
          <Section id="experience" className="scroll-mt-24 min-h-[50vh]">
            <RevealOnScroll>
              <Stack gap={6}>
                <Heading as="h2" size="h2" className="border-b pb-2 border-border">
                  Experience
                </Heading>
                <Timeline items={experiences} />
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
                      onSelect={() => {
                        setSelectedProject(project)
                        setIsModalOpen(true)
                      }}
                    />
                  ))}
                </Grid>
              </Stack>
            </RevealOnScroll>
          </Section>

          {/* Skills Section Placeholder */}
          <Section id="skills" className="scroll-mt-24 min-h-[50vh]">
            <RevealOnScroll>
              <Stack gap={4}>
                <Heading as="h2" size="h2" className="border-b pb-2 border-border">
                  Skills
                </Heading>
                <Body className="max-w-2xl text-secondary-text">
                  [Skills Section Content Placeholder] Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Body>
              </Stack>
            </RevealOnScroll>
          </Section>

          {/* Contact Section Placeholder */}
          <Section id="contact" className="scroll-mt-24 min-h-[50vh]">
            <RevealOnScroll>
              <Stack gap={4}>
                <Heading as="h2" size="h2" className="border-b pb-2 border-border">
                  Contact
                </Heading>
                <Body className="max-w-2xl text-secondary-text">
                  [Contact Section Content Placeholder] Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Body>
              </Stack>
            </RevealOnScroll>
          </Section>

          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </main>
      </Container>
    </div>
  )
}
