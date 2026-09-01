import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpecRow } from "@/components/SpecRow";
import { Wrap } from "@/components/Wrap";
import { PHOTOS } from "@/constants/photos";
import type { BoxType } from "@/types/box-type";
import { useTranslation } from "react-i18next";

export function SpecSheet() {
  const { t } = useTranslation();
  const boxTypes = t("sections.spec.boxTypes", { returnObjects: true }) as BoxType[];

  return (
    <section id="manifest" className="bg-paper-dim py-24">
      <Wrap>
        <SectionHeading tag="03" title={t("sections.spec.heading")} />

        <Reveal className="mb-7 overflow-hidden rounded-[3px]">
          <img
            src={PHOTOS.bunch}
            alt={t("sections.spec.imageAlt")}
            className="block h-[260px] w-full object-cover"
          />
        </Reveal>

        <Reveal className="bg-ink text-paper rounded px-7 pt-7 pb-2.5 shadow-[0_24px_60px_-30px_rgba(22,36,28,0.7)]">
          <div className="text-banana border-banana/25 mb-[26px] flex justify-between border-b pb-3.5 font-mono text-xs tracking-[0.12em] uppercase">
            <span>{t("sections.spec.cargoRef")}</span>
            <span>{t("sections.spec.cargoValue")}</span>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[34px]">
            {boxTypes.map((box) => (
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
          {t("sections.spec.note")}
        </p>
      </Wrap>
    </section>
  );
}
