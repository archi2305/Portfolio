export interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  techStack: string[]
  features: string[]
  challenges: string
  learnings: string
  githubUrl?: string
  liveUrl?: string
  heroImage?: string
  architecturePreview?: string
}
