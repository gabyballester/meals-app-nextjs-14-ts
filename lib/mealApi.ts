"use server";

import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { MealFormData, MealType } from "@/types";

const db = sql("meals.db");

export const getMeal = async (slug: string): Promise<MealType> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db
      .prepare("SELECT * FROM meals WHERE slug = ?")
      .get(slug) as MealType;
  } catch (error) {
    console.error("Error obtaining meal details", JSON.stringify(error));
    throw error;
  }
};

export const getMeals = async (): Promise<MealType[] | []> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("SELECT * FROM meals").all() as MealType[] | [];
  } catch (error) {
    console.error("Error obtaining meals", error);
    throw error;
  }
};

export const saveMeal = async (mealForm: MealFormData) => {
  const slug = slugify(mealForm.title, { lower: true });

  // image save and strcucture management
  const imageFile = mealForm.image as File;
  const extension = imageFile.name.split(".").pop();
  const fileName = `${slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await imageFile.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Saving image failed!");
  });

  const newMeal: MealType = {
    title: mealForm.title,
    slug,
    image: `/images/${fileName}`,
    summary: mealForm.summary,
    creator: mealForm.creator,
    instructions: xss(mealForm.instructions),
    creator_email: mealForm.creator_email,
  };

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(newMeal);
};
