"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  burger,
  curry,
  dumplings,
  macncheese,
  pizza,
  schnitzel,
  tomatoSalad,
} from "@/assets";

export const sliderImages = [
  burger,
  curry,
  dumplings,
  macncheese,
  pizza,
  schnitzel,
  tomatoSalad,
];

import classes from "./image-slideshow.module.css";

export const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < sliderImages.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className={classes.slideshow}>
      {sliderImages.map(({ src, alt }, index) => (
        <Image
          key={index}
          src={src}
          className={index === currentImageIndex ? classes.active : ""}
          alt={alt}
          priority={index === currentImageIndex}
        />
      ))}
    </div>
  );
};
