import * as React from "react"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Stack } from "@/components/layout/stack"
import { RevealOnScroll } from "@/components/shared/animations"
import { Body, Caption } from "@/components/ui/typography"
import { buttonVariants } from "@/components/ui/button"
import { Mail, Phone, MapPin, FileText, GitFork, Briefcase } from "lucide-react"
import { profileConfig } from "@/data/config"
import { cn } from "@/lib/utils"

export function Contact() {
  const isResumeDisabled = !profileConfig.resumeUrl || profileConfig.resumeUrl === "#"
  const isGithubDisabled = !profileConfig.socials.github || profileConfig.socials.github === "#"
  const isLinkedinDisabled = !profileConfig.socials.linkedin || profileConfig.socials.linkedin === "#"
  const isEmailDisabled = !profileConfig.email || profileConfig.email === "#"

  return (
    <Section id="contact" className="scroll-mt-24 min-h-[50vh]">
      <RevealOnScroll>
        <Stack gap={8}>
          
          <Stack gap={3}>
            <Heading as="h2" size="h2" className="border-b pb-2 border-border">
              Contact
            </Heading>
            <Heading as="h3" size="h3" className="text-xl font-bold text-primary-text mt-4">
              {profileConfig.contact.heading}
            </Heading>
            <Body className="max-w-2xl text-secondary-text leading-relaxed whitespace-pre-line">
              {profileConfig.contact.description}
            </Body>
          </Stack>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            
            {/* Email Card (Whole Card Clickable) */}
            <a 
              href={isEmailDisabled ? undefined : profileConfig.emailMailto}
              aria-disabled={isEmailDisabled}
              className={cn(
                "flex items-center gap-3 p-4 rounded-lg border border-border bg-card/40 hover:bg-card/75 hover:border-primary-text/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isEmailDisabled && "pointer-events-none opacity-50"
              )}
            >
              <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <Caption className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email</Caption>
                <span className="text-sm font-medium text-primary-text truncate block">
                  {profileConfig.email}
                </span>
              </div>
            </a>

            {/* Phone Card (Whole Card Clickable) */}
            <a 
              href={profileConfig.phoneUrl}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/40 hover:bg-card/75 hover:border-primary-text/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <Caption className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Phone</Caption>
                <span className="text-sm font-medium text-primary-text truncate block">
                  {profileConfig.phone}
                </span>
              </div>
            </a>

            {/* Location Card (Whole Card Clickable) */}
            <a 
              href={profileConfig.locationMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/40 hover:bg-card/75 hover:border-primary-text/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <Caption className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Location</Caption>
                <span className="text-sm font-medium text-primary-text truncate block">
                  {profileConfig.location}
                </span>
              </div>
            </a>
          </div>

          {/* Action Buttons Link Grid */}
          <div className="flex flex-wrap gap-4 pt-4 max-w-2xl">
            <a
              href={isResumeDisabled ? undefined : profileConfig.resumeUrl}
              download="Archi_Snehi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={isResumeDisabled}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }), 
                "gap-2",
                isResumeDisabled && "pointer-events-none opacity-50"
              )}
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
            
            <a
              href={isGithubDisabled ? undefined : profileConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={isGithubDisabled}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }), 
                "gap-2",
                isGithubDisabled && "pointer-events-none opacity-50"
              )}
            >
              <GitFork className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={isLinkedinDisabled ? undefined : profileConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={isLinkedinDisabled}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }), 
                "gap-2",
                isLinkedinDisabled && "pointer-events-none opacity-50"
              )}
            >
              <Briefcase className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={isEmailDisabled ? undefined : profileConfig.emailMailto}
              aria-disabled={isEmailDisabled}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }), 
                "gap-2",
                isEmailDisabled && "pointer-events-none opacity-50"
              )}
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>

        </Stack>
      </RevealOnScroll>
    </Section>
  )
}
