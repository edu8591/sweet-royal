import type { ContactEntry } from "@/types/contact-entry";
import { CONTACT_EMAIL } from "./contact-data";

export const CONTACT_ENTRIES: ContactEntry[] = [
  { k: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { k: "Phone", value: "+81 80 6481 5663", href: "tel:+818064815663" },
  { k: "Based", value: "Okinawa, Japan" },
  { k: "Sourcing", value: "Ecuador (ex-Guayaquil)" },
];
