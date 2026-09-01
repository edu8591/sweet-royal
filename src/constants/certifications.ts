import type { Certification } from "@/types/certification";

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
];
