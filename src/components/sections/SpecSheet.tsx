import { SectionHeading } from "@/components/SectionHeading"
import { SpecRow } from "@/components/SpecRow"
import { Wrap } from "@/components/Wrap"
import { BOX_TYPES } from "@/data/site"

export function SpecSheet() {
  return (
    <section id="manifest" className="py-10">
      <Wrap>
        <SectionHeading tag="02" title="Reference spec sheet" />

        <div className="bg-ink text-paper rounded-[3px] px-5 pt-[22px] pb-2">
          <div className="text-banana mb-4 flex justify-between font-mono text-xs tracking-[0.12em] uppercase">
            <span>Cargo Ref.</span>
            <span>Banano Cavendish</span>
          </div>

          {BOX_TYPES.map((box) => (
            <div key={box.title} className="mb-[22px]">
              <h3 className="font-display text-paper m-0 mb-2.5 text-[22px] tracking-[0.03em]">
                {box.title}
              </h3>
              {box.specs.map((spec) => (
                <SpecRow key={spec.k} label={spec.k} value={spec.v} />
              ))}
            </div>
          ))}
        </div>

        <p className="text-muted-ink mt-3.5 text-[13.5px]">
          Indicative spec range for premium-grade Cavendish available through the
          sourcing network. Exact spec confirmed per shipment.
        </p>
      </Wrap>
    </section>
  )
}
