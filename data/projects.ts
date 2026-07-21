import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "devworkspacex",
    title: "DevWorkspaceX",
    shortDescription: "AI-powered software architect that transforms natural language requirements into complete implementation blueprints including system architecture, database schemas, REST APIs, and technical documentation.",
    longDescription: "DevWorkspaceX acts as an intelligent software design partner, taking high-level product definitions and generating detailed blueprint specs. By automating architectural modeling, developers can generate production-ready boilerplates and architecture graphs instantly.",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "SQLAlchemy", "Groq LLM", "JWT", "Tailwind CSS", "Render"],
    features: [
      "Translates user prompts into system design documents.",
      "Generates interactive entity-relationship database schemas.",
      "Auto-generates boilerplate FastAPI code and route maps."
    ],
    challenges: "Handling context length limitations and maintaining consistent output formatting from Groq LLM queries for extremely complex application architectures.",
    learnings: "Designed robust fallback validation states to clean and parse LLM-generated JSON strings before feeding schema render components.",
    githubUrl: "https://github.com/archi2305/DevWorkspaceX", // TODO: Customize if needed
    liveUrl: "https://devworkspacex.render.com", // TODO: Customize if needed
    architecturePreview: "Next.js UI -> FastAPI API -> Groq LLM Parser -> PostgreSQL DB Schema Renderer"
  },
  {
    id: "hiresenseai",
    title: "HireSenseAI",
    shortDescription: "AI-powered resume screening platform that analyzes resumes against job descriptions, generates ATS scores, identifies missing skills, and assists recruiters through conversational AI.",
    longDescription: "HireSenseAI automates the candidate screening bottleneck by performing deep semantic matches between applicant resumes and hiring parameters. It provides analytical ATS match scoring and flags skill deficits.",
    techStack: ["FastAPI", "PostgreSQL", "Python", "NLP", "JavaScript"],
    features: [
      "Extracts structured resume blocks using customized parser pipelines.",
      "Generates semantic ATS score breakdowns based on role requirements.",
      "Conversational search assistant for screening qualified applicants."
    ],
    challenges: "Managing variations in PDF/Docx styling sheets and extracting consistent token hierarchies without data loss.",
    learnings: "Learned how to design semantic search nodes using raw vector indexing and NLP sentence embedding models.",
    githubUrl: "https://github.com/archi2305/HireSenseAI", // TODO: Customize if needed
    liveUrl: undefined,
    architecturePreview: "FastAPI Backend -> Python NLP Tokenizer -> PDF Text Extractor -> PostgreSQL Database"
  },
  {
    id: "cloud-file-storage",
    title: "Cloud File Storage System",
    shortDescription: "Secure cloud-based file storage platform supporting authenticated uploads, downloads, and intelligent file sharing using AWS S3 and FastAPI.",
    longDescription: "This cloud storage service allows teams to securely upload, group, and distribute files with auto-expiring shared links and encrypted storage backend layers.",
    techStack: ["FastAPI", "AWS S3", "PostgreSQL", "JWT", "Docker", "Streamlit"],
    features: [
      "Multi-part authenticated file upload directly to secure AWS S3 buckets.",
      "Generates temporal shared download links with token expiration times.",
      "Fully dockerized setup for ease of local deployment and testing."
    ],
    challenges: "Managing S3 bucket access policies and handling large file multi-part transfers without backend thread choking.",
    learnings: "Leveraged S3 presigned URLs to allow the client to stream uploads directly to S3, bypassing backend CPU bottlenecks.",
    githubUrl: "https://github.com/archi2305/cloud-storage-system", // TODO: Customize if needed
    liveUrl: undefined,
    architecturePreview: "Streamlit UI -> FastAPI Core -> JWT Access Filter -> S3 Storage Node"
  },
  {
    id: "training-management",
    title: "Training Management System",
    shortDescription: "Multi-user training management platform built with Django for managing vendors, courses, certifications, and training workflows.",
    longDescription: "A CRM-like internal system designed to handle corporate training schedules, course lists, vendor certifications, and workflow review boards.",
    techStack: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Role-based permission settings separating employees, vendors, and managers.",
      "Automated notification triggers for certificate renewal deadlines.",
      "Advanced workflow dashboard tracking training approval pipelines."
    ],
    challenges: "Designing multi-tenant data access boundaries where vendors are isolated from each other's certification logs.",
    learnings: "Deepened knowledge of Django's query filter overrides and relational database design patterns using MySQL.",
    githubUrl: "https://github.com/archi2305/training-management-system", // TODO: Customize if needed
    liveUrl: undefined,
    architecturePreview: "Django Web Server -> MySQL Relational Database -> Certificate Notification Cron"
  },
  {
    id: "job-portal",
    title: "Job Portal",
    shortDescription: "Backend recruitment platform enabling employers to post jobs, manage applicants, and streamline hiring workflows using Spring Boot.",
    longDescription: "A backend service infrastructure handling high-throughput job application workloads, candidate alerts, and applicant tracking boards.",
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    features: [
      "Fully secure authentication hooks supporting user access control.",
      "Robust REST endpoints for job searches, applications, and review stages.",
      "Scalable database models managing relationships between listings and profiles."
    ],
    challenges: "Optimizing relational table query joins for job listings under high load thresholds.",
    learnings: "Learned how to configure MySQL query caches and index foreign keys to accelerate join operations.",
    githubUrl: "https://github.com/archi2305/spring-boot-job-portal", // TODO: Customize if needed
    liveUrl: undefined,
    architecturePreview: "Spring Boot Application Server -> JPA Hibernate ORM -> MySQL Database"
  }
]
