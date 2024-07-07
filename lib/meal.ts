import sql from "better-sqlite3";
import { MealType } from "@/types";

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
