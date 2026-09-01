import { Slot } from "radix-ui"

import { useReveal } from "@/hooks/useReveal"
import { cn } from "@/lib/utils"

type RevealProps = React.ComponentProps<"div"> & {
  /** Stagger, in ms, applied after the element crosses the threshold. */
  delay?: number
  onReveal?: () => void
  /** Reveal the child element itself, to keep semantic markup (dl, ul, …). */
  asChild?: boolean
}

/**
 * Fades and lifts its children in when scrolled into view, driven by the
 * page-wide shared observer in `useReveal`.
 */
export function Reveal({
  className,
  delay = 0,
  onReveal,
  asChild = false,
  ...props
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>(delay, onReveal)
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      ref={ref}
      className={cn(
        "translate-y-[22px] opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)]",
        "data-revealed:translate-y-0 data-revealed:opacity-100",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className,
      )}
      {...props}
    />
  )
}
