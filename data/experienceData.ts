export interface GalleryItem {
  title: string
  description: string
  image?: string
}

export interface CaseStudy {
  overview: string
  problemSolves: string
  responsibilities: string[]
  architecture: {
    frontend: string[]
    backend: string[]
    database: {
      engine: string
      details: string
      tables: string[]
    }
    authentication: string[]
    deployment: string[]
  }
  keyContributions: string[]
  technicalChallenges: {
    title: string
    description: string
  }[]
  lessonsLearned: {
    title: string
    description: string
  }[]
  gallery: GalleryItem[]
  dashboardImage?: string
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
    summary: "Built a professional networking platform from the ground up, including secure OAuth authentication, real-time messaging, connections, notifications, and modular FastAPI backend APIs deployed on Render.",
    technologies: [
      "React.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "WebSockets",
      "JWT",
      "Google OAuth",
      "GitHub OAuth",
      "Render",
      "Docker",
      "Axios",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/archi2305/Portfolio",
    liveUrl: undefined,
    caseStudy: {
      dashboardImage: "/images/ideactra-dashboard.png",
      overview: "Ideactra Social is a professional networking platform inspired by LinkedIn. During my internship, I worked on building the product from the ground up, including authentication, user profiles, networking features, posts, messaging, notifications, and deployment. The goal was to create a scalable social platform where professionals can connect, communicate, and share content.",
      problemSolves: "Building a modern professional networking platform requires much more than displaying posts. It involves secure authentication, profile management, real-time messaging, notifications, media uploads, social interactions, scalable APIs, and a well-designed database. The challenge was to integrate all these modules into a single production-ready application while keeping the system modular and maintainable.",
      responsibilities: [
        "Built major frontend and backend modules from scratch.",
        "Developed secure authentication using JWT, Google OAuth and GitHub OAuth.",
        "Designed PostgreSQL database schema and relationships.",
        "Built REST APIs using FastAPI.",
        "Implemented messaging, notifications and social networking features.",
        "Integrated profile management, media uploads and user connections.",
        "Fixed deployment issues, authentication bugs and production errors.",
        "Deployed both frontend and backend on Render.",
        "Wrote technical documentation for the complete application."
      ],
      architecture: {
        frontend: [
          "React.js",
          "Context API",
          "Axios",
          "Responsive UI",
          "Component Based Architecture"
        ],
        backend: [
          "FastAPI",
          "Python",
          "REST APIs",
          "JWT Authentication",
          "WebSocket Support",
          "Async SQLAlchemy"
        ],
        database: {
          engine: "PostgreSQL",
          details: "Normalized relational schema",
          tables: [
            "Users",
            "Posts",
            "Comments",
            "Likes",
            "Messages",
            "Conversations",
            "Notifications",
            "Connection Requests",
            "Experience",
            "Education",
            "Projects",
            "Skills",
            "Certifications"
          ]
        },
        authentication: [
          "JWT Authentication",
          "Google OAuth",
          "GitHub OAuth",
          "Protected Routes",
          "Password Hashing"
        ],
        deployment: [
          "Frontend deployed on Render",
          "Backend deployed on Render",
          "PostgreSQL hosted on Render",
          "Environment Variables",
          "Production Configuration"
        ]
      },
      keyContributions: [
        "Built a LinkedIn-inspired professional networking platform from scratch.",
        "Designed and developed secure authentication with Email/Password, Google OAuth, GitHub OAuth and JWT.",
        "Built user profile management including education, experience, projects, certifications and skills.",
        "Developed complete social networking features including posts, likes, comments and connection requests.",
        "Implemented real-time messaging architecture using WebSockets with conversation management.",
        "Built notification system for messages, connection requests and platform activities.",
        "Designed normalized PostgreSQL database with optimized relationships.",
        "Developed REST APIs using FastAPI with proper validation and modular architecture.",
        "Fixed deployment, authentication and production bugs during development.",
        "Deployed frontend, backend and PostgreSQL database on Render."
      ],
      technicalChallenges: [
        {
          title: "Designing Concurrent Messaging",
          description: "Handling high-frequency real-time message streams without causing race conditions or message loss. Solved by writing an connection manager tracking client WebSocket instances and mapping database transaction boundaries cleanly."
        },
        {
          title: "Database Schema Normalization",
          description: "Structuring 13+ related tables (Users, Posts, Conversations, Experiences, etc.) while keeping retrieval speeds fast. Added composite indexes on foreign keys and optimized joining paths."
        },
        {
          title: "Multi-Provider OAuth Syncing",
          description: "Coordinating standard credentials alongside Google and GitHub logins without creating duplicate users. Designed a single unified account association system handling verified email states."
        },
        {
          title: "Deployment and Config Tuning",
          description: "Configuring async connection pools on Render instances without hitting database connection caps. Set up SQLAlchemy pooling configurations and optimized connection reuse."
        }
      ],
      lessonsLearned: [
        {
          title: "System Design",
          description: "Learned how to design a modular full-stack application by separating authentication, user management, social networking and messaging into independent modules."
        },
        {
          title: "Backend Development",
          description: "Improved understanding of FastAPI, API design, authentication, database relationships and production-ready backend architecture."
        },
        {
          title: "Database Design",
          description: "Designed relational database schemas with proper foreign keys, normalization and optimized queries."
        },
        {
          title: "Authentication",
          description: "Implemented JWT authentication and integrated Google and GitHub OAuth securely."
        },
        {
          title: "Deployment",
          description: "Learned production deployment using Render, environment variables, PostgreSQL hosting and debugging deployment issues."
        },
        {
          title: "Debugging",
          description: "Resolved authentication errors, routing issues, WebSocket connection problems, profile upload bugs and deployment failures."
        }
      ],
      gallery: [
        {
          title: "Dashboard Home",
          description: "Replace with dashboard screenshot showing the feed, side menu, and trending topics.",
          image: "/images/ideactra-dashboard.png"
        },
        {
          title: "User Profile",
          description: "Replace with profile page displaying user education, experience, skills, and certifications.",
          image: "/images/ideactra-profile.png"
        },
        {
          title: "Messaging System",
          description: "Replace with messaging UI illustrating dynamic chat logs and active chats.",
          image: "/images/ideactra-messaging.png"
        },
        {
          title: "Authentication",
          description: "Replace with login screen showcasing password sign-ins and Google/GitHub OAuth options.",
          image: "/images/ideactra-auth.png"
        },
        {
          title: "Database Schema",
          description: "Replace with ER Diagram detailing tables and relational link mapping.",
          image: "/images/ideactra-db.png"
        }
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
      dashboardImage: "/images/hashedbit-catalog.png",
      overview: "DressHub is a stylish fashion e-commerce application designed to serve hundreds of concurrent shoppers looking for clothing catalog feeds, cart setups, and order dispatch lines.",
      problemSolves: "Under high checkout volumes, platforms experience product overselling and inventory synchronization issues. DressHub needed a reliable relational transactional workflow ensuring strict stock checking at database checkout phases.",
      responsibilities: [
        "Owned the backend architecture layout for catalog lookup engines, inventory synchronization updates, checkout pathways, and user accounts.",
        "Tasked with reducing page loads and tuning product indexing structures."
      ],
      architecture: {
        frontend: [
          "MERN React UI components",
          "State management",
          "Responsive Catalog layout",
          "Axios requests"
        ],
        backend: [
          "Django REST Framework",
          "Python",
          "Inventory Serializers",
          "E-commerce pipelines"
        ],
        database: {
          engine: "MySQL",
          details: "Indexed tables for product lookup speed",
          tables: [
            "Users",
            "Products",
            "Categories",
            "Orders",
            "OrderItems",
            "Carts",
            "InventoryLogs"
          ]
        },
        authentication: [
          "Django Session Authentications",
          "Protected API routes"
        ],
        deployment: [
          "Linux production instances",
          "MySQL sync servers"
        ]
      },
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
        { title: "Product Catalog View", description: "Replace with e-commerce catalog page showing grid layout and filters.", image: "/images/hashedbit-catalog.png" },
        { title: "Checkout Pipeline Flow", description: "Replace with checkout confirmation interface and checkout form.", image: "/images/hashedbit-checkout.png" },
        { title: "Inventory Dashboard", description: "Replace with admin table layout showing stock inventory status.", image: "/images/hashedbit-inventory.png" }
      ]
    }
  }
]
