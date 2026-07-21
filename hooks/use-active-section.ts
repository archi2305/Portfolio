import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: string[], offset = 160) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Check if we are at the top of the page (then activate first section/hero)
      if (window.scrollY < 80) {
        setActiveSection(sectionIds[0] || "")
        return
      }

      // Check if we reached bottom of the page (then activate last section)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection(sectionIds[sectionIds.length - 1] || "")
        return
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue

        const top = el.offsetTop
        const height = el.offsetHeight

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id)
          return
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Run on mount
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}
