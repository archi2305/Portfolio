import { Experience } from "@/types/experience"

export const experiences: Experience[] = [
  {
    id: "ideactra-social",
    company: "Ideactra Social",
    role: "Software Developer Intern",
    duration: "Apr 2026 – Jun 2026",
    location: "Remote",
    description: "Contributed to a production-ready social networking platform by architecting scalable backend services, implementing secure authentication, and building real-time communication features.",
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
      "Architected and built a **WebSocket** real-time chat system from scratch, including database schemas for users and conversations.",
      "Developed **20+ REST APIs** covering core authentication, user profiles, and social networking features.",
      "Integrated **Google OAuth 2.0**, **GitHub OAuth**, and **JWT** auth for secure and seamless user sessions."
    ],
  },
  {
    id: "hashedbit-innovations",
    company: "HashedBit Innovations",
    role: "Python & Web Development Intern",
    duration: "May 2024 – Jul 2024",
    location: "Gurugram, India",
    description: "Owned backend development for DressHub, a fashion e-commerce platform, focusing on inventory management, order processing, and shopping experience reliability.",
    technologies: ["Python", "Django", "MySQL", "JavaScript"],
    achievements: [
      "Owned backend development for DressHub, implementing catalog, shopping cart, and order tracking modules.",
      "Built an inventory sync pipeline using **MySQL** to prevent overselling during concurrent checkouts.",
      "Implemented advanced product search, filtering, and real-time inventory validation for in-stock catalog views."
    ],
  },
]
