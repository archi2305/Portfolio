import * as React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { experiencesData } from "@/data/experienceData"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Stack } from "@/components/layout/stack"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, ExternalLink, GitBranch, Shield, Cpu, Database, Server, Smartphone } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return experiencesData.map((exp) => ({
    slug: exp.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const experience = experiencesData.find((exp) => exp.slug === slug)
  if (!experience) return {}

  return {
    title: `${experience.role} at ${experience.company}`,
    description: experience.summary,
    openGraph: {
      title: `${experience.role} at ${experience.company}`,
      description: experience.summary,
      type: "article",
    },
  }
}

export default async function ExperienceCaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const experience = experiencesData.find((exp) => exp.slug === slug)
  if (!experience) {
    notFound()
  }

  // Helper icons for systems
  const getSubsystemIcon = (key: string) => {
    switch (key.toLowerCase()) {
      case "frontend":
        return <Smartphone className="h-5 w-5 text-muted-foreground" />
      case "backend":
        return <Server className="h-5 w-5 text-muted-foreground" />
      case "database":
        return <Database className="h-5 w-5 text-muted-foreground" />
      case "authentication":
        return <Shield className="h-5 w-5 text-muted-foreground" />
      case "llm components":
      case "llm":
        return <Cpu className="h-5 w-5 text-muted-foreground" />
      default:
        return <GitBranch className="h-5 w-5 text-muted-foreground" />
    }
  }

  // Parse architecture string to key-value pairs
  const isIdeactra = experience.id === "ideactra-social"
  const architectureItems = isIdeactra
    ? [
        { label: "Frontend", value: "React, WebSockets (Presence & Chat UI)" },
        { label: "Backend", value: "FastAPI (Python), Async Session Pooling" },
        { label: "Database", value: "PostgreSQL, Normalized User & Message schemas" },
        { label: "Authentication", value: "Google OAuth 2.0, GitHub OAuth, JWT Sessions" },
        { label: "LLM Components", value: "Gemini API, RAG Vector Search Embeddings" },
        { label: "Deployment", value: "Docker containers, Linux virtual machines" }
      ]
    : [
        { label: "Frontend", value: "MERN (React/Next UI structure)" },
        { label: "Backend", value: "Django REST Framework (Python), Catalog Serializers" },
        { label: "Database", value: "MySQL, Indexed tables for category filtering" },
        { label: "Authentication", value: "Django Sessions and session validations" },
        { label: "Deployment", value: "Production server environments with MySQL synchronization pipelines" }
      ]

  return (
    <Container className="py-12 md:py-24 max-w-4xl">
      <Stack gap={10} className="w-full">
        {/* Navigation / Back Button */}
        <div>
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="border-b pb-8 border-border">
          <Stack gap={4}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase">
                  Case Study
                </span>
                <Heading as="h1" className="text-3xl sm:text-4xl font-extrabold mt-1">
                  {experience.role}
                </Heading>
                <Heading as="h2" className="text-xl sm:text-2xl font-bold text-secondary-text mt-1">
                  {experience.company}
                </Heading>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 shrink-0">
                {experience.githubUrl && (
                  <a
                    href={experience.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md border border-border bg-card hover:bg-muted/50 hover:text-primary-text transition-all duration-200"
                  >
                    Repository
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Meta Rows */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-text mt-2">
              <div className="flex items-center gap-1.5 font-mono">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Tech stack badge list */}
            <div className="flex flex-wrap gap-1.5 pt-3">
              {experience.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs px-2.5 py-0.5 font-medium border border-transparent font-mono"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Stack>
        </div>

        {/* Project Screenshot Placeholder */}
        <Card className="w-full bg-muted/20 border-dashed border-border/80 flex items-center justify-center p-8 md:p-16 text-center select-none min-h-[220px]">
          <Stack gap={2} className="items-center">
            <Smartphone className="h-10 w-10 text-muted-foreground/50" />
            <span className="font-bold text-primary-text text-base">Project Highlight Mockup</span>
            <span className="text-xs text-muted-foreground max-w-sm">
              Live screenshot visualization showcasing {experience.company} dashboards, UI structures, and data flows.
            </span>
          </Stack>
        </Card>

        {/* Project Overview */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Project Overview
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border border-border">
              <CardHeader className="pt-5 pb-2 px-6">
                <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  The Company
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                {experience.caseStudy.overview}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardHeader className="pt-5 pb-2 px-6">
                <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  The Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                {experience.caseStudy.problemSolves}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardHeader className="pt-5 pb-2 px-6">
                <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                {experience.caseStudy.responsibilities}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Architecture
          </Heading>
          <div className="space-y-6">
            <Card className="bg-card border border-border">
              <CardHeader className="pt-5 pb-3 px-6">
                <CardTitle className="text-sm font-bold text-primary-text uppercase tracking-wider">
                  System Architecture Details
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {architectureItems.map((arch) => (
                    <div key={arch.label} className="flex gap-3 items-start p-3 rounded-md bg-muted/15 border border-border/40">
                      {getSubsystemIcon(arch.label)}
                      <div>
                        <span className="block text-xs font-bold text-primary-text uppercase tracking-wider">
                          {arch.label}
                        </span>
                        <span className="text-sm text-secondary-text">
                          {arch.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Architecture Diagram Placeholder */}
            <Card className="bg-card border border-border p-6 flex flex-col items-center">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                System Design Diagram
              </span>
              <div className="w-full max-w-lg flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4 bg-muted/10 border border-border/80 border-dashed rounded-lg">
                <div className="px-3 py-2 bg-card border border-border rounded text-xs font-mono font-bold text-center w-28 text-primary-text shadow-sm">
                  Client UI
                </div>
                <div className="text-xs text-muted-foreground font-mono">────►</div>
                <div className="px-3 py-2 bg-card border border-border rounded text-xs font-mono font-bold text-center w-28 text-primary-text shadow-sm">
                  {isIdeactra ? "FastAPI Server" : "Django App"}
                </div>
                <div className="text-xs text-muted-foreground font-mono">────►</div>
                <div className="px-3 py-2 bg-card border border-border rounded text-xs font-mono font-bold text-center w-28 text-primary-text shadow-sm">
                  {isIdeactra ? "PostgreSQL" : "MySQL"}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Key Contributions */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Key Contributions
          </Heading>
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <ul className="space-y-3.5">
                {experience.caseStudy.keyContributions.map((contribution, index) => (
                  <li key={index} className="flex gap-3 text-secondary-text leading-relaxed">
                    <span className="text-primary-text font-bold select-none text-base">•</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Technical Challenges */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Technical Challenges
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.caseStudy.technicalChallenges.map((challenge, index) => (
              <Card key={index} className="bg-card border border-border">
                <CardHeader className="pt-5 pb-2 px-6">
                  <CardTitle className="text-base font-bold text-primary-text">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                  {challenge.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Gallery
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {experience.caseStudy.gallery.map((img, index) => (
              <Card key={index} className="bg-muted/15 border border-border/80 border-dashed p-6 min-h-[160px] flex flex-col justify-between items-center text-center">
                <span className="text-xs font-bold text-primary-text uppercase tracking-wider">
                  {img.title}
                </span>
                <span className="text-[11px] text-muted-foreground/75 italic">
                  [{img.placeholderText}]
                </span>
                <span className="text-[10px] font-mono text-muted-foreground/50">
                  Placeholder
                </span>
              </Card>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Lessons Learned
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {experience.caseStudy.lessonsLearned.map((lesson, index) => (
              <Card key={index} className="bg-card border border-border">
                <CardHeader className="pt-5 pb-2 px-6">
                  <CardTitle className="text-sm font-bold text-primary-text uppercase tracking-wide">
                    {lesson.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5 text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {lesson.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="border-t pt-8 border-border flex items-center justify-between">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary-text transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </Stack>
    </Container>
  )
}
