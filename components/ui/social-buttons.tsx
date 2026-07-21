import * as React from "react"
import { GitFork, Briefcase, Send, Mail, FileText } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface SocialButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  platform: "github" | "linkedin" | "twitter" | "email" | "resume"
  href: string
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const iconMap = {
  github: { icon: GitFork, label: "GitHub Profile" },
  linkedin: { icon: Briefcase, label: "LinkedIn Profile" },
  twitter: { icon: Send, label: "Twitter Profile" },
  email: { icon: Mail, label: "Send Email" },
  resume: { icon: FileText, label: "View Resume" },
}

export function SocialButton({
  platform,
  href,
  className,
  variant = "outline",
  size = "icon",
  "aria-label": ariaLabel,
  ...props
}: SocialButtonProps) {
  const config = iconMap[platform]
  const IconComponent = config.icon

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || config.label}
      className={cn(
        buttonVariants({ variant, size }),
        "hover:text-primary-text hover:bg-muted/50 rounded-full cursor-pointer",
        className
      )}
      {...props}
    >
      <IconComponent className="h-[1.2rem] w-[1.2rem]" />
    </a>
  )
}
