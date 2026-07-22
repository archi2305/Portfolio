import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "devworkspacex",
    title: "DevWorkspaceX",
    shortDescription: "AI-native software engineering platform that transforms product ideas into production-ready blueprints (SRS, architecture design, database schemas, REST APIs) with collaborative features.",
    longDescription: "DevWorkspaceX is a collaborative, AI-powered development workspace that generates software requirements (SRS), design documents, schemas, API specifications, and roadmaps from product ideas. It includes project planning, Kanban tracking, and role-based access control.",
    techStack: ["Next.js", "React", "FastAPI", "PostgreSQL", "Docker", "JWT", "Groq API", "RAG"],
    metrics: {
      duration: "May 2026 – Present",
      role: "Lead Software Engineer",
      teamSize: "2 Developer",
      status: "In Development",
      deployment: "Render + Vercel",
      architecture: "Client-Server (REST + WebSockets)"
    },
    features: [
      "AI-powered generation of comprehensive software requirements documents (SRS) and engineering blueprints.",
      "Collaborative Kanban dashboard with role-based workspace permissions.",
      "Dynamic folder structure layouts, DB schemas, and API definitions output from custom LLM chains."
    ],
    challenges: "Handling long LLM text response parsing reliably to generate complex structural JSON outputs and engineering design templates.",
    learnings: "Improved understanding of prompt chaining strategies, Next.js hydration boundaries, and structuring complex document models.",
    githubUrl: "https://github.com/archi2305/DevWorkspaceX",
    liveUrl: "https://devworkspacex-live.onrender.com",
    architecturePreview: "Next.js UI ────► FastAPI Backend ────► Groq API RAG Engine ────► PostgreSQL Cache",
    subFeatures: [
      {
        title: "AI Pipeline & RAG Flow",
        bullets: [
          "Implements context-aware prompt parsing using vector search databases to retrieve structural templates.",
          "Routes specialized prompt trees depending on context, keeping API output consistent and accurate."
        ]
      },
      {
        title: "Project Planning Engine & Kanban",
        bullets: [
          "Transforms generated SRS lists into structural Kanban cards dynamically.",
          "Maintains workspace states, assigning individual tickets to users with status tracking."
        ]
      },
      {
        title: "API & Database Schema Generation",
        bullets: [
          "Generates production-ready PostgreSQL SQL schemas complete with references and triggers.",
          "Outputs Swagger OpenAPI specifications for mock backend testing."
        ]
      },
      {
        title: "Folder Structure & Roadmap Generation",
        bullets: [
          "Visualizes dynamic folder hierarchies tailored to standard programming frameworks (e.g. Next.js, Django).",
          "Calculates milestones and development sprint roadmaps dynamically."
        ]
      }
    ],
    screenshots: [
      "/images/devworkspacex-dashboard.png",
      "/images/devworkspacex-editor.png"
    ]
  },
  {
    id: "hiresenseai",
    title: "HireSenseAI",
    shortDescription: "AI recruitment intelligence platform automating ATS evaluation, resume parsing, job matching, and recruiter queries using RAG and semantic analytics.",
    longDescription: "HireSenseAI is an AI recruitment platform that automates ATS evaluations, resume parsing, and semantic skill-gap analysis. It features recruiter chatbot assistance, context-aware insights, and secure JWT authentication.",
    techStack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Groq API", "RAG", "JWT"],
    metrics: {
      duration: "Jan 2025 – Mar 2025",
      role: "Backend Engineer",
      teamSize: "Solo Project",
      status: "Completed",
      deployment: "Render",
      architecture: "Client-Server (REST APIs)"
    },
    features: [
      "Automated PDF/Docx parser parsing text fields into structured profile objects.",
      "Recruiter chat interface for query-based candidate retrieval.",
      "ATS similarity matching scoring resumes against complex job descriptions."
    ],
    challenges: "Parsing multi-page unstructured PDF files with varied spacing and layouts while preserving structural accuracy.",
    learnings: "Mastered semantic queries using NLP embeddings, vector distances, and handling async task queues.",
    githubUrl: "https://github.com/archi2305/HireSenseAI",
    liveUrl: undefined,
    architecturePreview: "React Client ────► FastAPI Service ────► Groq LLM & RAG ────► PostgreSQL Store",
    subFeatures: [
      {
        title: "Resume Parsing & Skill Extraction",
        bullets: [
          "Extracts hard skills, soft skills, contact info, and education timelines using NLP models.",
          "Normalizes job titles to match market standards."
        ]
      },
      {
        title: "ATS Scoring & JD Matching",
        bullets: [
          "Performs cosine similarity checks between job descriptions and resume text embeddings.",
          "Identifies key skill gaps, alerting recruiters of missing requirements."
        ]
      },
      {
        title: "Recruiter Dashboard & Chatbot",
        bullets: [
          "Provides interactive search grids with filters (e.g. location, salary, experience).",
          "Includes an LLM chatbot to ask: 'Which candidate has experience with PostgreSQL database optimization?'"
        ]
      }
    ],
    screenshots: [
      "/images/hiresenseai-dashboard.png"
    ]
  },
  {
    id: "assetflow",
    title: "AssetFlow",
    shortDescription: "Cloud-based secure file storage and intelligent sharing platform featuring granular workspace access, folder hierarchies, and metadata tracking.",
    longDescription: "AssetFlow is a clean cloud sharing platform designed to handle document storage, shared team workspaces, and access validation. It features folder nesting, user access levels, and file sharing configurations.",
    techStack: ["React", "FastAPI", "PostgreSQL", "AWS S3", "Docker", "JWT"],
    metrics: {
      duration: "Sep 2025 – Nov 2025",
      role: "Backend Developer",
      teamSize: "3 Developers",
      status: "Completed",
      deployment: "AWS (EC2 + S3)",
      architecture: "Object Storage Backend (REST)"
    },
    features: [
      "Granular team folders with specific viewer/editor/owner permission tiers.",
      "Secure uploads writing to AWS S3 buckets with signed URL validation.",
      "Shared link creation with expiration timelines and password restrictions."
    ],
    challenges: "Handling concurrent chunked file uploads while maintaining state and database references during failures.",
    learnings: "Learned S3 pre-signed URL configurations, handling binary streaming on FastAPI, and managing cloud storage costs.",
    githubUrl: undefined,
    liveUrl: undefined,
    architecturePreview: "React Frontend ────► FastAPI ────► AWS S3 Bucket (Files) + PostgreSQL (Metadata)"
  },
  {
    id: "jobportal",
    title: "Job Portal",
    shortDescription: "Modern recruitment application connecting job seekers with hiring companies, featuring resume building, job listing feeds, and application logs.",
    longDescription: "A comprehensive recruitment board system facilitating job postings, applicant tracking, status logs (applied, screening, interview, hired), and profile builder views for candidates.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    metrics: {
      duration: "Oct 2024 – Dec 2024",
      role: "Full Stack Developer",
      teamSize: "2 Developers",
      status: "Completed",
      deployment: "Vercel + Atlas",
      architecture: "MVC Pattern"
    },
    features: [
      "Interactive company dashboard displaying applicant counts and status pipelines.",
      "Rich profile builder allowing candidates to export clean resumes.",
      "Smart recommendation feed pushing matching positions to seekers."
    ],
    challenges: "Designing a search indexing strategy in MongoDB to query millions of listings by location, type, and tags efficiently.",
    learnings: "Mastered Next.js page routing, MongoDB indexing strategies, and handling state synchronization across client sessions.",
    githubUrl: undefined,
    liveUrl: undefined,
    architecturePreview: "Next.js Frontend ────► Express API Server ────► MongoDB Cluster"
  },
  {
    id: "ideactra-social-project",
    title: "Ideactra Social",
    shortDescription: "LinkedIn-inspired professional networking platform built from the ground up, featuring secure OAuth, user connections, real-time messaging, and notification lines.",
    longDescription: "Ideactra Social is a professional networking system supporting user connection workflows, posts feeds, real-time WebSocket messaging, user profiles (experiences, certifications), and notification event cycles.",
    techStack: ["React.js", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "WebSockets", "JWT", "Google OAuth", "GitHub OAuth", "Render"],
    metrics: {
      duration: "Apr 2026 – Jun 2026",
      role: "Software Developer Intern",
      teamSize: "3 Developers",
      status: "Completed",
      deployment: "Render",
      architecture: "WebSocket Real-time (REST APIs)"
    },
    features: [
      "LinkedIn-inspired professional social feeds complete with likes, comments, and connection request workflows.",
      "Real-time WebSocket chat system tracking user presence states.",
      "Multi-provider SSO (Google + GitHub OAuth) linked with local JWT security sessions."
    ],
    challenges: "Handling database normalisation for high-frequency chat tables while maintaining fast queries on user profile lists.",
    learnings: "Deepened experience in designing database connections pools, creating dynamic WebSockets protocols, and setting up environment configurations on Render.",
    githubUrl: undefined,
    liveUrl: "https://ideactrasocial-frontend.onrender.com",
    architecturePreview: "React Frontend ────► FastAPI Backend ────► PostgreSQL (Relational Database)",
    screenshots: [
      "/images/ideactra-dashboard.png",
      "/images/ideactra-profile.png",
      "/images/ideactra-messaging.png",
      "/images/ideactra-auth.png",
      "/images/ideactra-db.png"
    ]
  },
  {
    id: "dresshub",
    title: "DressHub",
    shortDescription: "E-commerce platform backend for a style retailer, featuring MySQL transaction safety, stock check locks, catalog filters, and order tracing.",
    longDescription: "DressHub manages inventory checkout workflows, product listing catalogs, shopping carts, and order status transitions, focusing on database lock security under concurrent purchase loads.",
    techStack: ["Django", "Python", "MySQL", "REST APIs", "JavaScript"],
    metrics: {
      duration: "May 2024 – Jul 2024",
      role: "Python Backend Intern",
      teamSize: "Solo Backend",
      status: "Completed",
      deployment: "Private Server",
      architecture: "Django REST Framework"
    },
    features: [
      "MySQL transaction synchronization pipeline preventing product overselling under stress.",
      "Composite indexing on search fields for fast color, size, and price queries.",
      "Clean cart checkout workflow handling automatic inventory rollback on transaction failures."
    ],
    challenges: "Preventing race conditions where multiple users try to checkout the last stock items simultaneously.",
    learnings: "Mastered Django REST Framework serializers, database lock implementations (select_for_update), and transaction rollback configurations.",
    githubUrl: undefined,
    liveUrl: undefined,
    architecturePreview: "Django Web Server ────► MySQL Relational Database (Catalog & Carts)"
  }
]
