"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { buttonVariants } from "@/components/ui/button"
import { IconButton } from "@/components/ui/icon-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { SocialButton } from "@/components/ui/social-buttons"
import { Stack } from "@/components/layout/stack"
import { Grid } from "@/components/layout/grid"
import { SlideUp, RevealOnScroll } from "@/components/shared/animations"
import { Display, H1, H2, H3, Body, Caption } from "@/components/ui/typography"
import { useActiveSection } from "@/hooks/use-active-section"
import { ProjectCard } from "@/components/ui/project-card"
import { ProjectModal } from "@/components/ui/project-modal"
import { Timeline } from "@/components/ui/timeline"
import { projects } from "@/data/projects"
import { experiences } from "@/data/experience"
import { Project } from "@/types/project"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

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
    { platform: "github" as const, href: "https://github.com" },
    { platform: "linkedin" as const, href: "https://linkedin.com" },
    { platform: "twitter" as const, href: "https://twitter.com" },
    { platform: "email" as const, href: "mailto:alex@morgan.com" },
    { platform: "resume" as const, href: "#" },
  ]

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-200 selection:bg-accent selection:text-accent-foreground">
      {/* Mobile Sticky Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md lg:hidden">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-lg font-bold tracking-tight text-primary-text">
              Alex Morgan
            </a>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <IconButton
                variant="ghost"
                aria-label="Toggle navigation menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </IconButton>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Dropdown */}
        <div
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
                      "text-sm font-medium transition-colors px-2 py-1 rounded-md",
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

      {/* Main Split Layout Container */}
      <Container className="relative flex flex-col lg:flex-row lg:gap-12 min-h-screen">
        
        {/* Left Fixed Sidebar (Desktop only) */}
        <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:w-1/3 lg:h-screen lg:sticky lg:top-0 lg:py-24">
          <Stack gap={10} className="w-full">
            {/* Header info */}
            <Stack gap={3}>
              <Display className="text-4xl sm:text-5xl font-extrabold text-primary-text">
                Alex Morgan
              </Display>
              <H3 className="text-xl font-medium text-primary-text/90">
                Senior Frontend Architect
              </H3>
              <Body className="text-secondary-text max-w-sm mt-2 text-sm">
                I build high-performance, accessible, and clean digital experiences for the modern web.
              </Body>
            </Stack>

            {/* Desktop Navigation Links */}
            <nav className="flex flex-col gap-1 w-fit">
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
            <div className="flex items-center gap-4">
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

        {/* Right Scrollable Area */}
        <main className="flex-1 lg:w-2/3 lg:pl-12 lg:py-24 py-12 flex flex-col gap-24 lg:gap-36">
          
          {/* Hero Section */}
          <Section id="hero" className="py-0">
            <SlideUp duration={0.6}>
              <Stack gap={6} className="max-w-2xl">
                <Badge variant="secondary" className="w-fit px-3 py-1 font-semibold uppercase tracking-wider text-xs">
                  Welcome to my portfolio
                </Badge>
                <div className="space-y-3">
                  <span className="text-base text-secondary-text font-medium block">Hi, my name is</span>
                  <H1 className="text-4xl sm:text-6xl font-black text-primary-text leading-none tracking-tight">
                    Alex Morgan.
                  </H1>
                  <H2 className="text-3xl sm:text-5xl font-extrabold text-secondary-text leading-tight tracking-tight">
                    I construct things for the web.
                  </H2>
                </div>
                <Body className="text-secondary-text">
                  I am a senior frontend architect specializing in crafting modular, production-ready design systems and application foundations using Next.js, React, Tailwind CSS, and TypeScript.
                </Body>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#projects"
                    className={cn(buttonVariants({ variant: "default", size: "lg" }))}
                  >
                    View Projects
                  </a>
                  <a
                    href="#"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                  >
                    Download Resume
                  </a>
                </div>
              </Stack>
            </SlideUp>
          </Section>

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
