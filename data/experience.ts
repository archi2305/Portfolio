import { Experience } from "@/types/experience"

export const experiences: Experience[] = [
  {
    id: "lead-architect",
    company: "DevOrchestra",
    role: "Lead Frontend Architect",
    duration: "2024 — Present",
    location: "San Francisco, CA (Hybrid)",
    description: "Responsible for steering design system implementation, core packaging structures, and micro-frontend integrations across enterprise software suites.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Lerna"],
    achievements: [
      "Engineered a unified multi-repo component catalog decreasing page load render cycles by 35%",
      "Spearheaded migrates from custom legacy CSS styling setups to Tailwind utility tokens, eliminating code duplication",
      "Mentored cross-functional feature teams on accessibility compliance (WCAG 2.1 AA benchmarks) across visual dashboard grids"
    ],
  },
  {
    id: "senior-engineer",
    company: "CloudPixel",
    role: "Senior Frontend Engineer",
    duration: "2021 — 2024",
    location: "Remote, US",
    description: "Designed core visual components, interactive graphic workspace rendering canvas grids, and real-time state sync adapters.",
    technologies: ["React", "TypeScript", "Zustand", "WebSockets", "HTML5 Canvas", "Vite"],
    achievements: [
      "Optimized canvas loops mapping cursor paths to restrict layout triggers, ensuring continuous 60fps refresh rates",
      "Designed and deployed custom micro-state managers serving instantaneous offline edit caching via indexDB integrations",
      "Cooperated on API integrations to align REST endpoints to typesafe contract handlers, cutting integration bug frequencies in half"
    ],
  },
]
