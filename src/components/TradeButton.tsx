import { cva, type VariantProps } from "class-variance-authority"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * The stamped, monospace CTA used across the page. Wraps shadcn's Button so
 * behaviour (asChild, focus ring, disabled) stays shared.
 */
const tradeButtonVariants = cva(
  "h-auto rounded-[2px] border font-mono uppercase transition-[transform,background-color,color,border-color,box-shadow] duration-200 hover:-translate-y-0.5",
  {
    variants: {
      tone: {
        outline:
          "border-banana/70 bg-transparent text-banana hover:bg-banana hover:border-banana hover:text-leaf",
        solid:
          "border-banana bg-banana text-leaf hover:border-paper hover:bg-paper hover:text-leaf",
      },
      size: {
        /** Hero CTAs. */
        lg: "px-6 py-[15px] text-[12.5px] tracking-[0.06em]",
        /** Contact card actions. */
        md: "px-5 py-3.5 text-[12.5px] tracking-[0.05em]",
        /** Sticky nav quote button. */
        sm: "px-3.5 py-2 text-[11px] tracking-[0.1em]",
      },
    },
    defaultVariants: {
      tone: "outline",
      size: "md",
    },
  },
)

type TradeButtonProps = Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof tradeButtonVariants>

export function TradeButton({
  className,
  tone,
  size,
  ...props
}: TradeButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn(tradeButtonVariants({ tone, size }), className)}
      {...props}
    />
  )
}
