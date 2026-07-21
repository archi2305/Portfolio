import { Variants } from "framer-motion"

export const fadeIn = (duration = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, ease: "easeOut" },
  },
})

export const slideUp = (duration = 0.5, yOffset = 20): Variants => ({
  hidden: { opacity: 0, y: yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: "easeOut" },
  },
})

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const hoverScale = (scale = 1.05, duration = 0.2): Variants => ({
  initial: { scale: 1 },
  hover: {
    scale,
    transition: { duration, ease: "easeInOut" },
  },
})
