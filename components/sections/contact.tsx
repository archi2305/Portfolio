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
            <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/40">
              <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <Caption className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email</Caption>
                <a href={profileConfig.email} className="text-sm font-medium text-primary-text hover:underline truncate block">
                  {profileConfig.email.replace("mailto:", "")}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/40">
              <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <Caption className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Phone</Caption>
                <a href={`tel:${profileConfig.phone}`} className="text-sm font-medium text-primary-text hover:underline truncate block">
                  {profileConfig.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/40">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <Caption className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Location</Caption>
                <span className="text-sm font-medium text-primary-text truncate block">
                  {profileConfig.location}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons Link Grid */}
          <div className="flex flex-wrap gap-4 pt-4 max-w-2xl">
            <a
              href={profileConfig.resumeUrl}
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "gap-2")}
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
            
            <a
              href={profileConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
            >
              <GitFork className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={profileConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
            >
              <Briefcase className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={profileConfig.email}
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "gap-2")}
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
