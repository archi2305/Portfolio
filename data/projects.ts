import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "devworkspacex",
    title: "DevWorkspaceX",
    shortDescription: "AI-native software engineering platform that transforms product ideas into production-ready blueprints (SRS, architecture design, database schemas, REST APIs) with collaborative features.",
    longDescription: "DevWorkspaceX is a collaborative, AI-powered development workspace that generates software requirements (SRS), design documents, schemas, API specifications, and roadmaps from product ideas. It includes project planning, Kanban tracking, and role-based access control.",
    techStack: ["Next.js", "React", "FastAPI", "PostgreSQL", "Docker", "JWT", "Groq API", "RAG"],
    features: [
      "Architected an AI-native software engineering platform that transforms product ideas into production-ready engineering blueprints.",
      "Delivered a collaborative workspace featuring project planning, Kanban-based sprint tracking, and role-based access control.",
      "Integrated a context-aware engineering assistant powered by a RAG pipeline and the Groq API for technical assistance."
    ],
    challenges: "Designing a prompt chain and parsing output to reliably generate complex multi-format engineering design assets.",
    learnings: "Deepened knowledge in Next.js/React frontend coordination, Groq LLM system prompts, and structuring complex document models.",
    githubUrl: "https://github.com/archi2305/DevWorkspaceX",
    liveUrl: undefined,
    architecturePreview: "Next.js UI -> FastAPI -> Groq API RAG Engine -> PostgreSQL Blueprint Cache"
  },
  {
    id: "hiresenseai",
    title: "HireSenseAI",
    shortDescription: "AI recruitment intelligence platform automating ATS evaluation, resume parsing, job matching, and recruiter queries using RAG and semantic analytics.",
    longDescription: "HireSenseAI is an AI recruitment platform that automates ATS evaluations, resume parsing, and semantic skill-gap analysis. It features recruiter chatbot assistance, context-aware insights, and secure JWT authentication.",
    techStack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Groq API", "RAG", "JWT"],
    features: [
      "Engineered an AI recruitment intelligence platform that automates ATS evaluation and semantic skill-gap analysis.",
      "Integrated LLM-powered workflows and a RAG pipeline using Groq LLMs to deliver context-aware resume insights.",
      "Delivered secure, JWT-authenticated APIs backed by a relational PostgreSQL data model for scale."
    ],
    challenges: "Handling multi-page unstructured PDF/Docx files and maintaining layout parsing accuracy for ATS evaluations.",
    learnings: "Deepened experience in semantic searches using NLP sentence embedding metrics and vector storage layouts.",
    githubUrl: "https://github.com/archi2305/HireSenseAI",
    liveUrl: undefined,
    architecturePreview: "React Frontend -> FastAPI Service -> Groq LLM & RAG -> PostgreSQL DB"
  }
]
