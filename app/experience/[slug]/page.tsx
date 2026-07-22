import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { experiencesData } from "@/data/experienceData"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Stack } from "@/components/layout/stack"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, ExternalLink, Shield, Cpu, Database, Server, Smartphone, CheckCircle, Image as ImageIcon } from "lucide-react"

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

// Check if image exists on file system under public/
function checkImageExists(src?: string) {
  if (!src) return false
  try {
    const fullPath = path.join(process.cwd(), "public", src)
    return fs.existsSync(fullPath)
  } catch {
    return false
  }
}

export default async function ExperienceCaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const experience = experiencesData.find((exp) => exp.slug === slug)
  if (!experience) {
    notFound()
  }

  const { caseStudy } = experience
  const hasDashboardImage = checkImageExists(caseStudy.dashboardImage)
  const isIdeactra = experience.id === "ideactra-social"
  const hasAnyGalleryImage = caseStudy.gallery.some((img) => checkImageExists(img.image))

  return (
    <Container className="py-12 md:py-24 max-w-4xl selection:bg-accent selection:text-accent-foreground">
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
                  Internship Project Case Study
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
                {experience.liveUrl && (
                  <a
                    href={experience.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md border border-border bg-card hover:bg-muted/50 hover:text-primary-text transition-all duration-200 animate-pulse hover:animate-none"
                  >
                    Live Demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
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

        {/* Project Highlight Mockup Card (Only renders if static image exists) */}
        {hasDashboardImage ? (
          <div className="relative w-full rounded-lg overflow-hidden border border-border aspect-[16/10] bg-muted/10">
            <Image
              src={caseStudy.dashboardImage!}
              alt="Dashboard Highlight Mockup"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        ) : null}

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
                {caseStudy.overview}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardHeader className="pt-5 pb-2 px-6">
                <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  The Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                {caseStudy.problemSolves}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardHeader className="pt-5 pb-2 px-6">
                <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-5 text-sm text-secondary-text leading-relaxed">
                <ul className="space-y-2 list-none pl-0">
                  {caseStudy.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-2 items-start text-xs sm:text-sm">
                      <span className="text-primary-text font-bold select-none">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* System Architecture */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            System Architecture
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Block: Frontend & Backend */}
            <div className="space-y-6">
              <Card className="bg-card border border-border">
                <CardHeader className="pt-5 pb-2 px-6">
                  <CardTitle className="text-sm font-bold text-primary-text uppercase tracking-wider flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-muted-foreground" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5">
                  <ul className="space-y-1.5 list-none pl-0">
                    {caseStudy.architecture.frontend.map((item, i) => (
                      <li key={i} className="text-sm text-secondary-text flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader className="pt-5 pb-2 px-6">
                  <CardTitle className="text-sm font-bold text-primary-text uppercase tracking-wider flex items-center gap-2">
                    <Server className="h-4 w-4 text-muted-foreground" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5">
                  <ul className="space-y-1.5 list-none pl-0">
                    {caseStudy.architecture.backend.map((item, i) => (
                      <li key={i} className="text-sm text-secondary-text flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Block: Database, Authentication & Deployment */}
            <div className="space-y-6">
              <Card className="bg-card border border-border">
                <CardHeader className="pt-5 pb-2 px-6">
                  <CardTitle className="text-sm font-bold text-primary-text uppercase tracking-wider flex items-center gap-2">
                    <Database className="h-4 w-4 text-muted-foreground" />
                    Database
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5 space-y-3">
                  <div>
                    <span className="text-xs font-bold text-primary-text font-mono uppercase">
                      {caseStudy.architecture.database.engine} ({caseStudy.architecture.database.details})
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {caseStudy.architecture.database.tables.map((table) => (
                      <Badge key={table} variant="outline" className="text-[10px] font-mono px-1.5 py-0.5">
                        {table}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader className="pt-5 pb-2 px-6">
                  <CardTitle className="text-sm font-bold text-primary-text uppercase tracking-wider flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5">
                  <ul className="space-y-1.5 list-none pl-0">
                    {caseStudy.architecture.authentication.map((item, i) => (
                      <li key={i} className="text-sm text-secondary-text flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader className="pt-5 pb-2 px-6">
                  <CardTitle className="text-sm font-bold text-primary-text uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5">
                  <ul className="space-y-1.5 list-none pl-0">
                    {caseStudy.architecture.deployment.map((item, i) => (
                      <li key={i} className="text-sm text-secondary-text flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* System Design Diagram */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            System Design Diagram
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Diagram 1: Main Flow */}
            <Card className="bg-card border border-border p-6 flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
                  Primary Architecture Flow
                </span>
                <span className="text-[11px] text-muted-foreground/75">
                  Request pathway from Client browser to Relational Database
                </span>
              </div>
              <div className="w-full flex flex-col items-center gap-3 py-4 px-2 bg-muted/10 border border-border/80 border-dashed rounded-lg text-xs font-mono">
                <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                  React Frontend (Render)
                </div>
                <div className="flex flex-col items-center text-[10px] text-muted-foreground leading-none">
                  <span>REST APIs + WebSockets</span>
                  <span>▼</span>
                </div>
                <div className="px-3 py-2 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                  {isIdeactra ? "FastAPI Backend (Render)" : "Django Backend (Render)"}
                  <div className="text-[9px] text-secondary-text font-normal text-left mt-1.5 border-t border-border/50 pt-1.5 space-y-0.5">
                    {isIdeactra ? (
                      <>
                        <div>├─ Authentication</div>
                        <div>├─ User APIs</div>
                        <div>├─ Posts APIs</div>
                        <div>├─ Messaging APIs</div>
                        <div>├─ Notification APIs</div>
                        <div>└─ Profile APIs</div>
                      </>
                    ) : (
                      <>
                        <div>├─ Account Verification</div>
                        <div>├─ Product Catalog APIs</div>
                        <div>├─ Shopping Cart APIs</div>
                        <div>└─ Order Tracking APIs</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-[10px] text-muted-foreground">▼</div>
                <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                  {isIdeactra ? "PostgreSQL Database (Render)" : "MySQL Database Server"}
                </div>
              </div>
            </Card>

            {/* Diagram 2: Secondary Flow (Authentication / Transactions) */}
            <Card className="bg-card border border-border p-6 flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
                  {isIdeactra ? "Authentication Integration Flow" : "Inventory Transaction Flow"}
                </span>
                <span className="text-[11px] text-muted-foreground/75">
                  {isIdeactra ? "SSO Federated Login and Session Issuing Cycle" : "Concurrency-Safe Stock Validation Process"}
                </span>
              </div>
              <div className="w-full flex flex-col items-center gap-3 py-4 px-2 bg-muted/10 border border-border/80 border-dashed rounded-lg text-xs font-mono">
                {isIdeactra ? (
                  <>
                    <div className="flex gap-2 w-full max-w-[240px] justify-between">
                      <div className="flex-1 px-2 py-1 bg-background border border-border rounded font-bold text-primary-text text-center text-[10px]">
                        Google OAuth
                      </div>
                      <div className="flex-1 px-2 py-1 bg-background border border-border rounded font-bold text-primary-text text-center text-[10px]">
                        GitHub OAuth
                      </div>
                    </div>
                    <div className="text-[10px] text-muted-foreground">▼</div>
                    <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                      Authentication Service
                    </div>
                    <div className="text-[10px] text-muted-foreground">▼</div>
                    <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                      JWT Token Issued
                    </div>
                    <div className="text-[10px] text-muted-foreground">▼</div>
                    <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                      React Client Local Storage
                    </div>
                  </>
                ) : (
                  <>
                    <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                      Checkout Request Received
                    </div>
                    <div className="text-[10px] text-muted-foreground">▼</div>
                    <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                      MySQL Transaction (select_for_update)
                    </div>
                    <div className="text-[10px] text-muted-foreground">▼</div>
                    <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                      Stock Count Deducted
                    </div>
                    <div className="text-[10px] text-muted-foreground">▼</div>
                    <div className="px-3 py-1.5 bg-background border border-border rounded font-bold text-primary-text w-full max-w-[240px] text-center">
                      Order Dispatched & Commited
                    </div>
                  </>
                )}
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
              <ul className="space-y-3.5 pl-0 list-none">
                {caseStudy.keyContributions.map((contribution, index) => (
                  <li key={index} className="flex gap-3 text-secondary-text leading-relaxed text-sm sm:text-base">
                    <span className="text-primary-text font-bold select-none">•</span>
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
            {caseStudy.technicalChallenges.map((challenge, index) => (
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

        {/* Project Gallery (Static display for all internships) */}
        {hasAnyGalleryImage && (
          <section className="space-y-6">
            <Heading as="h2" className="text-2xl font-bold border-b pb-2">
              Project Gallery
            </Heading>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {caseStudy.gallery.map((img, index) => {
                const hasGalleryImage = checkImageExists(img.image)
                return hasGalleryImage ? (
                  <div key={index} className="flex flex-col gap-3 group/gallery">
                    <div className="relative w-full rounded-lg overflow-hidden border border-border aspect-[16/10] bg-muted/10">
                      <Image
                        src={img.image!}
                        alt={img.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/gallery:scale-105"
                        sizes="(max-width: 440px) 100vw, 440px"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-1">
                      <span className="text-sm font-bold text-primary-text uppercase tracking-wider block">
                        {img.title}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1 block leading-relaxed">
                        {img.description}
                      </span>
                    </div>
                  </div>
                ) : null
              })}
            </div>
          </section>
        )}

        {/* Lessons Learned */}
        <section className="space-y-6">
          <Heading as="h2" className="text-2xl font-bold border-b pb-2">
            Lessons Learned
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudy.lessonsLearned.map((lesson, index) => (
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
