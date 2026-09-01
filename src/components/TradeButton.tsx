import { cva, type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * The stamped, monospace CTA used across the page. Wraps shadcn's Button so
 * behaviour (asChild, focus ring, disabled) stays shared.
 */
const tradeButtonVariants = cva(
  "h-auto rounded-[2px] border font-mono uppercase transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
  {
    variants: {
      tone: {
        outline:
          "border-banana/70 bg-transparent text-banana hover:bg-banana hover:border-banana hover:text-leaf",
        solid:
          "border-banana bg-banana text-leaf hover:border-paper hover:bg-paper hover:text-leaf",
      },
      motion: {
        lift: "shadow-[0_0_0_rgba(22,36,28,0)] hover:-translate-y-1 hover:shadow-[0_10px_22px_-14px_rgba(22,36,28,0.6)] active:translate-y-0",
        static:
          "transform-none shadow-none hover:transform-none hover:shadow-none active:transform-none",
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
      motion: "lift",
      size: "md",
    },
  },
);

type TradeButtonProps = Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof tradeButtonVariants>;

export function TradeButton({
  className,
  tone,
  motion,
  size,
  ...props
}: TradeButtonProps) {
  return (
    <Button
      variant="unstyled"
      className={cn(tradeButtonVariants({ tone, motion, size }), className)}
      {...props}
    />
  );
}
