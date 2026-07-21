"use client"

import * as React from "react"
import { Project } from "@/types/project"
import { Badge } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { IconButton } from "@/components/ui/icon-button"
import { buttonVariants } from "@/components/ui/button"
import { H2, H3, Body } from "@/components/ui/typography"
import { X, GitFork, ExternalLink, Terminal, AlertTriangle, Lightbulb, ClipboardList } from "lucide-react"
import { m, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Handle escape key to close
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
      // Focus modal container for accessibility announcement
      setTimeout(() => {
        containerRef.current?.focus()
      }, 50)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          
          {/* Backdrop Overlay */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <m.div
            ref={containerRef}
            tabIndex={-1}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 12 }}
            transition={shouldReduceMotion ? { duration: 0.1 } : { type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl border border-border bg-card shadow-2xl p-6 md:p-8 z-10 scrollbar-thin focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <IconButton aria-label="Close dialog" onClick={onClose}>
                <X className="h-4 w-4" />
              </IconButton>
            </div>

            {/* Header Content */}
            <div className="space-y-4 pr-10">
              <Badge variant="outline" className="text-[10px] tracking-widest uppercase">
                Case Study
              </Badge>
              <H2 id="modal-title" className="text-2xl md:text-3xl font-extrabold text-primary-text leading-tight">
                {project.title}
              </H2>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Divider className="my-6" />

            {/* Case Study Details Body */}
            <div className="space-y-8 pr-1">
              
              {/* Project Overview */}
              <div className="space-y-2">
                <H3 className="text-base font-bold flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-primary-text" />
                  Overview
                </H3>
                <Body className="text-sm md:text-base leading-relaxed text-secondary-text">
                  {project.longDescription}
                </Body>
              </div>

              {/* Core Features */}
              <div className="space-y-3">
                <H3 className="text-base font-bold flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-primary-text" />
                  Key Features
                </H3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-secondary-text">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="space-y-2 bg-destructive/5 rounded-lg border border-destructive/10 p-4">
                <H3 className="text-sm font-bold text-destructive flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  The Challenge
                </H3>
                <Body className="text-sm text-secondary-text leading-relaxed">
                  {project.challenges}
                </Body>
              </div>

              {/* Learnings */}
              <div className="space-y-2 bg-primary/5 rounded-lg border border-primary/10 p-4">
                <H3 className="text-sm font-bold text-primary flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Learnings & Key Takeaways
                </H3>
                <Body className="text-sm text-secondary-text leading-relaxed">
                  {project.learnings}
                </Body>
              </div>

              {/* Architecture Preview (Optional) */}
              {project.architecturePreview && (
                <div className="space-y-2">
                  <H3 className="text-sm font-bold">Architecture Flow</H3>
                  <pre className="text-xs font-mono bg-muted/50 border border-border p-3.5 rounded-lg overflow-x-auto text-primary-text whitespace-pre">
                    {project.architecturePreview}
                  </pre>
                </div>
              )}
            </div>

            <Divider className="my-6" />

            {/* Modal Actions Footer */}
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "default", size: "sm" }), "flex items-center gap-2")}
                >
                  <GitFork className="h-4 w-4" />
                  Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "flex items-center gap-2")}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "ml-auto")}
              >
                Close Case Study
              </button>
            </div>

          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
