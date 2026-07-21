import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "hiresenseai",
    title: "HireSenseAI",
    shortDescription: "AI-powered resume screening platform that analyzes resumes against job descriptions, generates ATS scores, identifies skill gaps, and assists recruiters through conversational AI.",
    longDescription: "HireSenseAI automates the candidate screening bottleneck by performing deep semantic matches between applicant resumes and hiring parameters. It provides analytical ATS match scoring, skill deficit flagging, and conversational recruiter queries.",
    techStack: ["FastAPI", "PostgreSQL", "NLP", "Python", "JavaScript"],
    features: [
      "Built an AI resume screener using FastAPI and NLP that parses resumes, scores them against a job description, and flags skill gaps.",
      "Added a chatbot for recruiters to query candidate fit and resume details conversationally instead of digging through dashboards.",
      "Exposed 30+ APIs covering recruiter dashboards, candidate ranking, and ATS scoring in one FastAPI service.",
      "Designed the PostgreSQL schema to store parsed resume data, job postings, and match scores for repeat evaluation without re-parsing."
    ],
    challenges: "Handling multi-page unstructured PDF/Docx files and maintaining layout parsing accuracy for ATS evaluations.",
    learnings: "Deepened experience in semantic searches using NLP sentence embedding metrics and vector storage layouts.",
    githubUrl: "https://github.com/archi2305/HireSenseAI",
    liveUrl: undefined,
    architecturePreview: "FastAPI Service -> NLP Parser -> PostgreSQL Cache -> Recruiter Chatbot UI"
  },
  {
    id: "shoptrackr",
    title: "ShopTrackr",
    shortDescription: "Multi-tenant retail SaaS platform featuring isolated business databases, separate billing logic, row-level access control, and automated stock reports.",
    longDescription: "ShopTrackr is a multi-tenant retail SaaS backend built from scratch. It features strict tenant data isolation, isolated inventory pipelines, and automated reporting systems.",
    techStack: ["FastAPI", "PostgreSQL", "Python", "JavaScript"],
    features: [
      "Built a multi-tenant backend where each business gets isolated data, separate billing logic, and its own inventory state.",
      "Implemented row-level access control in PostgreSQL so one tenant's data is never exposed to another, even on shared infrastructure.",
      "Added automated reporting for stock levels, credit balances, and payment history, exportable per tenant on demand."
    ],
    challenges: "Enforcing strict row-level security policies (RLS) across a shared PostgreSQL database cluster without performance bottlenecks.",
    learnings: "Mastered PostgreSQL RLS configs, multi-tenant middleware request routing, and transaction isolation levels.",
    githubUrl: "https://github.com/archi2305/ShopTrackr",
    liveUrl: undefined,
    architecturePreview: "SaaS Tenant Routing -> FastAPI Middleware -> PostgreSQL RLS Policies -> Automated Reporting Cron"
  }
]
