import { cva, type VariantProps } from "class-variance-authority"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * The stamped, monospace CTA used across the page. Wraps shadcn's Button so
 * behaviour (asChild, focus ring, disabled) stays shared.
 */
const tradeButtonVariants = cva(
  "h-auto rounded-[2px] border px-[18px] py-3 font-mono text-[12.5px] tracking-[0.05em] uppercase transition-colors",
  {
    variants: {
      tone: {
        outline:
          "border-banana bg-transparent text-banana hover:bg-banana hover:text-leaf",
        solid:
          "border-banana bg-banana text-leaf hover:border-paper hover:bg-paper hover:text-leaf",
      },
    },
    defaultVariants: {
      tone: "outline",
    },
  },
)

type TradeButtonProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof tradeButtonVariants>

export function TradeButton({ className, tone, ...props }: TradeButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn(tradeButtonVariants({ tone }), className)}
      {...props}
    />
  )
}
