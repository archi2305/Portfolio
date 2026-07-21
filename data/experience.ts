import { Experience } from "@/types/experience"

export const experiences: Experience[] = [
  {
    id: "ideactra-social",
    company: "Ideactra Social",
    role: "Software Developer Intern",
    duration: "Apr 2026 – Jun 2026",
    location: "Remote",
    description: "Contributed to the development of a production-ready social networking platform by architecting scalable backend services, implementing secure authentication, and building real-time communication features while collaborating across the full stack.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "React",
      "JavaScript",
      "WebSockets",
      "Google OAuth 2.0",
      "GitHub OAuth",
      "JWT"
    ],
    achievements: [
      "Architected and built a WebSocket-based real-time chat system from scratch, including the PostgreSQL schema for users, conversations, and engagement.",
      "Built 20+ REST APIs covering authentication, user profiles, content publishing, and core social networking features.",
      "Replaced the initial login system with Google OAuth 2.0, GitHub OAuth, and JWT-based authentication for a secure and seamless sign-in experience."
    ],
  },
  {
    id: "hashedbit-innovations",
    company: "HashedBit Innovations",
    role: "Python & Web Development Intern",
    duration: "May 2024 – Jul 2024",
    location: "Gurugram, India",
    description: "Owned backend development for DressHub, a fashion e-commerce platform, focusing on scalable inventory management, order processing, and improving the overall shopping experience through reliable backend systems.",
    technologies: ["Python", "Django", "MySQL", "JavaScript"],
    achievements: [
      "Owned backend development for DressHub, implementing the product catalog, shopping cart, checkout flow, and order tracking modules.",
      "Built an inventory synchronization pipeline to prevent overselling during concurrent customer checkouts.",
      "Implemented advanced product search, filtering, and real-time inventory validation so customers only viewed products that were actually in stock."
    ],
  },
]
