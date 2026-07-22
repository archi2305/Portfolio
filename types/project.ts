export interface ProjectMetrics {
  duration: string
  role: string
  teamSize: string
  status: string
  deployment: string
  architecture: string
}

export interface SubFeatureSection {
  title: string
  bullets: string[]
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  techStack: string[]
  metrics: ProjectMetrics
  features: string[]
  challenges: string
  learnings: string
  githubUrl?: string
  liveUrl?: string
  architecturePreview?: string
  subFeatures?: SubFeatureSection[]
  screenshots?: string[]
}
