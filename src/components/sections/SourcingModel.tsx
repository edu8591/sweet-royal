import { SectionHeading } from "@/components/SectionHeading"
import { Wrap } from "@/components/Wrap"

export function SourcingModel() {
  return (
    <section className="py-10">
      <Wrap>
        <SectionHeading tag="01" title="How sourcing works" />
        <p className="mb-3.5 text-[15px]">
          I work as an independent trader connecting Ecuadorian banana supply
          with buyers in Asia. Rather than representing one grower's fixed
          production, I source <strong className="text-leaf">spot volumes</strong>{" "}
          through a partner network of growers in Ecuador — which means pricing
          and availability are quoted per shipment, and I can flex on volume as
          your needs change.
        </p>
        <p className="text-[15px]">
          Trade basis: <strong className="text-leaf">FCA</strong> at origin, with
          terms discussed per order. Reach out with your target volume and
          delivery window and I'll come back with a quote.
        </p>
      </Wrap>
    </section>
  )
}
