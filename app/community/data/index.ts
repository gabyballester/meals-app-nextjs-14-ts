import { meal, community, events } from "@/assets";
import { PerkData } from "@/types";

export const perksData: PerkData[] = [
  { src: meal.src, alt: meal.alt, description: "Share & discover recipes" },
  {
    src: community.src,
    alt: community.alt,
    description: "Find new friends & like-minded people",
  },
  {
    src: events.src,
    alt: events.alt,
    description: "Participate in exclusive events",
  },
];
