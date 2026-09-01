import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Wrap } from "@/components/Wrap";
import { PHOTOS } from "@/constants/photos";
import { useTranslation } from "react-i18next";

export function SourcingModel() {
  const { t } = useTranslation();

  return (
    <section id="sourcing" className="py-24">
      <Wrap>
        <SectionHeading tag="01" title={t("sections.sourcing.heading")} />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-11">
          <Reveal className="max-w-[60ch]">
            <p className="m-0 mb-[18px] text-[17px]">
              {t("sections.sourcing.p1")}
            </p>
            <p className="m-0 text-[17px]">
              {t("sections.sourcing.p2")}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <img
              src={PHOTOS.harvest}
              alt={t("sections.sourcing.imageAlt")}
              className="block h-[280px] w-full rounded-[3px] object-cover"
            />
            <figure className="border-banana bg-paper-dim m-0 mt-3.5 border-l-2 px-[26px] py-6">
              <blockquote className="font-display text-ink m-0 text-[28px] leading-[1.15] tracking-[0.02em]">
                {t("sections.sourcing.quote")}
              </blockquote>
              <figcaption className="text-muted-ink mt-4 font-mono text-[10.5px] tracking-[0.14em] uppercase">
                {t("sections.sourcing.quoteCaption")}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
