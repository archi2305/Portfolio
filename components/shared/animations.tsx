"use client"

import * as React from "react"
import { LazyMotion, domMax, m, useReducedMotion, HTMLMotionProps } from "framer-motion"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>
}

// Premium easeOutExpo transition curve for high-end UI feel
const easeOutExpo = [0.16, 1, 0.3, 1] as const

export interface AnimationProps extends HTMLMotionProps<"div"> {
  duration?: number
  delay?: number
}

export function FadeIn({ children, duration = 0.6, delay = 0, ...props }: AnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: easeOutExpo 
      }}
      {...props}
    >
      {children}
    </m.div>
  )
}

export interface SlideUpProps extends AnimationProps {
  yOffset?: number
}

export function SlideUp({
  children,
  duration = 0.6,
  delay = 0,
  yOffset = 16, // Reduced offset for subtle, premium transition
  ...props
}: SlideUpProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: easeOutExpo 
      }}
      {...props}
    >
      {children}
    </m.div>
  )
}

export interface ScaleInProps extends AnimationProps {
  initialScale?: number
}

export function ScaleIn({
  children,
  duration = 0.5,
  delay = 0,
  initialScale = 0.97, // Subtle scaling to avoid jarring layouts
  ...props
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: initialScale }}
      whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: easeOutExpo 
      }}
      {...props}
    >
      {children}
    </m.div>
  )
}

export interface StaggerProps extends HTMLMotionProps<"div"> {
  staggerChildren?: number
  delayChildren?: number
}

export function Stagger({
  children,
  staggerChildren = 0.08, // Slightly faster, snappier stagger
  delayChildren = 0,
  ...props
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </m.div>
  )
}

export interface RevealOnScrollProps extends HTMLMotionProps<"div"> {
  threshold?: number
}

export function RevealOnScroll({
  children,
  threshold = 0.15,
  ...props
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.7, 
        ease: easeOutExpo 
      }}
      {...props}
    >
      {children}
    </m.div>
  )
}
