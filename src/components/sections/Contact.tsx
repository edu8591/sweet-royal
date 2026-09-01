import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TradeButton } from "@/components/TradeButton";
import { Wrap } from "@/components/Wrap";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER } from "@/constants/contact-data";
import { whatsAppLink } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type ContactEntryMessage = {
  k: string;
  value: string;
};

export function Contact() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  const outgoing = message.trim() || t("sections.contact.defaultMessage");
  const entries = t("sections.contact.entries", {
    returnObjects: true,
  }) as ContactEntryMessage[];

  const hrefByLabel = {
    [t("sections.contact.entries.0.k")]: `mailto:${CONTACT_EMAIL}`,
    [t("sections.contact.entries.1.k")]: `tel:${CONTACT_PHONE_NUMBER}`,
  } as const;

  const sendViaWhatsApp = () => {
    window.open(whatsAppLink(outgoing), "_blank", "noopener,noreferrer");
  };

  const sendViaEmail = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      t("sections.contact.emailSubject"),
    )}&body=${encodeURIComponent(outgoing)}`;
  };

  return (
    <section
      id="contact"
      className="bg-leaf text-paper relative overflow-hidden py-24"
    >
      <div aria-hidden="true" className="bg-hatch absolute inset-0" />

      <Wrap className="relative">
        <SectionHeading
          tag="06"
          title={t("sections.contact.heading")}
          onDark
          className="mb-[38px]"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-10">
          <Reveal className="border-banana/35 bg-banana/8 rounded border p-6">
            <Label
              htmlFor="msgField"
              className="text-paper/55 mb-3 block font-mono text-[11px] tracking-[0.1em] uppercase"
            >
              {t("sections.contact.label")}
            </Label>
            <Textarea
              id="msgField"
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={t("sections.contact.placeholder")}
              className="border-paper/25 bg-paper/6 text-paper placeholder:text-paper/40 focus-visible:border-banana focus-visible:ring-banana/20 w-full resize-y rounded-[2px] px-3.5 py-3 font-sans text-[15px] shadow-none"
            />
            <div className="mt-4 flex flex-wrap gap-2.5">
              <TradeButton tone="solid" onClick={sendViaWhatsApp}>
                {t("sections.contact.ctaWhatsApp")}
              </TradeButton>
              <TradeButton onClick={sendViaEmail}>
                {t("sections.contact.ctaEmail")}
              </TradeButton>
            </div>
          </Reveal>

          <Reveal delay={140} asChild>
            <dl className="m-0 grid gap-4 font-mono text-sm">
              {entries.map((entry) => (
                <div
                  key={entry.k}
                  className="border-paper/25 flex flex-wrap justify-between gap-3 border-b border-dotted pb-3"
                >
                  <dt className="text-paper/55 text-[11px] tracking-[0.1em] uppercase">
                    {entry.k}
                  </dt>
                  <dd className="m-0">
                    {hrefByLabel[entry.k as keyof typeof hrefByLabel] ? (
                      <a
                        href={hrefByLabel[entry.k as keyof typeof hrefByLabel]}
                        className="text-banana no-underline"
                      >
                        {entry.value}
                      </a>
                    ) : (
                      entry.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
