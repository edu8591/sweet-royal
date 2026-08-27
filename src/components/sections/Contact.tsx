import { useState } from "react"

import { SectionHeading } from "@/components/SectionHeading"
import { TradeButton } from "@/components/TradeButton"
import { Wrap } from "@/components/Wrap"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import {
  CONTACT_EMAIL,
  CONTACT_ENTRIES,
  DEFAULT_MESSAGE,
  whatsAppLink,
} from "@/data/site"

export function Contact() {
  const [message, setMessage] = useState("")

  const outgoing = message.trim() || DEFAULT_MESSAGE

  const sendViaWhatsApp = () => {
    window.open(whatsAppLink(outgoing), "_blank", "noopener,noreferrer")
  }

  const sendViaEmail = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Sourcing inquiry",
    )}&body=${encodeURIComponent(outgoing)}`
  }

  return (
    <section id="contact" className="bg-leaf text-paper py-10">
      <Wrap>
        <SectionHeading tag="04" title="Contact" onDark />

        <div className="border-banana/35 bg-banana/8 mb-[26px] rounded border p-[18px]">
          <Label
            htmlFor="msgField"
            className="text-paper/55 mb-2.5 block font-mono text-[11px] tracking-[0.1em] uppercase"
          >
            Leave a message
          </Label>
          <Textarea
            id="msgField"
            rows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell me what you're looking for — product, volume, timing..."
            className="border-paper/25 bg-paper/6 text-paper placeholder:text-paper/40 focus-visible:border-banana focus-visible:ring-banana/50 w-full resize-y rounded-[2px] px-3 py-2.5 font-sans text-sm shadow-none"
          />
          <div className="mt-3 flex flex-wrap gap-2.5">
            <TradeButton tone="solid" onClick={sendViaWhatsApp}>
              Send via WhatsApp
            </TradeButton>
            <TradeButton onClick={sendViaEmail}>Send via Email</TradeButton>
          </div>
        </div>

        <dl className="grid gap-3.5 font-mono text-sm">
          {CONTACT_ENTRIES.map((entry) => (
            <div
              key={entry.k}
              className="border-paper/25 flex flex-wrap justify-between gap-3 border-b border-dotted pb-2.5"
            >
              <dt className="text-paper/55 text-[11px] tracking-[0.1em] uppercase">
                {entry.k}
              </dt>
              <dd className="m-0">
                {entry.href ? (
                  <a
                    href={entry.href}
                    className={cn(
                      "no-underline",
                      entry.placeholder ? "text-rust" : "text-banana",
                    )}
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
      </Wrap>
    </section>
  )
}
