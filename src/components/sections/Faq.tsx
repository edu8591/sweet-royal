import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Wrap } from "@/components/Wrap";
import type { Faq } from "@/types/faq";
import { useTranslation } from "react-i18next";

export function Faq() {
  const { t } = useTranslation();
  const items = t("sections.faq.items", { returnObjects: true }) as Faq[];

  return (
    <section id="faq" className="bg-paper-dim border-line border-t py-24">
      <Wrap>
        <SectionHeading tag="05" title={t("sections.faq.heading")} />

        {/*
          Internal dividers come from the coloured grid bed showing through
          gaps, so cards have no outer per-cell borders and the unfilled tail
          keeps the same divider colour.
        */}
        <div className="bg-line grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[2px]">
          {items.map((faq) => (
            <Reveal key={faq.q} className="bg-paper-dim px-6 pt-[26px] pb-7">
              <h3 className="text-leaf m-0 mb-2.5 font-mono text-[12.5px] tracking-[0.06em] uppercase">
                {faq.q}
              </h3>
              <p className="text-ink m-0 text-[15.5px]">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
