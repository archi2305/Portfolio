export interface CaseStudy {
  overview: string
  problemSolves: string
  responsibilities: string
  architectureDescription: string
  keyContributions: string[]
  technicalChallenges: {
    title: string
    description: string
  }[]
  lessonsLearned: {
    title: string
    description: string
  }[]
  gallery: {
    title: string
    placeholderText: string
  }[]
}

export interface ExperienceData {
  id: string
  slug: string
  title: string
  role: string
  company: string
  duration: string
  location: string
  summary: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  caseStudy: CaseStudy
}

export const experiencesData: ExperienceData[] = [
  {
    id: "ideactra-social",
    slug: "ideactra-social",
    title: "Software Developer Intern at Ideactra Social",
    role: "Software Developer Intern",
    company: "Ideactra Social",
    duration: "Apr 2026 – Jun 2026",
    location: "Remote",
    summary: "Engineered core backend infrastructure for Ideactra Social, a live social platform — architecting REST APIs and relational database models spanning user profiles, content publishing, networking, and engagement workflows.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "React",
      "WebSockets",
      "Gemini API",
      "RAG",
      "JavaScript",
      "Google OAuth 2.0",
      "GitHub OAuth",
      "JWT"
    ],
    githubUrl: "https://github.com/archi2305/Portfolio",
    liveUrl: undefined,
    caseStudy: {
      overview: "Ideactra Social is a production-ready social networking platform built to connect users in real-time. The project involved constructing the platform's core infrastructure, enabling dynamic content feeds, connection webs, and high-frequency real-time communications.",
      problemSolves: "Modern social systems require robust identity validation, highly responsive real-time chat layers, and context-aware help desks. The goal was to replace traditional polling with WebSockets for chat and integrate secure OAuth protocols while retaining top backend efficiency.",
      responsibilities: "Responsible for designing and implementing the WebSocket real-time chat backend, mapping out relational schema designs with secure database row-level logic, exposing scalable API endpoints, and configuring third-party SSO integrations.",
      architectureDescription: "Uses a clean client-server architecture. The FastAPI server handles incoming REST API traffic and upgrades connections to WebSockets for live chat channels. Authentication state is validated via JWT tokens, with user metadata stored inside a PostgreSQL database cluster.",
      keyContributions: [
        "Designed and implemented a production-ready WebSocket chat system supporting user presence state.",
        "Designed PostgreSQL schema for conversations, messages, participants, and user profiles.",
        "Built Google OAuth 2.0 + GitHub OAuth + JWT authentication pipelines.",
        "Built a RAG-powered chatbot using the Gemini API for contextual knowledge retrieval from user documents.",
        "Designed and optimized 20+ REST APIs for user feeds, posts, and profile operations.",
        "Implemented scalable backend modules in FastAPI with async database session pooling."
      ],
      technicalChallenges: [
        {
          title: "Designing concurrent messaging",
          description: "Managing socket disconnects and high concurrency safely during conversation updates. Solved by writing an connection manager tracking alive socket IDs and queueing offline updates."
        },
        {
          title: "Database normalization & query tuning",
          description: "Storing high-frequency chat history without slowing down user profile lookups. Normalised message databases into conversation threads with indexes on active timestamp fields."
        },
        {
          title: "OAuth & JWT Token security flow",
          description: "Safely mapping external social identity payloads (Google & GitHub) to internal user keys. Designed a middleware JWT validation step that signs and refreshes server sessions securely."
        },
        {
          title: "RAG context retrieval windows",
          description: "Limiting token usage on Gemini API calls during prompt generation. Implemented a vector lookup pipeline sending only highly-ranked context snippets rather than complete text blobs."
        }
      ],
      lessonsLearned: [
        {
          title: "System Design",
          description: "Dividing messaging routes from static content routes boosts pipeline throughput and isolates scaling bottlenecks."
        },
        {
          title: "Real-time Workflows",
          description: "Designing clean WebSocket handshake sequences and heartbeat pings prevents zombie database connections."
        },
        {
          title: "Database Isolation",
          description: "Proper indexing and execution path analysis using EXPLAIN ANALYZE are vital when scaling relational schemas under load."
        }
      ],
      gallery: [
        { title: "Chat UI Layout", placeholderText: "Interactive Chat View Showing Live User Status" },
        { title: "Database Schema", placeholderText: "PostgreSQL ER Diagram for Conversations & Authentication" },
        { title: "API Swagger Docs", placeholderText: "Interactive FastAPI Swagger Endpoint Documentation" }
      ]
    }
  },
  {
    id: "hashedbit-innovations",
    slug: "hashedbit",
    title: "Software Developer Intern at HashedBit Innovation",
    role: "Software Developer Intern",
    company: "HashedBit Innovation",
    duration: "May 2024 – Jul 2024",
    location: "Gurugram, India",
    summary: "Architected backend services for DressHub, a fashion e-commerce platform, designing REST APIs and relational database models for products, inventory, customers, and order management.",
    technologies: ["Django", "Python", "MySQL", "REST APIs", "JavaScript"],
    githubUrl: "https://github.com/archi2305/Portfolio",
    liveUrl: undefined,
    caseStudy: {
      overview: "DressHub is a stylish fashion e-commerce application designed to serve hundreds of concurrent shoppers looking for clothing catalog feeds, cart setups, and order dispatch lines.",
      problemSolves: "Under high checkout volumes, platforms experience product overselling and inventory synchronization issues. DressHub needed a reliable relational transactional workflow ensuring strict stock checking at database checkout phases.",
      responsibilities: "Owned the backend architecture layout for catalog lookup engines, inventory synchronization updates, checkout pathways, and user accounts. Tasked with reducing page loads and tuning product indexing structures.",
      architectureDescription: "Features a structured web layout backed by Django REST framework. Product listings, categories, and shopping carts are managed via Python backend logic writing directly to a MySQL relational storage cluster.",
      keyContributions: [
        "Owned complete backend development for the e-commerce core including cart configurations and checkout endpoints.",
        "Built a MySQL inventory synchronization pipeline preventing product overselling during heavy user traffic.",
        "Designed comprehensive filters for product lookups, enabling fast user searches by size, type, and price range.",
        "Developed custom Django model schemas ensuring referential integrity across checkout transactions."
      ],
      technicalChallenges: [
        {
          title: "Concurrency-safe inventory checkout",
          description: "Preventing race conditions where multiple users try to purchase the last available stock item. Solved using select_for_update transactional locking in MySQL during checkout operations."
        },
        {
          title: "Product Search & Filter tuning",
          description: "Optimizing search performance on catalogs with thousands of items. Created index maps for composite filtering (color, size, price) to reduce MySQL lookup time."
        },
        {
          title: "Order state transitioning",
          description: "Ensuring database stability during payment verification failures. Configured rollback procedures resetting temporary inventory holds back to catalog counts if order processing failed."
        }
      ],
      lessonsLearned: [
        {
          title: "Relational Database Design",
          description: "Deepened experience in configuring proper transactional lock priorities to prevent database deadlocks under high-stress checkouts."
        },
        {
          title: "E-commerce APIs",
          description: "Ensuring idempotency on purchase requests is vital for preventing double-billing errors when client calls retry."
        },
        {
          title: "Django REST Framework",
          description: "Leveraging custom serializers and select_related query hooks dramatically lowers query count on nested API feeds."
        }
      ],
      gallery: [
        { title: "Product Catalog View", placeholderText: "E-Commerce Catalog Grid with Filters" },
        { title: "Checkout Pipeline Flow", placeholderText: "Step-by-Step Order Processing Architecture Chart" },
        { title: "Inventory Dashboard", placeholderText: "Real-time MySQL Stock Allocation Table View" }
      ]
    }
  }
]
