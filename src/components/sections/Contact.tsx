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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      body.append(key, String(value));
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Netlify form submit failed");

      form.reset();
      setMessage("");
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        t("sections.contact.emailSubject"),
      )}&body=${encodeURIComponent(outgoing)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-leaf text-paper relative overflow-hidden py-24"
    >
      <div
        aria-hidden="true"
        className="bg-hatch pointer-events-none absolute inset-0"
      />

      <Wrap className="relative">
        <SectionHeading
          tag="06"
          title={t("sections.contact.heading")}
          onDark
          className="mb-[38px]"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-10">
          <Reveal
            asChild
            className="border-banana/35 bg-banana/8 rounded border p-6"
          >
            <form
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="m-0"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <input
                type="hidden"
                name="subject"
                value={t("sections.contact.emailSubject")}
              />
              <Label
                htmlFor="nameField"
                className="text-paper/55 mb-3 block font-mono text-[11px] tracking-[0.1em] uppercase"
              >
                {t("sections.contact.nameLabel")}
              </Label>
              <input
                id="nameField"
                type="text"
                name="name"
                required
                className="border-paper/25 bg-paper/6 text-paper placeholder:text-paper/40 focus-visible:border-banana focus-visible:ring-banana/20 mb-4 w-full rounded-[2px] border px-3.5 py-3 font-sans text-[15px] shadow-none outline-none"
              />
              <Label
                htmlFor="emailField"
                className="text-paper/55 mb-3 block font-mono text-[11px] tracking-[0.1em] uppercase"
              >
                {t("sections.contact.emailLabel")}
              </Label>
              <input
                id="emailField"
                type="email"
                name="email"
                required
                className="border-paper/25 bg-paper/6 text-paper placeholder:text-paper/40 focus-visible:border-banana focus-visible:ring-banana/20 mb-4 w-full rounded-[2px] border px-3.5 py-3 font-sans text-[15px] shadow-none outline-none"
              />
              <Label
                htmlFor="msgField"
                className="text-paper/55 mb-3 block font-mono text-[11px] tracking-[0.1em] uppercase"
              >
                {t("sections.contact.label")}
              </Label>
              <Textarea
                id="msgField"
                name="message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t("sections.contact.placeholder")}
                className="border-paper/25 bg-paper/6 text-paper placeholder:text-paper/40 focus-visible:border-banana focus-visible:ring-banana/20 w-full resize-y rounded-[2px] px-3.5 py-3 font-sans text-[15px] shadow-none"
              />
              <div className="mt-4 flex flex-wrap gap-2.5">
                <TradeButton
                  tone="solid"
                  type="button"
                  onClick={sendViaWhatsApp}
                  className="!hover:bg-paper !hover:border-paper !hover:text-leaf"
                >
                  {t("sections.contact.ctaWhatsApp")}
                </TradeButton>
                <TradeButton type="submit" disabled={isSubmitting}>
                  {t("sections.contact.ctaEmail")}
                </TradeButton>
              </div>
            </form>
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
