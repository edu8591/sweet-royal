import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  tag: string
  title: string
  /** Inverted styling for sections sitting on the dark leaf background. */
  onDark?: boolean
  className?: string
}

export function SectionHeading({
  tag,
  title,
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-[22px] flex items-baseline gap-3 border-b pb-2.5",
        onDark ? "border-paper/25" : "border-line",
        className,
      )}
    >
      <span
        className={cn(
          "font-mono text-[11px] tracking-[0.14em] whitespace-nowrap uppercase",
          onDark ? "text-banana" : "text-rust",
        )}
      >
        {tag}
      </span>
      <h2
        className={cn(
          "font-display m-0 text-[26px] tracking-[0.02em]",
          onDark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
    </div>
  )
}
