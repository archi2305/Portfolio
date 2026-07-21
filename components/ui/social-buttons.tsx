import * as React from "react"
import { GitFork, Briefcase, Code, Mail, FileText } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface SocialButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  platform: "github" | "linkedin" | "leetcode" | "email" | "resume"
  href: string
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const iconMap = {
  github: { icon: GitFork, label: "GitHub Profile" },
  linkedin: { icon: Briefcase, label: "LinkedIn Profile" },
  leetcode: { icon: Code, label: "LeetCode Profile" },
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
  const isDisabled = !href || href === "#"

  return (
    <a
      href={isDisabled ? undefined : href}
      target={platform === "email" ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={ariaLabel || config.label}
      title={ariaLabel || config.label}
      aria-disabled={isDisabled}
      download={platform === "resume" ? "Archi_Snehi_Resume.pdf" : undefined}
      className={cn(
        buttonVariants({ variant, size }),
        "hover:text-primary-text hover:bg-muted/50 rounded-full cursor-pointer transition-transform hover:scale-110 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isDisabled && "pointer-events-none opacity-50",
        className
      )}
      {...props}
    >
      <IconComponent className="h-[1.2rem] w-[1.2rem]" />
    </a>
  )
}
