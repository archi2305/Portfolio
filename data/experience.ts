import { Experience } from "@/types/experience"

export const experiences: Experience[] = [
  {
    id: "ideactra-social",
    company: "Ideactra Social",
    role: "Software Developer Intern",
    duration: "Apr 2026 – Jun 2026",
    location: "Remote",
    description: "Engineered core backend infrastructure for Ideactra Social, a live social platform — architecting REST APIs and relational database models spanning user profiles, content publishing, networking, and engagement workflows.",
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
    achievements: [
      "Engineered core backend infrastructure for Ideactra Social, a live social platform — architecting REST APIs and relational database models.",
      "Implemented Google OAuth 2.0, GitHub OAuth, and JWT-based authentication, replacing the launch login flow with a unified system.",
      "Architected a WebSocket-based real-time messaging system handling conversation management, message persistence, and live presence tracking, and integrated a RAG-powered AI assistant using the Gemini API."
    ],
  },
  {
    id: "hashedbit-innovations",
    company: "HashedBit Innovation",
    role: "Software Developer Intern",
    duration: "May 2024 – Jul 2024",
    location: "Gurugram, India",
    description: "Architected backend services for an e-commerce platform, designing REST APIs and relational database models for products, inventory, customers, and order management.",
    technologies: ["Django", "Python", "MySQL", "REST APIs", "JavaScript"],
    achievements: [
      "Architected backend services for an e-commerce platform, designing REST APIs and relational database models for products, inventory, customers, and order management.",
      "Delivered authentication, product catalog management, shopping cart, and order processing — enabling end-to-end online purchasing.",
      "Engineered concurrency-safe inventory management to preserve stock consistency and prevent overselling during simultaneous purchase requests."
    ],
  },
]
