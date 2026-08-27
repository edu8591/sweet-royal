export const WHATSAPP_NUMBER = "818064815663" // no + or spaces
export const CONTACT_EMAIL = "your@email.com" // replace with your real email

export const DEFAULT_MESSAGE = "Hi Eduardo, I'd like to talk about sourcing."

/** Builds a wa.me link, WhatsApp's officially documented click-to-chat URL. */
export function whatsAppLink(text?: string) {
  const query = text ? `?text=${encodeURIComponent(text)}` : ""
  return `https://wa.me/${WHATSAPP_NUMBER}${query}`
}

export type Spec = { k: string; v: string }

export type BoxType = {
  title: string
  specs: Spec[]
}

export const BOX_TYPES: BoxType[] = [
  {
    title: "Box type — 22XU",
    specs: [
      { k: "Class", v: "Type A Premium" },
      { k: "Packing", v: "Vacuum-packed" },
      { k: "Clusters / box", v: "16 – 18" },
      { k: "Presentation", v: "Corrugated carton" },
      { k: "Net weight", v: "18.14 – 19.5 kg" },
      { k: "Fruit age at cut", v: "10 – 12 weeks" },
      { k: "Calibration", v: "39 – 46 mm" },
      { k: "Min. finger length", v: '20 cm (8")' },
    ],
  },
  {
    title: "Box type — 208",
    specs: [
      { k: "Class", v: "Type A Premium" },
      { k: "Packing", v: "Vacuum-packed" },
      { k: "Hands / box", v: "4 – 5" },
      { k: "Presentation", v: "Corrugated carton" },
      { k: "Net weight", v: "13.5 – 14.5 kg" },
      { k: "Fruit age at cut", v: "10 – 12 weeks" },
      { k: "Calibration", v: "39 – 46 mm" },
      { k: "Min. finger length", v: '20 cm (8")' },
    ],
  },
]

export const CERTIFICATIONS = [
  "GlobalG.A.P.",
  "GRASP",
  "Rainforest Alliance",
]

export type ContactEntry = { k: string; value: string; href?: string; placeholder?: boolean }

export const CONTACT_ENTRIES: ContactEntry[] = [
  { k: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, placeholder: true },
  { k: "Phone / WhatsApp", value: "+81 80 6481 5663", href: "tel:+818064815663" },
  { k: "Based", value: "Okinawa, Japan" },
  { k: "Sourcing", value: "Ecuador (ex-Guayaquil)" },
]
