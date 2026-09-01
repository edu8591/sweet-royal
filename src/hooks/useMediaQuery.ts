import { useEffect, useState } from "react"

/** Tracks a media query, SSR-safe and kept in sync via `change`. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const list = window.matchMedia(query)
    const onChange = () => setMatches(list.matches)
    onChange()
    list.addEventListener("change", onChange)
    return () => list.removeEventListener("change", onChange)
  }, [query])

  return matches
}

/** The single breakpoint the design switches layout on. */
export const NARROW_QUERY = "(max-width: 699px)"
