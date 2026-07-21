import { Experience } from "@/types/experience"

export const experiences: Experience[] = [
  {
    id: "ideactra-social",
    company: "Ideactra Social",
    role: "Full Stack Developer Intern",
    duration: "2024", // Adjust if needed
    location: "Remote",
    description: "Contributed to the development of a LinkedIn-inspired professional networking platform by building responsive React interfaces, integrating REST APIs, implementing authentication flows, and improving the user profile experience while collaborating with the development team.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Git"],
    achievements: [
      "Developed responsive profile and authentication modules using React and Tailwind CSS.",
      "Integrated backend APIs for user profiles, authentication, and social interactions.",
      "Fixed UI issues related to profile images, data persistence, and user experience.",
      "Collaborated using Git and GitHub in an agile development workflow."
    ],
  },
  {
    id: "hashedbit-innovation",
    company: "HashedBit Innovation",
    role: "Backend Developer Intern",
    duration: "2023", // Adjust if needed
    location: "Remote",
    description: "Worked on backend development for production web applications including an e-commerce platform and job portal. Designed REST APIs, implemented authentication, and built scalable backend services.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT", "REST APIs", "Git"],
    achievements: [
      "Developed RESTful APIs using Spring Boot.",
      "Designed relational database schemas.",
      "Implemented JWT authentication.",
      "Integrated backend services with frontend applications."
    ],
  },
]
