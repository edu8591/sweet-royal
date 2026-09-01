import { useEffect, useRef } from "react"

import { prefersReducedMotion } from "@/lib/utils"

type Reveal = { el: Element; delay: number; show: () => void }

let observer: IntersectionObserver | null = null
const pending = new Map<Element, Reveal>()

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const reveal = pending.get(entry.target)
        observer?.unobserve(entry.target)
        pending.delete(entry.target)
        if (!reveal) continue
        if (reveal.delay > 0) setTimeout(reveal.show, reveal.delay)
        else reveal.show()
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  )
  return observer
}

/**
 * Registers an element with the page's single shared IntersectionObserver.
 * `onReveal` fires once, after the optional delay, then the element is dropped.
 */
export function useReveal<T extends Element>(delay = 0, onReveal?: () => void) {
  const ref = useRef<T>(null)
  const callback = useRef(onReveal)

  useEffect(() => {
    callback.current = onReveal
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => {
      el.setAttribute("data-revealed", "")
      callback.current?.()
    }

    if (prefersReducedMotion()) {
      show()
      return
    }

    const io = getObserver()
    pending.set(el, { el, delay, show })
    io.observe(el)

    return () => {
      io.unobserve(el)
      pending.delete(el)
    }
  }, [delay])

  return ref
}
