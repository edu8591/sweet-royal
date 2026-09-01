import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpecRow } from "@/components/SpecRow";
import { Wrap } from "@/components/Wrap";
import { BOX_TYPES } from "@/constants/box-types";
import { PHOTOS } from "@/constants/photos";

export function SpecSheet() {
  return (
    <section id="manifest" className="bg-paper-dim py-24">
      <Wrap>
        <SectionHeading tag="03" title="Reference spec sheet" />

        <Reveal className="mb-7 overflow-hidden rounded-[3px]">
          <img
            src={PHOTOS.bunch}
            alt="Bunch of green Cavendish bananas on the plant"
            className="block h-[260px] w-full object-cover"
          />
        </Reveal>

        <Reveal className="bg-ink text-paper rounded px-7 pt-7 pb-2.5 shadow-[0_24px_60px_-30px_rgba(22,36,28,0.7)]">
          <div className="text-banana border-banana/25 mb-[26px] flex justify-between border-b pb-3.5 font-mono text-xs tracking-[0.12em] uppercase">
            <span>Cargo Ref.</span>
            <span>Banano Cavendish</span>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[34px]">
            {BOX_TYPES.map((box) => (
              <div key={box.title} className="mb-[22px]">
                <h3 className="font-display text-paper m-0 mb-3.5 text-[26px] tracking-[0.03em]">
                  {box.title}
                </h3>
                {box.specs.map((spec) => (
                  <SpecRow key={spec.k} label={spec.k} value={spec.v} />
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        <p className="text-muted-ink m-0 mt-[18px] text-[13.5px]">
          Indicative spec range for premium-grade Cavendish available through
          the sourcing network. Exact spec confirmed per shipment.
        </p>
      </Wrap>
    </section>
  );
}
