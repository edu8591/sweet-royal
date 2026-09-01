import { Reveal } from "@/components/Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";
import type { Stat } from "@/types/stat";
import { useTranslation } from "react-i18next";

const CELL = "bg-paper-dim px-5 pt-8 pb-[30px]";
const NUMBER = "font-display text-[52px] leading-none";
const LABEL =
  "text-muted-ink mt-2 font-mono text-[10.5px] tracking-[0.14em] uppercase";

function StatCell({ stat, delay }: { stat: Stat; delay: number }) {
  const { text, start } = useCountUp({
    to: stat.count?.to ?? 0,
    decimals: stat.count?.decimals,
    prefix: stat.count?.prefix,
    suffix: stat.count?.suffix,
    initial: stat.text,
  });

  return (
    <Reveal
      delay={delay}
      onReveal={stat.count ? start : undefined}
      className={CELL}
    >
      <div className={cn(NUMBER, stat.accent ? "text-rust" : "text-ink")}>
        {stat.count ? text : stat.text}
      </div>
      <div className={LABEL}>{stat.label}</div>
    </Reveal>
  );
}

/** Hairline dividers come from the 1px grid gap showing the line-coloured bed. */
export function StatsStrip() {
  const { t } = useTranslation();
  const stats = t("stats.items", { returnObjects: true }) as Stat[];

  return (
    <section className="bg-paper-dim border-line border-b">
      <div className="bg-line mx-auto grid max-w-[1080px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px px-1">
        {stats.map((stat, index) => (
          <StatCell key={stat.label} stat={stat} delay={index * 120} />
        ))}
      </div>
    </section>
  );
}
