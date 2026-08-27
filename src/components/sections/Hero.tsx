import { TradeButton } from "@/components/TradeButton"
import { Wrap } from "@/components/Wrap"

export function Hero() {
  return (
    <header className="bg-leaf text-paper relative overflow-hidden pt-14 pb-12">
      {/* Diagonal hatching, like security paper on a trade document. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(247,241,227,0.035) 0px, rgba(247,241,227,0.035) 2px, transparent 2px, transparent 14px)",
        }}
      />

      <Wrap className="relative">
        <div className="text-banana mb-[22px] flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase">
          <span aria-hidden="true" className="bg-banana inline-block h-px w-[22px]" />
          Ecuador — Asia · Spot Fruit Sourcing
        </div>

        <div className="font-display origin-top-left -rotate-[1.4deg] leading-[0.92] tracking-[0.01em]">
          <h1 className="text-paper m-0 block text-[clamp(40px,11vw,58px)] font-normal">
            Eduardo
            <br />
            Serrano
          </h1>
          <span className="text-stroke-banana mt-1 block text-[clamp(22px,6vw,32px)]">
            Fruit Trader
          </span>
        </div>

        <p className="text-paper-dim mt-[22px] max-w-[44ch] text-[15.5px]">
          Spot sourcing of Ecuadorian Cavendish bananas for Asian buyers, drawn
          from a network of certified growers rather than a single fixed origin.
        </p>

        <div className="mt-[30px] inline-flex gap-3">
          <TradeButton asChild tone="solid">
            <a href="#contact">Get in touch</a>
          </TradeButton>
          <TradeButton asChild>
            <a href="#manifest">Product spec</a>
          </TradeButton>
        </div>
      </Wrap>
    </header>
  )
}
