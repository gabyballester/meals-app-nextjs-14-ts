import sql from "better-sqlite3";
import { MealType } from "@/types";

const db = sql("meals.db");

export const getMeals = async (): Promise<MealType[] | []> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("SELECT * FROM meals").all() as MealType[] | [];
  } catch (error) {
    console.error("Error obtaining meals", error);
    throw error;
  }
};
