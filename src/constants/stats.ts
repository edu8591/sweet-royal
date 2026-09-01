import type { Stat } from "@/types/stat";

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
];
