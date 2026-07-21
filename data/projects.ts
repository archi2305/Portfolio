import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "system-orchestrator",
    title: "System Orchestrator Core",
    shortDescription: "High-performance microservice router handling active packet prioritization and edge caching pipelines.",
    longDescription: "A production-grade routing gateway handling millions of requests per minute. Built with micro-frontend architectures, caching adapters, and atomic logging adapters.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redis", "gRPC"],
    features: [
      "Dynamic routing table updates with zero packet drops during sync",
      "Comprehensive admin console with live metrics telemetry charts",
      "Intelligent rate-limiting middleware using token bucket structures"
    ],
    challenges: "Handling concurrent table sync operations under sustained network throughput load without degrading route lookups.",
    learnings: "We discovered that separating routing tables into read-heavy atom stores and write-heavy synchronization nodes reduces cache invalidation lag to sub-milliseconds.",
    githubUrl: "https://github.com/example/orchestrator",
    liveUrl: "https://example.com/orchestrator",
    architecturePreview: "Edge Layer -> Rate Limiter -> gRPC Router -> Cache Layer",
  },
  {
    id: "creative-portfolio-engine",
    title: "Dynamic Canvas Engine",
    shortDescription: "An interactive, web-based visual workspace providing smooth drag-and-drop vector drawing.",
    longDescription: "A high-fidelity canvas workspace rendering vector structures in real-time. Employs advanced state synchronization, canvas rendering loops, and keyboard shortcuts.",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Zustand", "HTML5 Canvas"],
    features: [
      "Smooth hardware-accelerated pan & zoom layout grids",
      "History state tracker with complete undo/redo support stack",
      "Collaborative cursors with instant multi-tenant syncing over sockets"
    ],
    challenges: "Maintaining fluid 60fps canvas render loops when redrawing thousands of vectors concurrently during multi-tenant cursor operations.",
    learnings: "Optimized state reads using Zustand selector functions and delegated static elements to hidden rendering canvas layers to avoid layout thrashing.",
    githubUrl: "https://github.com/example/canvas",
    liveUrl: "https://example.com/canvas",
    architecturePreview: "Client State -> Zustand Store -> Canvas Loop -> WebSockets Sync",
  },
]
