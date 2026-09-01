import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TradeButton } from "@/components/TradeButton";
import { Wrap } from "@/components/Wrap";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL, DEFAULT_MESSAGE } from "@/constants/contact-data";
import { whatsAppLink } from "@/lib/utils";
import { CONTACT_ENTRIES } from "@/constants/contact-entries";

export function Contact() {
  const [message, setMessage] = useState("");

  const outgoing = message.trim() || DEFAULT_MESSAGE;

  const sendViaWhatsApp = () => {
    window.open(whatsAppLink(outgoing), "_blank", "noopener,noreferrer");
  };

  const sendViaEmail = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Sourcing inquiry",
    )}&body=${encodeURIComponent(outgoing)}`;
  };

  return (
    <section
      id="contact"
      className="bg-leaf text-paper relative overflow-hidden py-24"
    >
      <div aria-hidden="true" className="bg-hatch absolute inset-0" />

      <Wrap className="relative">
        <SectionHeading tag="06" title="Contact" onDark className="mb-[38px]" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-10">
          <Reveal className="border-banana/35 bg-banana/8 rounded border p-6">
            <Label
              htmlFor="msgField"
              className="text-paper/55 mb-3 block font-mono text-[11px] tracking-[0.1em] uppercase"
            >
              Leave a message
            </Label>
            <Textarea
              id="msgField"
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me what you're looking for — product, volume, timing..."
              className="border-paper/25 bg-paper/6 text-paper placeholder:text-paper/40 focus-visible:border-banana focus-visible:ring-banana/20 w-full resize-y rounded-[2px] px-3.5 py-3 font-sans text-[15px] shadow-none"
            />
            <div className="mt-4 flex flex-wrap gap-2.5">
              <TradeButton tone="solid" onClick={sendViaWhatsApp}>
                Send via WhatsApp
              </TradeButton>
              <TradeButton onClick={sendViaEmail}>Send via Email</TradeButton>
            </div>
          </Reveal>

          <Reveal delay={140} asChild>
            <dl className="m-0 grid gap-4 font-mono text-sm">
              {CONTACT_ENTRIES.map((entry) => (
                <div
                  key={entry.k}
                  className="border-paper/25 flex flex-wrap justify-between gap-3 border-b border-dotted pb-3"
                >
                  <dt className="text-paper/55 text-[11px] tracking-[0.1em] uppercase">
                    {entry.k}
                  </dt>
                  <dd className="m-0">
                    {entry.href ? (
                      <a href={entry.href} className="text-banana no-underline">
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
