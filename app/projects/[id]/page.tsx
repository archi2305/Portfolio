import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Stack } from "@/components/layout/stack"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, ExternalLink, Shield, Cpu, Database, Server, Smartphone, CheckCircle, Image as ImageIcon, GitFork, ArrowRight } from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return {}

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.shortDescription,
      type: "article",
    },
  }
}

// Check if image file exists under public/
function checkImageExists(src?: string) {
  if (!src) return false
  try {
    const fullPath = path.join(process.cwd(), "public", src)
    return fs.existsSync(fullPath)
  } catch {
    return false
  }
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) {
    notFound()
  }

  // Find dynamic project navigation links (wrap around list bounds)
  const currentIndex = projects.findIndex((p) => p.id === id)
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <Container className="py-12 md:py-24 max-w-4xl selection:bg-accent selection:text-accent-foreground">
      <Stack gap={10} className="w-full">
        {/* Navigation / Back Button */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero title & metadata */}
        <div className="border-b pb-8 border-border">
          <Stack gap={4}>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase">
                Project Case Study
              </span>
              <Heading as="h1" className="text-3xl sm:text-4xl font-extrabold mt-1">
                {project.title}
              </Heading>
              <span className="text-sm text-secondary-text block mt-2">
                {project.shortDescription}
              </span>
            </div>

            {/* Tech Stack displayed prominently near the top */}
            <div className="flex flex-wrap gap-1.5 pt-3">
              {project.techStack.map((tech) => (
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

        {/* Project Metrics / Quick Facts */}
        <section className="space-y-4">
          <Heading as="h3" className="text-lg font-bold">
            Project Metrics
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <span className="block text-[10px] uppercase font-mono font-bold text-muted-foreground tracking-wider">
                Duration
              </span>
              <span className="text-sm font-medium text-primary-text block mt-1">
                {project.metrics.duration}
              </span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <span className="block text-[10px] uppercase font-mono font-bold text-muted-foreground tracking-wider">
                Role
              </span>
              <span className="text-sm font-medium text-primary-text block mt-1">
                {project.metrics.role}
              </span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <span className="block text-[10px] uppercase font-mono font-bold text-muted-foreground tracking-wider">
                Team Size
              </span>
              <span className="text-sm font-medium text-primary-text block mt-1">
                {project.metrics.teamSize}
              </span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <span className="block text-[10px] uppercase font-mono font-bold text-muted-foreground tracking-wider">
                Status
              </span>
              <span className="text-sm font-medium text-primary-text block mt-1">
                {project.metrics.status}
              </span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <span className="block text-[10px] uppercase font-mono font-bold text-muted-foreground tracking-wider">
                Deployment
              </span>
              <span className="text-sm font-medium text-primary-text block mt-1">
                {project.metrics.deployment}
              </span>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <span className="block text-[10px] uppercase font-mono font-bold text-muted-foreground tracking-wider">
                Architecture
              </span>
              <span className="text-sm font-medium text-primary-text block mt-1">
                {project.metrics.architecture}
              </span>
            </div>
          </div>
        </section>

        {/* Project Overview & Problem Statement */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Overview & Problem Statement
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border border-border">
              <CardHeader className="pt-5 pb-2 px-6">
                <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                {project.longDescription}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardHeader className="pt-5 pb-2 px-6">
                <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Problem Statement
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                {project.challenges}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* System Design / Architecture Diagram */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            System Design & Flow
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Architecture Preview Box */}
            <Card className="bg-card border border-border p-6 flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
                  Architecture Flow Diagram
                </span>
                <span className="text-[11px] text-muted-foreground/75">
                  Visual mapping of subsystem modules and servers
                </span>
              </div>
              <div className="w-full py-6 px-4 bg-muted/15 border border-border/80 border-dashed rounded-lg text-xs font-mono text-center text-primary-text select-none min-h-[140px] flex items-center justify-center">
                {project.architecturePreview ? (
                  <span className="whitespace-pre-line leading-relaxed">{project.architecturePreview}</span>
                ) : (
                  <span>Dynamic Client-Server Relational System Flow</span>
                )}
              </div>
            </Card>

            {/* Database Schema Placeholder */}
            <Card className="bg-card border border-border p-6 flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
                  Database Schema Layout
                </span>
                <span className="text-[11px] text-muted-foreground/75">
                  Entity relational mappings and key constraints
                </span>
              </div>
              <div className="w-full py-6 px-4 bg-muted/15 border border-border/80 border-dashed rounded-lg text-xs font-mono text-center text-muted-foreground/60 select-none min-h-[140px] flex flex-col items-center justify-center gap-1">
                <Database className="h-5 w-5 opacity-40 mb-1" />
                <span className="font-bold text-primary-text text-[11px]">Database Schema Blueprint</span>
                <span>Relational links, primary keys & indexes</span>
              </div>
            </Card>
          </div>
        </section>

        {/* Dynamic Expanded Content Sub-features */}
        {project.subFeatures && project.subFeatures.length > 0 && (
          <section className="space-y-6">
            <Heading as="h2" className="text-2xl font-bold border-b pb-2">
              Deep Dive & AI Pipelines
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.subFeatures.map((sub, index) => (
                <Card key={index} className="bg-card border border-border">
                  <CardHeader className="pt-5 pb-2 px-6">
                    <CardTitle className="text-base font-bold text-primary-text">
                      {sub.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                    <ul className="space-y-2 list-none pl-0">
                      {sub.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-primary-text font-bold select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Key Features */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Key Features
          </Heading>
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <ul className="space-y-3.5 pl-0 list-none">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-secondary-text leading-relaxed text-sm sm:text-base">
                    <span className="text-primary-text font-bold select-none">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Lessons Learned */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Learnings & Takeaways
          </Heading>
          <Card className="bg-card border border-border p-6 text-sm text-secondary-text leading-relaxed">
            {project.learnings}
          </Card>
        </section>

        {/* Image Gallery */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Project Screenshots & Visuals
          </Heading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.screenshots && project.screenshots.map((img, index) => {
              const hasImg = checkImageExists(img)
              return hasImg ? (
                <div key={index} className="relative w-full rounded-lg overflow-hidden border border-border aspect-[16/10] bg-muted/10">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 440px) 100vw, 440px"
                    loading="lazy"
                  />
                </div>
              ) : null
            })}

            {/* Default premium placeholder when screenshots list is empty or images are not uploaded yet */}
            {(!project.screenshots || project.screenshots.filter(checkImageExists).length === 0) && (
              <Card className="col-span-full border border-dashed border-border p-8 text-center flex flex-col items-center justify-center min-h-[180px] bg-muted/5">
                <ImageIcon className="h-8 w-8 text-muted-foreground/45 mb-2" />
                <span className="text-sm font-bold text-primary-text uppercase tracking-wider">
                  Visual assets coming soon
                </span>
                <span className="text-xs text-muted-foreground max-w-xs mt-1">
                  Dynamic dashboard and runtime flow screenshots will be added once deployment assets build.
                </span>
              </Card>
            )}
          </div>
        </section>

        {/* Project Navigation Footer (Prev / Next) */}
        <div className="border-t border-b py-6 border-border flex items-center justify-between text-sm">
          <Link
            href={`/projects/${prevProject.id}`}
            className="inline-flex items-center gap-2 font-semibold text-muted-foreground hover:text-primary-text transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Prev: {prevProject.title}</span>
          </Link>
          <Link
            href={`/projects/${nextProject.id}`}
            className="inline-flex items-center gap-2 font-semibold text-muted-foreground hover:text-primary-text transition-colors duration-200"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Bottom action buttons */}
        <div className="flex flex-wrap items-center gap-4 justify-center py-6">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-semibold rounded-md border border-border bg-card hover:bg-muted/50 hover:text-primary-text transition-all duration-200"
            >
              <GitFork className="h-4 w-4" />
              GitHub Repository
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-semibold rounded-md border border-border bg-muted/40 text-muted-foreground cursor-not-allowed opacity-50"
            >
              <GitFork className="h-4 w-4" />
              Private Repository
            </button>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-semibold rounded-md border border-border bg-card hover:bg-muted/50 hover:text-primary-text transition-all duration-200"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-semibold rounded-md border border-border bg-muted/40 text-muted-foreground cursor-not-allowed opacity-50"
            >
              <ExternalLink className="h-4 w-4" />
              Coming Soon
            </button>
          )}
        </div>
      </Stack>
    </Container>
  )
}
