import { Chip } from "@/components/Chip"
import { SectionHeading } from "@/components/SectionHeading"
import { Wrap } from "@/components/Wrap"
import { CERTIFICATIONS } from "@/data/site"

export function GrowerStandards() {
  return (
    <section className="py-10">
      <Wrap>
        <SectionHeading tag="03" title="Grower standards" />
        <div className="flex flex-wrap gap-2">
          {CERTIFICATIONS.map((cert) => (
            <Chip key={cert}>{cert}</Chip>
          ))}
        </div>
        <p className="text-muted-ink mt-3.5 text-[13.5px]">
          Sourced from growers holding internationally recognized agricultural
          certifications. Certificates for a specific shipment provided on
          request.
        </p>
      </Wrap>
    </section>
  )
}
