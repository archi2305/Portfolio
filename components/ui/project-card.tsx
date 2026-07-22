import * as React from "react"
import Link from "next/link"
import { Project } from "@/types/project"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, FolderGit } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project
}

export function ProjectCard({
  project,
  className,
  ...props
}: ProjectCardProps) {
  // Select first 4 technologies to display
  const displayedTech = project.techStack.slice(0, 4)
  const remainingCount = project.techStack.length - displayedTech.length

  return (
    <Link 
      href={`/projects/${project.id}`}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
      aria-label={`View case study for project ${project.title}`}
    >
      <Card
        variant="interactive"
        className={cn("h-full flex flex-col group relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg", className)}
        {...props}
      >
        {/* Decorative Visual Placeholder Header (Premium design system accent gradient) */}
        <div className="relative w-full h-48 bg-gradient-to-br from-surface to-muted border-b border-border flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border shadow-sm">
            <FolderGit className="h-5 w-5 text-primary-text" />
          </div>
          <div className="text-muted-foreground/30 select-none font-bold text-5xl tracking-widest uppercase">
            CODE
          </div>
        </div>

        <CardHeader className="pt-5 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="group-hover:text-primary-text transition-colors">
              {project.title}
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-secondary-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </div>
          <CardDescription className="line-clamp-4 mt-2 flex-1 leading-relaxed text-secondary-text">
            {project.shortDescription}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-wrap gap-1.5 pt-4 pb-4 px-6 border-t bg-muted/20 mt-auto min-h-[56px] items-center">
          {displayedTech.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-[11px] px-2.5 py-0.5 font-medium transition-all hover:bg-secondary/80 hover:text-primary-text hover:border-primary-text/20 border border-transparent font-mono"
            >
              {tech}
            </Badge>
          ))}
          {remainingCount > 0 && (
            <Badge 
              variant="outline" 
              className="text-[11px] px-2.5 py-0.5 font-medium border border-border bg-transparent text-muted-foreground font-mono"
            >
              +{remainingCount} more
            </Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
