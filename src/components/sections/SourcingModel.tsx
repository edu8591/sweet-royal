import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Wrap } from "@/components/Wrap";
import { PHOTOS } from "@/constants/photos";

export function SourcingModel() {
  return (
    <section id="sourcing" className="py-24">
      <Wrap>
        <SectionHeading tag="01" title="How sourcing works" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-11">
          <Reveal className="max-w-[60ch]">
            <p className="m-0 mb-[18px] text-[17px]">
              I work as an independent trader connecting Ecuadorian banana
              supply with buyers in Asia. Rather than representing one grower's
              fixed production, I source{" "}
              <strong className="text-leaf">spot volumes</strong> through a
              partner network of growers in Ecuador — which means pricing and
              availability are quoted per shipment, and I can flex on volume as
              your needs change.
            </p>
            <p className="m-0 text-[17px]">
              Trade basis: <strong className="text-leaf">FCA</strong> at origin,
              with terms discussed per order. Reach out with your target volume
              and delivery window and I'll come back with a quote.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <img
              src={PHOTOS.harvest}
              alt="Green bananas being cut at a plantation"
              className="block h-[280px] w-full rounded-[3px] object-cover"
            />
            <figure className="border-banana bg-paper-dim m-0 mt-3.5 border-l-2 px-[26px] py-6">
              <blockquote className="font-display text-ink m-0 text-[28px] leading-[1.15] tracking-[0.02em]">
                One trader, many growers — so volume and timing flex with your
                order, not the other way round.
              </blockquote>
              <figcaption className="text-muted-ink mt-4 font-mono text-[10.5px] tracking-[0.14em] uppercase">
                Sourcing principle
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
