import { useEffect, useRef, useState } from "react"

import { prefersReducedMotion } from "@/lib/utils"

/** Y offset past which the sticky nav slides in. */
const NAV_THRESHOLD = 520

type ScrollDriver = {
  navVisible: boolean
  /** Attach to the hero photo layer; it is transformed imperatively. */
  photoRef: React.RefObject<HTMLDivElement | null>
}

/**
 * One passive scroll listener, rAF-throttled, driving both the sticky nav
 * and the hero parallax. The photo is written to directly so parallax never
 * re-renders the tree.
 */
export function useScrollDriver(): ScrollDriver {
  const [navVisible, setNavVisible] = useState(false)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parallax = !prefersReducedMotion()
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const y = window.scrollY
        setNavVisible(y > NAV_THRESHOLD)
        if (parallax && photoRef.current) {
          photoRef.current.style.transform = `translateY(${
            Math.min(y, 900) * 0.16
          }px) scale(1.04)`
        }
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return { navVisible, photoRef }
}
