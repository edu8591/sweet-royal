import type { ContactEntry } from "@/types/contact-entry";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_NUMBER,
  FORMATTED_CONTACT_PHONE_NUMBER,
} from "./contact-data";

export const CONTACT_ENTRIES: ContactEntry[] = [
  { k: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  {
    k: "Phone",
    value: FORMATTED_CONTACT_PHONE_NUMBER,
    href: `tel:${CONTACT_PHONE_NUMBER}`,
  },
  { k: "Based", value: "Okinawa, Japan" },
  { k: "Sourcing", value: "Ecuador (ex-Guayaquil)" },
];
