"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Button, buttonVariants } from "@/components/ui/button"
import { IconButton } from "@/components/ui/icon-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge, Chip } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { Spinner, Skeleton, LoadingDots } from "@/components/ui/loading"
import { GradientBlur, GridPattern, NoiseOverlay } from "@/components/ui/backgrounds"
import { SocialButton } from "@/components/ui/social-buttons"
import { Grid } from "@/components/layout/grid"
import { Stack } from "@/components/layout/stack"
import { SectionHeader } from "@/components/layout/section-header"
import { Navbar } from "@/components/layout/navbar"
import { FadeIn, SlideUp, ScaleIn, RevealOnScroll } from "@/components/shared/animations"
import { Display, H1, H2, H3, Body, Caption } from "@/components/ui/typography"
import { Send, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  const [loadingBtn, setLoadingBtn] = React.useState(false)
  const [chips, setChips] = React.useState(["Next.js", "React", "Tailwind", "Framer Motion", "TypeScript"])

  const navItems = [
    { label: "Typography", href: "#typography" },
    { label: "Buttons", href: "#buttons" },
    { label: "Cards", href: "#cards" },
    { label: "Badges", href: "#badges" },
    { label: "Loaders", href: "#loaders" },
    { label: "Backgrounds", href: "#backgrounds" },
    { label: "Animations", href: "#animations" },
  ]

  const removeChip = (chipToRemove: string) => {
    setChips(chips.filter((c) => c !== chipToRemove))
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
      {/* Dynamic Ambient Background Elements */}
      <GridPattern />
      <NoiseOverlay />
      <GradientBlur className="top-[10%] left-[5%] bg-primary/10 w-[350px] h-[350px]" />
      <GradientBlur className="bottom-[15%] right-[5%] bg-secondary/10 w-[400px] h-[400px]" />

      {/* Reusable Navbar */}
      <Navbar items={navItems} logoText="System.UI" />

      {/* Hero Showcase Introduction */}
      <Section className="relative z-10 pt-20 pb-16">
        <Container>
          <SlideUp duration={0.6}>
            <Stack align="center" gap={4} className="text-center">
              <Badge variant="secondary" className="px-3 py-1 font-semibold uppercase tracking-wider text-xs">
                Phase 2 Core Complete
              </Badge>
              <Display className="max-w-4xl bg-gradient-to-r from-primary-text via-secondary-text to-primary-text bg-clip-text text-transparent">
                Design System Showcase
              </Display>
              <Body className="max-w-2xl text-secondary-text">
                A visually verified, production-grade library of fully accessible, responsive, and theme-aware components. Build cohesive portfolio segments utilizing standard semantic tokens.
              </Body>
              <Stack direction="row" gap={3} className="mt-4">
                <a
                  href="#typography"
                  className={cn(buttonVariants({ variant: "default", size: "lg" }))}
                >
                  Explore Components
                </a>
                <a
                  href="https://github.com/archi2305/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  View Repository
                </a>
              </Stack>
            </Stack>
          </SlideUp>
        </Container>
      </Section>

      <Divider />

      {/* Typography Section */}
      <Section id="typography" className="relative z-10 scroll-mt-16">
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Typography System"
              subtitle="Predefined text blocks structured around scalable sizing scales and default font families."
              badge="Typography"
              align="left"
            />
            <Card variant="glass" className="p-6 md:p-8">
              <Stack gap={6}>
                <Stack gap={1}>
                  <Caption className="text-muted-foreground font-mono">Display Text</Caption>
                  <Display>Display Heading</Display>
                </Stack>
                <Divider />
                <Stack gap={1}>
                  <Caption className="text-muted-foreground font-mono">H1 Heading</Caption>
                  <H1>Heading Level 1</H1>
                </Stack>
                <Divider />
                <Stack gap={1}>
                  <Caption className="text-muted-foreground font-mono">H2 Heading</Caption>
                  <H2>Heading Level 2</H2>
                </Stack>
                <Divider />
                <Stack gap={1}>
                  <Caption className="text-muted-foreground font-mono">H3 Heading</Caption>
                  <H3>Heading Level 3</H3>
                </Stack>
                <Divider />
                <Stack gap={1}>
                  <Caption className="text-muted-foreground font-mono">Body Text</Caption>
                  <Body>
                    This is standard body copy text. It is designed to be highly readable on all screen sizes with optimized line heights and tracking. It adopts a secondary text token color to prevent contrast fatigue.
                  </Body>
                </Stack>
                <Divider />
                <Stack gap={1}>
                  <Caption className="text-muted-foreground font-mono">Caption / Small Text</Caption>
                  <Caption>This is caption / small metadata text style for annotations.</Caption>
                </Stack>
              </Stack>
            </Card>
          </RevealOnScroll>
        </Container>
      </Section>

      <Divider />

      {/* Buttons Section */}
      <Section id="buttons" className="relative z-10 scroll-mt-16">
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Buttons & Interactions"
              subtitle="Modular call-to-actions supporting active, hover, focused, disabled, and loading states."
              badge="Buttons"
              align="left"
            />
            <Card variant="default" className="p-6 md:p-8 bg-card/50">
              <Stack gap={8}>
                {/* Button Variants */}
                <Stack gap={3}>
                  <H3 className="text-lg font-bold">Base Variants</H3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default Solid</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost Link</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Underline Link</Button>
                  </div>
                </Stack>

                <Divider />

                {/* Loading and Interactivity */}
                <Stack gap={3}>
                  <H3 className="text-lg font-bold">Interactive States</H3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      variant="default"
                      loading={loadingBtn}
                      onClick={() => {
                        setLoadingBtn(true)
                        setTimeout(() => setLoadingBtn(false), 2000)
                      }}
                    >
                      Click to Load
                    </Button>
                    <Button variant="outline" loading>
                      Loading State
                    </Button>
                    <Button variant="default" disabled>
                      Disabled Button
                    </Button>
                    <IconButton variant="outline" aria-label="Send message">
                      <Send className="h-4 w-4" />
                    </IconButton>
                    <IconButton variant="ghost" aria-label="Search items">
                      <Search className="h-4 w-4" />
                    </IconButton>
                  </div>
                </Stack>

                <Divider />

                {/* Social Buttons */}
                <Stack gap={3}>
                  <H3 className="text-lg font-bold">Social Platforms</H3>
                  <div className="flex flex-wrap gap-4">
                    <SocialButton platform="github" href="https://github.com" />
                    <SocialButton platform="linkedin" href="https://linkedin.com" />
                    <SocialButton platform="twitter" href="https://twitter.com" />
                    <SocialButton platform="email" href="mailto:example@example.com" />
                    <SocialButton platform="resume" href="#" />
                  </div>
                </Stack>
              </Stack>
            </Card>
          </RevealOnScroll>
        </Container>
      </Section>

      <Divider />

      {/* Cards Section */}
      <Section id="cards" className="relative z-10 scroll-mt-16">
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Cards & Containers"
              subtitle="Structured box wrappers optimized for glassmorphic elevation, hover scaling, and clean boundaries."
              badge="Cards"
              align="left"
            />
            <Grid cols={1} colsSm={2} colsMd={2} colsLg={4} gap={6}>
              {/* Default Card */}
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Base Card</CardTitle>
                  <CardDescription>Default border layout</CardDescription>
                </CardHeader>
                <CardContent>
                  Standard card container using secondary text and subtle border tokens.
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  Footer section
                </CardFooter>
              </Card>

              {/* Glass Card */}
              <Card variant="glass">
                <CardHeader>
                  <CardTitle>Glass Card</CardTitle>
                  <CardDescription>Backdrop blur effect</CardDescription>
                </CardHeader>
                <CardContent>
                  Premium glassmorphism wrapper supporting background opacity and blur styles.
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  Footer section
                </CardFooter>
              </Card>

              {/* Elevated Card */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>Drop shadow elevation</CardDescription>
                </CardHeader>
                <CardContent>
                  Raises content using shadow properties instead of solid borders for depth.
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  Footer section
                </CardFooter>
              </Card>

              {/* Interactive Card */}
              <Card variant="interactive">
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>Hover lift & shadow</CardDescription>
                </CardHeader>
                <CardContent>
                  Smoothly translates upwards and increases shadow density on hover states.
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  Hover me to check
                </CardFooter>
              </Card>
            </Grid>
          </RevealOnScroll>
        </Container>
      </Section>

      <Divider />

      {/* Badges & Chips Section */}
      <Section id="badges" className="relative z-10 scroll-mt-16">
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Badges, Chips & Statuses"
              subtitle="Labels displaying inline status indicators, tags, or dynamic deletable values."
              badge="Badges"
              align="left"
            />
            <Card variant="default" className="p-6 bg-card/50">
              <Stack gap={6}>
                {/* Badges */}
                <Stack gap={2}>
                  <H3 className="text-lg font-bold">Badge Variants</H3>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="default">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </Stack>

                <Divider />

                {/* Chips */}
                <Stack gap={2}>
                  <H3 className="text-lg font-bold">Interactive Chips</H3>
                  <Body className="text-sm">Click the tags to remove them dynamically from the state:</Body>
                  <div className="flex flex-wrap gap-3 min-h-[32px]">
                    {chips.length > 0 ? (
                      chips.map((chip) => (
                        <Chip key={chip} onRemove={() => removeChip(chip)}>
                          {chip}
                        </Chip>
                      ))
                    ) : (
                      <Caption className="text-muted-foreground">All tags cleared. Refresh to reload.</Caption>
                    )}
                  </div>
                </Stack>
              </Stack>
            </Card>
          </RevealOnScroll>
        </Container>
      </Section>

      <Divider />

      {/* Loaders Section */}
      <Section id="loaders" className="relative z-10 scroll-mt-16">
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Loading Indicators"
              subtitle="Placeholders and animations serving feedback during server transactions or heavy media processing."
              badge="Loaders"
              align="left"
            />
            <Grid cols={1} colsMd={3} gap={6}>
              {/* Spinner */}
              <Card variant="glass" className="p-6 flex flex-col items-center justify-center text-center">
                <Spinner size="lg" className="mb-4" />
                <H3 className="text-base font-bold">Spinner Component</H3>
                <Caption className="mt-1 text-muted-foreground">Standard rotating SVGs</Caption>
              </Card>

              {/* Skeleton */}
              <Card variant="glass" className="p-6">
                <Stack gap={3}>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Stack gap={1} className="flex-1">
                      <Skeleton className="h-4 w-[60%]" />
                      <Skeleton className="h-3 w-[40%]" />
                    </Stack>
                  </div>
                  <Skeleton className="h-16 w-full" />
                  <H3 className="text-base font-bold text-center mt-2">Skeleton Placeholders</H3>
                </Stack>
              </Card>

              {/* Loading Dots */}
              <Card variant="glass" className="p-6 flex flex-col items-center justify-center text-center">
                <LoadingDots size="lg" className="mb-6" />
                <H3 className="text-base font-bold">Loading Dots</H3>
                <Caption className="mt-1 text-muted-foreground">Bouncing dot sequences</Caption>
              </Card>
            </Grid>
          </RevealOnScroll>
        </Container>
      </Section>

      <Divider />

      {/* Backgrounds Section */}
      <Section id="backgrounds" className="relative z-10 scroll-mt-16">
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Decorative Backgrounds"
              subtitle="Ambient noise overlays, color glows, and fine grids layering modern digital texture."
              badge="Backgrounds"
              align="left"
            />
            <Grid cols={1} colsMd={2} gap={6}>
              {/* Grid & Noise Showcase */}
              <Card variant="default" className="relative min-h-[200px] overflow-hidden p-6 bg-card/40">
                <GridPattern />
                <NoiseOverlay />
                <Stack gap={2} className="relative z-10">
                  <Badge variant="outline" className="w-fit">Grid + Noise Pattern</Badge>
                  <H3 className="text-lg font-bold">Geometric Texturing</H3>
                  <Body className="text-sm">
                    Features an SVG layout repeating exact grids layered underneath a high-frequency grain overlay.
                  </Body>
                </Stack>
              </Card>

              {/* Ambient Glow Showcase */}
              <Card variant="default" className="relative min-h-[200px] overflow-hidden p-6 bg-card/40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
                <Stack gap={2} className="relative z-10">
                  <Badge variant="outline" className="w-fit">Ambient Blur Spot</Badge>
                  <H3 className="text-lg font-bold">Radial Highlights</H3>
                  <Body className="text-sm">
                    Utilizes custom radial gradients layered beneath blurs to spotlight critical UI components or hero cards.
                  </Body>
                </Stack>
              </Card>
            </Grid>
          </RevealOnScroll>
        </Container>
      </Section>

      <Divider />

      {/* Animations Section */}
      <Section id="animations" className="relative z-10 scroll-mt-16">
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Framer Motion Animations"
              subtitle="Clean wrappers managing entering directions, staging scales, or viewport reveals."
              badge="Animations"
              align="left"
            />
            <Grid cols={1} colsMd={3} gap={6}>
              {/* FadeIn */}
              <FadeIn delay={0.1}>
                <Card variant="glass" className="p-6">
                  <CardHeader>
                    <Badge className="w-fit mb-2">FadeIn Wrapper</Badge>
                    <CardTitle>Opacity Transition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Renders client-side opacity adjustments from 0 to 1 once in viewport.
                  </CardContent>
                </Card>
              </FadeIn>

              {/* SlideUp */}
              <SlideUp delay={0.2} yOffset={40}>
                <Card variant="glass" className="p-6">
                  <CardHeader>
                    <Badge className="w-fit mb-2">SlideUp Wrapper</Badge>
                    <CardTitle>Translation Y</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Offsets layout along the vertical axis, matching entering motion curves.
                  </CardContent>
                </Card>
              </SlideUp>

              {/* ScaleIn */}
              <ScaleIn delay={0.3}>
                <Card variant="glass" className="p-6">
                  <CardHeader>
                    <Badge className="w-fit mb-2">ScaleIn Wrapper</Badge>
                    <CardTitle>Sizing Scale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Scales upwards from an initial percentage value to full container boundary.
                  </CardContent>
                </Card>
              </ScaleIn>
            </Grid>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* Showcase Footer */}
      <footer className="relative z-10 py-12 border-t border-border bg-muted/20">
        <Container>
          <Stack align="center" justify="between" directionMd="row" gap={4} className="text-center md:text-left">
            <Stack gap={1}>
              <Heading as="h4" size="h6" className="font-bold">System.UI</Heading>
              <Caption className="text-muted-foreground">Phase 2 Reusable Design Library • Verified local builds.</Caption>
            </Stack>
            <ThemeToggle />
          </Stack>
        </Container>
      </footer>
    </div>
  )
}
