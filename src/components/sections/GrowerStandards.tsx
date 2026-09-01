import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Wrap } from "@/components/Wrap";
import { CERTIFICATIONS } from "@/constants/certifications";

export function GrowerStandards() {
  return (
    <section id="standards" className="py-24">
      <Wrap>
        <SectionHeading tag="04" title="Grower standards" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {CERTIFICATIONS.map((cert) => (
            <Reveal
              key={cert.name}
              className="border-line bg-paper hover:border-leaf rounded-[3px] border p-[22px] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_-18px_rgba(22,36,28,0.5)]"
            >
              <div className="mb-[18px] flex items-center justify-between gap-3">
                <span className="font-display text-leaf text-[34px] leading-none tracking-[0.04em]">
                  {cert.mark}
                </span>
                <span
                  aria-hidden="true"
                  className="bg-banana size-2.5 rounded-full"
                />
              </div>
              <div className="text-leaf font-mono text-[11.5px] tracking-[0.06em] uppercase">
                {cert.name}
              </div>
              <p className="text-muted-ink m-0 mt-2 text-[13.5px]">
                {cert.note}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="text-muted-ink m-0 mt-[18px] max-w-[88ch] text-[13.5px]">
          These are the certifications most common across the network — but tell
          me what your market requires and I'll source growers that hold it.
          Certificates for a specific shipment provided on request.
        </p>
      </Wrap>
    </section>
  );
}
