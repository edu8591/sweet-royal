import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Wrap } from "@/components/Wrap";
import { PHOTOS } from "@/constants/photos";
import { ROUTE_STEPS } from "@/constants/route-steps";
import { NARROW_QUERY, useMediaQuery } from "@/hooks/useMediaQuery";

const ENDPOINT_LABEL =
  "text-paper/55 font-mono text-[10.5px] tracking-[0.14em] uppercase";
const PORT_NAME = "font-display text-[32px] tracking-[0.03em]";
const PORT_NOTE = "text-paper/55 mt-1 font-mono text-[11.5px]";

/** Portrait, Pacific-centred crop with oversized labels for small screens. */
function RouteMap() {
  const narrow = useMediaQuery(NARROW_QUERY);

  return (
    <div className="border-paper/16 mt-10 overflow-hidden rounded-[3px] border">
      <img
        src={
          narrow ? "/assets/route-map-mobile.webp" : "/assets/route-map.webp"
        }
        alt="Map of shipping routes from Guayaquil, Ecuador to Tokyo, Busan, Shanghai and Singapore"
        className="block h-auto w-full"
      />
    </div>
  );
}

export function RouteToPort() {
  return (
    <section
      id="route"
      className="bg-leaf text-paper relative overflow-hidden pt-22 pb-24"
    >
      <div aria-hidden="true" className="bg-hatch absolute inset-0" />

      <Wrap className="relative">
        <SectionHeading tag="02" title="Origin to port" className="mb-11" />

        <Reveal className="relative pt-[46px] pb-[30px]">
          {/* Static track, animated dashes, and a dot sailing between ports. */}
          <div className="bg-paper/16 relative mx-[6%] h-0.5">
            <svg
              viewBox="0 0 200 2"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute top-px left-0 h-1 w-full overflow-visible"
            >
              <line
                x1="0"
                y1="1"
                x2="200"
                y2="1"
                stroke="#f4c430"
                strokeWidth="2"
                strokeDasharray="6 8"
                className="animate-sr-dash motion-reduce:animate-none"
              />
            </svg>
          </div>
          <div
            aria-hidden="true"
            className="bg-banana animate-sr-sail absolute top-10 size-[13px] rounded-full shadow-[0_0_0_4px_rgba(244,196,48,0.18)] motion-reduce:animate-none"
          />

          <div className="mt-[26px] flex justify-between px-[2%]">
            <div className="text-left">
              <div className="mb-2.5 flex items-center gap-[9px]">
                <span
                  aria-hidden="true"
                  className="bg-banana animate-sr-pulse size-[9px] rounded-full motion-reduce:animate-none"
                />
                <span className={ENDPOINT_LABEL}>Origin</span>
              </div>
              <div className={PORT_NAME}>Guayaquil</div>
              <div className={PORT_NOTE}>Ecuador · FCA basis</div>
            </div>

            <div className="text-right">
              <div className="mb-2.5 flex items-center justify-end gap-[9px]">
                <span className={ENDPOINT_LABEL}>Destination</span>
                <span
                  aria-hidden="true"
                  className="border-banana size-[9px] rounded-full border"
                />
              </div>
              <div className={PORT_NAME}>Asian ports</div>
              <div className={PORT_NOTE}>Japan · Korea · China · SE Asia</div>
            </div>
          </div>

          <RouteMap />
        </Reveal>

        <Reveal className="relative mt-14 overflow-hidden rounded-[3px]">
          <img
            src={PHOTOS.loading}
            alt="Workers loading bananas onto a truck at a plantation"
            className="block h-[230px] w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(22,36,28,0.85)_0%,rgba(22,36,28,0.1)_60%)]"
          />
          <div className="text-paper/75 absolute bottom-[18px] left-[22px] font-mono text-[10.5px] tracking-[0.16em] uppercase">
            Cut, packed and loaded at origin
          </div>
        </Reveal>

        {/* 1px gaps over the translucent bed read as hairline dividers. */}
        <div className="mt-0.5 grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-px bg-[rgba(247,241,227,0.16)]">
          {ROUTE_STEPS.map((step) => (
            <Reveal key={step.n} className="bg-leaf px-[22px] pt-7 pb-[30px]">
              <div className="text-banana mb-4 font-mono text-[10.5px] tracking-[0.16em] uppercase">
                Step {step.n}
              </div>
              <div className="font-display text-paper text-[26px] tracking-[0.03em]">
                {step.title}
              </div>
              <p className="text-paper-dim m-0 mt-2.5 text-[14.5px]">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
