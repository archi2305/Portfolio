import * as React from "react"
import { Project } from "@/types/project"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, FolderGit } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project
  onSelect: () => void
}

export function ProjectCard({
  project,
  onSelect,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Card
      variant="interactive"
      onClick={onSelect}
      className={cn("h-full flex flex-col group relative overflow-hidden", className)}
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

      <CardHeader className="pt-5">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="group-hover/card:text-primary-text transition-colors">
            {project.title}
          </CardTitle>
          <ArrowUpRight className="h-4 w-4 text-secondary-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </div>
        <CardDescription className="line-clamp-2 mt-1">
          {project.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        {/* We can place additional metadata here if necessary */}
      </CardContent>

      <CardFooter className="flex flex-wrap gap-1.5 pt-3 border-t bg-muted/20">
        {project.techStack.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0">
            {tech}
          </Badge>
        ))}
        {project.techStack.length > 3 && (
          <Badge variant="outline" className="text-[10px] px-2 py-0">
            +{project.techStack.length - 3}
          </Badge>
        )}
      </CardFooter>
    </Card>
  )
}
