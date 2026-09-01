import type { Step } from "@/types/step";

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
];
