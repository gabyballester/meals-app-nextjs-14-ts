import { StaticImageData } from "next/image";

export type PerkData = {
  src: StaticImageData;
  alt: string;
  description: string;
};

export type MealType = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
};

export type MealFormData = {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
};
