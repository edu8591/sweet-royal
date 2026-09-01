import { useRef, useState } from "react"

import { prefersReducedMotion } from "@/lib/utils"

const DURATION = 1100

type CountUpOptions = {
  to: number
  decimals?: number
  prefix?: string
  suffix?: string
  /** Shown before the count runs, and whenever motion is reduced. */
  initial: string
}

/**
 * Eases a number up to its target. Returns the text to render plus the `start`
 * to hand to a `Reveal`, so the count fires with the same trigger as the fade.
 */
export function useCountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  initial,
}: CountUpOptions) {
  const [text, setText] = useState(initial)
  const counted = useRef(false)

  const start = () => {
    if (counted.current || prefersReducedMotion()) return
    counted.current = true

    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / DURATION)
      const eased = 1 - Math.pow(1 - p, 3)
      setText(`${prefix}${(to * eased).toFixed(decimals)}${suffix}`)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return { text, start }
}
