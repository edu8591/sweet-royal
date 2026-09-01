import { LocaleSwitcher } from "@/components/LocaleSwitcher"
import { TradeButton } from "@/components/TradeButton"
import { Wrap } from "@/components/Wrap"
import { PHOTOS, type Locale } from "@/data/site"

type HeroProps = {
  photoRef: React.RefObject<HTMLDivElement | null>
  locale: Locale
  onSelectLocale: (id: string) => void
  localeOpen: boolean
  onLocaleOpenChange: (open: boolean) => void
}

export function Hero({
  photoRef,
  locale,
  onSelectLocale,
  localeOpen,
  onLocaleOpenChange,
}: HeroProps) {
  return (
    <header
      id="top"
      className="bg-leaf text-paper relative flex min-h-[min(92vh,860px)] items-end overflow-hidden pt-30"
    >
      {/* Photo, gradient wash and security hatching, back to front. */}
      <div
        ref={photoRef}
        aria-hidden="true"
        className="absolute inset-x-0 -inset-y-[8%] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url('${PHOTOS.hero}')` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(78deg,#16241c_0%,rgba(22,36,28,0.94)_34%,rgba(31,58,46,0.72)_64%,rgba(22,36,28,0.55)_100%)]"
      />
      <div aria-hidden="true" className="bg-hatch absolute inset-0" />

      <div className="absolute inset-x-0 top-[26px] z-3">
        <Wrap className="flex justify-end">
          <LocaleSwitcher
            variant="hero"
            locale={locale}
            onSelect={onSelectLocale}
            open={localeOpen}
            onOpenChange={onLocaleOpenChange}
            className="animate-sr-up [animation-delay:0.8s]"
          />
        </Wrap>
      </div>

      {/* The deep bottom padding clears the floating WhatsApp FAB on mobile. */}
      <Wrap className="relative pb-26">
        <div className="text-banana animate-sr-up mb-[26px] flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase [animation-delay:0.05s]">
          <span
            aria-hidden="true"
            className="bg-banana animate-sr-rule inline-block h-px w-[22px] origin-left [animation-delay:0.15s]"
          />
          Ecuador — Asia · Spot Fruit Sourcing
        </div>

        <div className="font-display max-w-[15ch] leading-[0.86] tracking-[0.01em]">
          <h1 className="text-paper m-0 text-[clamp(56px,12vw,132px)] font-normal">
            <span className="animate-sr-up block duration-800 ease-[cubic-bezier(.16,1,.3,1)] [animation-delay:0.18s]">
              Eduardo
            </span>
            <span className="animate-sr-up block duration-800 ease-[cubic-bezier(.16,1,.3,1)] [animation-delay:0.3s]">
              Serrano
            </span>
          </h1>
          <span className="text-stroke-banana animate-sr-up mt-2.5 block text-[clamp(28px,6.4vw,66px)] duration-800 ease-[cubic-bezier(.16,1,.3,1)] [animation-delay:0.44s]">
            Fruit Trader
          </span>
        </div>

        <div className="mt-[38px] flex flex-wrap items-end justify-between gap-9">
          <p className="text-paper-dim animate-sr-up m-0 max-w-[46ch] text-[17px] duration-800 [animation-delay:0.56s]">
            Spot sourcing of Ecuadorian Cavendish bananas for Asian buyers,
            drawn from a network of certified growers rather than a single fixed
            origin.
          </p>
          <div className="animate-sr-up flex gap-3 duration-800 [animation-delay:0.68s]">
            <TradeButton asChild tone="solid" size="lg">
              <a href="#contact">Get in touch</a>
            </TradeButton>
            <TradeButton asChild size="lg">
              <a href="#manifest">Product spec</a>
            </TradeButton>
          </div>
        </div>
      </Wrap>
    </header>
  )
}
