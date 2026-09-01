export const WHATSAPP_NUMBER = "818064815663" // no + or spaces
export const CONTACT_EMAIL = "eduardoserrano@sweet-royal.com"

export const DEFAULT_MESSAGE = "Hi Eduardo, I'd like to talk about sourcing."

/** Builds a wa.me link, WhatsApp's officially documented click-to-chat URL. */
export function whatsAppLink(text?: string) {
  const query = text ? `?text=${encodeURIComponent(text)}` : ""
  return `https://wa.me/${WHATSAPP_NUMBER}${query}`
}

export type NavLink = { label: string; href: string }

export const NAV_LINKS: NavLink[] = [
  { label: "Sourcing", href: "#sourcing" },
  { label: "Route", href: "#route" },
  { label: "Spec", href: "#manifest" },
  { label: "FAQ", href: "#faq" },
]

export type Locale = { id: string; code: string; name: string }

/** Display-only language list — no translations are wired up yet. */
export const LOCALES: Locale[] = [
  { id: "en", code: "EN", name: "English" },
  { id: "es", code: "ES", name: "Español" },
  { id: "ja", code: "JA", name: "日本語" },
  { id: "ko", code: "KO", name: "한국어" },
  { id: "zh", code: "ZH", name: "中文" },
]

export const MARQUEE_ITEMS = [
  "Certifications sourced to your requirement",
  "GlobalG.A.P. · GRASP · Rainforest Alliance and others",
  "FCA ex-Guayaquil",
  "Type A Premium Cavendish",
  "Spot volumes, quoted per shipment",
]

export type Stat = {
  label: string
  /** Present when the value counts up on reveal; otherwise `text` is static. */
  count?: { to: number; decimals?: number; prefix?: string; suffix?: string }
  text: string
  accent?: boolean
}

export const STATS: Stat[] = [
  {
    text: "46 mm",
    count: { to: 46, suffix: " mm" },
    label: "Max calibration",
  },
  {
    text: "19.5 kg",
    count: { to: 19.5, decimals: 1, suffix: " kg" },
    label: "Net weight / box",
  },
  {
    text: "10 – 12 wks",
    count: { to: 12, prefix: "10 – ", suffix: " wks" },
    label: "Fruit age at cut",
  },
  { text: "Your call", label: "Certifications you specify", accent: true },
]

export type Step = { n: string; title: string; body: string }

export const ROUTE_STEPS: Step[] = [
  {
    n: "01",
    title: "Order",
    body: "You send target volume, box format and delivery window. I quote per shipment on FCA basis.",
  },
  {
    n: "02",
    title: "Pack",
    body: "Fruit cut at 10–12 weeks, calibrated and vacuum-packed to the agreed box spec at the grower's packhouse.",
  },
  {
    n: "03",
    title: "Ship",
    body: "Consolidated and loaded ex-Guayaquil. Certificates and shipping documents issued per container.",
  },
  {
    n: "04",
    title: "Land",
    body: "Arrival at your nominated Asian port. Spec and count reconciled against the manifest on discharge.",
  },
]

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

export type Certification = { mark: string; name: string; note: string }

/**
 * Marks are typographic placeholders — swap in official logo assets if the
 * GlobalG.A.P. / GRASP / Rainforest Alliance marks get licensed for use.
 */
export const CERTIFICATIONS: Certification[] = [
  {
    mark: "G.A.P.",
    name: "GlobalG.A.P.",
    note: "Good agricultural practice across the grower network.",
  },
  {
    mark: "GRASP",
    name: "GRASP",
    note: "Social practice assessment alongside GlobalG.A.P.",
  },
  {
    mark: "R.A.",
    name: "Rainforest Alliance",
    note: "Certified sustainable farm management.",
  },
]

export type Faq = { q: string; a: string }

export const FAQS: Faq[] = [
  {
    q: "What volumes can you handle?",
    a: "Volume is quoted per shipment. Because supply comes from a partner network rather than one fixed grower, I can flex up or down between orders — send your target and I'll confirm what the network covers.",
  },
  {
    q: "What are the trade terms?",
    a: "FCA at origin, ex-Guayaquil, with payment and documentation terms discussed per order.",
  },
  {
    q: "How is quality assured?",
    a: "Tell me which certifications you need and I'll source growers that hold them — GlobalG.A.P., GRASP and Rainforest Alliance are common across the network. Spec is confirmed per shipment and certificates for a given container are provided on request.",
  },
  {
    q: "Which box formats are available?",
    a: "22XU (18.14–19.5 kg, 16–18 clusters) and 208 (13.5–14.5 kg, 4–5 hands), both Type A Premium and vacuum-packed.",
  },
]

export type ContactEntry = { k: string; value: string; href?: string }

export const CONTACT_ENTRIES: ContactEntry[] = [
  { k: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { k: "Phone", value: "+81 80 6481 5663", href: "tel:+818064815663" },
  { k: "Based", value: "Okinawa, Japan" },
  { k: "Sourcing", value: "Ecuador (ex-Guayaquil)" },
]

/**
 * Stand-in photography. Replace with Eduardo's own operational imagery before
 * launch — the design leans on real photos for credibility.
 */
export const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1653481006616-aab561a77a3b?fm=jpg&q=80&w=2400&auto=format&fit=crop",
  harvest:
    "https://images.unsplash.com/photo-1683583591507-1a9f214b0d6f?fm=jpg&q=80&w=1400&auto=format&fit=crop",
  loading:
    "https://images.unsplash.com/photo-1762512216868-3e7dae3beee5?fm=jpg&q=80&w=2000&auto=format&fit=crop",
  bunch:
    "https://images.unsplash.com/photo-1653481006620-dbb70963c713?fm=jpg&q=80&w=2000&auto=format&fit=crop",
}
