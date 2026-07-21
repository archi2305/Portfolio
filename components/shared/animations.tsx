"use client"

import * as React from "react"
import { LazyMotion, domMax, m, HTMLMotionProps } from "framer-motion"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>
}

export interface AnimationProps extends HTMLMotionProps<"div"> {
  duration?: number
  delay?: number
}

export function FadeIn({ children, duration = 0.5, delay = 0, ...props }: AnimationProps) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
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
  duration = 0.5,
  delay = 0,
  yOffset = 30,
  ...props
}: SlideUpProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
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
  duration = 0.4,
  delay = 0,
  initialScale = 0.9,
  ...props
}: ScaleInProps) {
  return (
    <m.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
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
  staggerChildren = 0.1,
  delayChildren = 0,
  ...props
}: StaggerProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
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
  threshold = 0.1,
  ...props
}: RevealOnScrollProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </m.div>
  )
}
