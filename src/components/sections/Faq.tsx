import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { Wrap } from "@/components/Wrap"
import { FAQS } from "@/data/site"

export function Faq() {
  return (
    <section id="faq" className="bg-paper-dim border-line border-t py-24">
      <Wrap>
        <SectionHeading tag="05" title="Buyer questions" />

        {/*
          Dividers are per-cell rules rather than a coloured grid bed showing
          through gaps: with four cards in a three-up grid the bed would leave
          a stray block of colour in the unfilled tail of the last row.
        */}
        <div className="border-line grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] border-t">
          {FAQS.map((faq) => (
            <Reveal
              key={faq.q}
              className="bg-paper-dim border-line border-r border-b px-6 pt-[26px] pb-7"
            >
              <h3 className="text-leaf m-0 mb-2.5 font-mono text-[12.5px] tracking-[0.06em] uppercase">
                {faq.q}
              </h3>
              <p className="text-ink m-0 text-[15.5px]">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
