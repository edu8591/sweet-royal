import { cn } from "@/lib/utils"

export function Wrap({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1080px] px-6", className)}
      {...props}
    />
  )
}
