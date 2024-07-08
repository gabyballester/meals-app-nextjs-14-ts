"use client";

import { ChangeEvent, useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

interface Props {
  label: string;
  name: string;
}

export const ImagePicker = ({ label, name }: Props) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (!imageInput.current) return;
    imageInput.current.click();
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file: Blob = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const { result } = fileReader;
      if (typeof result !== "string") return;

      setPickedImage(result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        {!pickedImage && (
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Select an image
          </button>
        )}

        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt={label} fill />}
        </div>
      </div>
    </div>
  );
};
