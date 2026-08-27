import { cn } from "@/lib/utils"

export function Chip({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "border-leaf text-leaf rounded-full border px-3 py-[7px] font-mono text-[11.5px] tracking-[0.04em] uppercase",
        className,
      )}
      {...props}
    />
  )
}
