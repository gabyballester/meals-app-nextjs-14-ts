import Image from "next/image";
import { StaticImageData } from "next/image";

export interface PerkData {
  src: StaticImageData;
  alt: string;
  description: string;
}

export const PerkItem: React.FC<PerkData> = ({ src, alt, description }) => {
  return (
    <li>
      <Image src={src} alt={alt} />
      <p>{description}</p>
    </li>
  );
};
